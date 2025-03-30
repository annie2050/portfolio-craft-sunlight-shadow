import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger, Draggable);

const images = [
  { id: 1, src: "/assets/photo1.jpg" },
  { id: 2, src: "/assets/photo2.jpg" },
  { id: 3, src: "/assets/photo3.jpg" },
  { id: 4, src: "/assets/photo4.jpg" },
  { id: 5, src: "/assets/photo5.jpg" },
  { id: 6, src: "/assets/photo6.jpg" },
  { id: 7, src: "/assets/photo7.jpg" },
  { id: 8, src: "/assets/photo1.jpg" },
  { id: 9, src: "/assets/photo1.jpg" },
  { id: 10, src: "/assets/photo1.jpg" },
];

const PhotoGallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!galleryRef.current || !trackRef.current) return;

    const track = trackRef.current;
    const items = gsap.utils.toArray<HTMLElement>(".box");

    let loop = gsap.to(items, {
      xPercent: -100 * (items.length / 2),
      ease: "none",
      repeat: -1,
      duration: items.length * 0.5,
      modifiers: {
        xPercent: gsap.utils.wrap(-100 * (items.length / 2), 0),
      },
    });

    // Enable Dragging
    Draggable.create(track, {
      type: "x",
      inertia: true,
      bounds: galleryRef.current,
      onDrag() {
        gsap.set(loop, { timeScale: 0 }); // Pause animation while dragging
      },
      onDragEnd() {
        gsap.set(loop, { timeScale: 1 }); // Resume animation after dragging
      },
    });

  }, []);

  return (
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A collection of projects showcasing my skills and experience
          </p>
        </div>

    <div ref={galleryRef} className="gallery-container overflow-hidden w-full relative">
      <div ref={trackRef} className="flex space-x-4 flex-nowrap">
        {images.concat(images).map((photo, index) => (
          <div key={index} className="box w-48 h-48 flex-shrink-0 overflow-hidden rounded-lg shadow-md">
            <img src={photo.src} alt={`Photo ${photo.id}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
    </div>

  );
};

export default PhotoGallery;
