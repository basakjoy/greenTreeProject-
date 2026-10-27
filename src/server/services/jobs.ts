import { db } from '../db/client';
import { jobs, applications } from '../db/schema';
import { eq, desc, and, ilike, sql } from 'drizzle-orm';
import { slugify } from '@/lib/utils';

export const FALLBACK_JOBS = [
  {
    id: 1,
    slug: 'senior-leed-ap-project-manager',
    title: 'Senior LEED AP / Sustainable Project Manager',
    department: 'Green Certification & Advisory',
    location: 'Dhaka, Bangladesh (Hybrid)',
    employmentType: 'Full-time',
    description:
      'Lead multidisciplinary engineering teams through LEED BD+C, ID+C, and O+M certification lifecycles for world-class industrial RMG complexes and commercial towers in Bangladesh.',
    responsibilities: `• Lead LEED project consulting from schematic design through final GBCI construction audit approval.
• Facilitate sustainability design charettes with prominent developer clients, structural engineers, and MEP consultants.
• Review architectural drawings, submittals, and contractor material specifications for compliance with LEED credits.
• Coordinate dynamic energy modeling, daylight analysis, and indoor air quality commissioning plans.
• Author GBCI project submittals and address reviewer clarifications with 100% audit accuracy.`,
    requirements: `• Bachelor’s or Master’s in Architecture, Mechanical, Electrical, or Environmental Engineering.
• Active LEED AP BD+C credential in good standing with GBCI.
• 5+ years of verifiable experience delivering LEED certified projects (at least 2 certified as Project Lead).
• Fluent in English and Bengali technical writing and client presentations.
• In-depth familiarity with ASHRAE 90.1, ASHRAE 62.1, ASHRAE 55, and BNBC building codes.`,
    benefits: `• Highly competitive salary (BDT 140,000 - 220,000 / month) plus project completion bonuses.
• Comprehensive family medical and hospitalization insurance.
• Continuing education allowance for USGBC/GBCI/WELL credential maintenance and international conference attendance.
• Flexible hybrid work schedule (3 days office, 2 days remote).
• Annual company performance profit sharing.`,
    salaryMin: 140000,
    salaryMax: 220000,
    status: 'published' as const,
    postedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
    closesAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    slug: 'computational-facade-engineer',
    title: 'Computational Façade Engineer / CFD Specialist',
    department: 'Microclimate & Building Physics',
    location: 'Dhaka, Bangladesh (On-site / Hybrid)',
    employmentType: 'Full-time',
    description:
      'Utilize advanced computational fluid dynamics (CFD), solar irradiation analysis, and thermal envelope simulation to engineer high-performance building skins.',
    responsibilities: `• Execute high-resolution CFD wind tunnel and external pressure simulations using OpenFOAM or ANSYS Fluent.
• Model annual solar exposure (ASE), spatial daylight autonomy (sDA), and thermal comfort (PMV/PPD) in Rhino/Grasshopper/Ladybug Tools.
• Design parametric external shading devices, double-skin façades, and natural ventilation airfoils.
• Interface directly with architectural teams to translate complex physics simulations into cost-effective buildable detailing.
• Prepare technical façade optimization reports for institutional owners and developer tenders.`,
    requirements: `• Degree in Mechanical Engineering, Aerospace Engineering, Building Physics, or Architectural Science.
• Proven proficiency with Rhino, Grasshopper, Ladybug Tools, and OpenFOAM / ANSYS Fluent.
• Minimum 3 years of professional experience in microclimate modeling, façade engineering, or aerodynamic simulation.
• Strong mathematical foundation in thermodynamics, heat transfer, and fluid mechanics.`,
    benefits: `• Salary BDT 110,000 - 170,000 / month based on simulation portfolio.
• Access to dedicated high-performance computing (HPC) GPU clusters.
• Annual health checkup and life insurance.
• 24 days paid annual leave.`,
    salaryMin: 110000,
    salaryMax: 170000,
    status: 'published' as const,
    postedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 12),
    closesAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 25),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    slug: 'building-energy-modeler',
    title: 'Building Energy Modeler (eQuest / EnergyPlus)',
    department: 'Energy Engineering',
    location: 'Dhaka, Bangladesh',
    employmentType: 'Full-time',
    description:
      'Perform whole-building energy modeling to optimize HVAC plants, calculate life-cycle energy savings, and achieve ASHRAE 90.1 Appendix G compliance.',
    responsibilities: `• Develop detailed whole-building energy simulation models in EnergyPlus, eQuest, or DesignBuilder.
• Calculate baseline vs proposed annual energy consumption under ASHRAE 90.1-2016 / 2019 Appendix G.
• Model complex central plant chilled water loops, VRF systems, heat recovery chillers, and DOAS air handling units.
• Run parametric sensitivity analyses to advise clients on payback periods for energy conservation measures (ECMs).
• Generate comprehensive energy modeling reports for LEED, EDGE, and BEER rating submissions.`,
    requirements: `• B.Sc. in Mechanical or Electrical Engineering.
• BEMP (Building Energy Modeling Professional) or LEED AP with energy modeling specialization preferred.
• 2-4 years of demonstrated experience in building energy simulations for commercial or industrial facilities.
• Working knowledge of psychrometric charts, building automation systems, and renewable PV sizing.`,
    benefits: `• Salary BDT 80,000 - 130,000 / month.
• Provident fund and gratuity benefits.
• Subsidized corporate lunch and transportation allowance.
• Annual training budget for international simulation certifications.`,
    salaryMin: 80000,
    salaryMax: 130000,
    status: 'published' as const,
    postedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
    closesAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 40),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    slug: 'life-cycle-assessment-specialist',
    title: 'Life Cycle Assessment (LCA) & Embodied Carbon Analyst',
    department: 'Carbon & Materials',
    location: 'Dhaka, Bangladesh (Hybrid)',
    employmentType: 'Full-time',
    description:
      'Quantify whole-building embodied carbon across structural, architectural, and MEP systems to achieve net-zero targets and ISO 14040/44 compliance.',
    responsibilities: `• Conduct Whole Building Life Cycle Assessments (WBLCA) using One Click LCA or Tally.
• Calculate Global Warming Potential (GWP) across cradle-to-grave stages (Modules A1-C4).
• Benchmark low-carbon concrete mixes, recycled structural steel, and local bio-based construction materials.
• Author carbon accounting dossiers for LEED MRc1 Exemplary Performance and international Scope 3 reporting.
• Guide factory procurement teams on Environmental Product Declarations (EPDs).`,
    requirements: `• Degree in Civil, Structural, Environmental, or Materials Engineering.
• Demonstrated experience conducting LCA studies for buildings or industrial manufacturing.
• Familiarity with EN 15978, ISO 14040, ISO 14044, and ISO 21930 standards.
• Strong analytical and data modeling skills in Excel and LCA databases (Ecoinvent).`,
    benefits: `• Salary BDT 90,000 - 145,000 / month.
• Hybrid work flexibility.
• Premium health and medical insurance.
• Fast-track career path to Sustainability Principal.`,
    salaryMin: 90000,
    salaryMax: 145000,
    status: 'published' as const,
    postedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5),
    closesAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 35),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    slug: 'edge-certification-specialist',
    title: 'Junior EDGE Certification Specialist',
    department: 'Green Certification & Advisory',
    location: 'Dhaka, Bangladesh',
    employmentType: 'Full-time',
    description:
      'Support IFC EDGE green building assessments, energy/water baseline audits, and on-site construction verification.',
    responsibilities: `• Input architectural and MEP data into the IFC EDGE App cloud platform.
• Calculate percentage savings for Energy, Water, and Embodied Energy in Materials.
• Conduct on-site audits during construction to verify installed green fixtures, insulation, and solar arrays.
• Collate audit proof portfolios, supplier delivery receipts, and manufacturer test certificates.
• Assist senior consultants during third-party auditor walkthroughs.`,
    requirements: `• B.Arch or B.Sc. in Civil / Mechanical / Environmental Engineering.
• Passed EDGE Expert exam or willing to complete within 3 months of joining (exam fee sponsored by GTBC).
• 1-2 years of experience in green building consulting or architectural design.
• Passion for sustainability, carbon reduction, and climate resilience in Bangladesh.`,
    benefits: `• Salary BDT 50,000 - 75,000 / month.
• Full sponsorship for EDGE Expert and LEED Green Associate certifications.
• Mentorship from South Asia's leading sustainability fellows.
• Performance-linked annual bonuses.`,
    salaryMin: 50000,
    salaryMax: 75000,
    status: 'published' as const,
    postedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
    closesAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 45),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export async function getPublishedJobs(filter?: {
  department?: string;
  location?: string;
  type?: string;
  search?: string;
}) {
  try {
    const rows = await db
      .select()
      .from(jobs)
      .where(eq(jobs.status, 'published'))
      .orderBy(desc(jobs.postedAt));

    const dataset = rows.length > 0 ? rows : FALLBACK_JOBS;

    return dataset.filter((job) => {
      if (filter?.department && filter.department !== 'All') {
        if (!job.department.toLowerCase().includes(filter.department.toLowerCase())) return false;
      }
      if (filter?.location && filter.location !== 'All') {
        if (!job.location.toLowerCase().includes(filter.location.toLowerCase())) return false;
      }
      if (filter?.type && filter.type !== 'All') {
        if (!job.employmentType.toLowerCase().includes(filter.type.toLowerCase())) return false;
      }
      if (filter?.search) {
        const q = filter.search.toLowerCase();
        const matches =
          job.title.toLowerCase().includes(q) ||
          job.description.toLowerCase().includes(q) ||
          job.department.toLowerCase().includes(q);
        if (!matches) return false;
      }
      return true;
    });
  } catch {
    return FALLBACK_JOBS;
  }
}

export async function getJobBySlug(slug: string) {
  try {
    const rows = await db.select().from(jobs).where(eq(jobs.slug, slug));
    if (rows.length > 0) return rows[0];
    return FALLBACK_JOBS.find((j) => j.slug === slug) || null;
  } catch {
    return FALLBACK_JOBS.find((j) => j.slug === slug) || null;
  }
}

export async function getAllJobsForAdmin() {
  try {
    const rows = await db.select().from(jobs).orderBy(desc(jobs.createdAt));
    return rows.length > 0 ? rows : FALLBACK_JOBS;
  } catch {
    return FALLBACK_JOBS;
  }
}
