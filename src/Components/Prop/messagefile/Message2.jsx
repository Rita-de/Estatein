

import  'react'
import ChevronSelect from './Chevron'
import { motion } from "framer-motion";

const Message2 = () => {
  return (
      <form>  

    <motion.div
      className="flex flex-col gap-6 justify-center pt-6 md:flex-row md:gap-9"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.15, duration: 0.5 },
        },
      }}
    >
      {/* Preferred Location */}
      <motion.div
        className="w-full md:w-auto"
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      >
        <label htmlFor="location">Preferred Location</label>
        <br />
        <span className="flex items-center border border-[#262626] rounded-md px-3 py-2 w-full max-w-xs mt-3 shadow shadow-[#333]">
          <input
            type="text"
            id="location"
            placeholder="Select Location"
            className="bg-transparent outline-none flex-grow text-xs ml-1"
          />
          <ChevronSelect />
        </span>
      </motion.div>

      {/* Property Type */}
      <motion.div
        className="w-full md:w-auto"
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      >
        <label htmlFor="propertyType">Property Type</label>
        <br />
        <span className="flex items-center border border-[#262626] rounded-md px-3 py-2 w-full max-w-xs mt-3 shadow shadow-[#333]">
          <input
            type="text"
            id="propertyType"
            placeholder="Select Property Type"
            className="bg-transparent outline-none flex-grow text-xs ml-1"
          />
          <ChevronSelect />
        </span>
      </motion.div>

      {/* No. of Bathrooms */}
      <motion.div
        className="w-full md:w-auto"
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      >
        <label htmlFor="bathrooms">No. of Bathrooms</label>
        <br />
        <span className="flex items-center border border-[#262626] rounded-md px-3 py-2 w-full max-w-xs mt-3 shadow shadow-[#333]">
          <input
            type="text"
            id="bathrooms"
            placeholder="Select no. of Bathrooms"
            className="bg-transparent outline-none flex-grow text-xs ml-1"
          />
          <ChevronSelect />
        </span>
      </motion.div>

      {/* No. of Bedrooms */}
      <motion.div
        className="w-full md:w-auto"
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      >
        <label htmlFor="bedrooms">No. of Bedrooms</label>
        <br />
        <span className="flex items-center border border-[#262626] rounded-md px-3 py-2 w-full max-w-xs mt-3 shadow shadow-[#333]">
          <input
            type="text"
            id="bedrooms"
            placeholder="Select no. of Bedrooms"
            className="bg-transparent outline-none flex-grow text-xs ml-1"
          />
          <ChevronSelect />
        </span>
      </motion.div>
    </motion.div>


               </form>
  )
}

export default Message2