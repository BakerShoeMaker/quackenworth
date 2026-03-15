"use client";

import { useRef, useEffect } from "react";

const VIDEOS = [
  "/family on ipad-app.mp4",
  "/teacher helping student.mp4",
];

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      indexRef.current = (indexRef.current + 1) % VIDEOS.length;
      video.src = VIDEOS[indexRef.current];
      video.play();
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  return (
    <video
      ref={videoRef}
      src={VIDEOS[0]}
      autoPlay
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
}
