import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  darkSurface?: boolean;
}

export function EditorialImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  priority = false,
  darkSurface = false,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${
        darkSurface ? 'bg-dark-surface' : 'bg-surface'
      } ${className}`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <div
          className={`flex h-full w-full flex-col items-center justify-center gap-3 p-8 text-center ${
            darkSurface
              ? 'bg-dark-surface text-ink-on-dark-muted'
              : 'bg-surface text-ink-muted'
          }`}
          role="img"
          aria-label={alt}
        >
          <Sparkles className="h-6 w-6 text-quartz" aria-hidden="true" />
          <p className="max-w-xs font-display text-lg leading-snug">{alt}</p>
        </div>
      )}
    </div>
  );
}
