import { createServerFn } from '@tanstack/react-start';
import { waitlistSchema } from './waitlist-schema';
import { z } from 'zod';

export const registerWaitlist = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => waitlistSchema.parse(input))
  .handler(async ({ data }) => {
    // Public, narrow write action. Validation + honeypot + Start's CSRF boundary run before privileged access.
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const { data: signupId, error } = await supabaseAdmin.rpc('register_waitlist', {
      p_email: data.email, p_interests: data.interests,
      p_source: data.utmSource, p_medium: data.utmMedium, p_campaign: data.utmCampaign,
    });
    if (error || !signupId) return { ok: false, emailStatus: 'unavailable' as const };
    const key = process.env['RESEND_API_KEY'];
    const from = process.env['WAITLIST_FROM_EMAIL'];
    // Never claim delivery until a configured provider accepts this specific confirmation.
    if (!key || !from) return { ok: true, emailStatus: 'not_configured' as const };
    const { data: record } = await supabaseAdmin.from('waitlist_signups').select('confirmed_at,confirmation_expires_at').eq('id', signupId).single();
    if (record?.confirmed_at) return { ok: true, emailStatus: 'confirmed' as const };
    if (record?.confirmation_expires_at && Date.parse(record.confirmation_expires_at) > Date.now()) return { ok: true, emailStatus: 'pending' as const };
    const token = crypto.randomUUID() + crypto.randomUUID();
    const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(token));
    const hash = Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
    const { error: updateError } = await supabaseAdmin.from('waitlist_signups').update({ confirmation_hash: hash, confirmation_expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() }).eq('id', signupId);
    if (updateError) return { ok: true, emailStatus: 'unavailable' as const };
    const url = `https://cernelab.lovable.app/confirmar?token=${encodeURIComponent(token)}`;
    try {
      const response = await fetch('https://api.resend.com/emails', { method: 'POST', headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', 'Idempotency-Key': `waitlist-${hash}` }, body: JSON.stringify({ from, to: [data.email], subject: 'Confirme seu interesse — Cerne Lab', text: `Você solicitou entrar na lista de espera da Cerne Lab. Confirme seu e-mail pelo link abaixo, válido por 24 horas:\n${url}\n\nSe não foi você, ignore esta mensagem. Nenhuma compra foi realizada.` }) });
      if (response.ok) return { ok: true, emailStatus: 'sent' as const };
    } catch { /* Registration survives a provider outage; no personal data logged. */ }
    await supabaseAdmin.from('waitlist_signups').update({ confirmation_hash: null, confirmation_expires_at: null }).eq('id', signupId);
    return { ok: true, emailStatus: 'unavailable' as const };
  });

export const confirmWaitlist = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => z.object({ token: z.string().regex(/^[a-f0-9-]{72}$/) }).parse(input))
  .handler(async ({ data }) => {
    const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(data.token));
    const hash = Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const { data: records, error } = await supabaseAdmin.from('waitlist_signups').update({ confirmed_at: new Date().toISOString(), confirmation_hash: null, confirmation_expires_at: null }).eq('confirmation_hash', hash).gt('confirmation_expires_at', new Date().toISOString()).is('confirmed_at', null).select('id');
    return { ok: !error && (records?.length ?? 0) === 1 };
  });