import { describe, it, expect } from 'vitest';
import { slugify, formatCurrency, formatNumber } from '@/lib/utils';

describe('Core Utilities', () => {
  it('correctly creates SEO-friendly slugs', () => {
    expect(slugify('LEED Platinum Advisory & Certification!')).toBe(
      'leed-platinum-advisory-certification'
    );
    expect(slugify('  Computational Façade Engineering -- 2025  ')).toBe(
      'computational-facade-engineering-2025'
    );
  });

  it('formats currency and numbers cleanly', () => {
    expect(formatCurrency(88400)).toContain('88,400');
    expect(formatNumber(18000000)).toBe('18,000,000');
  });
});
