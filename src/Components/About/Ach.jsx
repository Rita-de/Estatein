import  'react'
import { motion } from "framer-motion";

export const Ach = () => {
  return (
    <section className="w-full">

<article className="pb-5 pt-20 grid pr-4 pl-4 md:pr-10 md:pl-0 items-center justify-center">
  <motion.div
    className="flex flex-col justify-center items-center md:items-start"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <span>
      <img src="/About/Abstract Design.png" alt="" width={50} />
    </span>
    <span>
      <h2 className="text-2xl md:text-4xl pt-2 pl-0 text-center md:text-left">
        Our Achievements
      </h2>
      <p className="text-xs md:text-sm text-[#999999] pt-3 pl-0 text-center md:text-left">
        Our story is one of continuous growth and evolution.
        We started as a small team with big dreams, determined to create a real
        estate platform that transcended the ordinary.
      </p>
    </span>
  </motion.div>

  <div className="pt-9 flex flex-col md:flex-row gap-4 items-center md:items-stretch">
    {[ 
      {
        title: "3+ Years of Excellence",
        text: `With over 3 years in the industry, we've amassed a
        wealth of knowledge and experience, becoming a
        go-to resource for all things real estate.`,
      },
      {
        title: "Happy Clients",
        text: `Our greatest achievement is the satisfaction of our 
        clients. Their success stories fuel our passion for
        what we do.`,
      },
      {
        title: "Industry Recognition",
        text: `We've earned the respect of our peers and industry 
        leaders, with accolades and awards that reflect our commitment to excellence.`,
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        className="border-4 border-[#262626] drop-shadow drop-shadow-[#191919] w-full md:w-fit p-6 rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      >
        <h1 className="text-lg md:text-xl font-bold pl-2 text-center md:text-left">
          {item.title}
        </h1>
        <p className="text-xs md:text-sm text-[#999999] pt-2 text-center md:text-left">
          {item.text}
        </p>
      </motion.div>
    ))}
  </div>
</article>

    </section>
  )
}
