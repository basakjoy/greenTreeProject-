import React from 'react';

interface DecorativeSparkleMarkProps {
  size?: number; // default ~40px
  points?: 6 | 8; // 6 or 8-point star
  className?: string;
  rotation?: number; // slight rotation jitter for hand-drawn quality
}

/**
 * Decorative Sparkle Mark
 * Signature decorative element: 6 or 8-point asterisk drawn with 1.5px strokes in #1f58f2,
 * approximately 40px diameter, with slight rotation jitter for a hand-drawn quality.
 * Sits to the left of section headlines as an editorial accent.
 */
export const DecorativeSparkleMark: React.FC<DecorativeSparkleMarkProps> = ({
  size = 40,
  points = 6,
  className = '',
  rotation = 6,
}) => {
  // Generate rays for a 6 or 8 point star with hand-drawn organic nuance
  const center = size / 2;
  const radius = size * 0.44;
  const numRays = points;

  const lines = Array.from({ length: numRays }).map((_, i) => {
    const angle = (i * Math.PI) / (numRays / 2);
    // Slight jitter in length and angle to maintain hand-drawn character
    const jitterFactor = 1 + ((i % 2 === 0 ? 0.04 : -0.04));
    const r = radius * jitterFactor;
    const x1 = center + Math.cos(angle) * r;
    const y1 = center + Math.sin(angle) * r;
    const x2 = center - Math.cos(angle) * r;
    const y2 = center - Math.sin(angle) * r;
    return { x1, y1, x2, y2, id: i };
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block flex-shrink-0 text-[#1f58f2] ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
      aria-hidden="true"
    >
      {lines.map((line) => (
        <line
          key={line.id}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="#1f58f2"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ))}
      {/* Hand-drawn center subtle dot accent */}
      <circle cx={center} cy={center} r="1.2" fill="#1f58f2" />
    </svg>
  );
};

export default DecorativeSparkleMark;

