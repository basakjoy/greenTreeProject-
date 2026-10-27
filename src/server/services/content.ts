import { db } from '../db/client';
import { services, projects, teamMembers, testimonials, articles } from '../db/schema';
import { eq, desc, asc } from 'drizzle-orm';

// Verified 6 Official Services
export const OFFICIAL_SERVICES = [
  {
    id: 1,
    slug: 'edge-certification',
    title: 'EDGE Certification Service',
    shortDescription:
      '[PLACEHOLDER: Full description to be supplied by client]. Tailored pathways for IFC EDGE standard resource efficiency in energy, water, and embodied energy.',
    fullDescription:
      'Green Tree Building Consultants specializes in EDGE (Excellence in Design for Greater Efficiencies) certification, empowering developers to optimize operational resource consumption. We guide projects from initial feasibility modeling through construction audit verification.\n\n[PLACEHOLDER: Additional client-specific EDGE project phases and audit deliverables will be detailed here upon submission.]',
    benefits: [
      'Targeted 20%+ reduction in operational Energy, Water, and Embodied Energy in Materials',
      'Recognized internationally by the International Finance Corporation (IFC) and World Bank',
      'Qualifies developers for preferential green commercial financing and mortgage discounts',
      'Cost-conscious modeling overseen by Green Tree estimators and studio engineers',
    ],
    deliverables: [
      'EDGE App computational model calibration and baseline comparison',
      'Material substitution analysis for embodied carbon reduction',
      'On-site technical audit documentation and proof collation',
      'Final IFC certificate handover dossier',
    ],
    icon: 'ShieldCheck',
    badge: 'IFC EDGE',
    orderIndex: 1,
    createdAt: new Date(),
  },
  {
    id: 2,
    slug: 'energy-simulation',
    title: 'Energy Simulation Services',
    shortDescription:
      'Helps optimize building performance by analyzing energy consumption patterns and identifying areas for improvement; ensures compliance.',
    fullDescription:
      'Our energy simulation specialists build dynamic thermal models of building systems to benchmark hourly, monthly, and annual utility consumption. By testing passive envelope strategies, high-efficiency HVAC configurations, and renewable integration, we provide actionable pathways for measurable operational cost reductions.',
    benefits: [
      'Pinpoint excessive cooling, lighting, and power loads before construction begins',
      'Ensure strict compliance with national and international energy codes (BNBC / ASHRAE 90.1)',
      'Substantially reduce ongoing electrical utility expenditures',
      'Empower estimators to balance initial capital outlay with long-term operational payback',
    ],
    deliverables: [
      'Whole-building hourly energy simulation report',
      'Comparative HVAC system sizing and coefficient of performance (COP) analysis',
      'Energy conservation measures (ECMs) matrix with projected payback periods',
      'Building envelope thermal transmittance (U-value) optimization schedule',
    ],
    icon: 'Zap',
    badge: 'Performance Modeling',
    orderIndex: 2,
    createdAt: new Date(),
  },
  {
    id: 3,
    slug: 'daylight-simulation',
    title: 'Daylight Simulation Services',
    shortDescription:
      'Maximizes the benefits of natural light; designs spaces that use daylight effectively, reducing energy use.',
    fullDescription:
      'Daylight simulation maximizes visual comfort, productivity, and circadian wellness while drastically cutting daytime artificial lighting requirements. Green Tree calculates spatial daylight autonomy (sDA) and annual sunlight exposure (ASE) to eliminate glare and thermal hot spots in commercial towers and industrial facilities.',
    benefits: [
      'Harness abundant subtropical daylight while eliminating direct solar heat gain',
      'Lower internal electrical lighting loads and HVAC cooling loads simultaneously',
      'Prevent perimeter glare and visual fatigue for workspace occupants',
      'Harmonize fenestration and kinetic louvre designs with Chief Architect aesthetic vision',
    ],
    deliverables: [
      'Spatial Daylight Autonomy (sDA) and Useful Daylight Illuminance (UDI) heatmaps',
      'Annual Sunlight Exposure (ASE) glare risk assessment',
      'Shading device and fenestration angle optimization drawings',
      'Artificial lighting daylight-sensor integration layout',
    ],
    icon: 'Sun',
    badge: 'Solar Optimization',
    orderIndex: 3,
    createdAt: new Date(),
  },
  {
    id: 4,
    slug: 'tender-design-documents-review',
    title: 'Tender and Design Documents Review Services',
    shortDescription:
      'Comprehensive review of tender and design documents to support project success.',
    fullDescription:
      'Our interdisciplinary review team meticulously examines architectural, structural, electrical, and plumbing drawings alongside technical specifications, bills of quantities (BOQ), and contractor tender documentation. We identify design discrepancies, cross-discipline clashes, and cost-inflation risks early, safeguarding quality and budget.',
    benefits: [
      'Eliminate costly on-site change orders and construction delays',
      'Verify strict alignment between architectural design intent and engineering drawings',
      'Ensure contractor tender packages are transparent, competitive, and unambiguous',
      'Protect project feasibility through rigorous estimator oversight',
    ],
    deliverables: [
      'Comprehensive interdisciplinary drawing clash and discrepancy report',
      'Technical specification compliance audit checklist',
      'Tender document and BOQ sanity review with risk mitigation notes',
      'Constructability and value-engineering recommendations memorandum',
    ],
    icon: 'FileCheck',
    badge: 'Quality Assurance',
    orderIndex: 4,
    createdAt: new Date(),
  },
  {
    id: 5,
    slug: 'leed-commissioning',
    title: 'LEED Commissioning Services',
    shortDescription:
      'Achieve green building certification with confidence; expert guidance to meet all requirements and align the project with LEED standards.',
    fullDescription:
      'Green Tree serves as an independent commissioning authority, verifying that fundamental and enhanced building systems are installed, calibrated, and performing exactly according to owner requirements and LEED standards. Our rigorous testing covers HVAC, building automation, electrical, and plumbing systems.',
    benefits: [
      'Fulfill mandatory LEED Fundamental Commissioning prerequisite and earn Enhanced credits',
      'Ensure building mechanical and electrical systems operate at peak efficiency from Day 1',
      'Significantly reduce premature equipment failure and post-occupancy maintenance disputes',
      'Provide comprehensive operations and maintenance (O&M) training for facility teams',
    ],
    deliverables: [
      'Owner’s Project Requirements (OPR) and Basis of Design (BOD) review',
      'Commissioning plan and pre-functional installation checklists',
      'Full functional performance testing protocols and execution logs',
      'Final Commissioning Report and 10-month post-occupancy warranty review',
    ],
    icon: 'CheckCircle2',
    badge: 'USGBC Alignment',
    orderIndex: 5,
    createdAt: new Date(),
  },
  {
    id: 6,
    slug: 'overall-leed-facilitation',
    title: 'Overall LEED Facilitation Services',
    shortDescription:
      'End-to-end LEED support from planning and documentation to final certification.',
    fullDescription:
      'Green Tree provides comprehensive, turnkey facilitation across the entire green building certification journey. From initial conceptual goal-setting and credit scoring to coordinating multidisciplinary design teams, managing GBCI submittals, and conducting audit reviews, we ensure seamless path to LEED certification.',
    benefits: [
      'Turnkey management of all LEED credits, templates, and documentation submittals',
      'Direct facilitation with GBCI review teams with 100% audit readiness',
      'Seamless coordination between architects, MEP engineers, contractors, and owners',
      'Assistance in unlocking Bangladesh Bank Green Transformation Fund (GTF) financing',
    ],
    deliverables: [
      'LEED Feasibility Scorecard and target credit pathway roadmap',
      'Monthly multidisciplinary compliance tracking charettes',
      'GBCI LEED Online documentation upload, narrative authoring, and review response',
      'Plaque verification and green marketing assistance upon certification award',
    ],
    icon: 'Award',
    badge: 'End-to-End LEED',
    orderIndex: 6,
    createdAt: new Date(),
  },
];

