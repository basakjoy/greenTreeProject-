import React from 'react';

interface ScrollIndicatorProps {
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

/**
 * Scroll Indicator
 * Down-arrow chevron indicator at the bottom of the hero:
 * Small square frame with 1px #d8eaff border, 24px size, containing a downward chevron in #d8eaff.
 * Centered horizontally at the bottom of the hero.
 */
export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  className = '',
  onClick,
  ariaLabel = 'Scroll to next section',
}) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`
        w-[24px] h-[24px] border border-[#d8eaff] rounded-[2px]
        flex items-center justify-center text-[#d8eaff]
        bg-transparent hover:border-white hover:text-white
        transition-all duration-200 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#1f58f2]
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-bounce"
        style={{ animationDuration: '2s' }}
      >
        <path
          d="M1 1L5 5L9 1"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default ScrollIndicator;

