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
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const skipAmount = isMobile ? 3 : 1; 
    
    let loadedCount = 0;
    const tempImages: HTMLImageElement[] = [];

    // Preload FIRST frame separately and immediately to fix LCP
    const firstImg = new Image();
    firstImg.src = `${directory}ezgif-frame-001.${extension}`;
    firstImg.onload = () => {
      setFirstFrameLoaded(true);
      if (tempImages.length > 0) {
        tempImages[0] = firstImg;
      }
    };
    
    const framesToLoad = [];
    for (let i = 1; i <= frameCount; i += skipAmount) {
      framesToLoad.push(i);
    }

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
      
      tempImages[index] = img;
    });

    setImages(tempImages);
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
    canvas.height = window.innerHeight;
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
      canvas.height = window.innerHeight;
      renderFrame(sequence.frame);
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, [firstFrameLoaded, loaded, images, scrollLength]);

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