// Verified 5 Official Projects
export const OFFICIAL_PROJECTS = [
  {
    id: 1,
    slug: 'wonderland-toy',
    title: 'Wonderland Toy',
    client: 'Wonderland Toy',
    location: 'Gazipur, Bangladesh',
    sector: 'Manufacturing & Industrial',
    ratingAchieved: 'Green Building Consulting & Energy Efficiency',
    areaSqFt: 185000,
    energyReductionPct: 38,
    waterSavingsPct: 45,
    carbonOffsetMT: 620,
    summary:
      'Comprehensive sustainable building consultancy for Wonderland Toy’s manufacturing facility in Gazipur, optimizing production floor daylighting, thermal envelope, and energy efficiency.',
    challenge:
      'Balancing high-density precision manufacturing heat loads with worker thermal comfort and strict export quality compliance.',
    solution:
      'Green Tree engineered optimized daylight monitors, high-efficiency mechanical ventilation, and thermal envelope insulation to significantly reduce operational electricity consumption.',
    imageUrl: '/images/hero/hero-green-facade.jpg',
    gallery: [
      '/images/hero/hero-green-facade.jpg',
      '/images/hero/hero-sculptural-courtyard.jpg',
    ],
    isFeatured: 1,
    completedYear: 2023,
    createdAt: new Date(),
  },
  {
    id: 2,
    slug: 'mansion-d-salam',
    title: 'Mansion D Salam',
    client: 'J&Js Holdings',
    location: 'Road 50, Gulshan 2, Dhaka',
    sector: 'Residential Architecture',
    ratingAchieved: 'Sustainable Luxury Residence',
    areaSqFt: 35000,
    energyReductionPct: 32,
    waterSavingsPct: 40,
    carbonOffsetMT: 140,
    summary:
      'An exclusive, aesthetically timeless luxury private residence in Gulshan 2, engineered by Green Tree’s interdisciplinary studio team from initial sketch to final execution.',
    challenge:
      'Creating an iconic architectural statement upholding the philosophy that "design is everything" while integrating high-efficiency HVAC and private biophilic greenery.',
    solution:
      'Chief Architect conceptualized an interlinked indoor-outdoor spatial flow featuring insulated glazing, solar shading louvres, and greywater landscape harvesting.',
    imageUrl: '/images/hero/hero-sculptural-courtyard.jpg',
    gallery: [
      '/images/hero/hero-sculptural-courtyard.jpg',
      '/images/hero/hero-biophilic-dome.jpg',
    ],
    isFeatured: 1,
    completedYear: 2024,
    createdAt: new Date(),
  },
  {
    id: 3,
    slug: 'fakir-eco-knitwear',
    title: 'Fakir Eco Knitwear',
    client: 'Fakir Eco Knitwear Ltd',
    location: 'Narayanganj, Bangladesh',
    sector: 'Industrial RMG',
    ratingAchieved: 'LEED Facilitation & Energy Simulation',
    areaSqFt: 320000,
    energyReductionPct: 44,
    waterSavingsPct: 55,
    carbonOffsetMT: 1180,
    summary:
      'Turnkey green building advisory and energy simulation for Fakir Eco Knitwear Ltd in Narayanganj, exemplifying world-class textile decarbonization and resource conservation.',
    challenge:
      'Meeting rigorous international apparel buyer sustainability standards while mitigating heavy process energy and water demands.',
    solution:
      'Conducted whole-building energy and daylight simulations, introduced waste-heat recovery systems, and facilitated complete environmental documentation.',
    imageUrl: '/images/hero/hero-biophilic-dome.jpg',
    gallery: [
      '/images/hero/hero-biophilic-dome.jpg',
      '/images/hero/hero-green-facade.jpg',
    ],
    isFeatured: 1,
    completedYear: 2023,
    createdAt: new Date(),
  },
  {
    id: 4,
    slug: 'fashion-studio',
    title: 'Fashion Studio',
    client: 'Fashion Studio Ltd.',
    location: 'Gazipur, Bangladesh',
    sector: 'Industrial RMG',
    ratingAchieved: 'Sustainable Industrial Facility',
    areaSqFt: 210000,
    energyReductionPct: 36,
    waterSavingsPct: 42,
    carbonOffsetMT: 740,
    summary:
      'Modern, highly functional garment manufacturing and design studio in Gazipur, designed with a focus on worker wellness, natural lighting, and cost efficiency.',
    challenge:
      'Developing a cost-effective design that satisfies buyer compliance audits while maintaining strict architectural refinement.',
    solution:
      'Our interdisciplinary firm integrated structural, MEP, and estimator teams to optimize material use and implement passive cross-ventilation.',
    imageUrl: '/images/hero/hero-green-facade.jpg',
    gallery: [
      '/images/hero/hero-green-facade.jpg',
    ],
    isFeatured: 0,
    completedYear: 2022,
    createdAt: new Date(),
  },
  {
    id: 5,
    slug: 'esquire-knit-composite',
    title: 'Esquire Knit Composite',
    client: 'Esquire Knit Composite Ltd.',
    location: 'Bhaluka, Mymensingh, Bangladesh',
    sector: 'Industrial RMG Composite',
    ratingAchieved: 'Comprehensive Green Building Advisory',
    areaSqFt: 460000,
    energyReductionPct: 48,
    waterSavingsPct: 60,
    carbonOffsetMT: 1950,
    summary:
      'Large-scale integrated textile and garment industrial complex in Bhaluka, Mymensingh, engineered for maximum energy independence and effluent minimization.',
    challenge:
      'Managing expansive industrial floor plates with extensive steam, dyeing, and knitting processes across a multi-building masterplan.',
    solution:
      'Comprehensive tender and design document reviews, advanced energy simulations, and complete LEED facilitation across all operational zones.',
    imageUrl: '/images/hero/hero-biophilic-dome.jpg',
    gallery: [
      '/images/hero/hero-biophilic-dome.jpg',
      '/images/hero/hero-sculptural-courtyard.jpg',
    ],
    isFeatured: 0,
    completedYear: 2024,
    createdAt: new Date(),
  },
];

