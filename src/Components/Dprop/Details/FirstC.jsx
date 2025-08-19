import React, { useState } from "react";
import Carousel from "./Carousel";


// Dummy property data
const properties =[
      {
    id: 1,
    image:"/Dprop/villa3.jpg",
    title: "Modern Family Home",
    size: "2500 sqft",
    location: "Washington, DC 20500",
    bedrooms: 4,
    toilets: 3,
    study: 1,
     pool:1,
    price: "450,000",
    canRent: true,
  },
  {
    id: 2,
    image: "/home/homebg.png",
    title: "Metropolitan Haven",
    size: "1500 sqft",
    location: "New York, NY 10118",
    bedrooms: 2,
    toilets: 2,
    study: 2,
     pool:2,
    price: "$550,000",
     canRent: true,
   
  },
  {
    id: 3,
    image: "/Dprop/villa4.jpg",
    title: "Luxury Villa",
    size: "4000 sqft",
    location: "Cupertino, CA 95014",
    bedrooms: 5,
    toilets: 4,
    study: 2,
     pool:1,
    price: "$850,000",
    canRent: true,
  },
  {
    id: 4,
    image: "/Dprop/villa4.jpg",
    title: "Beachfront Bungalow",
    size: "1800 sqft",
    location: "Burbank, CA 91521",
    bedrooms: 2,
    toilets: 2,
    study: 1,
     pool:1,
    price: "$750,000",
    canRent: true,
  },
  {
    id: 5,
    image: "/Dprop/villa5.jpg",
    title: "Stylish Apartment",
    size: "2000 sqft",
    location: "Chicago, IL 60606",
    bedrooms: 3,
    toilets: 2,
    study: 1,
     pool:2,
    price: "$300,000",
     canRent: true,
  },
  {
    id: 6,
    image: "/Dprop/villa6.jpg",
    title: "Country House",
    size: "2700 sqft",
    location: "Chicago, IL 60606",
    bedrooms: 4,
    toilets: 3,
    study: 1,
     pool:1,
    price: "$375,000",
     canRent: true,
  },

];

// Card component
<Carousel/>

// Main Page Component
export default function FirstC() {
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
      <div className="flex flex-col items-center pb-5 pt-5 xl:pt-5 2xl:pt-5 xl:pb-20 2xl:pb-15 lg:items-start justify-center mb-6 lg:mb-0 pl-7 xl:pl-15 2xl:pl-17">
                <span>
                    <img src="/About/Abstract Design.png" alt="" width={50} />
                </span>
                <span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl pt-2 pl-0 lg:pl-3 text-center lg:text-left">Discover Available Properties</h2>
                    <p className="text-xs md:text-sm text-[#999999] pt-3 pl-0 lg:pl-4 text-center lg:text-left">
                       Our website of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home.
                    </p>
                </span>
            </div>
              <h2 className="grid text-2xl justify-center">UNITED STATE OF AMERICA</h2>
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
