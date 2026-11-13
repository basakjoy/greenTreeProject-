import React from 'react';

interface BorderedContainerFrameProps {
  children: React.ReactNode;
  className?: string;
  showCornerDots?: boolean;
}

/**
 * Bordered Container Frame
 * Wireframe-style container with 1px #d8eaff border, transparent background, 8px radius.
 * Small Electric Cobalt (#1f58f2) dots mark the corners.
 * Functions as a viewport/preview frame.
 */
export const BorderedContainerFrame: React.FC<BorderedContainerFrameProps> = ({
  children,
  className = '',
  showCornerDots = true,
}) => {
  return (
    <div
      className={`relative rounded-[8px] border border-[#d8eaff]/30 bg-transparent p-4 sm:p-6 ${className}`}
    >
      {showCornerDots && (
        <>
          {/* Corner accent dots in #1f58f2 */}
          <span
            className="absolute -top-[3px] -left-[3px] w-[5px] h-[5px] rounded-full bg-[#1f58f2]"
            aria-hidden="true"
          />
          <span
            className="absolute -top-[3px] -right-[3px] w-[5px] h-[5px] rounded-full bg-[#1f58f2]"
            aria-hidden="true"
          />
          <span
            className="absolute -bottom-[3px] -left-[3px] w-[5px] h-[5px] rounded-full bg-[#1f58f2]"
            aria-hidden="true"
          />
          <span
            className="absolute -bottom-[3px] -right-[3px] w-[5px] h-[5px] rounded-full bg-[#1f58f2]"
            aria-hidden="true"
          />
        </>
      )}
      {children}
    </div>
  );
};

export default BorderedContainerFrame;

