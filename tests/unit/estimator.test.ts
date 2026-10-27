import { describe, it, expect } from 'vitest';
import { calculateEstimatorMetrics } from '@/lib/estimator';

describe('Green Building Feasibility & ROI Estimator Formulas', () => {
  it('correctly calculates savings for an 85,000 sq ft Industrial RMG facility targeting LEED Platinum', () => {
    const results = calculateEstimatorMetrics({
      grossFloorArea: 85000,
      primaryUse: 'Industrial RMG',
      targetTier: 'LEED Platinum',
    });

    // 85,000 * 24.5 = 2,082,500 kWh baseline
    // 46% savings = 957,950 kWh
    // Tariff $0.11/kWh = $105,375
    // Carbon = 957,950 * 0.00058 = ~556 MT CO2e
    // Margin drop = 1.25%
    expect(results.annualEnergySavingsUsd).toBeGreaterThan(90000);
    expect(results.carbonAbatementMtPerYear).toBeGreaterThan(400);
    expect(results.greenFinancingMarginDropPct).toBe(1.25);
  });

  it('handles lower bound 5,000 sq ft and upper bound 500,000 sq ft gracefully', () => {
    const minResults = calculateEstimatorMetrics({
      grossFloorArea: 1000, // below 5000 minimum
      primaryUse: 'Commercial',
      targetTier: 'LEED Gold',
    });
    expect(minMinExpected(minResults.annualEnergySavingsUsd)).toBe(true);

    const maxResults = calculateEstimatorMetrics({
      grossFloorArea: 1000000, // above 500,000 max
      primaryUse: 'Industrial RMG',
      targetTier: 'EDGE Zero Carbon',
    });
    expect(maxResults.greenFinancingMarginDropPct).toBe(1.5);
  });

  function minMinExpected(val: number) {
    return val > 0;
  }
});
