"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface VideoScrubProps {
  src: string;
  scrollLength?: number;
}

const VideoScrub: React.FC<VideoScrubProps> = ({ src, scrollLength = 3000 }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollLength}`,
          scrub: true,
          pin: ".hero-video-container", // Pin the specific container
          anticipatePin: 1,
        }
      });

      const onMetadata = () => {
        const duration = video.duration;
        console.log("Video metadata loaded. Duration:", duration);
        
        tl.to(video, {
          currentTime: duration,
          ease: "none",
          onUpdate: () => {
            // Force frame refresh in some browsers
            if (video.paused) video.play().then(() => video.pause());
          }
        });
      };

      if (video.readyState >= 2) {
        onMetadata();
      } else {
        video.addEventListener("loadedmetadata", onMetadata);
      }

      return () => video.removeEventListener("loadedmetadata", onMetadata);
    });

    return () => ctx.revert();
  }, [src, scrollLength]);

  return (
    <div ref={containerRef} className="video-scrub-trigger" style={{ position: "relative", width: "100%" }}>
      <div className="hero-video-container" style={{ 
        position: "relative",
        width: "100%", 
        height: "100vh",
        backgroundColor: "black",
        overflow: "hidden"
      }}>
        <video
          ref={videoRef}
          src={src}
          muted
          playsInline
          preload="auto"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block"
          }}
        />
      </div>
      {/* This invisible spacer defines the scroll length for the pin */}
      <div style={{ height: `${scrollLength}px`, pointerEvents: "none" }} />
    </div>
  );
};

export default VideoScrub;
