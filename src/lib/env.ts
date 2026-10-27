import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(3000),
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),

  // PostgreSQL Database URL
  DATABASE_URL: z
    .string()
    .min(1, 'DATABASE_URL is required')
    .default('postgres://postgres:postgres@localhost:5432/greentree_db'),

  // Authentication
  AUTH_SECRET: z
    .string()
    .min(32, 'AUTH_SECRET must be at least 32 characters')
    .default('development_secret_session_key_min_32_characters_for_gtbc_admin_2025'),

  // Email (Resend)
  RESEND_API_KEY: z.string().default('re_mock_key'),
  EMAIL_FROM: z.string().default('GreenTree Notifications <noreply@greentreebd.com>'),
  HR_NOTIFICATION_EMAIL: z.string().email().default('careers@greentreebd.com'),
  CONTACT_NOTIFICATION_EMAIL: z.string().email().default('contact@greentreebd.com'),

  // S3 / Cloudflare R2
  R2_ACCOUNT_ID: z.string().default('mock_account_id'),
  R2_ACCESS_KEY_ID: z.string().default('mock_access_key'),
  R2_SECRET_ACCESS_KEY: z.string().default('mock_secret_key'),
  R2_BUCKET_NAME: z.string().default('greentree-resumes'),
  R2_ENDPOINT: z.string().default('https://mock.r2.cloudflarestorage.com'),

  // Cloudflare Turnstile
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().default('1x00000000000000000000AA'),
  TURNSTILE_SECRET_KEY: z.string().default('1x0000000000000000000000000000000AA'),

  // Analytics
  NEXT_PUBLIC_PLAUSIBLE_DOMAIN: z.string().optional(),
});

export type Env = z.infer<typeof envSchema>;

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('❌ Invalid environment variables:', JSON.stringify(parsed.error.format(), null, 2));
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Invalid environment variables in production');
  }
}

export const env = parsed.success ? parsed.data : (envSchema.parse({}) as Env);
