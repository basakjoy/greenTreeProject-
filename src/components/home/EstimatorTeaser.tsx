'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  calculateEstimatorMetrics,
  PrimaryBuildingUse,
  TargetRatingTier,
} from '@/lib/estimator';
import { formatCurrency, formatNumber } from '@/lib/utils';
import { ArrowUpRight, Calculator, Sparkles, TrendingDown, Leaf, DollarSign } from 'lucide-react';

const buildingTypes: PrimaryBuildingUse[] = [
  'Industrial RMG',
  'Commercial',
  'Residential',
  'Logistics/Hub',
];

const ratingTiers: TargetRatingTier[] = [
  'LEED Platinum',
  'LEED Gold',
  'EDGE Zero Carbon',
];

export function EstimatorTeaser() {
  const [gfa, setGfa] = useState<number>(85000);
  const [buildingType, setBuildingType] = useState<PrimaryBuildingUse>('Industrial RMG');
  const [tier, setTier] = useState<TargetRatingTier>('LEED Platinum');

  const results = useMemo(() => {
    return calculateEstimatorMetrics({
      grossFloorArea: gfa,
      primaryUse: buildingType,
      targetTier: tier,
    });
  }, [gfa, buildingType, tier]);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl sm:rounded-4xl p-6 sm:p-10 lg:p-14 border border-forest-100 shadow-lift">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-50 border border-forest-100 text-xs font-bold text-eco mb-3 uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-forest-950 tracking-tight">
            Green Building Feasibility & ROI Estimator
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 font-medium">
            Instant decarbonization estimates, operational utility reductions, and Bangladesh Bank GTF financing margin discounts.
          </p>
        </div>

        {/* 2-Column Estimator Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. GFA Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="home-gfa-slider" className="text-xs sm:text-sm font-bold text-forest-950 uppercase tracking-wide">
                  Gross Floor Area (GFA)
                </label>
                <div className="px-3 py-1 rounded-full bg-forest-50 border border-forest-200 text-xs sm:text-sm font-extrabold text-forest-900">
                  {formatNumber(gfa)} sq ft
                </div>
              </div>
              <input
                id="home-gfa-slider"
                type="range"
                min={5000}
                max={500000}
                step={5000}
                value={gfa}
                onChange={(e) => setGfa(Number(e.target.value))}
                aria-label="Gross Floor Area in square feet"
                className="w-full h-2.5 bg-forest-100 rounded-lg appearance-none cursor-pointer accent-eco"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1.5 font-medium">
                <span>5,000 sq ft</span>
                <span>250,000 sq ft</span>
                <span>500,000 sq ft</span>
              </div>
            </div>

            {/* 2. Primary Building Use */}
            <div>
              <span className="block text-xs sm:text-sm font-bold text-forest-950 uppercase tracking-wide mb-2.5">
                Primary Building Use
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {buildingTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setBuildingType(type)}
                    className={`py-2 px-3 rounded-2xl text-xs font-bold transition-all border ${
                      buildingType === type
                        ? 'bg-forest-950 text-white border-forest-950 shadow-sm'
                        : 'bg-sand-50 text-gray-700 border-forest-100 hover:border-forest-300'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Target Rating Tier */}
            <div>
              <span className="block text-xs sm:text-sm font-bold text-forest-950 uppercase tracking-wide mb-2.5">
                Target Rating Tier
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {ratingTiers.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTier(t)}
                    className={`py-2.5 px-3 rounded-2xl text-xs font-bold transition-all border flex items-center justify-center gap-1.5 ${
                      tier === t
                        ? 'bg-eco text-forest-950 border-eco font-extrabold shadow-glow'
                        : 'bg-sand-50 text-gray-700 border-forest-100 hover:border-forest-300'
                    }`}
                  >
                    <span>{t}</span>
                  </button>
                ))}
              </div>
            </div>

            <p className="text-xs text-gray-500 pt-2">
              *Calculations are calibrated against ASHRAE 90.1 energy modeling benchmarks and current Bangladesh commercial tariffs.
            </p>
          </div>

          {/* Right Column: Live Calculated Results Card */}
          <div className="lg:col-span-5 bg-sand-50 rounded-3xl p-6 sm:p-8 border border-forest-200 shadow-lift flex flex-col justify-between">
            <div className="flex items-center justify-between gap-2 pb-4 border-b border-forest-100 mb-6">
              <span className="text-xs font-bold text-forest-950 uppercase tracking-wider">
                Projected Annual Feasibility
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-eco/20 text-eco border border-eco/30">
                <Sparkles className="w-3 h-3" />
                Live Output
              </span>
            </div>

            <div className="space-y-5">
              {/* Metric 1 */}
              <div className="p-4 rounded-2xl bg-white border border-forest-100 shadow-subtle">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                  <DollarSign className="w-4 h-4 text-eco" />
                  <span>Est. Annual Energy Savings</span>
                </div>
                <div className="font-display font-black text-2xl sm:text-3xl text-forest-950 mt-1">
                  {formatCurrency(results.annualEnergySavingsUsd)}
                  <span className="text-xs font-semibold text-gray-500"> / year</span>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="p-4 rounded-2xl bg-white border border-forest-100 shadow-subtle">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                  <Leaf className="w-4 h-4 text-eco" />
                  <span>Carbon Abatement</span>
                </div>
                <div className="font-display font-black text-2xl sm:text-3xl text-forest-950 mt-1">
                  {formatNumber(results.carbonAbatementMtPerYear)}
                  <span className="text-xs font-semibold text-gray-500"> MT CO2e / yr</span>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="p-4 rounded-2xl bg-white border border-forest-100 shadow-subtle">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                  <TrendingDown className="w-4 h-4 text-eco" />
                  <span>Green Financing Margin Drop</span>
                </div>
                <div className="font-display font-black text-2xl sm:text-3xl text-eco mt-1">
                  -{results.greenFinancingMarginDropPct.toFixed(2)}%
                  <span className="text-xs font-semibold text-gray-500"> Loan Rate Drop</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-forest-100">
              <Link
                href={`/estimator?gfa=${gfa}&use=${encodeURIComponent(buildingType)}&tier=${encodeURIComponent(tier)}`}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-eco hover:bg-eco-400 text-forest-950 font-extrabold text-xs sm:text-sm shadow-glow transition-all"
              >
                <span>Request Detailed Feasibility Dossier</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
