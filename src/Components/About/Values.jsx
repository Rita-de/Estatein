import 'react'
import { motion } from "framer-motion";

const Values = () => {
  return (
    <section className="w-full">

<article className="flex flex-col lg:flex-row gap-6 lg:gap-9 justify-center pb-5 px-4 md:px-8 pt-17">
  {/* Left section */}
  <motion.div
    className="flex flex-col items-center lg:items-start justify-center mb-6 lg:mb-0"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <span>
      <img src="/About/Abstract Design.png" alt="" width={50} />
    </span>
    <span>
      <h2 className="text-2xl md:text-3xl lg:text-4xl pt-2 pl-0 lg:pl-3 text-center lg:text-left">
        Our Values
      </h2>
      <p className="text-xs md:text-sm text-[#999999] pt-3 pl-0 lg:pl-4 text-center lg:text-left">
        Our story is one of continuous growth and evolution. <br />
        We started as a small team with big dreams, determined to create <br />
        a real estate platform that transcended the ordinary.
      </p>
    </span>
  </motion.div>

  {/* Right section */}
  <div className="flex flex-col gap-5 pb-5 w-full max-w-xl p-4 md:p-6 border-[#262626] border-2 rounded-lg drop-shadow drop-shadow-[#191919]">
    {/* Row 1 */}
    <motion.div
      className="flex flex-col md:flex-row gap-4 md:gap-8 pb-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
    >
      {/* Trust */}
      <div className="pb-3 pl-0 md:pl-3 flex-1 pt-4">
        <span className="flex gap-2 items-center">
          <img
            src="/About/star Con.png"
            alt=""
            width={40}
            className="w-8 md:w-[45px]"
          />
          <h1 className="text-lg md:text-xl pt-2 md:pt-3 leading-4">Trust</h1>
        </span>
        <p className="text-xs md:text-sm text-[#999999] pt-3">
          Trust is the cornerstone of every successful
          <br /> real estate transaction
        </p>
      </div>

      {/* Excellence */}
      <div className="pb-2 border-t md:border-t-0 md:border-l border-[#333] md:pl-4 flex-1 pt-1 sm:pt-4">
        <span className="flex gap-2 items-center">
          <img
            src="/About/Study.png"
            alt=""
            width={40}
            className="w-8 md:w-[45px]"
          />
          <h1 className="text-lg md:text-xl pt-2 md:pt-3 leading-4">Excellence</h1>
        </span>
        <p className="text-xs md:text-sm text-[#999999] pt-3">
          We set the bar high for ourselves. From the <br /> properties we list
          to the services we provide
        </p>
      </div>
    </motion.div>

    {/* Row 2 */}
    <motion.div
      className="flex flex-col md:flex-row gap-4 md:gap-8 border-t border-[#333] pt-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {/* Client-Centric */}
      <div className="pt-3 pl-0 md:pl-3 flex-1">
        <span className="flex gap-2 items-center">
          <img
            src="/About/clients.png"
            alt=""
            width={40}
            className="w-8 md:w-[45px]"
          />
          <h1 className="text-lg md:text-xl pt-2 md:pt-3 leading-4">
            Client-Centric
          </h1>
        </span>
        <p className="text-xs md:text-sm text-[#999999] pt-3">
          Your dreams and needs are at the center of our universe. <br /> We
          listen, understand
        </p>
      </div>

      {/* Commitment */}
      <div className="pt-3 md:pl-4 border-t md:border-t-0 md:border-l border-[#333] flex-1">
        <span className="flex gap-2 items-center">
          <img
            src="/About/star Con.png"
            alt=""
            width={40}
            className="w-8 md:w-[45px]"
          />
          <h1 className="text-lg md:text-xl pt-2 md:pt-3 leading-4">
            Our Commitment
          </h1>
        </span>
        <p className="text-xs md:text-sm text-[#999999] pt-3">
          We are dedicated to providing you with the highest <br /> level of
          service, professionalism, and support.
        </p>
      </div>
    </motion.div>
  </div>
</article>

    </section>
  )
}

export default Values