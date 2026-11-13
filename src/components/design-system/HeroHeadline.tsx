import React from 'react';

interface HeroHeadlinePart {
  text: string;
  isAccent?: boolean; // #1f58f2 Electric Cobalt
}

interface HeroHeadlineProps {
  parts?: HeroHeadlinePart[];
  align?: 'left' | 'center';
  className?: string;
  children?: React.ReactNode;
}

/**
 * Hero Headline
 * Oversized editorial headline: Monument weight 400 at 96px, line-height 1.00, letter-spacing -0.03em.
 * Neutral words in Ice White (#d8eaff), accent words in Electric Cobalt (#1f58f2).
 * Rule: No bolding to add weight; size alone commands. No subheadline below.
 */
export const HeroHeadline: React.FC<HeroHeadlineProps> = ({
  parts,
  align = 'left',
  className = '',
  children,
}) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <h1
      className={`
        font-monument font-[400]
        text-[48px] sm:text-[64px] lg:text-[96px]
        leading-[1.00] tracking-[-0.03em]
        pt-[50px]
        ${alignClass}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {parts ? (
        parts.map((part, index) => (
          <React.Fragment key={index}>
            <span
              className={
                part.isAccent
                  ? 'text-[#1f58f2] inline-block'
                  : 'text-[#d8eaff] inline-block'
              }
            >
              {part.text}
            </span>
            {index < parts.length - 1 && ' '}
          </React.Fragment>
        ))
      ) : (
        children
      )}
    </h1>
  );
};

export default HeroHeadline;

