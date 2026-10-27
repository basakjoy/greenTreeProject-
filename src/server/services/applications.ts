import { db } from '../db/client';
import { applications, applicationNotes, jobs } from '../db/schema';
import { eq, desc, and } from 'drizzle-orm';
import crypto from 'crypto';

export interface ApplicationInput {
  jobId?: number | null;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedinUrl?: string;
  experienceYears: number;
  expectedSalary?: string;
  noticePeriod: string;
  coverLetter?: string;
  resumeKey: string;
  ipHash: string;
}

const inMemoryApplications: (typeof applications.$inferSelect & { jobTitle?: string })[] = [
  {
    id: 1,
    referenceId: 'GTBC-APP-891024',
    jobId: 1,
    fullName: 'Mohammad Rashed',
    email: 'm.rashed@example.com',
    phone: '+880 1712 345678',
    location: 'Dhaka, Bangladesh',
    linkedinUrl: 'https://linkedin.com/in/mrashed',
    experienceYears: 6,
    expectedSalary: 'BDT 180,000 / month',
    noticePeriod: '1 month',
    coverLetter: 'LEED AP BD+C engineer with 6 years experience certifying garment factories in Gazipur and Narayanganj.',
    resumeKey: 'resumes/demo-applicant-cv.pdf',
    status: 'reviewing',
    consentAt: new Date(Date.now() - 1000 * 60 * 60 * 48),
    ipHash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48),
    jobTitle: 'Senior LEED AP / Sustainable Project Manager',
  },
  {
    id: 2,
    referenceId: 'GTBC-APP-891025',
    jobId: 2,
    fullName: 'Sharmin Akter',
    email: 'sharmin.cfd@example.com',
    phone: '+880 1819 887766',
    location: 'Dhaka, Bangladesh',
    linkedinUrl: 'https://linkedin.com/in/sharmin-akter-cfd',
    experienceYears: 4,
    expectedSalary: 'BDT 140,000 / month',
    noticePeriod: 'Immediately',
    coverLetter: 'Specialist in OpenFOAM and Rhino Ladybug simulation for high-rise commercial structures.',
    resumeKey: 'resumes/sharmin-akter-cv.pdf',
    status: 'shortlisted',
    consentAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
    ipHash: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
    jobTitle: 'Computational Façade Engineer / CFD Specialist',
  },
];

const inMemoryNotes: (typeof applicationNotes.$inferSelect & { adminName?: string })[] = [
  {
    id: 1,
    applicationId: 1,
    adminId: 1,
    body: 'Strong LEED portfolio with verifiable Gazipur industrial credits. Scheduled for technical interview.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
    adminName: 'Fatima Rahman',
  },
];

export function generateReferenceId(): string {
  const randomBytes = crypto.randomBytes(3).toString('hex').toUpperCase();
  return `GTBC-${randomBytes}`;
}

export async function createApplication(data: ApplicationInput) {
  const referenceId = generateReferenceId();

  try {
    // Check duplicate application
    if (data.jobId) {
      const existing = await db
        .select()
        .from(applications)
        .where(and(eq(applications.email, data.email), eq(applications.jobId, data.jobId)));
      if (existing.length > 0) {
        throw new Error('You have already applied for this position with this email address.');
      }
    }

    const [inserted] = await db
      .insert(applications)
      .values({
        referenceId,
        jobId: data.jobId || null,
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        location: data.location,
        linkedinUrl: data.linkedinUrl || null,
        experienceYears: data.experienceYears,
        expectedSalary: data.expectedSalary || null,
        noticePeriod: data.noticePeriod,
        coverLetter: data.coverLetter || null,
        resumeKey: data.resumeKey,
        status: 'new',
        consentAt: new Date(),
        ipHash: data.ipHash,
      })
      .returning();

    return inserted;
  } catch (err: unknown) {
    if (err instanceof Error && err.message.includes('already applied')) {
      throw err;
    }

    // Check duplicate in memory
    const existing = inMemoryApplications.find(
      (a) => a.email.toLowerCase() === data.email.toLowerCase() && a.jobId === data.jobId
    );
    if (existing) {
      throw new Error('You have already applied for this position with this email address.');
    }

    const mockApp = {
      id: inMemoryApplications.length + 1,
      referenceId,
      jobId: data.jobId || null,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      location: data.location,
      linkedinUrl: data.linkedinUrl || null,
      experienceYears: data.experienceYears,
      expectedSalary: data.expectedSalary || null,
      noticePeriod: data.noticePeriod,
      coverLetter: data.coverLetter || null,
      resumeKey: data.resumeKey,
      status: 'new' as const,
      consentAt: new Date(),
      ipHash: data.ipHash,
      createdAt: new Date(),
      jobTitle: data.jobId ? `Job #${data.jobId}` : 'General Application',
    };
    inMemoryApplications.unshift(mockApp);
    return mockApp;
  }
}

