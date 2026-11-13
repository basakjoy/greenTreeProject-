import React from 'react';

interface EditorialStatementBlockProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Editorial Statement Block
 * Centered mission paragraph:
 * Monument 16-24px weight 400, color #6c757f (muted), max-width ~600px centered, 32px line-height.
 * Single paragraph, no embellishment. Context for the headline, receding gracefully.
 */
export const EditorialStatementBlock: React.FC<EditorialStatementBlockProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`w-full flex justify-center px-4 ${className}`}>
      <p
        className="font-monument font-[400] text-[16px] sm:text-[20px] lg:text-[24px] leading-[32px] text-[#6c757f] max-w-[600px] text-center tracking-[-0.01em]"
      >
        {children}
      </p>
    </div>
  );
};

export default EditorialStatementBlock;

