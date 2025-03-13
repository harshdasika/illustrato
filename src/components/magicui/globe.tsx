"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useMotionValue, useSpring } from "motion/react";
import type { COBEOptions } from 'cobe';

// Dynamic import for cobe
let createGlobe: any;

export function Globe({
  className,
}: {
  className?: string;
}) {
  const [phi, setPhi] = useState(0);
  const [width, setWidth] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [isClient, setIsClient] = useState(false);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  // Set isClient to true once component mounts to ensure we're on the client
  useEffect(() => {
    setIsClient(true);
    
    // Dynamically import cobe only on the client
    const importCobe = async () => {
      try {
        const cobeModule = await import('cobe');
        createGlobe = cobeModule.default;
      } catch (error) {
        console.error("Failed to load cobe:", error);
      }
    };
    
    importCobe();
  }, []);

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / 1400);
    }
  };

  // Only run globe creation when we're on client and cobe is loaded
  useEffect(() => {
    if (!isClient || !canvasRef.current) return;

    const onResize = () => {
      if (canvasRef.current) {
        setWidth(canvasRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [isClient]);

  useEffect(() => {
    // Only initialize globe when createGlobe is loaded, we're on client, and width is known
    if (!isClient || !createGlobe || !canvasRef.current || width === 0) return;

    const globe = createGlobe(canvasRef.current, {
      width: width * 2,
      height: width * 2,
      devicePixelRatio: 2,
      phi: 0,
      theta: 0.1,
      dark: 0,
      diffuse: 0.4,
      mapSamples: 16000,
      mapBrightness: 3,
      baseColor: [1, 1, 1],
      markerColor: [251 / 255, 100 / 255, 21 / 255],
      glowColor: [1, 1, 1],
      markers: [
        { location: [14.5995, 120.9842], size: 0.03 },
        { location: [19.076, 72.8777], size: 0.1 },
        { location: [23.8103, 90.4125], size: 0.05 },
        { location: [30.0444, 31.2357], size: 0.07 },
        { location: [39.9042, 116.4074], size: 0.08 },
        { location: [-23.5505, -46.6333], size: 0.1 },
        { location: [19.4326, -99.1332], size: 0.1 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [34.6937, 135.5022], size: 0.05 },
        { location: [41.0082, 28.9784], size: 0.06 },
      ],
      onRender: (state: any) => {
        if (!pointerInteracting.current) setPhi((prev) => prev + 0.005);
        state.phi = phi + rs.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 0);

    return () => {
      globe.destroy();
    };
  }, [rs, phi, width, isClient]);

  if (!isClient) {
    return <div className={cn("", className)} />;
  }

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}