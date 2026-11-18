import React from 'react';

export interface PortfolioItem {
  id: string | number;
  name: string;
  logoUrl?: string;
  logoElement?: React.ReactNode;
  category?: string;
  href?: string;
}

interface PortfolioCardGridProps {
  items: PortfolioItem[];
  scaffoldingLabels?: string[]; // e.g. ['THEY', 'HAVE', 'BECOME', 'INEVITABLE']
  className?: string;
}

/**
 * Portfolio Card Grid & Cell
 * 3-column grid of square cells:
 * Each cell is #0d0d0f (or #2b2f33) background with 1px #d8eaff border at 20% opacity, 16px radius.
 * Company logos centered inside, white or monochrome (#d8eaff).
 * 32px row-gap and column-gap.
 * Small uppercase Mono labels above the grid.
 */
export const PortfolioCardGrid: React.FC<PortfolioCardGridProps> = ({
  items,
  scaffoldingLabels = ['THEY', 'HAVE', 'BECOME', 'INEVITABLE'],
  className = '',
}) => {
  return (
    <div className={`w-full max-w-page-max mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {/* Editorial Scaffolding Labels */}
      {scaffoldingLabels && scaffoldingLabels.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {scaffoldingLabels.map((label, idx) => (
            <div
              key={idx}
              className="font-mono text-[10px] md:text-[12px] font-[400] uppercase tracking-[0.16em] text-[#d8eaff]/70"
            >
              {label}
            </div>
          ))}
        </div>
      )}

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px]">
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative aspect-square bg-[#0d0d0f] rounded-[16px] border border-[#d8eaff]/20 p-[32px] flex flex-col items-center justify-center transition-all duration-300 hover:border-[#d8eaff]/40 hover:bg-[#232529]/40"
          >
            {item.category && (
              <span className="absolute top-[20px] left-[20px] font-mono text-[10px] uppercase tracking-[0.16em] text-[#6c757f]">
                {item.category}
              </span>
            )}

            <div className="flex items-center justify-center text-[#d8eaff] w-full h-full max-h-[120px] p-4">
              {item.logoElement ? (
                item.logoElement
              ) : item.logoUrl ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={item.logoUrl}
                  alt={item.name}
                  className="max-h-[60px] max-w-[180px] object-contain filter brightness-90 contrast-125 grayscale"
                />
              ) : (
                <span className="font-monument text-[20px] lg:text-[24px] text-[#d8eaff] tracking-[-0.01em]">
                  {item.name}
                </span>
              )}
            </div>

            {item.href && (
              <a
                href={item.href}
                className="absolute inset-0 rounded-[16px] focus:outline-none focus:ring-1 focus:ring-[#1f58f2]"
                aria-label={item.name}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCardGrid;
