import React from 'react';
import Link from 'next/link';

interface OutlinedActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md';
}

/**
 * Outlined Action Button
 * Primary CTA treatment: Transparent background with a 1px #ff4105 border, 8px radius,
 * 12-16px vertical padding, 16-24px horizontal padding.
 * Label in Monument (12-14px), weight 400, color #ff4105, letter-spacing 0.06em.
 * Strict rule: NEVER solid filled.
 */
export const OutlinedActionButton: React.FC<OutlinedActionButtonProps> = ({
  href,
  children,
  className = '',
  size = 'md',
  ...props
}) => {
  const sizeClasses =
    size === 'sm'
      ? 'px-[16px] py-[12px] text-[12px]'
      : 'px-[24px] py-[14px] text-[14px]';

  const baseClasses = `
    inline-flex items-center justify-center
    bg-transparent border border-[#ff4105] rounded-[8px]
    text-[#ff4105] font-monument font-[400] tracking-[0.06em] uppercase
    transition-all duration-200 ease-out
    hover:border-[#ff4105] hover:shadow-[0_0_16px_rgba(255,65,5,0.35)]
    hover:bg-[#ff4105]/[0.04]
    active:scale-[0.98]
    focus:outline-none focus:ring-1 focus:ring-[#ff4105]
    cursor-pointer select-none
    ${sizeClasses}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
};

export default OutlinedActionButton;

