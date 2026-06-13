"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ImageSequenceScrubProps {
  directory: string; // e.g., "/frames/hero/"
  frameCount: number;
  extension?: string;
  scrollLength?: number;
  children?: React.ReactNode;
}

const ImageSequenceScrub: React.FC<ImageSequenceScrubProps> = ({ 
  directory, 
  frameCount, 
  extension = "webp",
  scrollLength = 3000,
  children
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const skipAmount = isMobile ? 3 : 1; 
    
    const tempImages: HTMLImageElement[] = [];

    // Preload FIRST frame separately and immediately to fix LCP
    const firstImg = new Image();
    firstImg.src = `${directory}ezgif-frame-001.${extension}`;
    firstImg.onload = () => {
      setFirstFrameLoaded(true);
    };
    tempImages[0] = firstImg;
    setImages(tempImages);
    
    const framesToLoad: number[] = [];
    for (let i = 1 + skipAmount; i <= frameCount; i += skipAmount) {
      framesToLoad.push(i);
    }

    if (framesToLoad.length === 0) {
      setLoaded(true);
      return;
    }

    const preloadRemaining = () => {
      let loadedCount = 0;
      framesToLoad.forEach((frameIdx, index) => {
        const img = new Image();
        const frameNum = frameIdx.toString().padStart(3, '0');
        img.src = `${directory}ezgif-frame-${frameNum}.${extension}`;
        
        img.onload = () => {
          loadedCount++;
          if (loadedCount === framesToLoad.length) {
            setLoaded(true);
          }
        };
        
        tempImages[index + 1] = img;
      });
      setImages([...tempImages]);
    };

    // Delay remaining frames until page has fully loaded
    if (document.readyState === 'complete') {
      const idleId = window.requestIdleCallback 
        ? window.requestIdleCallback(() => preloadRemaining()) 
        : setTimeout(preloadRemaining, 1000);
      return () => {
        if (!window.requestIdleCallback) {
          clearTimeout(idleId as any);
        }
      };
    } else {
      const handleLoad = () => {
        if (window.requestIdleCallback) {
          window.requestIdleCallback(() => preloadRemaining());
        } else {
          setTimeout(preloadRemaining, 500);
        }
      };
      window.addEventListener('load', handleLoad);
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }
  }, [directory, frameCount, extension]);

  useEffect(() => {
    if (!firstFrameLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const renderFrame = (index: number) => {
      const img = images[Math.floor(index)];
      if (!img || !img.complete) return;
      
      context.clearRect(0, 0, canvas.width, canvas.height);
      const canvasAspect = canvas.width / canvas.height;
      const imgAspect = img.width / img.height;
      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasAspect > imgAspect) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgAspect;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawWidth = canvas.height * imgAspect;
        drawHeight = canvas.height;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      }
      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Render initial frame immediately once first image is ready
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth < 768 ? window.innerHeight * 0.7 : window.innerHeight;
    renderFrame(0);

    if (!loaded || !containerRef.current) return;

    const sequence = { frame: 0 };
    const ctx = gsap.context(() => {
      gsap.to(sequence, {
        frame: images.length - 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollLength}`,
          scrub: 1,
          pin: ".image-sequence-inner",
        },
        onUpdate: () => renderFrame(sequence.frame)
      });
    });

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerWidth < 768 ? window.innerHeight * 0.7 : window.innerHeight;
      renderFrame(sequence.frame);
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, [firstFrameLoaded, loaded, images, scrollLength]);

  return (
    <div ref={containerRef} className="w-full relative" style={{ minHeight: "100vh" }}>
      <div className="image-sequence-inner w-full h-[70vh] md:h-screen" style={{ 
        position: "relative",
        backgroundColor: "black",
        overflow: "hidden"
      }}>
        <canvas
          ref={canvasRef}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            aspectRatio: "16 / 9"
          }}
        />
        {children}
        {!loaded && !firstFrameLoaded && (
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(255,255,255,0.2)",
            background: "black",
            zIndex: 10,
            fontSize: "12px",
            letterSpacing: "0.2em",
            textTransform: "uppercase"
          }}>
            Initializing...
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSequenceScrub;
