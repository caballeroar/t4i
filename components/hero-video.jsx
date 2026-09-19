"use client";

import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";

function getYoutubeId(url) {
  const match = url.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);
  return match ? match[1] : "";
}

/**
 * Silent looping teaser that swaps in an embedded YouTube player (with sound)
 * on click, so the full video plays in place without leaving the site.
 */
export function HeroVideo({
  videoSrcMp4 = "/videos/hero-teaser.mp4",
  videoSrcWebm = "/videos/hero-teaser.webm",
  poster = "/assets/hero-teaser-poster.jpg",
  youtubeUrl = "https://www.youtube.com/watch?v=REPLACE_ME",
}) {
  const videoRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const youtubeId = getYoutubeId(youtubeUrl);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!videoRef.current || isPlaying) return;
    if (reducedMotion) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {});
    }
  }, [reducedMotion, isPlaying]);

  return (
    <div className="relative aspect-video w-full max-w-md overflow-hidden rounded-2xl border-4 border-foreground sm:max-w-lg lg:max-w-none">
      {isPlaying ? (
        <>
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title="Global Talent, Local Impact | Tech 4 Impact Lab – Laak, The Hague"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <button
            type="button"
            onClick={() => setIsPlaying(false)}
            aria-label="Stop video"
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/80 text-white transition-opacity hover:opacity-80"
          >
            <X className="h-4 w-4" />
          </button>
        </>
      ) : (
        <>
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            poster={poster}
            autoPlay={!reducedMotion}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Silent 19-second teaser of Tech 4 Impact's work. Click play to watch the full video with sound."
          >
            <source src={videoSrcWebm} type="video/webm" />
            <source src={videoSrcMp4} type="video/mp4" />
          </video>

          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label="Play full video with sound"
            className="group absolute inset-0 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/30"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
              <Play className="h-7 w-7 translate-x-0.5 fill-foreground text-foreground" />
            </span>
          </button>
        </>
      )}
    </div>
  );
}
