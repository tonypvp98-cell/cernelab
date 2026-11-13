import { describe, expect, test } from 'vitest';
import { waitlistSchema, mergeInterests } from './waitlist-schema';
import { ecosystem } from './ecosystem-content';

const input = { email: '  Pessoa@Example.com ', interests: ['fluxo-vendas'], consent: true };
describe('Waitlist rules', () => {
  test('normalizes emails before registration', () => { expect(waitlistSchema.parse(input).email).toBe('pessoa@example.com'); });
  test('rejects invalid email addresses', () => { expect(waitlistSchema.safeParse({ ...input, email: 'invalid' }).success).toBe(false); });
  test('requires explicit consent', () => { expect(waitlistSchema.safeParse({ ...input, consent: false }).success).toBe(false); });
  test('allows exactly the two requested products', () => { expect(ecosystem.map(p => p.id)).toEqual(['fluxo-vendas', 'financas-metas']); expect(waitlistSchema.safeParse({ ...input, interests: ['ironform'] }).success).toBe(false); });
  test('requires at least one interest', () => { expect(waitlistSchema.safeParse({ ...input, interests: [] }).success).toBe(false); });
  test('merges duplicate registrations without losing interests', () => { expect(mergeInterests(['fluxo-vendas'], ['fluxo-vendas', 'financas-metas'])).toEqual(['fluxo-vendas', 'financas-metas']); });
  test('rejects honeypot spam', () => { expect(waitlistSchema.safeParse({ ...input, website: 'spam.example' }).success).toBe(false); });
});