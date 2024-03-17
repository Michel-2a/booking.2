import React, { useState, useEffect } from "react";

function MyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    let intervalId;
    if (!isHovered) {
      intervalId = setInterval(() => {
        handleNext();
      }, 3000); // Change 3000 to adjust the interval time (in milliseconds)
    }
    return () => clearInterval(intervalId);
  }, [currentSlide, isHovered]);

  const images = [
    "https://img.freepik.com/photos-gratuite/salon-confortable-appartement-moderne_181624-58445.jpg",
    "https://st3.depositphotos.com/1009647/16906/i/450/depositphotos_169065136-stock-photo-modern-apartment-interior.jpg",
    "https://media.istockphoto.com/id/1357529184/fr/photo/rendu-3d-dun-int%C3%A9rieur-de-salon-contemporain.jpg?s=612x612&w=0&k=20&c=MbFmvLvqygX36GI_-B4B3jJKg7MrwxNMnHKFEwG3dtw=",
  ];

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 mx-1 rounded-full custom-yellow  focus:outline-none ${
                index === currentSlide ? "bg-red" : "bg-gray-300"
              }`}
              onClick={() => handleIndicatorClick(index)}
            ></button>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="absolute top-1/2 transform -translate-y-1/2 left-4 z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none navigation-button  "
        onClick={handlePrev}
        aria-label="Précédent"
        focusable="true"
      >
        {/* Utilisation d'une icône SVG pour la flèche de défilement */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 custom-yellow "
          fill="none"
          viewBox="0  0  24  24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15  19l-7-7  7-7"
          />
        </svg>
      </button>
      <button
        type="button"
        className="absolute top-1/2 transform -translate-y-1/2 right-4 z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none navigation-button"
        onClick={handleNext}
        aria-label="Suivant"
        focusable="true"
      >
        {/* Utilisation d'une icône SVG pour la flèche de défilement */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 custom-yellow "
          fill="none"
          viewBox="0  0  24  24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9  5l7  7-7  7"
          />
        </svg>
      </button>
    </div>
  );
}

export default MyCarousel;
