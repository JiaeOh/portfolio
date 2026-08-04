import { useState } from "react";

const isVideo = (src: string) => src.toLowerCase().endsWith(".mp4");

function Placeholder({ className }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center bg-gray-100 text-gray-300 ${className ?? ""}`}
    >
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="9" cy="10" r="1.5" fill="currentColor" />
        <path
          d="M4 17l5-5 3 3 4-4 4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/**
 * Renders an image or (for .mp4 sources) a silent autoplay/loop video.
 * Falls back to `fallbackSrc` on a broken/missing primary asset (e.g. a
 * not-yet-recorded product video falling back to the cover image), then
 * to a neutral placeholder if that fails too, instead of breaking the
 * layout — most media in content/ don't exist locally yet.
 */
export function Media({
  src,
  fallbackSrc,
  alt,
  poster,
  className,
  pausedUntilHover = false,
}: {
  src?: string;
  fallbackSrc?: string;
  alt: string;
  poster?: string;
  className?: string;
  pausedUntilHover?: boolean;
}) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const [hovering, setHovering] = useState(false);

  const usingFallback = !!src && failedSrc === src;
  const effectiveSrc = usingFallback ? fallbackSrc : src;
  const failed = !!effectiveSrc && failedSrc === effectiveSrc;

  if (!effectiveSrc || failed) {
    return <Placeholder className={className} />;
  }

  if (isVideo(effectiveSrc)) {
    return (
      <video
        key={effectiveSrc}
        src={effectiveSrc}
        poster={poster}
        aria-label={alt}
        autoPlay={!pausedUntilHover}
        loop
        muted
        playsInline
        onMouseEnter={() => pausedUntilHover && setHovering(true)}
        onMouseLeave={() => pausedUntilHover && setHovering(false)}
        ref={(el) => {
          if (!el || !pausedUntilHover) return;
          if (hovering) void el.play();
          else el.pause();
        }}
        onError={() => setFailedSrc(effectiveSrc)}
        className={`bg-gray-100 object-cover ${className ?? ""}`}
      />
    );
  }

  return (
    <img
      key={effectiveSrc}
      src={effectiveSrc}
      alt={alt}
      loading="lazy"
      onError={() => setFailedSrc(effectiveSrc)}
      className={`bg-gray-100 object-cover ${className ?? ""}`}
    />
  );
}
