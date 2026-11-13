import React from 'react';
import Link from 'next/link';

interface NavigationLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * Navigation Link
 * Mono 10-12px, uppercase, extreme tracking (0.16em).
 * Color: #d8eaff for inactive, #ff4105 for active (with a small marker dot or underline).
 */
export const NavigationLink: React.FC<NavigationLinkProps> = ({
  href,
  label,
  isActive = false,
  className = '',
  onClick,
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        relative inline-flex items-center gap-[6px]
        font-mono text-[11px] font-[400] uppercase tracking-[0.16em]
        transition-colors duration-150
        ${isActive ? 'text-[#ff4105]' : 'text-[#d8eaff] hover:text-white'}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {isActive && (
        <span
          className="inline-block w-[4px] h-[4px] rounded-full bg-[#ff4105] animate-pulse"
          aria-hidden="true"
        />
      )}
      <span>{label}</span>
      {isActive && (
        <span
          className="absolute -bottom-[6px] left-0 right-0 h-[1px] bg-[#ff4105]"
          aria-hidden="true"
        />
      )}
    </Link>
  );
};

export default NavigationLink;