export async function getApplicationsForAdmin(filter?: {
  status?: string;
  jobId?: number;
  search?: string;
}) {
  try {
    const rows = await db
      .select({
        application: applications,
        job: jobs,
      })
      .from(applications)
      .leftJoin(jobs, eq(applications.jobId, jobs.id))
      .orderBy(desc(applications.createdAt));

    const mapped = rows.map((r) => ({
      ...r.application,
      jobTitle: r.job?.title || 'General Application',
    }));

    const dataset = mapped.length > 0 ? mapped : inMemoryApplications;

    return dataset.filter((app) => {
      if (filter?.status && filter.status !== 'all') {
        if (app.status !== filter.status) return false;
      }
      if (filter?.jobId) {
        if (app.jobId !== filter.jobId) return false;
      }
      if (filter?.search) {
        const q = filter.search.toLowerCase();
        const matches =
          app.fullName.toLowerCase().includes(q) ||
          app.email.toLowerCase().includes(q) ||
          app.referenceId.toLowerCase().includes(q) ||
          (app.jobTitle && app.jobTitle.toLowerCase().includes(q));
        if (!matches) return false;
      }
      return true;
    });
  } catch {
    return inMemoryApplications.filter((app) => {
      if (filter?.status && filter.status !== 'all') {
        if (app.status !== filter.status) return false;
      }
      if (filter?.jobId) {
        if (app.jobId !== filter.jobId) return false;
      }
      if (filter?.search) {
        const q = filter.search.toLowerCase();
        const matches =
          app.fullName.toLowerCase().includes(q) ||
          app.email.toLowerCase().includes(q) ||
          app.referenceId.toLowerCase().includes(q);
        if (!matches) return false;
      }
      return true;
    });
  }
}

export async function getApplicationById(id: number) {
  try {
    const rows = await db
      .select({
        application: applications,
        job: jobs,
      })
      .from(applications)
      .leftJoin(jobs, eq(applications.jobId, jobs.id))
      .where(eq(applications.id, id));

    if (rows.length > 0) {
      return {
        ...rows[0].application,
        jobTitle: rows[0].job?.title || 'General Application',
      };
    }
  } catch {
    // fallback
  }

  return inMemoryApplications.find((a) => a.id === id) || null;
}

export async function updateApplicationStatus(id: number, status: (typeof applications.$inferSelect)['status']) {
  try {
    const [updated] = await db
      .update(applications)
      .set({ status })
      .where(eq(applications.id, id))
      .returning();
    return updated;
  } catch {
    const app = inMemoryApplications.find((a) => a.id === id);
    if (app) {
      app.status = status;
      return app;
    }
    throw new Error('Application not found');
  }
}

export async function addApplicationNote(applicationId: number, adminId: number | null, body: string) {
  try {
    const [note] = await db
      .insert(applicationNotes)
      .values({
        applicationId,
        adminId,
        body,
      })
      .returning();
    return note;
  } catch {
    const mockNote = {
      id: inMemoryNotes.length + 1,
      applicationId,
      adminId,
      body,
      createdAt: new Date(),
      adminName: 'Admin',
    };
    inMemoryNotes.push(mockNote);
    return mockNote;
  }
}

export async function getApplicationNotes(applicationId: number) {
  try {
    const rows = await db
      .select()
      .from(applicationNotes)
      .where(eq(applicationNotes.applicationId, applicationId))
      .orderBy(desc(applicationNotes.createdAt));
    return rows.length > 0 ? rows : inMemoryNotes.filter((n) => n.applicationId === applicationId);
  } catch {
    return inMemoryNotes.filter((n) => n.applicationId === applicationId);
  }
}
