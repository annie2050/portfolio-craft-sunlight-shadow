import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger, Draggable);

const images = [
  { id: 1, src: "/assets/photo1.jpg" },
  { id: 2, src:  "/assets/photo1.jpg" },
  { id: 3, src:  "/assets/photo1.jpg" },
  { id: 4, src:  "/assets/photo1.jpg" },
  { id: 5, src:  "/assets/photo1.jpg" },
  { id: 6, src:  "/assets/photo1.jpg" },
  { id: 7, src:  "/assets/photo1.jpg"},
  { id: 8, src:  "/assets/photo1.jpg" },
  { id: 9, src: "/assets/photo9.jpg" },
  { id: 10, src: "/assets/photo10.jpg" },
  { id: 11, src: "/assets/photo1.jpg" },

  { id: 12, src: "/assets/photo2.jpg" },
  { id: 13, src: "/assets/photo3.jpg" },
  { id: 14, src: "https://i.scdn.co/image/ab67616d00001e020ecc8c4fd215d9eb83cbfdb3" },
  { id: 15, src: "/assets/photo5.jpg" },
  { id: 16, src: "/assets/photo6.jpg" },
  { id: 17, src: "/assets/photo7.jpg" },
  { id: 18, src: "https://i.scdn.co/image/ab67616d00001e020ecc8c4fd215d9eb83cbfdb3" },
  { id: 19, src: "/assets/photo9.jpg" },
  { id: 20, src: "https://i.scdn.co/image/ab67616d00001e020ecc8c4fd215d9eb83cbfdb3" },
];

const PhotoGallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!galleryRef.current) return;

    const boxes = gsap.utils.toArray<HTMLElement>(".box");

    const loop = gsap.timeline({ repeat: -1, paused: true });

    boxes.forEach((box, index) => {
      loop.to(box, { x: -300, duration: 1 }, index * 0.2);
    });

    loop.play();

    // Enable Dragging
    Draggable.create(".gallery-container", {
      type: "x",
      inertia: true,
      onDrag() {
        loop.progress(this.x / -window.innerWidth);
      },
    });

  }, []);

  return (
    <div ref={galleryRef} className="gallery-container overflow-hidden flex space-x-4">
      {images.concat(images).map((photo, index) => (
        <div key={index} className="box w-48 h-48 flex-shrink-0 overflow-hidden rounded-lg shadow-md">
          <img src={photo.src} alt={`Photo ${photo.id}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
