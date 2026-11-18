import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const platforms = [
  { name: 'LinkedIn', href: '', Icon: Linkedin },
  { name: 'Facebook', href: '', Icon: Facebook },
  { name: 'Instagram', href: '', Icon: Instagram },
  { name: 'YouTube', href: '', Icon: Youtube },
];

export function SocialMediaPlatforms({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const isDark = variant === 'dark';

  return (
    <div
      aria-label="Social media platforms"
      className="flex flex-wrap gap-2"
    >
      {platforms.map(({ name, href, Icon }) => {
        const className = `inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold transition-colors ${
            isDark
              ? 'border-forest-800 bg-forest-900 text-gray-300'
              : 'border-forest-100 bg-forest-50 text-forest-900'
          } ${href ? 'hover:border-eco hover:text-eco' : ''}`;
        const content = (
          <>
            <Icon aria-hidden="true" className="h-4 w-4 text-eco" />
            {name}
          </>
        );

        return href ? (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
          >
            {content}
          </a>
        ) : (
          <span key={name} className={className}>
            {content}
          </span>
        );
      })}
    </div>
  );
}
