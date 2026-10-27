import { pgTable, text, serial, timestamp, integer, varchar, jsonb, pgEnum, index } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Enums
export const adminRoleEnum = pgEnum('admin_role', ['admin', 'hr']);
export const jobStatusEnum = pgEnum('job_status', ['draft', 'published', 'closed']);
export const applicationStatusEnum = pgEnum('application_status', [
  'new',
  'reviewing',
  'shortlisted',
  'interview',
  'offer',
  'hired',
  'rejected',
]);
export const leadSourceEnum = pgEnum('lead_source', ['contact', 'estimator']);

// 1. Admin Users Table
export const adminUsers = pgTable('admin_users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  role: adminRoleEnum('role').default('hr').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

// 2. Jobs Table
export const jobs = pgTable(
  'jobs',
  {
    id: serial('id').primaryKey(),
    slug: varchar('slug', { length: 255 }).notNull().unique(),
    title: varchar('title', { length: 255 }).notNull(),
    department: varchar('department', { length: 100 }).notNull(), // e.g. "Energy Modeling", "Façade Engineering", "LCA & Carbon"
    location: varchar('location', { length: 150 }).notNull(), // e.g. "Dhaka, Bangladesh (Hybrid)"
    employmentType: varchar('employment_type', { length: 50 }).notNull(), // "Full-time", "Contract"
    description: text('description').notNull(),
    responsibilities: text('responsibilities').notNull(), // rich text or markdown/newline separated
    requirements: text('requirements').notNull(),
    benefits: text('benefits').notNull(),
    salaryMin: integer('salary_min'),
    salaryMax: integer('salary_max'),
    status: jobStatusEnum('status').default('draft').notNull(),
    postedAt: timestamp('posted_at', { withTimezone: true }),
    closesAt: timestamp('closes_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    index('jobs_slug_idx').on(table.slug),
    index('jobs_status_posted_idx').on(table.status, table.postedAt),
  ]
);

// 3. Applications Table
export const applications = pgTable(
  'applications',
  {
    id: serial('id').primaryKey(),
    referenceId: varchar('reference_id', { length: 50 }).notNull().unique(),
    jobId: integer('job_id').references(() => jobs.id, { onDelete: 'set null' }),
    fullName: varchar('full_name', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull(),
    phone: varchar('phone', { length: 50 }).notNull(),
    location: varchar('location', { length: 150 }).notNull(),
    linkedinUrl: text('linkedin_url'),
    experienceYears: integer('experience_years').notNull(),
    expectedSalary: varchar('expected_salary', { length: 100 }),
    noticePeriod: varchar('notice_period', { length: 50 }).notNull(),
    coverLetter: text('cover_letter'),
    resumeKey: text('resume_key').notNull(),
    status: applicationStatusEnum('status').default('new').notNull(),
    consentAt: timestamp('consent_at', { withTimezone: true }).defaultNow().notNull(),
    ipHash: varchar('ip_hash', { length: 64 }).notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    index('applications_job_id_idx').on(table.jobId),
    index('applications_status_idx').on(table.status),
    index('applications_email_idx').on(table.email),
  ]
);

// 4. Application Notes Table
export const applicationNotes = pgTable('application_notes', {
  id: serial('id').primaryKey(),
  applicationId: integer('application_id')
    .references(() => applications.id, { onDelete: 'cascade' })
    .notNull(),
  adminId: integer('admin_id')
    .references(() => adminUsers.id, { onDelete: 'set null' }),
  body: text('body').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

// 5. Leads Table (Contact inquiries & ROI Estimator leads)
export const leads = pgTable(
  'leads',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull(),
    phone: varchar('phone', { length: 50 }),
    message: text('message'),
    source: leadSourceEnum('source').default('contact').notNull(),
    estimatorInputs: jsonb('estimator_inputs'),
    estimatorResults: jsonb('estimator_results'),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    index('leads_created_at_idx').on(table.createdAt),
  ]
);

// 6. Services Table
export const services = pgTable('services', {
  id: serial('id').primaryKey(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  title: varchar('title', { length: 255 }).notNull(),
  shortDescription: text('short_description').notNull(),
  fullDescription: text('full_description').notNull(),
  benefits: jsonb('benefits').$type<string[]>().default([]).notNull(),
  deliverables: jsonb('deliverables').$type<string[]>().default([]).notNull(),
  icon: varchar('icon', { length: 50 }).notNull(),
  badge: varchar('badge', { length: 50 }),
  orderIndex: integer('order_index').default(0).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

// 7. Projects Table
export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  title: varchar('title', { length: 255 }).notNull(),
  client: varchar('client', { length: 255 }).notNull(),
  location: varchar('location', { length: 150 }).notNull(),
  sector: varchar('sector', { length: 100 }).notNull(), // "Industrial RMG", "Commercial", "Mixed-Use"
  ratingAchieved: varchar('rating_achieved', { length: 100 }).notNull(), // "LEED Platinum (88 pts)", "EDGE Zero Carbon"
  areaSqFt: integer('area_sq_ft').notNull(),
  energyReductionPct: integer('energy_reduction_pct').notNull(), // e.g. 48
  waterSavingsPct: integer('water_savings_pct').notNull(),
  carbonOffsetMT: integer('carbon_offset_mt').notNull(),
  summary: text('summary').notNull(),
  challenge: text('challenge'),
  solution: text('solution'),
  imageUrl: text('image_url').notNull(),
  isFeatured: integer('is_featured').default(0).notNull(),
  completedYear: integer('completed_year').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

// 8. Team Members Table
export const teamMembers = pgTable('team_members', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  role: varchar('role', { length: 255 }).notNull(),
  credential: varchar('credential', { length: 150 }).notNull(), // "LEED AP BD+C, EDGE Expert"
  bio: text('bio').notNull(),
  avatarUrl: text('avatar_url').notNull(),
  linkedinUrl: text('linkedin_url'),
  orderIndex: integer('order_index').default(0).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

// 9. Testimonials Table
export const testimonials = pgTable('testimonials', {
  id: serial('id').primaryKey(),
  clientName: varchar('client_name', { length: 255 }).notNull(),
  clientTitle: varchar('client_title', { length: 255 }).notNull(),
  company: varchar('company', { length: 255 }).notNull(),
  rating: integer('rating').default(5).notNull(),
  content: text('content').notNull(),
  projectRef: varchar('project_ref', { length: 255 }),
  orderIndex: integer('order_index').default(0).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

// 10. Articles / Insights Table
export const articles = pgTable('articles', {
  id: serial('id').primaryKey(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  title: varchar('title', { length: 255 }).notNull(),
  excerpt: text('excerpt').notNull(),
  content: text('content').notNull(),
  category: varchar('category', { length: 100 }).notNull(), // "LEED Decarbonization", "Façade Physics", "Policy & Finance"
  author: varchar('author', { length: 255 }).notNull(),
  readTimeMinutes: integer('read_time_minutes').default(5).notNull(),
  publishedAt: timestamp('published_at', { withTimezone: true }).defaultNow().notNull(),
  imageUrl: text('image_url').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

// 11. Audit Logs Table
export const auditLogs = pgTable('audit_logs', {
  id: serial('id').primaryKey(),
  adminId: integer('admin_id').references(() => adminUsers.id, { onDelete: 'set null' }),
  action: varchar('action', { length: 100 }).notNull(), // "job_created", "status_changed", "csv_exported"
  entity: varchar('entity', { length: 100 }).notNull(), // "job", "application", "lead"
  entityId: varchar('entity_id', { length: 100 }),
  meta: jsonb('meta'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

// Relations
export const jobsRelations = relations(jobs, ({ many }) => ({
  applications: many(applications),
}));

export const applicationsRelations = relations(applications, ({ one, many }) => ({
  job: one(jobs, {
    fields: [applications.jobId],
    references: [jobs.id],
  }),
  notes: many(applicationNotes),
}));

export const applicationNotesRelations = relations(applicationNotes, ({ one }) => ({
  application: one(applications, {
    fields: [applicationNotes.applicationId],
    references: [applications.id],
  }),
  admin: one(adminUsers, {
    fields: [applicationNotes.adminId],
    references: [adminUsers.id],
  }),
}));
