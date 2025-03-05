import React, { useState, useEffect, useRef } from "react";
import data from "../../data/home.json";

const Testimonials = () => {
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  const testimonialsData = data.testimonials || [];
  const cardWidth = 400;
  const duplicatedData = [...testimonialsData, ...testimonialsData]; // Duplicate the testimonials

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setOffset((prevOffset) => {
        const maxOffset = cardWidth * testimonialsData.length;

        // If we scroll past the original set, instantly reset to 0
        if (Math.abs(prevOffset) >= maxOffset) {
          return 0;
        }
        return prevOffset - 1; // Move 1px left each step
      });
    }, 16); // Smooth scrolling speed

    return () => clearInterval(interval);
  }, [isPaused, testimonialsData.length, cardWidth]);

  return (
    <div
      className="w-full overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)} // Pause animation on hover
      onMouseLeave={() => setIsPaused(false)} // Resume animation on leave
    >
      <div
        ref={carouselRef}
        className="flex"
        style={{
          transform: `translateX(${offset}px)`,
          transition: "none", // Disable smooth transition for seamless reset
        }}
      >
        {/* Render duplicated testimonials */}
        {duplicatedData.map((testimonial, index) => (
          <div
            key={index}
            className="w-[400px] flex-shrink-0 mx-2 mt-20 bg-gradient-to-b from-stone-300/40 to-transparent p-[3px] rounded-[12px]" // Updated width to 400px
          >
            <div className="p-[2px] rounded-[10px] bg-gradient-to-b from-white to-stone-200/30 shadow-md">
              <div className="bg-gradient-to-b from-stone-200/30 to-white/70 p-6">
                <p className="text-gray-700 italic font-light mb-4">"{testimonial.text}"</p>
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                <span className="text-gray-500">{testimonial.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
