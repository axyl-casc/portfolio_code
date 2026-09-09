import { useState, useRef, useEffect } from 'react';

type FadeImageProps = {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  style?: React.CSSProperties;
  showSkeleton?: boolean;
};

/**
 * Drop-in replacement for <img> that starts blurry and scaled down,
 * then smoothly fades and transitions to sharp on load (identical to profile picture).
 */
export function FadeImage({
  src,
  alt,
  className = '',
  wrapperClassName,
  loading = 'lazy',
  decoding = 'async',
  style,
  showSkeleton = true,
}: FadeImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Reset loaded state whenever the image source changes
  useEffect(() => {
    setLoaded(false);
  }, [src]);

  // Check if image is already cached/complete, but delay state flip by a tick
  // so the initial blurry state paints first and the CSS transition can trigger
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      const timer = setTimeout(() => {
        setLoaded(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [src]);

  const handleLoad = () => {
    // Add small tick to ensure browser has painted the initial blurry/scaled-down state
    requestAnimationFrame(() => {
      setLoaded(true);
    });
  };

  const img = (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      style={style}
      className={`transition-all duration-700 ease-out ${
        loaded
          ? 'opacity-100 blur-0 scale-100'
          : 'opacity-0 blur-md scale-95'
      } ${className}`}
      onLoad={handleLoad}
    />
  );

  const wrapperClass = wrapperClassName !== undefined ? wrapperClassName : 'h-full w-full flex items-center justify-center';

  if (!wrapperClassName && !showSkeleton) return img;

  return (
    <div className={`relative ${wrapperClass}`}>
      {showSkeleton && !loaded && (
        <div className="absolute inset-0 animate-pulse bg-base-300/50 rounded-[inherit] pointer-events-none" />
      )}
      {img}
    </div>
  );
}

