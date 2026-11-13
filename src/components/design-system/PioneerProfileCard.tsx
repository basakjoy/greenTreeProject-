import React from 'react';

export interface Pioneer {
  id: string | number;
  name: string;
  role: string;
  company?: string;
  imageUrl: string;
  bio?: string;
}

interface PioneerProfileCardProps {
  pioneer: Pioneer;
  className?: string;
}

/**
 * Pioneer Profile Card
 * Portrait photograph with rounded bottom corners, tight head-and-shoulders crop on dark background,
 * desaturated. Paired with Monument headline text (weight 400).
 */
export const PioneerProfileCard: React.FC<PioneerProfileCardProps> = ({
  pioneer,
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col bg-[#0d0d0f] rounded-[16px] border border-[#d8eaff]/20 overflow-hidden transition-all duration-300 hover:border-[#d8eaff]/40 ${className}`}
    >
      {/* Portrait with rounded bottom corners */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#232529] rounded-b-[16px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={pioneer.imageUrl}
          alt={pioneer.name}
          className="w-full h-full object-cover filter grayscale contrast-110 brightness-95 transition-transform duration-500 hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-transparent to-transparent opacity-60" />
      </div>

      {/* Info block */}
      <div className="p-[24px] flex flex-col gap-[8px]">
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6c757f]">
          {pioneer.role} {pioneer.company ? `· ${pioneer.company}` : ''}
        </span>
        <h3 className="font-monument font-[400] text-[20px] lg:text-[24px] text-[#d8eaff] leading-[1.24] tracking-[-0.01em]">
          {pioneer.name}
        </h3>
        {pioneer.bio && (
          <p className="font-monument font-[400] text-[14px] text-[#6c757f] leading-[1.5] mt-1">
            {pioneer.bio}
          </p>
        )}
      </div>
    </div>
  );
};

export default PioneerProfileCard;
