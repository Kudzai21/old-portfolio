import React, { useEffect, useState } from "react";
import homeData from "../../data/home.json";

// Import images statically
import Carousel1 from "../../assets/carousel/Carousel1.jpg";
import Carousel2 from "../../assets/carousel/Carousel2.jpg";
import Carousel3 from "../../assets/carousel/Carousel3.jpg";
import Carousel4 from "../../assets/carousel/Carousel4.jpg";
import Carousel5 from "../../assets/carousel/Carousel5.jpg";
import Carousel6 from "../../assets/carousel/Carousel6.jpg";
import Carousel7 from "../../assets/carousel/Carousel7.jpg";
import Carousel8 from "../../assets/carousel/Carousel8.jpg";



const Carousel = ({ speed = 20 }) => {
  const [offset, setOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Map static imports to JSON data
  const imageMap = {
    "Carousel1.jpg": Carousel1,
    "Carousel2.jpg": Carousel2,
    "Carousel3.jpg": Carousel3,
    "Carousel4.jpg": Carousel4,
    "Carousel5.jpg": Carousel5,
    "Carousel6.jpg": Carousel6,
    "Carousel7.jpg": Carousel7,
    "Carousel8.jpg": Carousel8,

  };

  const images = homeData.carouselImages.map((image) => ({
    src: imageMap[image.src], // Map JSON filenames to imported images
    alt: image.alt,
  }));

  useEffect(() => {
    if (isHovered) return; // Pause scrolling when hovered

    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset - 2) % (images.length * 620));
    }, speed);

    return () => clearInterval(interval);
  }, [images.length, speed, isHovered]);

  return (
    <div
      className="overflow-hidden relative w-full h-[600px] mt-20"
      onMouseEnter={() => setIsHovered(true)} // Stop movement on hover
      onMouseLeave={() => setIsHovered(false)} // Resume movement when hover ends
    >
      <div
        className="absolute flex w-max h-full"
        style={{ transform: `translateX(${offset}px)` }}
      >
        {/* Render the images */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-[600px] h-[600px] object-cover flex-shrink-0"
          />
        ))}
        {/* Render duplicate images for seamless scrolling */}
        {images.map((image, index) => (
          <img
            key={`duplicate-${index}`}
            src={image.src}
            alt={`Duplicate ${image.alt}`}
            className="w-[600px] h-[600px] object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
