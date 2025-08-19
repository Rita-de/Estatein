import { ArrowLeft, ArrowRight } from 'lucide-react'
import 'react'
import { motion } from "framer-motion";

const AC = () => {
  return (
    <section>
    <motion.article
      className="w-full flex flex-col justify-center items-center pt-10 pb-10 lg:pt-20 lg:pb-20 px-4 md:px-8 lg:px-[162px]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex flex-col items-center lg:items-start justify-center mb-6 lg:mb-0 w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <span>
          <img src="/About/Abstract Design.png" alt="" width={50} />
        </span>
        <span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl pt-2 pl-0 lg:pl-3 text-center lg:text-left">
            Our Valued Clients
          </h2>
          <p className="text-xs md:text-sm text-[#999999] pt-3 pl-0 lg:pl-4 text-center lg:text-left">
            At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving
          </p>
        </span>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-7 w-full">
        {/* Card 1 */}
        <motion.div
          className="pt-5 flex-1 min-w-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="border-2 rounded-lg border-[#1A1A1A] w-full h-full space-y-4 p-3 sm:p-4">
            <div className="flex flex-col sm:flex-row justify-between pl-2 pr-2 sm:pl-5 sm:pr-5 pt-4 gap-2">
              <h2 className="text-lg">
                <h5 className="text-sm text-[#999999]">Since 2019</h5>
                ABC Corperation
              </h2>
              <button className="p-2 px-3 bg-[#1A1A1A] border border-[#262626] rounded-lg mt-2 sm:mt-0 text-sm w-full sm:w-auto">
                Visit Website
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-between pl-2 pr-2 sm:pl-5 sm:pr-5 pt-4">
              <span className="flex-1">
                <p className="flex text-md text-[#999999] gap-1 items-center">
                  <img src="/About/dom.png" alt="" className="w-4 h-4" />
                  Domain
                </p>
                <h2 className="text-sm sm:text-base">Commercial Real Estate</h2>
              </span>
              <span className="pt-1 sm:border-l border-[#262626] sm:pl-5 flex-1">
                <p className="flex text-sm text-[#999999] gap-1 items-center">
                  <img src="/About/flash.png" alt="" className="w-4 h-4" />
                  Category
                </p>
                <h2 className="text-sm sm:text-base">Luxury Home Development</h2>
              </span>
            </div>
            <div className="border-2 border-[#262626] rounded-lg p-4 sm:p-5 ml-0 sm:ml-6 w-full drop-shadow drop-shadow-[#191919]">
              <h2 className="text-sm text-[#999999] pl-2 pb-2">What They Said🤗</h2>
              <p className="text-sm">
                Estatein's expertise in finding the perfect office space for our expanding, operations was invaluable. They truly understand our business needs.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="pt-5 flex-1 min-w-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="border-2 rounded-lg border-[#1A1A1A] w-full h-full space-y-4 p-3 sm:p-4">
            <div className="flex flex-col sm:flex-row justify-between pl-2 pr-2 sm:pl-5 sm:pr-5 pt-4 gap-2">
              <h2 className="text-lg">
                <h5 className="text-sm text-[#999999]">Since 2018</h5>
                GreenTech Enterprises
              </h2>
              <button className="p-2 px-3 bg-[#1A1A1A] border border-[#262626] rounded-lg mt-2 sm:mt-0 text-sm w-full sm:w-auto">
                Visit Website
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-between pl-2 pr-2 sm:pl-5 sm:pr-5 pt-4">
              <span className="flex-1">
                <p className="flex text-md text-[#999999] gap-1 items-center">
                  <img src="/About/dom.png" alt="" className="w-4 h-4" />
                  Domain
                </p>
                <h2 className="text-sm sm:text-base">Commercial Real Estate</h2>
              </span>
              <span className="pt-1 sm:border-l border-[#262626] sm:pl-5 flex-1">
                <p className="flex text-sm text-[#999999] gap-1 items-center">
                  <img src="/About/flash.png" alt="" className="w-4 h-4" />
                  Category
                </p>
                <h2 className="text-sm sm:text-base">Retail Space</h2>
              </span>
            </div>
            <div className="border-2 border-[#262626] rounded-lg p-4 sm:p-5 ml-0 sm:ml-6 w-full drop-shadow drop-shadow-[#191919]">
              <h2 className="text-sm text-[#999999] pl-2 pb-2">What They Said🤗</h2>
              <p className="text-sm">
                Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="w-full flex flex-col sm:flex-row justify-between items-center pt-5 mt-4 px-4 sm:px-8 md:px-16 pb-5 border-t-[#333] border-t border border-transparent rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <h5 className="text-lg mb-2 sm:mb-0">
          01 <span className="text-[#999999]">of 10</span>
        </h5>
        <div className="flex gap-3">
          <span className="bg-transparent border border-[#333] w-10 h-10 flex items-center justify-center rounded-full">
            <ArrowLeft />
          </span>
          <span className="bg-[#1b1b1b] w-10 h-10 flex items-center justify-center rounded-full">
            <ArrowRight />
          </span>
        </div>
      </motion.div>
    </motion.article>
  
      </section>
    )
  }

  export default AC
                        {/* next button */}