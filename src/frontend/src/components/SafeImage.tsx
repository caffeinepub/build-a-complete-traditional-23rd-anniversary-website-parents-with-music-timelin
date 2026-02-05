import { useState } from 'react';
import { assetUrl } from '../utils/assetUrl';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  context?: string;
  loading?: 'lazy' | 'eager';
  style?: React.CSSProperties;
}

export default function SafeImage({ 
  src, 
  alt, 
  className = '', 
  context = 'SafeImage',
  loading = 'lazy',
  style
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const resolvedSrc = assetUrl(src);

  const handleError = () => {
    console.warn(`[${context}] Failed to load image: ${resolvedSrc}`);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div 
        className={`flex items-center justify-center bg-muted/30 border border-border ${className}`}
        style={style}
      >
        <div className="text-center p-4">
          <div className="text-muted-foreground text-sm mb-1">🖼️</div>
          <div className="text-muted-foreground text-xs">चित्र उपलब्ध नहीं</div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      className={className}
      loading={loading}
      onError={handleError}
      style={style}
    />
  );
}
