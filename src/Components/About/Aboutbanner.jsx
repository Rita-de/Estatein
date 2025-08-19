import "react";
import { motion } from "framer-motion";


function Aboutbanner  () {

  return ( 

<section className="w-full text-white font-ubanist">
  <div className="w-full">
    <article className="w-full pt-9 pb-10">
      <div className="w-full grid grid-cols-1 gap-10 md:gap-8 lg:flex lg:justify-between lg:items-center p-4 md:p-8 lg:px-[162px] lg:py-[20px]">
        
        {/* Left Side - Text */}
        <motion.div
          className="space-y-2 pr-0 lg:pr-3 w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="flex items-center pb-3">
            <img src="/About/Abstract Design.png" alt="" width={40} className="w-10 md:w-12" />
          </span>
          <h1 className="text-2xl md:text-4xl pl-1 md:pl-3">Our Journey</h1>
          <p className="text-xs md:text-sm pt-3 text-[#999999]">
            Our story is one of continuous growth and evolution. We started
            as a small team with big dreams,
            <br className="hidden md:block" /> determined to create a real estate platform that
            transcended the ordinary. Over the <br className="hidden md:block" /> years, we've expanded
            our reach, forged valuable partnerships, and gained the trust of{" "}
            <br className="hidden md:block" /> countless clients
          </p>

          {/* Stats */}
          <div className="pt-5 w-full grid grid-cols-1 gap-4 sm:grid-cols-3 sm:flex sm:flex-row sm:gap-4 pl-0 sm:pl-5">
            {[
              { number: "200k+", label: "Happy Customers" },
              { number: "10k+", label: "Properties For Clients" },
              { number: "16+", label: "Years of Experience" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex-1 w-50 bg-[#1A1A1A] h-24 rounded border-[#262626] border"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <span className="flex flex-col items-center pt-4">
                  <h2 className="text-xl md:text-2xl font-bold">{stat.number}</h2>
                  <p className="text-xs text-[#999999]">{stat.label}</p>
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="pl-10 lg:pl-7 w-full lg:w-1/2 flex justify-center pt-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto flex items-center">
            <img src="/About/banner.png" alt="" className="w-full h-full object-contain" />
          </div>
        </motion.div>

      </div>
    </article>
  </div>
</section>

  );
};

export default Aboutbanner;
