
import React, { useState } from "react";
import Carousel from "./Carousel";
import path from "path";

// Dummy property data
const properties =[
      {
    id: 1,
    image:"/Dprop/villa7.jpg",
    title: "Cozy Beachfront Retreat",
    size: "2500 sqft",
    location: "Darwin, NT 0800",
    bedrooms: 4,
    toilets: 3,
    study: 1,
     pool:1,
    price: "$350,000",
    canBuy: true,
  },
  {
    id: 2,
    image: "/Dprop/villa8.jpg",
    title: "Charming Garden Residence",
    size: "1500 sqft",
    location: "Adelaide, SA 5000",
    bedrooms: 2,
    toilets: 2,
    study: 2,
     pool:2,
    price: "$550,000",
    canBuy: true,
     path:"/haven"
  },
  {
    id: 3,
    image: "/Dprop/villa9.jpg",
    title: "Exclusive Private Mansion",
    size: "4000 sqft",
    location: "Brisbane, QLD 4000",
    bedrooms: 5,
    toilets: 4,
    study: 2,
     pool:1,
    price: "$850,000",
    canBuy: true,
  },
  {
    id: 4,
    image: "/home/homebg2.png",
    title: "Stylish Metropolitan Estate",
    size: "1800 sqft",
    location: "Perth, WA 6000",
    bedrooms: 2,
    toilets: 2,
    study: 1,
     pool:1,
    price: "$450,000",
    canBuy: true,
    path:""
  },
  {
    id: 5,
    image: "/Dprop/villa10.jpg",
    title: "Bright Open-Plan Villa",
    size: "2000 sqft",
    location: "Melbourne, VIC 3000",
    bedrooms: 3,
    toilets: 2,
    study: 1,
     pool:2,
    price: "$300,000",
    canBuy: true,
  },
  {
    id: 6,
    image: "/Dprop/villa11.jpg",
    title: "Classic Colonial House",
    size: "2700 sqft",
    location: "Sydney, NSW 2000",
    bedrooms: 4,
    toilets: 3,
    study: 1,
     pool:1,
    price: "$375,000",
    canBuy: false,
  },
];

// Card component
<Carousel/>

// Main Page Component
export default function FC() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    if (startIndex + itemsPerPage < properties.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const prevSlide = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const visibleCards = properties.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
   
                <h2 className="grid justify-center text-2xl">Australia</h2>
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevSlide}
          disabled={startIndex === 0}
          className={`px-4 pb-4  py-2 bg-[#262626] hover:bg-gray-500 text-white  text-2xl font-bolder rounded-full transition ${
            startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          ←
        </button>

        <button
          onClick={nextSlide}
          disabled={startIndex + itemsPerPage >= properties.length}
          className={`px-4 pb-2 py-1 bg-[#262626] hover:bg-gray-400 text-white  text-2xl font-bolder rounded-full transition ${
            startIndex + itemsPerPage >= properties.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          →
        </button>
      </div>

      <div className="flex flex-wrap gap-6 justify-center transition-all duration-500">
        {visibleCards.map((property) => (
          <Carousel key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
