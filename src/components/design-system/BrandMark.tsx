import React from 'react';
import Link from 'next/link';

interface BrandMarkProps {
  name?: string;
  href?: string;
  className?: string;
}

/**
 * Brand Mark
 * Wordmark in Monument weight 400 at ~16px, paired with a custom geometric square glyph.
 * White (#d8eaff) on dark canvas, no background, sits flush-left.
 */
export const BrandMark: React.FC<BrandMarkProps> = ({
  name = 'atlantic',
  href = '/',
  className = '',
}) => {
  const content = (
    <div
      className={`inline-flex items-center gap-[10px] select-none text-[#d8eaff] ${className}`}
    >
      {/* Geometric square glyph */}
      <div className="relative w-[14px] h-[14px] border border-[#d8eaff] flex items-center justify-center">
        <div className="w-[4px] h-[4px] bg-[#d8eaff]" />
      </div>

      {/* Wordmark */}
      <span className="font-monument text-[16px] font-[400] tracking-[-0.01em] text-[#d8eaff] lowercase">
        {name}
      </span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center">
        {content}
      </Link>
    );
  }

  return content;
};

export default BrandMark;

