

import { Banknote, Box, Building2, Calendar, MapPin, Search } from 'lucide-react'
import 'react'
import ChevronSelect from './messagefile/Chevron'
import { motion } from 'framer-motion'

const PBanner = () => {
  const filters = [
    { icon: <MapPin color="#999999" size={18} />, label: "Location" },
    { icon: <Building2 color="#999999" size={18} />, label: "Property Type" },
    { icon: <Banknote color="#999999" size={18} />, label: "Pricing Range" },
    { icon: <Box color="#999999" size={18} />, label: "Property Size" },
    { icon: <Calendar color="#999999" size={18} />, label: "Build Year" },
  ];
  return (

    <motion.section
      className="px-2 py-6 md:px-4 md:py-8 lg:py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.article
        className="border border-[#262626] bg-gradient-to-r from-[#0d0d0d] to-[#262626] rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.div
          className="flex flex-col items-center justify-center text-center py-8 px-4 md:px-8 lg:px-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold pb-3">
            Find Your Dream Property
          </h2>
          <p className="text-xs sm:text-sm text-[#999999] max-w-full sm:max-w-xl md:max-w-2xl">
            Welcome to Estatein, where your dream property awaits in every corner of our beautiful world.
            Explore our curated selection of properties, each offering a unique story
            <br className="hidden md:block" /> and a chance to redefine your life. With categories to suit every dreamer, your journey begins here.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          className="flex justify-center mt-6 px-2 pb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex w-full max-w-xs sm:max-w-md md:max-w-xl items-center border-2 border-[#262626] rounded-md px-2 py-2 bg-black shadow-md">
            <input
              type="text"
              placeholder="Search For Property"
              className="bg-transparent outline-none flex-grow text-xs sm:text-sm ml-2"
            />
            <button className="bg-[#703BF7] px-3 py-2 rounded-lg text-xs sm:text-sm whitespace-nowrap flex items-center ml-2">
              <Search width={15} className="sm:w-[17px]" /> <span className="ml-1">Find Property</span>
            </button>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center pb-4 gap-2 sm:gap-3 md:gap-4"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.5 },
            },
          }}
          viewport={{ once: true }}
        >
          {filters.map(({ icon, label }, idx) => (
            <motion.div
              key={idx}
              className="flex items-center border-2 border-[#262626] px-3 py-2 gap-2 rounded-lg shadow-md min-w-[110px] sm:min-w-[140px]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              {icon}
              <span className="border-l border-[#262626] pl-2 text-xs sm:text-sm">{label}</span>
              <ChevronSelect />
            </motion.div>
          ))}
        </motion.div>
      </motion.article>
    </motion.section>
  );
}

  
export default PBanner