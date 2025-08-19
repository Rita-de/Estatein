import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Clients = () => {
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  });
  return (
    <article className="w-full pb-9">
      <div className="w-full px-4 md:px-10 lg:pl-20 mt-17">
        <div className="flex flex-col items-start gap-4 md:items-start">
          <motion.img
            src="/home/Abstract Design.png"
            alt=""
            width={60}
            className="mb-2 mx-auto md:mx-0"
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
          />
          <div className="flex-1 w-full">
            <motion.h2
              className="text-2xl md:text-3xl pl-2 md:pl-3 pt-2 text-center md:text-left"
              variants={fadeUp(0.1)}
              initial="hidden"
              animate="visible"
            >
              What Our Clients Say
            </motion.h2>

            <div className="flex flex-col md:flex-row justify-between gap-3">
              <motion.p
                className="text-xs font-bold text-[#999999] pt-1.5 pl-0 md:pl-4 text-center md:text-left"
                variants={fadeUp(0.2)}
                initial="hidden"
                animate="visible"
              >
                Read the success stories and heartfelt testimonials from our
                valued clients. Discover why they chose Estatein for their real
                estate needs
              </motion.p>

              <motion.button
                className="mt-2 md:mt-0 md:mr-15 p-2 bg-[#1A1A1A] border border-[#262626] text-md rounded w-full md:w-auto"
                variants={fadeUp(0.3)}
                initial="hidden"
                animate="visible"
              >
                View All Testimonials
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Cards container */}
      <div className="grid grid-cols-1 gap-6 lg:gap-8 pt-10 md:flex md:flex-row md:justify-center md:items-stretch md:gap-6 ">
        {[
          {
            title: "Efficient and Reliable",
            text: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results",
            img: "/home/C1.png",
            name: "Wade Warren",
            loc: "USA, California",
          },
          {
            title: "Efficient and Reliable",
            text: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results",
            img: "/home/C2.png",
            name: "Emelie Thomson",
            loc: "USA, Nevada",
          },
          {
            title: "Efficient and Reliable",
            text: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results",
            img: "/home/C3.png",
            name: "John Mans",
            loc: "USA, Florida",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center w-full max-w-xs pt-4 pb-4 rounded-xl bg-transparent border border-[#262626] mx-auto md:mx-2 hover:scale-105 transition-transform duration-300 shadow-sm shadow-white"
            variants={fadeUp(0.4 + index * 0.15)}
            initial="hidden"
            animate="visible"
          >
            <div className="flex justify-center pt-4 pb-3 gap-2.5">
              {[...Array(5)].map((_, i) => (
                <span key={i}>
                  <img src="/home/star Con.png" alt="" width={5} className="md:w-20" />
                </span>
              ))}
            </div>
            <h5 className="font-bold text-lg md:text-2xl pb-3 pr-2 md:pr-5 text-center">
              {card.title}
            </h5>
            <p className="text-xs text-center px-2">{card.text}</p>
            <div className="flex items-center gap-3 pt-5">
              <div
                className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${card.img})` }}
              ></div>
              <div>
                <h5 className="text-sm font-semibold">{card.name}</h5>
                <p className="text-xs text-[#999999]">{card.loc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* next */}
      <motion.div
        className="w-full max-w-4xl mx-auto h-auto flex flex-col md:flex-row justify-between items-center pt-5 mt-10 pb-5 border-t-[#333] border-t border-transparent rounded-lg gap-4"
        variants={fadeUp(0.9)}
        initial="hidden"
        animate="visible"
      >
        <h5 className="pl-0 md:pl-40 text-lg">
          01 <span className="text-[#999999]">of 10</span>
        </h5>
        <div className="flex px-0 md:px-20 gap-3 mr-0 md:mr-5 mt-4 md:mt-0">
          <span className="bg-transparent border border-[#333] w-10 h-10 rounded-full flex items-center justify-center">
            <ArrowLeft />
          </span>
          <span className="bg-[#1b1b1b] w-10 h-10 rounded-full flex items-center justify-center">
            <ArrowRight />
          </span>
        </div>
      </motion.div>
    </article>
  );
}


export default Clients;
