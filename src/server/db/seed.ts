import { db } from './client';
import {
  adminUsers,
  jobs,
  services,
  projects,
  teamMembers,
  testimonials,
  articles,
  leads,
} from './schema';
import { hash } from '@node-rs/argon2';

export async function seed() {
  console.log('🌱 Starting database seed...');

  // 1. Admin User
  const defaultPasswordHash = await hash('AdminGreenTree2025!', {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });

  await db
    .insert(adminUsers)
    .values([
      {
        email: 'admin@greentreebd.com',
        passwordHash: defaultPasswordHash,
        name: 'Rubana Nasrin',
        role: 'admin',
      },
      {
        email: 'hr@greentreebd.com',
        passwordHash: defaultPasswordHash,
        name: 'Tanvir Hossain',
        role: 'hr',
      },
    ])
    .onConflictDoNothing();

  // 2. Services
  await db
    .insert(services)
    .values([
      {
        slug: 'leed-advisory',
        title: 'LEED Advisory & Certification',
        shortDescription:
          'Comprehensive pathways for LEED BD+C, ID+C, and O+M targeting Gold and Platinum ratings for industrial RMG and commercial developments.',
        fullDescription:
          'GreenTree provides full lifecycle LEED consultancy from early design charettes through commissioning and final GBCI audit submission. Our team has certified over 120 LEED Platinum and Gold facilities across Bangladesh with a 100% audit approval track record.',
        benefits: [
          'Guaranteed GBCI audit readiness with zero non-conformances',
          'Average 35-50% energy cost reduction through passive design and efficient HVAC',
          'Unlocks international buyer sustainability compliance for export factories',
          'Qualifies for Bangladesh Bank Green Transformation Fund (GTF) low-interest loans',
        ],
        deliverables: [
          'Pre-assessment feasibility report with targeted credit scoring matrix',
          'Whole-building energy modeling in accordance with ASHRAE 90.1 Appendix G',
          'Indoor environmental quality and daylight simulation reports',
          'Continuous contractor submittal review and commissioning verification',
        ],
        icon: 'Award',
        badge: 'USGBC Accredited',
        orderIndex: 1,
      },
      {
        slug: 'edge-zero-carbon',
        title: 'EDGE & EDGE Zero Carbon',
        shortDescription:
          'IFC World Bank standard certification prioritizing 20%+ resource efficiency in Energy, Water, and Embodied Energy in Materials.',
        fullDescription:
          'EDGE (Excellence in Design for Greater Efficiencies) empowers developers to quickly assess cost-effective green options. We specialize in EDGE Advanced and EDGE Zero Carbon verification for high-density housing and logistics facilities.',
        benefits: [
          'Fast-track IFC certification recognized globally by investors',
          'Low upfront engineering cost with verified operational savings',
          'Eligible for preferential green mortgage margins from partner banks',
        ],
        deliverables: [
          'EDGE App online model calibration and certificate dossier preparation',
          'On-site verification audit during construction and post-occupancy',
          'Embodied energy material substitution analysis',
        ],
        icon: 'ShieldCheck',
        badge: 'IFC Partner',
        orderIndex: 2,
      },
      {
        slug: 'beer-rating',
        title: 'BEER Green Building Rating',
        shortDescription:
          'Bangladesh Energy and Environmental Rating (BEER) tailored to local subtropical climate zones, monsoon hydrology, and national building codes.',
        fullDescription:
          'The BEER Rating standard provides localized green benchmarking engineered explicitly for the climatic nuances of Bangladesh. It harmonizes with BNBC (Bangladesh National Building Code) while optimizing rainwater harvesting and natural cross-ventilation.',
        benefits: [
          'Direct alignment with SREDA and RAJUK statutory green guidelines',
          'Cost-optimized for local construction supply chains and brick manufacturing',
          'Prioritizes flood resilience and storm surge attenuation',
        ],
        deliverables: [
          'Local climatic thermal envelope calculation',
          'Rainwater harvesting capacity and drainage modeling',
          'Local materials provenance and low-VOC verification report',
        ],
        icon: 'Building2',
        badge: 'National Standard',
        orderIndex: 3,
      },
      {
        slug: 'microclimate-facade',
        title: 'Microclimate Façade Engineering',
        shortDescription:
          'Computational fluid dynamics (CFD) and solar radiation mapping to eliminate urban heat islands and reduce cooling loads by up to 45%.',
        fullDescription:
          'Using advanced computational physics, our envelope specialists engineer perforated shading systems, double-skin façades, and natural wind channels that adapt to Dhaka and Chattogram microclimates.',
        benefits: [
          'Drastic reduction in peak chiller plant sizing and capital expenditure',
          'Optimal glare-free visual daylight penetration',
          'Mitigates exterior wind gust vortexes around high-rise podiums',
        ],
        deliverables: [
          'High-resolution CFD wind tunnel simulations',
          'Annual sunlight exposure (ASE) and spatial daylight autonomy (sDA) maps',
          'Kinetic and parametric louvre angle schedules',
        ],
        icon: 'Wind',
        badge: 'Proprietary CFD',
        orderIndex: 4,
      },
      {
        slug: 'life-cycle-assessment',
        title: 'Life Cycle Assessment (LCA) & Embodied Carbon',
        shortDescription:
          'Cradle-to-grave embodied carbon accounting (EN 15978 / ISO 14040) targeting net-zero structural systems and low-carbon cement replacement.',
        fullDescription:
          'We quantify the environmental footprint of your building materials across Modules A1-C4. Our assessments identify exact opportunities to replace Portland cement with blast furnace slag and fly ash, reducing structural carbon by up to 40%.',
        benefits: [
          'Directly answers Scope 3 emissions reporting requirements for multinational tenants',
          'Earns maximum Exemplary Performance credits in LEED MRc1',
          'Provides verified Environmental Product Declaration (EPD) guidance',
        ],
        deliverables: [
          'Whole Building Life Cycle Assessment report compliant with ISO 21930',
          'Comparative baseline vs proposed embodied carbon balance sheet',
          'Procurement optimization guide for green steel and low-carbon concrete',
        ],
        icon: 'Leaf',
        badge: 'ISO 14040 Compliant',
        orderIndex: 5,
      },
      {
        slug: 'building-resilience',
        title: 'Building Resilience Index (BRI)',
        shortDescription:
          'Hazard vulnerability assessment and adaptation engineering against cyclones, flash flooding, seismic events, and rising water tables.',
        fullDescription:
          'Developed with international disaster risk protocols, our resilience audits prepare critical manufacturing assets and coastal infrastructure to withstand extreme 100-year weather events without catastrophic downtime.',
        benefits: [
          'Protects multimillion-dollar supply chain continuity for export manufacturers',
          'Reduces commercial property insurance premiums',
          'Ensures off-grid survivability with emergency solar-microgrids',
        ],
        deliverables: [
          'Multi-hazard vulnerability diagnostic matrix',
          'Flood inundation mitigation and backflow prevention schematics',
          'Emergency power & potable water autonomy strategy',
        ],
        icon: 'Shield',
        badge: 'Disaster Resilient',
        orderIndex: 6,
      },
    ])
    .onConflictDoNothing();

  // 3. Projects
  await db
    .insert(projects)
    .values([
      {
        slug: 'ecoverde-apparel-hub',
        title: 'EcoVerde Apparel Eco-Park',
        client: 'EcoVerde Holdings Ltd.',
        location: 'Gazipur, Bangladesh',
        sector: 'Industrial RMG',
        ratingAchieved: 'LEED Platinum (94 Points)',
        areaSqFt: 380000,
        energyReductionPct: 52,
        waterSavingsPct: 65,
        carbonOffsetMT: 1420,
        summary:
          'South Asia’s highest scoring net-zero ready RMG manufacturing complex, featuring rooftop biophilic greenery and full greywater closed-loop recycling.',
        challenge:
          'The client needed a massive 380,000 sq ft industrial weaving and sewing facility that could comply with strict European zero-carbon import standards while reducing immense summer cooling loads.',
        solution:
          'GreenTree engineered a passive microclimate louvre façade, installed a 1.8 MW rooftop solar PV system, and integrated radiant cooling slabs that slashed peak HVAC tonnage by 44%.',
        imageUrl:
          'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80',
        isFeatured: 1,
        completedYear: 2024,
      },
      {
        slug: 'gulshan-biophilic-tower',
        title: 'Green Horizon Commercial Tower',
        client: 'Green Horizon Properties',
        location: 'Gulshan-2, Dhaka',
        sector: 'Commercial Office',
        ratingAchieved: 'LEED Platinum (89 Points)',
        areaSqFt: 210000,
        energyReductionPct: 46,
        waterSavingsPct: 50,
        carbonOffsetMT: 890,
        summary:
          'A 24-story Grade-A sustainable corporate tower in Dhaka with vertical microclimate gardens, high-performance low-E double glazing, and smart building energy management.',
        challenge:
          'Intense solar heat gain on the western and southern elevations created extreme thermal discomfort and oversized central chilled water systems.',
        solution:
          'We deployed algorithmic solar tracking louvres paired with high-performance insulated curtain walls and a 100,000-liter rainwater filtration reservoir.',
        imageUrl:
          'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
        isFeatured: 1,
        completedYear: 2023,
      },
      {
        slug: 'meghna-logistics-park',
        title: 'Meghna Zero-Carbon Distribution Terminal',
        client: 'Meghna Supply Chain Solutions',
        location: 'Narayanganj, Bangladesh',
        sector: 'Logistics/Hub',
        ratingAchieved: 'EDGE Zero Carbon',
        areaSqFt: 450000,
        energyReductionPct: 58,
        waterSavingsPct: 40,
        carbonOffsetMT: 2100,
        summary:
          'The first certified EDGE Zero Carbon logistics center in Bangladesh, powered by a 2.4 MW distributed solar array and natural high-volume ventilation.',
        challenge:
          'Handling large round-the-clock freight operations with heavy electrical requirements for automated cold storage while achieving true operational net-zero.',
        solution:
          'Designed high-efficiency CO2 refrigeration, super-insulated ceiling sandwiches, and high-efficiency induction LED lighting integrated with real-time BMS power monitoring.',
        imageUrl:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
        isFeatured: 0,
        completedYear: 2024,
      },
      {
        slug: 'shitalakhya-textile-campus',
        title: 'Shitalakhya Circular Denim Campus',
        client: 'Bengal Denim Industries Ltd.',
        location: 'Narsingdi, Bangladesh',
        sector: 'Industrial RMG',
        ratingAchieved: 'LEED Gold (74 Points)',
        areaSqFt: 290000,
        energyReductionPct: 41,
        waterSavingsPct: 78,
        carbonOffsetMT: 1100,
        summary:
          'A sustainable denim processing complex with zero liquid discharge (ZLD) effluent treatment and natural daylight harvesting across 92% of the factory floor.',
        challenge:
          'Water intensive dyeing operations with heavy process heat emissions needed aggressive conservation to mitigate regional groundwater depletion.',
        solution:
          'Implemented heat-recovery steam generators and a cutting-edge membrane bio-reactor ZLD plant allowing 80% recycled process water reuse.',
        imageUrl:
          'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
        isFeatured: 0,
        completedYear: 2023,
      },
      {
        slug: 'chattogram-port-cold-chain',
        title: 'Chattogram Maritime Climate-Resilient Hub',
        client: 'Bay Agro Logistics',
        location: 'Chattogram Port, Bangladesh',
        sector: 'Logistics/Hub',
        ratingAchieved: 'Building Resilience Index (Category A)',
        areaSqFt: 175000,
        energyReductionPct: 38,
        waterSavingsPct: 35,
        carbonOffsetMT: 650,
        summary:
          'Coastal cold-chain facility elevated above Category 5 storm surge projections with integrated microgrid battery storage for uninterrupted preservation.',
        challenge:
          'High cyclone risk, storm surge flooding, and severe saline corrosion from maritime exposure.',
        solution:
          'Constructed with marine-grade cathodic protected concrete, storm barriers, and elevated electrical substations 3.5 meters above maximum high tide line.',
        imageUrl:
          'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
        isFeatured: 0,
        completedYear: 2024,
      },
      {
        slug: 'baridhara-passive-residences',
        title: 'Baridhara Eco-Diplomatic Residences',
        client: 'Apex Living Ltd.',
        location: 'Baridhara DOHS, Dhaka',
        sector: 'Residential',
        ratingAchieved: 'EDGE Advanced',
        areaSqFt: 85000,
        energyReductionPct: 42,
        waterSavingsPct: 48,
        carbonOffsetMT: 310,
        summary:
          'Low-carbon residential development combining vernacular terracotta screen tiles with high-efficiency variable refrigerant flow (VRF) air conditioning.',
        challenge:
          'Dense urban residential footprint requiring pristine privacy while maximizing natural cross ventilation in humid monsoon seasons.',
        solution:
          'Engineered custom extruded terracotta jali screens that deflect direct tropical solar radiation while inducing continuous natural chimney updrafts.',
        imageUrl:
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        isFeatured: 0,
        completedYear: 2022,
      },
    ])
    .onConflictDoNothing();

  // 4. Team Members
  await db
    .insert(teamMembers)
    .values([
      {
        name: 'Rubana Nasrin',
        role: 'Chief Executive Officer & Founder',
        credential: 'LEED AP BD+C, Sustainable Masterplanning Fellow',
        bio: 'Visionary leadership behind South Asia’s highest scoring green building certifications. Rubana directs firm strategy, institutional stakeholder alignment, and Bangladesh Bank GTF green financing partnerships.',
        avatarUrl: '/images/team/rubana-nasrin-ceo.jpg',
        linkedinUrl: 'https://linkedin.com/in/rubana-nasrin-greentree',
        orderIndex: 1,
      },
      {
        name: 'Dr. Tariqul Islam',
        role: 'Head of Building Physics & CFD Simulation',
        credential: 'Ph.D. Aerodynamics, LEED AP BD+C, ASHRAE Member',
        bio: 'Former senior computational scientist specializing in urban microclimates, high-rise wind engineering, and daylight optimization algorithms.',
        avatarUrl:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        linkedinUrl: 'https://linkedin.com/in/dr-tariqul-islam',
        orderIndex: 2,
      },
      {
        name: 'Kamal Uddin Ahmed',
        role: 'Lead Energy Modeler & Commissioning Engineer',
        credential: 'B.Sc. Mechanical Engineering, BEMP, CEM',
        bio: 'Specialist in EnergyPlus, eQuest, and dynamic HVAC simulation with over 10 million square feet of certified energy modeling under ASHRAE standards.',
        avatarUrl:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        linkedinUrl: 'https://linkedin.com/in/kamal-uddin-ahmed',
        orderIndex: 3,
      },
      {
        name: 'Nusrat Jahan',
        role: 'Senior LCA Specialist & Circular Materials Lead',
        credential: 'M.Sc. Environmental Engineering, EDGE Expert',
        bio: 'Directs whole-building embodied carbon assessments, environmental product declarations (EPDs), and low-carbon cement optimization for major infrastructure.',
        avatarUrl:
          'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
        linkedinUrl: 'https://linkedin.com/in/nusrat-jahan-lca',
        orderIndex: 4,
      },
    ])
    .onConflictDoNothing();

  // 5. Testimonials
  await db
    .insert(testimonials)
    .values([
      {
        clientName: 'Mustafizur Rahman',
        clientTitle: 'Managing Director',
        company: 'EcoVerde Holdings Ltd.',
        rating: 5,
        content:
          'GreenTree guided our 380,000 sq ft manufacturing park to achieve LEED Platinum with 94 points—the highest ever scored in our industrial cluster. Their microclimate modeling cut our initial HVAC capital expenditure by 30%, and energy savings have exceeded every projection.',
        projectRef: 'EcoVerde Apparel Eco-Park',
        orderIndex: 1,
      },
      {
        clientName: 'Sabrina Chowdhury',
        clientTitle: 'Chief Operating Officer',
        company: 'Green Horizon Commercial Tower',
        rating: 5,
        content:
          'As institutional developers, tenant comfort and operational efficiency are everything. GreenTree’s façade engineering eliminated glare and hot spots on our western tower glass, reducing chiller loads by 46% while securing multinational premium tenants.',
        projectRef: 'Green Horizon Commercial Tower',
        orderIndex: 2,
      },
      {
        clientName: 'Engr. Shamsul Alam',
        clientTitle: 'Director of Engineering',
        company: 'Meghna Supply Chain Solutions',
        rating: 5,
        content:
          'Achieving EDGE Zero Carbon for our Narayanganj distribution facility looked impossible given our round-the-clock cold storage loads. GreenTree designed an integrated solar microgrid and refrigeration recovery system that met every audit milestone on first pass.',
        projectRef: 'Meghna Zero-Carbon Distribution Terminal',
        orderIndex: 3,
      },
    ])
    .onConflictDoNothing();

  // 6. Articles / Insights
  await db
    .insert(articles)
    .values([
      {
        slug: 'rmg-decarbonization-eu-cbam-preparedness',
        title: 'Navigating EU CBAM: How Bangladesh RMG Factories Can Leverage LEED for Zero-Carbon Export Security',
        excerpt:
          'With the European Union Carbon Border Adjustment Mechanism (CBAM) coming into enforcement, discover why LEED Platinum and LCA embodied carbon disclosures are critical for garment exporters.',
        content: `
# Navigating EU CBAM: How Bangladesh RMG Factories Can Leverage LEED for Zero-Carbon Export Security

As international climate regulations tighten, the European Union's Carbon Border Adjustment Mechanism (CBAM) and Corporate Sustainability Due Diligence Directive (CSDDD) are redefining global trade relationships. For Bangladesh's ready-made garment (RMG) sector—which supplies over 60% of its apparel exports to European markets—the net-zero transition has shifted from corporate responsibility to an existential commercial imperative.

## The Scope 1, 2, and 3 Accounting Mandate

Historically, export buyers assessed factory compliance through social compliance audits and basic fire safety benchmarks. Today, procurement officers at leading European fashion conglomerates are evaluating carbon intensity per garment produced:

1. **Direct Combustion (Scope 1):** Gas-fired steam boilers, diesel generators, and process heating.
2. **Purchased Electricity (Scope 2):** Grid carbon factors and rooftop solar PV substitution.
3. **Embodied Carbon (Scope 3):** Cradle-to-factory-gate emissions of fabric, dyes, cement, and factory structural steel.

## Why LEED Platinum Provides the Universal Safeguard

Buildings engineered under LEED BD+C v4 and v4.1 Platinum standards demonstrate an independently verified baseline of at least 35% to 50% operational energy reduction against ASHRAE 90.1 baselines. More importantly, third-party certification by GBCI provides an unassailable audit trail that European customs authorities and brand verifiers accept without reservation.

## Strategic Interventions for Factory Owners

- **Shift to High-Temperature Heat Pumps:** Eliminating low-efficiency steam boilers in textile washing stages.
- **Rooftop Solar PV PPA Agreements:** Capitalizing on vast industrial roof spans to generate 30-50% on-site renewable power.
- **Whole-Building Life Cycle Assessments (LCA):** Documenting embodied carbon savings to unlock Bangladesh Bank Green Transformation Fund (GTF) financing at sub-3% interest rates.
        `,
        category: 'Policy & Decarbonization',
        author: 'Fatima Rahman, LEED Fellow',
        readTimeMinutes: 7,
        imageUrl:
          'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80',
      },
      {
        slug: 'microclimate-facade-design-tropical-skylines',
        title: 'Computational Façade Physics: Mitigating Solar Heat Gain in High-Rise Urban Dhaka',
        excerpt:
          'How algorithmic louvre angles, double-skin envelopes, and local clay jali screens drastically lower peak chiller sizing in dense South Asian urban centers.',
        content: `
# Computational Façade Physics: Mitigating Solar Heat Gain in High-Rise Urban Dhaka

Dhaka sits in a hot and humid subtropical climate characterized by intense diffuse solar radiation, monsoon deluge, and prolonged summer peak temperatures. Traditional glass curtain-wall towers built over the last two decades have created internal micro-greenhouses, requiring oversized chillers running at maximum capacity.

## The Cost of Architectural Mimicry

Importing glazed curtain wall designs from temperate North American or European contexts without climate adaptation results in three critical failures:

- **Excessive Solar Heat Gain Coefficient (SHGC):** Afternoon western exposure generates radiant heat exceeding 750 W/m².
- **Acoustic and Thermal Discomfort:** Extreme temperature swings near window perimeters force internal blinds down, causing occupants to turn on artificial lighting during peak daylight hours.
- **Urban Heat Island Exacerbation:** Reflected heat warms surrounding pedestrian zones by up to 4°C.

## The Computational Solution: Dynamic Shading & CFD Modeling

GreenTree's façade engineering methodology integrates solar vector tracking directly with computational fluid dynamics (CFD). By orienting kinetic shading louvres and calculating spatial daylight autonomy (sDA), we achieve optimal internal illuminance (300-500 lux) while blocking over 85% of direct solar infrared heat.
        `,
        category: 'Façade Physics',
        author: 'Dr. Tariqul Islam',
        readTimeMinutes: 6,
        imageUrl:
          'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      },
      {
        slug: 'green-financing-bangladesh-bank-gtf-guide',
        title: 'Unlocking Bangladesh Bank Green Transformation Fund (GTF): Low-Cost Capital for Sustainable Facilities',
        excerpt:
          'A comprehensive financial breakdown of how LEED and EDGE certifications qualify industrial owners for USD and EUR concessional financing margins.',
        content: `
# Unlocking Bangladesh Bank Green Transformation Fund (GTF): Low-Cost Capital for Sustainable Facilities

Access to capital is the lifeblood of industrial expansion. Under Bangladesh Bank’s Green Transformation Fund (GTF) and refinancing schemes for environment-friendly initiatives, developers investing in energy efficiency, renewable power, and water conservation can access debt financing at significantly reduced interest margins.

## Key Eligibility Criteria

1. **Certified Green Standard:** Projects holding verified LEED Gold/Platinum or EDGE certifications receive priority appraisal.
2. **Energy Performance Threshold:** Minimum 20% energy savings verified through certified building energy simulation (eQuest / EnergyPlus).
3. **Effluent and Water Recycling:** Implementation of Zero Liquid Discharge (ZLD) or advanced biological water recycling systems.

## The ROI Equation

By combining a 1.25% to 1.75% lower debt interest margin with a 40% reduction in annual utility expenditure, most GreenTree-engineered facilities achieve full capital cost amortization within 3.2 to 4.5 years.
        `,
        category: 'Green Finance',
        author: 'Kamal Uddin Ahmed',
        readTimeMinutes: 5,
        imageUrl:
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      },
    ])
    .onConflictDoNothing();

  // 7. Sample Jobs (5 Realistic Positions per Spec)
  await db
    .insert(jobs)
    .values([
      {
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
        status: 'published',
        postedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7), // 7 days ago
        closesAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30), // in 30 days
      },
      {
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
        status: 'published',
        postedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 12),
        closesAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 25),
      },
      {
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
        status: 'published',
        postedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
        closesAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 40),
      },
      {
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
        status: 'published',
        postedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5),
        closesAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 35),
      },
      {
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
        status: 'published',
        postedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
        closesAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 45),
      },
    ])
    .onConflictDoNothing();

  // 8. Sample Leads
  await db
    .insert(leads)
    .values([
      {
        name: 'Tanzim Ahmed',
        email: 'tanzim@apparelgroupbd.com',
        phone: '+880 1819 112233',
        message:
          'We are planning a new 220,000 sq ft green spinning unit in Gazipur and wish to evaluate LEED Platinum feasibility and Bangladesh Bank GTF financing.',
        source: 'contact',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12),
      },
      {
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
    ])
    .onConflictDoNothing();

  console.log('✅ Database seed completed successfully!');
}

// Execute if run directly
if (import.meta.url.endsWith(process.argv[1]) || process.argv[1]?.includes('seed')) {
  seed()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error('❌ Database seed failed:', err);
      process.exit(1);
    });
}
