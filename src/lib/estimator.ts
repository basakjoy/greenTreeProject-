/**
 * GreenTree Building Consultants (GTBC) - Feasibility & ROI Estimator Formulas
 * Pure, unit-tested functions for client-side and server-side calculations.
 */

export type PrimaryBuildingUse = 'Industrial RMG' | 'Commercial' | 'Residential' | 'Logistics/Hub';

export type TargetRatingTier = 'LEED Platinum' | 'LEED Gold' | 'EDGE Zero Carbon';

export interface EstimatorInputs {
  grossFloorArea: number; // in sq ft, 5,000 to 500,000
  primaryUse: PrimaryBuildingUse;
  targetTier: TargetRatingTier;
  city?: string;
  email?: string;
}

export interface EstimatorResults {
  annualEnergySavingsUsd: number;
  carbonAbatementMtPerYear: number;
  greenFinancingMarginDropPct: number;
  annualEnergyReductionKwh: number;
}

// Energy Intensity Benchmarks in Bangladesh (kWh per sq ft per year)
export const ENERGY_INTENSITY_BASELINE_KWH_PER_SQFT: Record<PrimaryBuildingUse, number> = {
  'Industrial RMG': 24.5,
  'Commercial': 18.2,
  'Residential': 11.5,
  'Logistics/Hub': 15.8,
};

// Average Commercial/Industrial Electricity Tariff in Bangladesh (USD / kWh)
// BDT 11.5 - 13.5 per kWh ~= $0.105 - $0.12 USD
export const ELECTRICITY_TARIFF_USD_PER_KWH: Record<PrimaryBuildingUse, number> = {
  'Industrial RMG': 0.11,
  'Commercial': 0.125,
  'Residential': 0.095,
  'Logistics/Hub': 0.115,
};

// Verified Percentage Energy Reduction by Rating Tier
export const RATING_TIER_ENERGY_SAVINGS_PCT: Record<TargetRatingTier, number> = {
  'LEED Platinum': 0.46, // 46% energy reduction
  'LEED Gold': 0.35,     // 35% energy reduction
  'EDGE Zero Carbon': 0.55, // 55% energy reduction
};

// Bangladesh Bank Green Transformation Fund (GTF) & Commercial Margin Reductions
export const GREEN_FINANCING_MARGIN_DROP_PCT: Record<TargetRatingTier, number> = {
  'LEED Platinum': 1.25, // 125 bps interest margin reduction
  'LEED Gold': 1.00,     // 100 bps reduction
  'EDGE Zero Carbon': 1.50, // 150 bps reduction
};

// Grid Carbon Emission Factor for Bangladesh (MT CO2e per kWh)
// ~ 0.58 kg CO2e / kWh = 0.00058 MT CO2e / kWh
export const BANGLADESH_GRID_EMISSION_FACTOR_MT_PER_KWH = 0.00058;

/**
 * Calculates building decarbonization and financial ROI metrics.
 */
export function calculateEstimatorMetrics(inputs: {
  grossFloorArea: number;
  primaryUse: PrimaryBuildingUse;
  targetTier: TargetRatingTier;
}): EstimatorResults {
  // Clamp GFA to reasonable bounds
  const gfa = Math.max(5000, Math.min(500000, inputs.grossFloorArea));

  const baselineIntensity =
    ENERGY_INTENSITY_BASELINE_KWH_PER_SQFT[inputs.primaryUse] ||
    ENERGY_INTENSITY_BASELINE_KWH_PER_SQFT['Industrial RMG'];

  const tariff =
    ELECTRICITY_TARIFF_USD_PER_KWH[inputs.primaryUse] ||
    ELECTRICITY_TARIFF_USD_PER_KWH['Industrial RMG'];

  const reductionPct =
    RATING_TIER_ENERGY_SAVINGS_PCT[inputs.targetTier] ||
    RATING_TIER_ENERGY_SAVINGS_PCT['LEED Platinum'];

  const marginDrop =
    GREEN_FINANCING_MARGIN_DROP_PCT[inputs.targetTier] ||
    GREEN_FINANCING_MARGIN_DROP_PCT['LEED Platinum'];

  // Total baseline annual consumption (kWh)
  const totalBaselineKwh = gfa * baselineIntensity;

  // Annual energy reduction (kWh)
  const annualEnergyReductionKwh = totalBaselineKwh * reductionPct;

  // Annual energy cost savings (USD)
  const annualEnergySavingsUsd = Math.round(annualEnergyReductionKwh * tariff);

  // Carbon abatement (MT CO2e / yr)
  const carbonAbatementMtPerYear = Math.round(
    annualEnergyReductionKwh * BANGLADESH_GRID_EMISSION_FACTOR_MT_PER_KWH
  );

  return {
    annualEnergySavingsUsd,
    carbonAbatementMtPerYear,
    greenFinancingMarginDropPct: marginDrop,
    annualEnergyReductionKwh: Math.round(annualEnergyReductionKwh),
  };
}
