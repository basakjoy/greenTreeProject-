import { describe, it, expect } from 'vitest';
import { getPublishedJobs, getJobBySlug } from '@/server/services/jobs';
import { getServices, getProjects, getFeaturedProjects, getTeamMembers, getClients, getMemberships } from '@/server/services/content';
import { generateReferenceId } from '@/server/services/applications';

describe('Official Content & Verified Company Services', () => {
  it('generates unique GTBC reference IDs matching format', () => {
    const ref1 = generateReferenceId();
    const ref2 = generateReferenceId();
    expect(ref1).toMatch(/^GTBC-[A-F0-9]{6}$/);
    expect(ref2).toMatch(/^GTBC-[A-F0-9]{6}$/);
    expect(ref1).not.toBe(ref2);
  });

  it('retrieves official 6 services', async () => {
    const servicesList = await getServices();
    expect(servicesList.length).toBe(6);
    expect(servicesList.some((s) => s.slug === 'edge-certification')).toBe(true);
    expect(servicesList.some((s) => s.slug === 'energy-simulation')).toBe(true);
    expect(servicesList.some((s) => s.slug === 'daylight-simulation')).toBe(true);
    expect(servicesList.some((s) => s.slug === 'tender-design-documents-review')).toBe(true);
    expect(servicesList.some((s) => s.slug === 'leed-commissioning')).toBe(true);
    expect(servicesList.some((s) => s.slug === 'overall-leed-facilitation')).toBe(true);
  });

  it('retrieves official 5 client projects including Wonderland Toy and Fakir Eco Knitwear', async () => {
    const projectsList = await getProjects();
    expect(projectsList.length).toBe(5);
    expect(projectsList.some((p) => p.slug === 'wonderland-toy')).toBe(true);
    expect(projectsList.some((p) => p.slug === 'fakir-eco-knitwear')).toBe(true);
    expect(projectsList.some((p) => p.slug === 'mansion-d-salam')).toBe(true);
  });

  it('retrieves clients and official memberships (IAB, IEB, RAJUK)', async () => {
    const clients = await getClients();
    expect(clients.length).toBe(7);
    expect(clients.some((c) => c.name === 'Navana Group')).toBe(true);
    expect(clients.some((c) => c.name === 'Ahsan Group')).toBe(true);

    const memberships = await getMemberships();
    expect(memberships.length).toBe(3);
    expect(memberships.some((m) => m.acronym === 'IAB')).toBe(true);
    expect(memberships.some((m) => m.acronym === 'IEB')).toBe(true);
    expect(memberships.some((m) => m.acronym === 'RAJUK')).toBe(true);
  });
});
