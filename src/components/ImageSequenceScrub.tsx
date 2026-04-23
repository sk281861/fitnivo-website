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
  extension = "jpg",
  scrollLength = 3000,
  children
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const tempImages: HTMLImageElement[] = [];

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Files are named ezgif-frame-001.jpg, ezgif-frame-002.jpg, etc.
      const frameNum = i.toString().padStart(3, '0');
      img.src = `${directory}ezgif-frame-${frameNum}.${extension}`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setLoaded(true);
        }
      };
      tempImages.push(img);
    }
    setImages(tempImages);
  }, [directory, frameCount, extension]);

  useEffect(() => {
    if (!loaded || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Initial render
    const renderFrame = (index: number) => {
      const img = images[Math.floor(index)];
      if (img) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw image covering the canvas (object-fit: cover logic)
        const canvasAspect = canvas.width / canvas.height;
        const imgAspect = img.width / img.height;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasAspect > imgAspect) {
          // Canvas is wider than image (e.g. wide desktop)
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgAspect;
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          // Canvas is taller than image (e.g. mobile portrait)
          drawWidth = canvas.height * imgAspect;
          drawHeight = canvas.height;
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = 0;
        }

        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    renderFrame(0);

    const sequence = { frame: 0 };
    const ctx = gsap.context(() => {
      gsap.to(sequence, {
        frame: frameCount - 1,
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
      canvas.height = window.innerHeight;
      renderFrame(sequence.frame);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, [loaded, images, frameCount, scrollLength]);

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%" }}>
      <div className="image-sequence-inner" style={{ 
        position: "relative",
        width: "100%", 
        height: "100vh",
        backgroundColor: "black",
        overflow: "hidden"
      }}>
        <canvas
          ref={canvasRef}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            backgroundColor: "black"
          }}
        />
        {children}
        {!loaded && (
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            background: "black",
            zIndex: 10
          }}>
            Loading Cinematic Scene...
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSequenceScrub;
