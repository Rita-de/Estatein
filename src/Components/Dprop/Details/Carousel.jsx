// components/PropertyCard.jsx
import  { useState } from "react";
import { Link } from "react-router-dom";

export default function Carousel({ property }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails((prev) => !prev);

  return (
    <div
      onClick={toggleDetails}
      className="w-full sm:w-[48%] lg:w-[30%] cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative bg-transperant">
      <div className="relative w-full h-64">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40 pointer-events-none" />
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out transform ${
          showDetails
            ? "max-h-[1000px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}>
        <div className="p-4 bg-transperant ">
          <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
          <p className="mb-1">
            <strong>Size:</strong> {property.size}
          </p>
          <p className="mb-1">
            <strong>Location:</strong> {property.location}
          </p>
          <p className="mb-1">
            <strong>Bedrooms:</strong> {property.bedrooms}
          </p>
          <p className="mb-1">
            <strong>Toilets:</strong> {property.toilets}
          </p>
          <p className="mb-1">
            <strong>Study Rooms:</strong> {property.study}
          </p>
          <p className="mb-1">
            <strong>Pool</strong> {property.pool}
          </p>

          {property.canRent && (
            <p className="mb-2 text-green-700 font-semibold">
              Available to Rent
            </p>
          )}

          <p className="text-lg font-bold text-[#703BF7] ">
            Price: {property.price}
          </p>

          <button
          
            className="mt-4 w-full bg-[#703BF7] hover:bg-[#703BF7]  text-white py-2 rounded">
            <Link to="/book"
              onClick={(e) => {
              e.stopPropagation();
              alert(`Booking property: ${property.title}`);
            }}>Book</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
