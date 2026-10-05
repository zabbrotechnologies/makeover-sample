"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

interface ScrollyCanvasProps {
  totalFrames?: number;
  framePrefix?: string;
  frameExtension?: string;
  padLength?: number;
  onFrameUpdate?: (currentFrame: number, progress: number) => void;
  onLoadingComplete?: () => void;
  children?: React.ReactNode;
}

export default function ScrollyCanvas({
  totalFrames = 192,
  framePrefix = "/sequence/frame-",
  frameExtension = ".webp",
  padLength = 4,
  onFrameUpdate,
  onLoadingComplete,
  children,
}: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);

  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Helper to format frame path
  const getFrameUrl = useCallback(
    (index: number) => {
      const padded = String(index + 1).padStart(padLength, "0");
      return `${framePrefix}${padded}${frameExtension}`;
    },
    [framePrefix, padLength, frameExtension]
  );

  // High-performance canvas drawing with precise object-fit: cover math
  const renderFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;

      const img = imagesRef.current[frameIndex];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2);
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;

      // Ensure buffer size matches client size * DPR
      if (canvas.width !== Math.round(displayWidth * dpr) || canvas.height !== Math.round(displayHeight * dpr)) {
        canvas.width = Math.round(displayWidth * dpr);
        canvas.height = Math.round(displayHeight * dpr);
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      // object-fit: cover math
      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;
      const imgRatio = imgWidth / imgHeight;
      const canvasRatio = displayWidth / displayHeight;

      let drawWidth = displayWidth;
      let drawHeight = displayHeight;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        // Viewport is wider than image ratio -> match width, crop vertically
        drawWidth = displayWidth;
        drawHeight = displayWidth / imgRatio;
        offsetY = (displayHeight - drawHeight) / 2;
      } else {
        // Viewport is taller than image ratio -> match height, crop horizontally
        drawHeight = displayHeight;
        drawWidth = displayHeight * imgRatio;
        offsetX = (displayWidth - drawWidth) / 2;
      }

      // Smooth rendering options
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      // Draw image filling entire viewport
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      // Subtle high-end cinematic vignette & depth gradient
      const vignette = ctx.createRadialGradient(
        displayWidth / 2,
        displayHeight / 2,
        Math.min(displayWidth, displayHeight) * 0.35,
        displayWidth / 2,
        displayHeight / 2,
        Math.max(displayWidth, displayHeight) * 0.8
      );
      vignette.addColorStop(0, "rgba(0,0,0,0)");
      vignette.addColorStop(1, "rgba(4, 4, 6, 0.45)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, displayWidth, displayHeight);

      ctx.restore();
    },
    []
  );

  // Preload all image frames in useEffect
  useEffect(() => {
    let isCancelled = false;
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    // Load first frame immediately to render initial view
    const initialImg = new Image();
    initialImg.src = getFrameUrl(0);
    initialImg.onload = () => {
      if (isCancelled) return;
      images[0] = initialImg;
      renderFrame(0);
    };

    // Preload remaining frames
    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);

      img.onload = () => {
        if (isCancelled) return;
        loadedCount++;
        images[i] = img;
        const progress = Math.round((loadedCount / totalFrames) * 100);
        setLoadingProgress(progress);

        // When critical mass loaded or initial frame
        if (i === 0 && !imagesRef.current[0]) {
          renderFrame(0);
        }

        if (loadedCount >= totalFrames) {
          setIsLoaded(true);
          onLoadingComplete?.();
        }
      };

      img.onerror = () => {
        if (isCancelled) return;
        loadedCount++;
        // If webp fails, try fallback or continue
        console.warn(`Frame ${i} failed to load from ${getFrameUrl(i)}`);
        if (loadedCount >= totalFrames) {
          setIsLoaded(true);
          onLoadingComplete?.();
        }
      };

      images.push(img);
    }

    imagesRef.current = images;

    // Window resize handler
    const handleResize = () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(() => {
        renderFrame(currentFrameRef.current);
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      isCancelled = true;
      window.removeEventListener("resize", handleResize);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [totalFrames, getFrameUrl, renderFrame, onLoadingComplete]);

  // Framer Motion scroll hook bound to container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const clamped = Math.max(0, Math.min(1, latest));
    const targetFrame = Math.min(totalFrames - 1, Math.floor(clamped * (totalFrames - 1)));

    if (targetFrame !== currentFrameRef.current) {
      currentFrameRef.current = targetFrame;
      onFrameUpdate?.(targetFrame + 1, clamped);

      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(() => {
        renderFrame(targetFrame);
      });
    }
  });

  return (
    <section ref={containerRef} className="relative h-[500vh] w-full bg-[#08080a]">
      {/* Sticky Canvas Viewport (100dvh per taste-skill rule) */}
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 block h-full w-full object-cover"
        />

        {/* Ambient Top & Bottom Lighting Transitions */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#08080a]/95 via-[#08080a]/40 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#08080a] via-[#08080a]/70 to-transparent z-10" />

        {/* Luxury Loading Progress Indicator */}
        {!isLoaded && loadingProgress < 100 && (
          <div className="absolute top-24 right-6 sm:right-12 z-30 flex items-center gap-2.5 rounded-full border border-champagne/30 bg-[#08080a]/80 px-3.5 py-1.5 backdrop-blur-xl text-[10px] font-mono text-champagne-light">
            <div className="h-1.5 w-1.5 rounded-full bg-champagne animate-pulse" />
            <span className="tracking-widest uppercase">ATELIER PRELOAD {loadingProgress}%</span>
          </div>
        )}

        {/* Children (Overlay Parallax content placed on top of Canvas) */}
        {children}
      </div>
    </section>
  );
}
