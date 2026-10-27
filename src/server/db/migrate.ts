import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { db, client } from './client';

export async function runMigrations() {
  console.log('🔄 Running database migrations...');
  try {
    await migrate(db, { migrationsFolder: './src/server/db/migrations' });
    console.log('✅ Migrations completed successfully!');
  } catch (err) {
    console.error('❌ Migration failed:', err);
    throw err;
  } finally {
    await client.end();
  }
}

if (import.meta.url.endsWith(process.argv[1]) || process.argv[1]?.includes('migrate')) {
  runMigrations()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}
