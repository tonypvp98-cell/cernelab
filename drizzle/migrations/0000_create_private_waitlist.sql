CREATE TABLE public.waitlist_signups (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 email text NOT NULL UNIQUE,
 product_interests text[] NOT NULL,
 consent_at timestamptz NOT NULL DEFAULT now(),
 consent_version text NOT NULL DEFAULT '2026-11-13',
 created_at timestamptz NOT NULL DEFAULT now(),
 updated_at timestamptz NOT NULL DEFAULT now(),
 utm_source text,
 utm_medium text,
 utm_campaign text,
 confirmation_hash text UNIQUE,
 confirmation_expires_at timestamptz,
 confirmed_at timestamptz,
 CONSTRAINT normalized_email CHECK (email = lower(trim(email)) AND length(email) <= 254),
 CONSTRAINT valid_interests CHECK (cardinality(product_interests) BETWEEN 1 AND 2 AND product_interests <@ ARRAY['fluxo-vendas','financas-metas']::text[])
);
GRANT ALL ON public.waitlist_signups TO service_role;
REVOKE ALL ON public.waitlist_signups FROM anon, authenticated;
ALTER TABLE public.waitlist_signups ENABLE ROW LEVEL SECURITY;
COMMENT ON TABLE public.waitlist_signups IS 'Private waitlist. No browser access; validated public server function writes via service role. Launch campaigns require a dedicated marketing provider.';
CREATE OR REPLACE FUNCTION public.register_waitlist(p_email text, p_interests text[], p_source text DEFAULT NULL, p_medium text DEFAULT NULL, p_campaign text DEFAULT NULL)
RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE signup_id uuid;
BEGIN
 INSERT INTO public.waitlist_signups (email,product_interests,utm_source,utm_medium,utm_campaign)
 VALUES (p_email,p_interests,p_source,p_medium,p_campaign)
 ON CONFLICT (email) DO UPDATE SET
 product_interests = ARRAY(SELECT DISTINCT unnest(public.waitlist_signups.product_interests || EXCLUDED.product_interests)),
 consent_at = now(), updated_at = now()
 RETURNING id INTO signup_id;
 RETURN signup_id;
END; $$;
REVOKE ALL ON FUNCTION public.register_waitlist(text,text[],text,text,text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.register_waitlist(text,text[],text,text,text) TO service_role;