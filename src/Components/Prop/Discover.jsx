import 'react'
import { ArrowLeft, ArrowRight, Bath, BedDouble, Building2 } from 'lucide-react'
import { motion } from "framer-motion";

const Discover = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };


  return (
    <section className="w-full">
      <article className="lg:flex-row gap-6 lg:gap-9 justify-center pb-5 px-4 md:px-8 pt-17">
        {/* Heading */}
        <motion.div
          className="flex flex-col items-center lg:items-start justify-center mb-6 lg:mb-0 pl-7 xl:pl-15 2xl:pl-17"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span>
            <img src="/About/Abstract Design.png" alt="" width={50} />
          </span>
          <span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl pt-2 pl-0 lg:pl-3 text-center lg:text-left">
              Discover a World of Possibilities
            </h2>
            <p className="text-xs md:text-sm text-[#999999] pt-3 pl-0 lg:pl-4 text-center lg:text-left">
              Our portfolio of properties is as diverse as your dreams. Explore
              the following categories to find the perfect property that
              resonates with your vision of home.
            </p>
          </span>
        </motion.div>

        {/* Property Cards */}
        <div className="w-full flex flex-col md:flex-row pt-10 pl-0 sm:pl-4 md:pl-8 pb-3 justify-center items-center gap-6 md:gap-10 lg:gap-20">
          {[
            {
              title: "Seaside Serenity Villa",
              desc: "Wake up to the soothing melody of waves. This beachfront villa offers... Read More",
              img: "home/homebg.png",
              bed: "4-Bedroom",
              bath: "3-Bathroom",
              type: "Villa",
              price: "$1,250,000",
            },
            {
              title: "Metropolitan Haven",
              desc: "Immerse yourself in the energy of the city. This modern apartment in the heart... Read More",
              img: "home/homebg2.png",
              bed: "2-Bedroom",
              bath: "2-Bathroom",
              type: "Villa",
              price: "$650,000",
            },
            {
              title: "Rustic Retreat Cottage",
              desc: "Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills... Read More",
              img: "home/homebg3.png",
              bed: "3-Bedroom",
              bath: "3-Bathroom",
              type: "Villa",
              price: "$350,000",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="flex flex-col w-full md:w-auto"
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true }}
            >
              <div
                className="w-full max-w-xs bg-transparent border border-[#262626] rounded-xl p-4 flex flex-col justify-between 
                mx-auto hover:scale-105 transition-transform duration-300 shadow-sm shadow-[#262626]"
              >
                <span
                  className={`w-full h-40 sm:h-49 bg-[url(${card.img})] bg-cover bg-center bg-no-repeat rounded-lg`}
                ></span>
                <h2 className="text-lg sm:text-xl font-semibold mt-1.5">
                  {card.title}
                </h2>
                <p className="text-xs mb-3 mt-1.5">{card.desc}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="flex items-center gap-1.5 bg-[#2226] px-2 py-1 rounded-lg border border-[#333]">
                    <BedDouble width={20} />
                    <p className="text-xs">{card.bed}</p>
                  </span>
                  <span className="flex items-center gap-1.5 bg-[#2226] px-2 py-1 rounded-lg border border-[#333]">
                    <Bath width={20} />
                    <p className="text-xs">{card.bath}</p>
                  </span>
                  <span className="flex items-center gap-1.5 bg-[#2226] px-2 py-1 rounded-lg border border-[#333]">
                    <Building2 width={20} />
                    <p className="text-xs">{card.type}</p>
                  </span>
                </div>
                <span className="flex flex-col sm:flex-row items-start sm:items-center gap-2 pt-2 xl:gap-4 2xl:gap-5 flex-wrap">
                  <span className="flex flex-col">
                    <h5 className="text-xs text-[#999999]">Price</h5>
                    <p className="text-sm">{card.price}</p>
                  </span>
                  <button className="bg-[#703BF7] p-1 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-md whitespace-nowrap mt-2 sm:mt-0">
                    View Property Details
                  </button>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <motion.div
          className="w-full flex flex-col sm:flex-row justify-between items-center pt-5 mt-4 px-4 sm:px-8 md:px-16 pb-5 border-t-[#333] border-t border border-transparent rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
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
      </article>
    </section>
  );
}



export default Discover