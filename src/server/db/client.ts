import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import { env } from '@/lib/env';

// Connection pool options
// Capped at 15 connections max (between 10-20 per spec)
// idle_timeout and connect_timeout configured for production stability
const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

const connectionString = env.DATABASE_URL;

export const client =
  globalForDb.conn ??
  postgres(connectionString, {
    max: 15, // connection pool capped between 10-20
    idle_timeout: 20,
    connect_timeout: 10,
    prepare: false,
  });

if (env.NODE_ENV !== 'production') {
  globalForDb.conn = client;
}

export const db = drizzle(client, { schema });
