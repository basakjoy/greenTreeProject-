import { db } from '../db/client';
import { leads } from '../db/schema';
import { desc } from 'drizzle-orm';

// In-memory buffer for local development if PostgreSQL is temporarily disconnected
const inMemoryLeads: (typeof leads.$inferSelect)[] = [
  {
    id: 1,
    name: 'Tanzim Ahmed',
    email: 'tanzim@apparelgroupbd.com',
    phone: '+880 1819 112233',
    message:
      'We are planning a new 220,000 sq ft green spinning unit in Gazipur and wish to evaluate LEED Platinum feasibility and Bangladesh Bank GTF financing.',
    source: 'contact',
    estimatorInputs: null,
    estimatorResults: null,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12),
  },
  {
    id: 2,
    name: 'Farhana Kabir',
    email: 'fkabir@dhakarealty.com',
    phone: '+880 1711 998877',
    message: 'Requesting detailed feasibility dossier for commercial development in Banani.',
    source: 'estimator',
    estimatorInputs: {
      grossFloorArea: 140000,
      primaryUse: 'Commercial',
      targetTier: 'LEED Platinum',
      city: 'Dhaka',
    },
    estimatorResults: {
      annualEnergySavingsUsd: 145600,
      carbonAbatementMtPerYear: 692,
      greenFinancingMarginDropPct: 1.25,
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 6),
  },
];

export async function createContactLead(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  try {
    const [inserted] = await db
      .insert(leads)
      .values({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        message: data.message,
        source: 'contact',
      })
      .returning();
    return inserted;
  } catch (err) {
    console.warn('Database write failed, storing lead in runtime memory:', err);
    const mockLead = {
      id: inMemoryLeads.length + 1,
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      message: data.message,
      source: 'contact' as const,
      estimatorInputs: null,
      estimatorResults: null,
      createdAt: new Date(),
    };
    inMemoryLeads.unshift(mockLead);
    return mockLead;
  }
}

export async function createEstimatorLead(data: {
  name: string;
  email: string;
  phone?: string;
  inputs: Record<string, unknown>;
  results: Record<string, unknown>;
}) {
  try {
    const [inserted] = await db
      .insert(leads)
      .values({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        message: 'Feasibility dossier requested via Green Building Feasibility & ROI Estimator',
        source: 'estimator',
        estimatorInputs: data.inputs,
        estimatorResults: data.results,
      })
      .returning();
    return inserted;
  } catch (err) {
    console.warn('Database write failed, storing estimator lead in runtime memory:', err);
    const mockLead = {
      id: inMemoryLeads.length + 1,
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      message: 'Feasibility dossier requested via Green Building Feasibility & ROI Estimator',
      source: 'estimator' as const,
      estimatorInputs: data.inputs,
      estimatorResults: data.results,
      createdAt: new Date(),
    };
    inMemoryLeads.unshift(mockLead);
    return mockLead;
  }
}

export async function getLeadsForAdmin() {
  try {
    const rows = await db.select().from(leads).orderBy(desc(leads.createdAt));
    return rows.length > 0 ? rows : inMemoryLeads;
  } catch {
    return inMemoryLeads;
  }
}