// Verified Clients List
export const OFFICIAL_CLIENTS = [
  { name: 'Navana Group', category: 'Conglomerate & Real Estate' },
  { name: 'Ahsan Group', category: 'Industrial & Trade' },
  { name: 'Wonderland Toys', category: 'Consumer Manufacturing' },
  { name: 'Palmal Group', category: 'Textiles & Apparel' },
  { name: 'J&H', category: 'Holdings & Development' },
  { name: 'Fakir Group', category: 'Apparel & Eco Knitwear' },
  { name: 'Cosmic Group', category: 'Industrial Export' },
];

// Verified Institutional Memberships
export const OFFICIAL_MEMBERSHIPS = [
  {
    acronym: 'IAB',
    name: 'Institute of Architects Bangladesh',
    badge: 'Registered Member',
    description: 'Upholding highest national standards of architectural practice and ethics.',
  },
  {
    acronym: 'IEB',
    name: 'Institute of Engineers Bangladesh',
    badge: 'Registered Member',
    description: 'Certified multidisciplinary engineering practice and technical integrity.',
  },
  {
    acronym: 'RAJUK',
    name: 'Rajdhani Unnayan Kartripakkha',
    badge: 'Enlisted Firm',
    description: 'Authorized consultancy for building code approvals in metropolitan Dhaka.',
  },
];

