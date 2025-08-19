import 'react'
import { motion } from "framer-motion";

const Faqs = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <article className="w-full">
      <div className="w-full px-4 md:pl-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* head */}
          <motion.img
            src="/home/Abstract Design.png"
            alt=""
            width={60}
            variants={fadeUp}
          />
          <motion.h2
            className="text-2xl md:text-3xl pl-1 md:pl-3 pt-2"
            variants={fadeUp}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.span
            className="flex flex-col md:flex-row justify-between gap-3"
            variants={fadeUp}
          >
            <p className="text-xs font-bold text-[#999999] pt-1.5 md:pl-4">
              Find answers to common questions about Estatein's services,
              property listings, and the real estate process.
              <br /> We're here to provide clarity and assist you every step of
              the way.
            </p>
            <button className="self-start md:self-center mt-2 md:mt-0 mr-0 md:mr-15 p-2 px-3 bg-[#1A1A1A] border border-[#262626] text-md rounded">
              View All FAQ's
            </button>
          </motion.span>
        </motion.div>

        {/* cards */}
        <motion.div
          className="w-full pt-9 flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* card1 */}
          <motion.div
            variants={fadeUp}
            className="w-full md:w-80 h-auto pt-4 pb-8 rounded-xl bg-transparent border border-[#262626] mb-4 md:mb-0 hover:scale-105 transition-transform duration-300 shadow-sm shadow-white"
          >
            <span className="flex flex-col justify-center items-center pb-4 pl-3 font-extralight">
              <h5 className="font-semibold text-lg md:text-xl pb-3 pr-0 md:pr-5 pl-0 md:pl-2 text-center">
                How do I search for properties on Estatein?
              </h5>
              <p className="text-xs text-center">
                Learn how to use our user-friendly search tools to find
                properties that match your criteria.
              </p>
            </span>
            <div className="flex justify-center md:pl-20">
              <button className="mt-2 mb-4 p-2 px-4 bg-[#1A1A1A] border border-[#262626] text-md rounded">
                Read More
              </button>
            </div>
          </motion.div>

          {/* card2 */}
          <motion.div
            variants={fadeUp}
            className="w-full md:w-80 h-auto pt-4 pb-8 rounded-xl bg-transparent border border-[#262626] mb-4 md:mb-0 hover:scale-105 transition-transform duration-300 shadow-sm shadow-white"
          >
            <span className="flex flex-col justify-center items-center pb-4 pl-3 font-extralight">
              <h5 className="font-semibold text-base md:text-lg pb-3 pr-0 md:pr-5 text-center">
                What documents do I need to sell my property through Estatein?
              </h5>
              <p className="text-xs text-center">
                Find out about the necessary documentation for listing your
                property with us.
              </p>
            </span>
            <div className="flex justify-center md:pl-20">
              <button className="mt-2 mb-4 p-2 px-4 bg-[#1A1A1A] border border-[#262626] text-md rounded">
                Read More
              </button>
            </div>
          </motion.div>

          {/* card3 */}
          <motion.div
            variants={fadeUp}
            className="w-full md:w-80 h-auto pt-4 pb-8 rounded-xl bg-transparent border border-[#262626] hover:scale-105 transition-transform duration-300 shadow-sm shadow-white"
          >
            <span className="flex flex-col justify-center items-center pb-4 pl-3 font-extralight">
              <h5 className="font-semibold text-lg md:text-xl pb-3 pr-0 md:pr-5 text-center">
                How can I contact an Estatein agent?
              </h5>
              <p className="text-xs text-center">
                Discover the different ways you can get in touch with our
                experienced agents
              </p>
            </span>
            <div className="flex justify-center md:pl-20">
              <button className="mt-2 mb-4 p-2 px-4 bg-[#1A1A1A] border border-[#262626] text-md rounded">
                Read More
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </article>
  );
}

export default Faqs