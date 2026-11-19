'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

export function CompanyVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const autoplayAttemptedRef = useRef(false);
  const hasPlayedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  const playVideo = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      await video.play();
    } catch (error) {
      if (error instanceof DOMException && error.name === 'NotAllowedError') {
        return;
      }

      console.error('Unable to play the Green Tree introduction video.', error);
      setHasError(true);
    }
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          if (!video.paused) video.pause();
          return;
        }

        if (reducedMotion) return;

        if (!autoplayAttemptedRef.current) {
          autoplayAttemptedRef.current = true;
          void playVideo();
        } else if (hasPlayedRef.current && video.paused && !video.ended) {
          void playVideo();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [playVideo]);

  const handlePlay = () => {
    hasPlayedRef.current = true;
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handlePlaybackRequest = () => {
    void playVideo();
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Green Tree company introduction video"
        className="relative flex min-h-[70vh] w-full items-center justify-center bg-forest-50 px-4 py-12 sm:px-8 sm:py-16"
    >
        <div className="relative aspect-[4/3] w-full max-w-5xl overflow-hidden rounded-3xl border border-forest-200 bg-forest-950 shadow-subtle">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-contain"
            src="https://res.cloudinary.com/bg6urken/video/upload/v1795119230/client_video.mp4"
            playsInline
            preload="metadata"
            aria-label="Introduction to Green Tree Building Consultants and its services"
            onPlay={handlePlay}
            onPause={handlePause}
            onError={() => {
              console.error('The Green Tree introduction video could not be loaded.');
              setHasError(true);
            }}
          />

          {!isPlaying && !hasError && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-forest-950/10">
              <button
                type="button"
                onClick={handlePlaybackRequest}
                aria-label="Play the Green Tree introduction video with sound"
                className="flex size-[72px] items-center justify-center rounded-full border border-white/80 bg-white/70 text-forest-950 shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl transition duration-200 hover:scale-105 hover:bg-white/85 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/80 active:scale-95 motion-reduce:transition-none"
              >
                <Play className="ml-1 size-7 fill-current" aria-hidden="true" />
              </button>
              <span className="text-sm font-semibold text-white drop-shadow-md">
                Play with sound
              </span>
            </div>
          )}

          {hasError && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-forest-950/75 p-6 text-center">
              <p className="max-w-sm text-sm font-medium text-white" role="status">
                The video could not be loaded.
              </p>
            </div>
          )}
        </div>
    </section>
  );
}
