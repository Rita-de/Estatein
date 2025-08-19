import { useState } from "react";
import { Link } from "react-router-dom";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.name} on ${formData.date} at ${formData.time}`);
  };

  return (
    <div className="min-h-screen bg-opacity-7 0 bg-[url(/Book/bg.jpg)]  bg-center bg-cover bg-no-repeat  flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg space-y-5"
      >
        <h1 className="text-2xl font-bold text-center text-purple-700">Book Your Appointment</h1>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 text-black shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 text-black  shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
          />
        </div>

        {/* Service */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Service</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 text-black shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
          >
            <option className="bg-transparent" value="">Select a service</option>
            <option className="bg-transparent" value="property-tour">Property Tour</option>
            <option className="bg-transparent"value="consultation">Consultation</option>
            <option className="bg-transparent"value="valuation">Property Valuation</option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 text-black  shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
          />
        </div>

        {/* Time */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 text-black  shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-2 px-4 rounded-lg shadow hover:bg-purple-800 transition"
        >
          Rent Now
        </button>

         <button
          type="submit"
          className="w-full bg-purple-700 text-white py-2 px-4 rounded-lg shadow hover:bg-purple-800 transition"
        >
         <Link to="/home">Back</Link>
        </button>
      </form>
    </div>
  );
}
