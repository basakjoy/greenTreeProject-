import { db } from '../db/client';
import { services, projects, teamMembers, testimonials, articles } from '../db/schema';
import { eq, desc, asc } from 'drizzle-orm';

// Verified 6 Official Services
export const OFFICIAL_SERVICES = [
  {
    id: 1,
    slug: 'edge-certification',
    title: 'EDGE Certification',
    shortDescription:
      'IFC EDGE certification for measurable reductions in energy, water, and embodied energy across new and existing buildings.',
    fullDescription:
      'Green Tree supports projects pursuing IFC EDGE (Excellence in Design for Greater Efficiencies) certification. We evaluate baseline performance, model cost-effective efficiency measures, prepare the EDGE project dossier, and coordinate construction evidence and final audit verification.',
    benefits: [
      'Targets measurable savings in operational energy and water',
      'Includes embodied-energy analysis for building materials',
      'Recognized by the International Finance Corporation and international investors',
      'Supports green financing and resource-efficient project decisions',
    ],
    deliverables: [
      'EDGE feasibility and baseline assessment',
      'EDGE App energy, water, and embodied-energy model',
      'Efficiency-measure recommendation and costing matrix',
      'Construction evidence, audit support, and certificate dossier',
    ],
    icon: 'ShieldCheck',
    badge: 'IFC EDGE',
    orderIndex: 1,
    createdAt: new Date(),
  },
  {
    id: 2,
    slug: 'energy-simulation',
    title: 'BEER Green Building Rating',
    shortDescription:
      'Bangladesh-focused building energy and environmental rating aligned with local climate, hydrology, and national building requirements.',
    fullDescription:
      'We guide projects through the BEER (Bangladesh Energy and Environmental Rating) framework, using local climatic conditions, passive design opportunities, rainwater management, materials, and building-system performance to benchmark sustainability.',
    benefits: [
      'Designed for Bangladesh’s subtropical climate and monsoon conditions',
      'Aligns building performance with BNBC and local statutory requirements',
      'Balances passive design, operational efficiency, and local materials',
      'Supports climate-responsive and flood-aware development',
    ],
    deliverables: [
      'BEER pre-assessment and rating pathway',
      'Climate-responsive envelope and energy strategy',
      'Water and rainwater management review',
      'Documented compliance evidence and submission support',
    ],
    icon: 'Zap',
    badge: 'Bangladesh BEER',
    orderIndex: 2,
    createdAt: new Date(),
  },
  {
    id: 3,
    slug: 'daylight-simulation',
    title: 'Life Cycle Assessment & Embodied Carbon',
    shortDescription:
      'Cradle-to-grave carbon accounting for building materials and systems, compliant with international life-cycle assessment standards.',
    fullDescription:
      'Our Life Cycle Assessment service quantifies the environmental footprint of building materials and assemblies across their full life cycle. We compare baseline and proposed designs, identify embodied-carbon hotspots, and support low-carbon procurement for structures, façades, and fit-outs.',
    benefits: [
      'Identifies embodied-carbon hotspots in major building elements',
      'Supports Scope 3 reporting and responsible procurement',
      'Helps projects prepare LEED and other low-carbon credit evidence',
      'Provides verified alternatives for concrete, steel, insulation, and finishes',
    ],
    deliverables: [
      'Whole-building life-cycle assessment report',
      'Baseline and proposed embodied-carbon comparison',
      'Low-carbon material and procurement strategy',
      'Environmental Product Declaration evidence register',
    ],
    icon: 'Sun',
    badge: 'LCA',
    orderIndex: 3,
    createdAt: new Date(),
  },
  {
    id: 4,
    slug: 'tender-design-documents-review',
    title: 'Environmental Product Declaration',
    shortDescription:
      'Verified environmental information for construction products, covering life-cycle impacts and embodied carbon.',
    fullDescription:
      'We help manufacturers and project teams prepare Environmental Product Declarations (EPDs) and integrate product-specific environmental data into whole-building assessments. The process improves material transparency and supports credible green-building credit documentation.',
    benefits: [
      'Provides transparent, product-specific environmental data',
      'Supports embodied-carbon calculations and responsible procurement',
      'Helps projects earn applicable LEED and green-rating credits',
      'Strengthens supplier and product environmental claims',
    ],
    deliverables: [
      'Product life-cycle inventory coordination',
      'EPD documentation and verification support',
      'Green procurement and material-selection guidance',
      'LEED and LCA evidence package',
    ],
    icon: 'FileCheck',
    badge: 'EPD',
    orderIndex: 4,
    createdAt: new Date(),
  },
  {
    id: 5,
    slug: 'leed-commissioning',
    title: 'LEED Advisory & Certification',
    shortDescription:
      'End-to-end USGBC/LEED guidance from credit strategy and design review through GBCI submission and certification.',
    fullDescription:
      'Green Tree manages the LEED certification process across BD+C, ID+C, and O+M project pathways. We coordinate the project team, establish a credit roadmap, review evidence, verify design and commissioning requirements, and prepare complete GBCI documentation.',
    benefits: [
      'Clear credit strategy and target rating from early design',
      'Improved audit readiness and documentation consistency',
      'Coordination of designers, contractors, commissioning providers, and owners',
      'Support for energy, water, materials, and indoor environmental quality',
    ],
    deliverables: [
      'LEED feasibility and target-credit matrix',
      'Evidence checklist and responsibility tracker',
      'Credit narratives and submittal preparation',
      'GBCI review-response and certification support',
    ],
    icon: 'CheckCircle2',
    badge: 'USGBC / GBCI',
    orderIndex: 5,
    createdAt: new Date(),
  },
  {
    id: 6,
    slug: 'overall-leed-facilitation',
    title: 'Building Resilience & Risk Assessment',
    shortDescription:
      'Assessment of building vulnerability and adaptation strategies for flooding, cyclones, seismic risk, heat, and utility disruption.',
    fullDescription:
      'We evaluate how buildings and essential infrastructure perform under physical climate and disaster hazards. Our resilience studies combine hazard identification, structural and operational vulnerability review, adaptation options, and continuity planning.',
    benefits: [
      'Protects occupants, operations, and critical building systems',
      'Addresses flooding, cyclones, seismic activity, heat, and service disruption',
      'Prioritizes practical, cost-effective adaptation measures',
      'Supports insurance, lender, investor, and tenant resilience requirements',
    ],
    deliverables: [
      'Multi-hazard vulnerability assessment',
      'Building Resilience Index or project-specific diagnostic',
      'Adaptation and capital-priority matrix',
      'Emergency and business-continuity recommendations',
    ],
    icon: 'Award',
    badge: 'Building Resilience',
    orderIndex: 6,
    createdAt: new Date(),
  },
];

