import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "react";
import { Link } from "react-router-dom";


const Banner = () => {
  return (
<article className="w-full pt-2">
  <div className="grid grid-cols-1 gap-6 sm:flex sm:flex-row sm:gap-6">
    <motion.div
      className="w-full h-auto items-center pt-10 md:pt-16 lg:pt-19 flex flex-col gap-3 bg-black"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center">
        Discover your Dream <br />
        Property With Estatein
      </h2>
      <p className="text-xs sm:text-sm md:text-base text-center">
        ✨Your journey to finding the perfect property begins here.
        <br />
        Explore our listings to find the home that matches your dreams.
      </p>

      <ul className="flex flex-col sm:flex-row text-sm sm:text-md lg:text-md xl:text-md 2xl:text-md gap-2 sm:gap-3 pt-1.5">
        <motion.li
          className="p-1 px-2 border border-[#333] w-fit rounded text-xs sm:text-sm cursor-pointer hover:bg-transperant hover:text-purple-700 hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.li>
        <motion.li
          className="p-1 px-2 w-fit rounded bg-purple-800 text-xs sm:text-md hover:bg-transparent hover:text-purple-700 hover:border hover:border-[#333] hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/Dprop">Browse Properties</Link>
        </motion.li>
      </ul>

      <motion.div
        className="grid grid-cols-1 sm:flex sm:flex-row gap-2 pt-3 lg:gap-4 xl:gap-5 2xl:gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {[
          { num: "200+", text: "Happy Customers" },
          { num: "10k+", text: "Properties for Clients" },
          { num: "16+", text: "Years of Experience" }
        ].map((item, i) => (
          <motion.div
            key={i}
            className="w-full sm:w-30 h-20 rounded bg-[#333333] flex flex-col justify-center hover:scale-110 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <h2 className="font-bold pl-4">{item.num}</h2>
            <p className="pl-3 text-xs sm:text-sm lg:text-md xl:text-md text-[#808080]">
              {item.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>

    {/* Image Section */}
    <motion.div
      className="w-full h-64 sm:h-80 md:h-96 lg:h-110 bg-black mt-6 sm:mt-9"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <img
        src="/home/Container.png"
        alt="hero"
        className="w-full h-full object-contain"
      />
    </motion.div>
  </div>

  {/* Cards Section */}
  <motion.div
    className="grid grid-cols-1 gap-5 pt-5 pb-3 lg:gap-5 xl:gap-6 2xl:gap-7 items-center justify-center border border-black border-solid sm:flex sm:flex-row ml-15  "
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.3 }}
  >
    {[
      { img: "/home/home Con.png", title: "Find Your Dream Home" },
      { img: "/home/value Con.png", title: "Unlock Property Value" },
      { img: "/home/prop Con.png", title: "Effortless Property Management" },
      { img: "/home/smart Con.png", title: "Smart Investments, Informed Decisions" }
    ].map((card, i) => (
      <motion.div
        key={i}
        className="w-64 h-34 rounded bg-[#1A1A1A] flex items-center justify-center cursor-pointer  "
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <span className="flex flex-col items-center justify-center gap-2 pt-2">
          <span className="flex justify-end">
            <ArrowUpRight className="text-[#666666]" width={40} />
          </span>
          <img src={card.img} alt="" width={40} />
          <h3 className="text-xs sm:text-base text-center">{card.title}</h3>
        </span>
      </motion.div>
    ))}
  </motion.div>
</article>

  );
};

export default Banner;
