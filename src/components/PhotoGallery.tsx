import React from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
import Modal from "react-modal";
import Zoom from "react-medium-image-zoom";
const Image = dynamic(() => import("next/image"), { ssr: false });
import "react-medium-image-zoom/dist/styles.css";


const photos = [
  { src: "/Images/IMG_20190220_123328-EFFECTS.jpg", alt: "Sunset over the hills" },
  { src: "/Images/IMG_20190221_165424-EDIT.jpg", alt: "City lights at night" },
  { src: "/Images/IMG_20220325_152955197_HDR.jpg", alt: "Serene mountain landscape" },
  { src: "/Images/IMG_20220326_133651.jpg", alt: "Forest path in autumn" },
  { src: "/Images/IMG_20220515_221154.jpg", alt: "Calm beach view" },
];




const PhotoGallery: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; alt: string } | null>(null);
  const [likes, setLikes] = useState<{ [key: string]: boolean }>({});

  // Open modal with selected photo
  const openModal = (photo: { src: string; alt: string }) => {
    setSelectedPhoto(photo);
    setModalIsOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPhoto(null);
  };

  // Toggle like state
  const toggleLike = (photoSrc: string) => {
    setLikes((prev) => ({ ...prev, [photoSrc]: !prev[photoSrc] }));
  };

  return (
    <section className="section p-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Photography</h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openModal(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-auto object-cover rounded-lg transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Viewing Image */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        {selectedPhoto && (
          <div className="relative bg-white p-4 rounded-lg max-w-2xl w-full flex flex-col items-center">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white bg-black rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>

            {/* Zoomable Image */}
            <Zoom>
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-w-full max-h-[80vh] rounded-lg"
              />
            </Zoom>

            {/* Like Button */}
            <button
              className={`mt-4 px-4 py-2 rounded-full text-white ${
                likes[selectedPhoto.src] ? "bg-red-500" : "bg-gray-500"
              }`}
              onClick={() => toggleLike(selectedPhoto.src)}
            >
              {likes[selectedPhoto.src] ? "❤️ Liked" : "♡ Like"}
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default PhotoGallery;