// Verified 5 Official Projects
const VERIFIED_PROJECTS = [
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
    imageUrl: '/images/hero/hero-tower.jpg',
    gallery: [
      '/images/hero/hero-tower.jpg',
      '/images/hero/hero-residential-tower.jpg',
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
    imageUrl: '/images/hero/hero-residential-tower.jpg',
    gallery: [
      '/images/hero/hero-residential-tower.jpg',
      '/images/hero/hero-mosque.jpg',
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
    imageUrl: '/images/hero/hero-mosque.jpg',
    gallery: [
      '/images/hero/hero-mosque.jpg',
      '/images/hero/hero-tower.jpg',
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
    imageUrl: '/images/hero/hero-tower.jpg',
    gallery: [
      '/images/hero/hero-tower.jpg',
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
    imageUrl: '/images/hero/hero-mosque.jpg',
    gallery: [
      '/images/hero/hero-mosque.jpg',
      '/images/hero/hero-residential-tower.jpg',
    ],
    isFeatured: 0,
    completedYear: 2024,
    createdAt: new Date(),
  },
];

const IMAGE_PROJECTS = [
  {
    id: 6,
    slug: 'itc-tower-tejgaon',
    title: 'ITC Tower',
    client: 'ITC Tower',
    location: '213/A, Tejgaon, Dhaka',
    sector: 'Commercial Office',
    ratingAchieved: 'EDGE shown in supplied project image',
    areaSqFt: 0,
    energyReductionPct: 0,
    waterSavingsPct: 0,
    carbonOffsetMT: 0,
    summary: 'Commercial tower project in Tejgaon, Dhaka. The supplied visual identifies the building as ITC Tower and displays EDGE branding.',
    challenge: null,
    solution: null,
    imageUrl: '/images/projects/itc-tower.jpg',
    gallery: ['/images/projects/itc-tower.jpg'],
    isFeatured: 1,
    completedYear: 0,
    createdAt: new Date(),
  },
  {
    id: 7,
    slug: 'apon-office',
    title: 'Apon Office',
    client: 'Apon',
    location: 'Bangladesh',
    sector: 'Commercial Office',
    ratingAchieved: 'Office building design',
    areaSqFt: 0,
    energyReductionPct: 0,
    waterSavingsPct: 0,
    carbonOffsetMT: 0,
    summary: 'Office building design project, presented in the supplied architectural rendering.',
    challenge: null,
    solution: null,
    imageUrl: '/images/projects/apon-office.jpg',
    gallery: ['/images/projects/apon-office.jpg'],
    isFeatured: 1,
    completedYear: 0,
    createdAt: new Date(),
  },
  {
    id: 8,
    slug: 'fakir-resort-coxs-bazar',
    title: 'Fakir Resort',
    client: 'Fakir Group',
    location: "Cox's Bazar, Bangladesh",
    sector: 'Hospitality',
    ratingAchieved: 'Resort building design',
    areaSqFt: 0,
    energyReductionPct: 0,
    waterSavingsPct: 0,
    carbonOffsetMT: 0,
    summary: "Resort design in Cox's Bazar, shown in the supplied architectural visualization.",
    challenge: null,
    solution: null,
    imageUrl: '/images/projects/fakir-resort-coxs-bazar.jpg',
    gallery: ['/images/projects/fakir-resort-coxs-bazar.jpg'],
    isFeatured: 1,
    completedYear: 0,
    createdAt: new Date(),
  },
  {
    id: 9,
    slug: 'daffodil-international-university-ashulia',
    title: 'Daffodil International University',
    client: 'Daffodil International University',
    location: 'Ashulia, Bangladesh',
    sector: 'Education',
    ratingAchieved: 'EDGE shown in supplied project image',
    areaSqFt: 0,
    energyReductionPct: 0,
    waterSavingsPct: 0,
    carbonOffsetMT: 0,
    summary: 'University campus project in Ashulia. The supplied visual identifies Daffodil International University and displays EDGE branding.',
    challenge: null,
    solution: null,
    imageUrl: '/images/projects/daffodil-university.jpg',
    gallery: ['/images/projects/daffodil-university.jpg'],
    isFeatured: 1,
    completedYear: 0,
    createdAt: new Date(),
  },
  {
    id: 10,
    slug: 'habib-group-feni-factory',
    title: 'Habib Group Feni Factory',
    client: 'Habib Group',
    location: 'Feni, Bangladesh',
    sector: 'Industrial',
    ratingAchieved: 'Factory building design',
    areaSqFt: 0,
    energyReductionPct: 0,
    waterSavingsPct: 0,
    carbonOffsetMT: 0,
    summary: 'Factory building design for Habib Group in Feni, shown in the supplied architectural rendering.',
    challenge: null,
    solution: null,
    imageUrl: '/images/projects/habib-group-feni-factory.png',
    gallery: ['/images/projects/habib-group-feni-factory.png'],
    isFeatured: 1,
    completedYear: 0,
    createdAt: new Date(),
  },
  {
    id: 11,
    slug: 'simple-tree-light-house',
    title: 'Simple Tree Light House',
    client: 'Simple Tree',
    location: 'Banani, Dhaka',
    sector: 'Commercial Office',
    ratingAchieved: 'LEED Gold shown in supplied project image',
    areaSqFt: 0,
    energyReductionPct: 0,
    waterSavingsPct: 0,
    carbonOffsetMT: 0,
    summary: 'Light House building in Banani, Dhaka. The supplied visual displays a LEED Gold mark.',
    challenge: null,
    solution: null,
    imageUrl: '/images/projects/simple-tree-light-house.jpg',
    gallery: ['/images/projects/simple-tree-light-house.jpg'],
    isFeatured: 1,
    completedYear: 0,
    createdAt: new Date(),
  },
  {
    id: 12,
    slug: 'palmal-tower',
    title: 'Palmal Tower',
    client: 'Palmal Group',
    location: '55 Gulshan Avenue, Dhaka',
    sector: 'Commercial Office',
    ratingAchieved: 'LEED Gold shown in supplied project image',
    areaSqFt: 0,
    energyReductionPct: 0,
    waterSavingsPct: 0,
    carbonOffsetMT: 0,
    summary: 'Palmal Tower at 55 Gulshan Avenue, Dhaka. The supplied visual displays a LEED Gold mark.',
    challenge: null,
    solution: null,
    imageUrl: '/images/projects/palmal-tower.jpg',
    gallery: ['/images/projects/palmal-tower.jpg'],
    isFeatured: 1,
    completedYear: 0,
    createdAt: new Date(),
  },
  {
    id: 13,
    slug: 'fkl-1-factory',
    title: 'FKL-1 Factory',
    client: 'Fakir Knitwears Ltd.',
    location: 'Bangladesh',
    sector: 'Industrial RMG',
    ratingAchieved: 'Factory building design',
    areaSqFt: 0,
    energyReductionPct: 0,
    waterSavingsPct: 0,
    carbonOffsetMT: 0,
    summary: 'Factory building design identified as FKL-1 in the supplied architectural rendering.',
    challenge: null,
    solution: null,
    imageUrl: '/images/projects/fkl-1-factory.jpg',
    gallery: ['/images/projects/fkl-1-factory.jpg'],
    isFeatured: 1,
    completedYear: 0,
    createdAt: new Date(),
  },
  {
    id: 14,
    slug: 'esquire-cup-building',
    title: 'Esquire Cup Building',
    client: 'Esquire',
    location: 'Bangladesh',
    sector: 'Commercial',
    ratingAchieved: 'Building design',
    areaSqFt: 0,
    energyReductionPct: 0,
    waterSavingsPct: 0,
    carbonOffsetMT: 0,
    summary: 'Building design project identified as Esquire Cup Building in the supplied architectural rendering.',
    challenge: null,
    solution: null,
    imageUrl: '/images/projects/esquire-cup-building.jpg',
    gallery: ['/images/projects/esquire-cup-building.jpg'],
    isFeatured: 1,
    completedYear: 0,
    createdAt: new Date(),
  },
  {
    id: 15,
    slug: 'zebun-nessa-mosque',
    title: 'Zebun Nessa Mosque',
    client: 'Zebun Nessa Mosque',
    location: 'Bangladesh',
    sector: 'Religious',
    ratingAchieved: 'Mosque design',
    areaSqFt: 0,
    energyReductionPct: 0,
    waterSavingsPct: 0,
    carbonOffsetMT: 0,
    summary: 'Mosque design shown in the supplied architectural photograph.',
    challenge: null,
    solution: null,
    imageUrl: '/images/projects/zebun-nessa-mosque.jpg',
    gallery: ['/images/projects/zebun-nessa-mosque.jpg'],
    isFeatured: 1,
    completedYear: 0,
    createdAt: new Date(),
  },
];

export const OFFICIAL_PROJECTS = [...VERIFIED_PROJECTS, ...IMAGE_PROJECTS];

// Verified Clients List
export const OFFICIAL_CLIENTS = [
  { name: 'Navana Group', category: 'Conglomerate & Real Estate', logo: '/images/clients/navana-group.png' },
  { name: 'Ahsan Group', category: 'Industrial & Trade', logo: '/images/clients/ahsan.png' },
  { name: 'Wonderland Toys', category: 'Consumer Manufacturing', logo: '/images/clients/wonderlandToy.png' },
  { name: 'Palmal Group', category: 'Textiles & Apparel', logo: '/images/clients/palmal.png' },
  { name: 'J&H', category: 'Holdings & Development', logo: '/images/clients/J&h group.png' },
  { name: 'Fakir Group', category: 'Apparel & Eco Knitwear', logo: '/images/clients/fakirGroup.png' },
  { name: 'Cosmic Group', category: 'Industrial Export', logo: '/images/clients/cosmicGroup.png' },
  { name: 'Anwar Landmark', category: 'Real Estate & Development', logo: '/images/clients/anwar-landmark.png' },
  { name: 'Trikon Architects', category: 'Architecture & Design', logo: '/images/clients/trikon-architects.jpeg' },
  { name: 'Starpath Holdings Ltd.', category: 'Holdings & Development', logo: '/images/clients/starpath-holdings.jpeg' },
  { name: 'Shatotto', category: 'Architecture & Green Living', logo: '/images/clients/shatotto.jpeg' },
  { name: 'Shanta Holdings', category: 'Real Estate & Development', logo: '/images/clients/shanta-holdings.jpeg' },
  { name: 'Rahama Properties', category: 'Real Estate & Development', logo: '/images/clients/rahama-properties.png' },
  { name: 'Rangs Properties', category: 'Real Estate & Development', logo: '/images/clients/rangs-properties.png' },
  { name: 'Fakir Knitwears Ltd.', category: 'Apparel & Textiles', logo: '/images/clients/fakir-knitwears.png' },
];

// Verified Institutional Memberships
export const OFFICIAL_MEMBERSHIPS = [
  {
    acronym: 'IAB',
    name: 'Institute of Architects Bangladesh',
    badge: 'Registered Member',
    description: 'Upholding highest national standards of architectural practice and ethics.',
    logo: '/images/memberships/iab-logo.png',
  },
  {
    acronym: 'IEB',
    name: 'Institute of Engineers Bangladesh',
    badge: 'Registered Member',
    description: 'Certified multidisciplinary engineering practice and technical integrity.',
    logo: '/images/memberships/ieb-logo.png',
  },
  {
    acronym: 'RAJUK',
    name: 'Rajdhani Unnayan Kartripakkha',
    badge: 'Enlisted Firm',
    description: 'Authorized consultancy for building code approvals in metropolitan Dhaka.',
    logo: '/images/memberships/rajuk-logo.png',
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
    if (rows.length === 0) return OFFICIAL_PROJECTS;

    const existingSlugs = new Set(rows.map((project) => project.slug));
    return [
      ...IMAGE_PROJECTS.filter((project) => !existingSlugs.has(project.slug)),
      ...rows,
    ];
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
