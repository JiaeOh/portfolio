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
 * Falls back to a neutral placeholder on missing/broken assets instead of
 * breaking the layout — most images in content/ don't exist locally yet.
 */
export function Media({
  src,
  alt,
  poster,
  className,
  pausedUntilHover = false,
}: {
  src?: string;
  alt: string;
  poster?: string;
  className?: string;
  pausedUntilHover?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const [hovering, setHovering] = useState(false);

  if (!src || failed) {
    return <Placeholder className={className} />;
  }

  if (isVideo(src)) {
    return (
      <video
        src={src}
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
        onError={() => setFailed(true)}
        className={`bg-gray-100 object-cover ${className ?? ""}`}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`bg-gray-100 object-cover ${className ?? ""}`}
    />
  );
}