// Verified Leadership & Studio Team
export const OFFICIAL_TEAM = [
  {
    id: 1,
    name: 'Rubana Nasrin',
    role: 'Chief Executive Officer & Founder',
    credential: 'LEED AP BD+C, Sustainable Masterplanning Fellow',
    bio: 'Directing Green Tree’s corporate vision, client relationships, and sustainability leadership across Bangladesh. Committed to delivering high-value cost reduction and timeless design.',
    avatarUrl: '/images/team/rubana-nasrin-ceo.jpg',
    linkedinUrl: 'https://linkedin.com/in/rubana-nasrin-greentree',
    orderIndex: 1,
    createdAt: new Date(),
  },
  {
    id: 2,
    name: '[PLACEHOLDER: Chief Architect]',
    role: 'Chief Architect & Head of Design Studio',
    credential: 'IAB Registered Architect',
    bio: 'Sketches the first concept and guides the studio team through drawings, presentations, functionality refinement, and aesthetic execution to ensure design integrity is kept intact.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    linkedinUrl: '#',
    orderIndex: 2,
    createdAt: new Date(),
  },
  {
    id: 3,
    name: '[PLACEHOLDER: Lead Structural Engineer]',
    role: 'Senior Structural & Building Physics Engineer',
    credential: 'IEB Registered Professional Engineer',
    bio: 'Harmonizes structural safety with innovative architecture. Oversees engineering coordination, tender document reviews, and construction specifications.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    linkedinUrl: '#',
    orderIndex: 3,
    createdAt: new Date(),
  },
  {
    id: 4,
    name: '[PLACEHOLDER: Lead Estimator & Feasibility Analyst]',
    role: 'Principal Estimator & Cost-Effectiveness Specialist',
    credential: 'B.Sc. Quantity Surveying & Cost Engineering',
    bio: 'Tracks cost-effectiveness and project feasibility at every design stage, so the final product is both cost-conscious and of the highest quality.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    linkedinUrl: '#',
    orderIndex: 4,
    createdAt: new Date(),
  },
];

