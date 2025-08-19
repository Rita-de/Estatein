import React, { useState, useEffect } from "react";

const images = [
 "/Dprop/villa.jpg",
  '/Dprop/haven.jpg',
  "/Dprop/kit.jpg",
  "/Dprop/bed.jpg",
  "/Dprop/bath.jpg",
  "/Dprop/study.jpg",
  "/Dprop/pool.jpg",
  // add your banner image URLs here
];

export default function Scroller() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTextVisible(false); // trigger fade out

      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setTextVisible(true); // fade in new text
      }, 600); // match transition duration
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const texts = [
    "Explore Your Dream Property",
    "Find The Best Real Estate Deals",
    "Make Your Meals Perfect",
    "Make Your Sleep Comfortable",
    "Make Your Bath Calm and Peaceful",
    "Be Able to Study In Perfect Peace",
    "Your Perfect Home Awaits",
    "Your Cooling Hour awaits"
  ];

  return (
    <div className="relative  mx-auto px-7 max-w-6xl overflow-hidden rounded-xl shadow-lg mt-15  " style={{ height: "500px" }}>
      <div
        className="flex transition-transform duration-700  "
        style={{ transform: `translateX(-${currentIndex * 100}%)`, height: "600px",willChange: "transform",  }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            className="w-full flex-shrink-0 object-cover "
            style={{ height: "600px" }}
             loading="lazy"
          />
        ))}
      </div>

      {/* Overlay text container */}
      <div className="absolute inset-0 bg-black opacity-40 rounded-lg pointer-events-none"></div>

  {/* Text overlay */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-6">
    {/* text here */}
  </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2
          className={`text-white text-3xl md:text-4xl font-bold max-w-3xl text-center
            transition-all duration-700 ease-in-out
            ${
              textVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
        >
          {texts[currentIndex]}
        </h2>
      </div>
    </div>
  );
}
