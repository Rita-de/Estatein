import { ArrowLeft, ArrowRight, } from 'lucide-react'
import  'react'
import Minippp from './mini/Minippp'
import Minipp from './mini/Minipp'
import MiniP from './mini/MiniP'
import { motion } from 'framer-motion'


const Prop = () => {
 const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  return (
    <motion.article
      className="w-full h-full pt-8 sm:pt-10 md:pt-12 lg:pt-16 pl-4 sm:pl-8 md:pl-12 lg:pl-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <motion.div
        className="pl-2 sm:pl-8 md:pl-16 h-10 pt-2 flex justify-center sm:justify-start"
        variants={fadeUp}
      >
        <img src="/home/Abstract Design.png" alt="" width={60} />
      </motion.div>

      <motion.div
        className="px-2 sm:px-6 md:px-12 pt-5"
        variants={fadeUp}
      >
        <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold pl-1 sm:pl-3">
          Featured Properties
        </h2>
        <p className="text-xs sm:text-sm text-[#999999] mt-2">
          Explore our handpicked selection of featured properties. Each
          listing offers a glimpse into exceptional homes
          <br className="hidden sm:block" />
          and investments available through Estatein. Click "View Details"
          for more information.
        </p>
      </motion.div>

      <div className="w-full flex flex-col md:flex-row pt-10 pl-0 sm:pl-4 md:pl-8 pb-3 justify-center items-center gap-6 md:gap-10 lg:gap-20">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
          <Minippp />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
          <Minipp />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
          <MiniP />
        </motion.div>
      </div>

      {/* next button */}
      <motion.div
        className="w-full flex flex-col sm:flex-row justify-between items-center pt-5 mt-4 px-4 sm:px-8 md:px-16 pb-5 border-t-[#333] border-t border border-transparent rounded-lg"
        variants={fadeUp}
      >
        <h5 className="text-lg mb-2 sm:mb-0">
          01 <span className="text-[#999999]">of 60</span>
        </h5>
        <div className="flex gap-3">
          <span className="bg-transparent border border-[#333] w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform duration-300">
            <ArrowLeft />
          </span>
          <span className="bg-[#1b1b1b] w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform duration-300">
            <ArrowRight />
          </span>
        </div>
      </motion.div>
    </motion.article>
  );
};



export default Prop