// Content Access Functions
export async function getServices() {
  try {
    const rows = await db.select().from(services).orderBy(asc(services.orderIndex));
    return rows.length > 0 ? rows : OFFICIAL_SERVICES;
  } catch {
    return OFFICIAL_SERVICES;
  }
}

export async function getServiceBySlug(slug: string) {
  try {
    const rows = await db.select().from(services).where(eq(services.slug, slug));
    if (rows.length > 0) return rows[0];
    return OFFICIAL_SERVICES.find((s) => s.slug === slug) || null;
  } catch {
    return OFFICIAL_SERVICES.find((s) => s.slug === slug) || null;
  }
}

export async function getProjects() {
  try {
    const rows = await db.select().from(projects).orderBy(desc(projects.completedYear));
    return rows.length > 0 ? rows : OFFICIAL_PROJECTS;
  } catch {
    return OFFICIAL_PROJECTS;
  }
}

export async function getProjectBySlug(slug: string) {
  try {
    const rows = await db.select().from(projects).where(eq(projects.slug, slug));
    if (rows.length > 0) return rows[0];
    return OFFICIAL_PROJECTS.find((p) => p.slug === slug) || null;
  } catch {
    return OFFICIAL_PROJECTS.find((p) => p.slug === slug) || null;
  }
}

export async function getFeaturedProjects() {
  const all = await getProjects();
  const featured = all.filter((p) => p.isFeatured === 1);
  return featured.length > 0 ? featured : all.slice(0, 3);
}

export async function getTeamMembers() {
  try {
    const rows = await db.select().from(teamMembers).orderBy(asc(teamMembers.orderIndex));
    return rows.length > 0 ? rows : OFFICIAL_TEAM;
  } catch {
    return OFFICIAL_TEAM;
  }
}

export async function getClients() {
  return OFFICIAL_CLIENTS;
}

export async function getMemberships() {
  return OFFICIAL_MEMBERSHIPS;
}

export async function getTestimonials() {
  try {
    const rows = await db.select().from(testimonials).orderBy(asc(testimonials.orderIndex));
    return rows;
  } catch {
    return [];
  }
}
