import 'react'
import { motion } from "framer-motion";



const Navigate = () => {
  return (
   <section className="w-full">
<article className="grid justify-center pt-10 md:pt-20">

  {/* Header */}
  <motion.div
    className="flex flex-col items-center md:items-start justify-center px-4"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <span>
      <img src="/About/Abstract Design.png" alt="" width={50} />
    </span>
    <span>
      <h2 className="text-2xl md:text-4xl pt-2 pl-0 md:pl-2 text-center md:text-left">
        Navigating the Estatein Experience
      </h2>
      <p className="text-xs md:text-sm text-[#999999] pt-3 pl-0 md:pl-4 text-center md:text-left">
        At Estatein, we've designed a straightforward process to help you find and purchase
        your dream property with ease. Here's a step-by-step guide to how it all works.
      </p>
    </span>
  </motion.div>

  <div className="pt-9 space-y-9">
    {/* 1st Row */}
    <div className="flex flex-col md:flex-row gap-6 md:gap-4 items-center md:items-stretch">
      {[
        {
          step: "Step 01",
          title: "Discover a World of Possibilities",
          text: `Your journey begins with exploring our carefully
          curated property listings. Use our intuitive search
          tools to filter properties based on your preferences,
          including location, type, size, and budget.`,
        },
        {
          step: "Step 02",
          title: "Narrowing Down Your Choices",
          text: `Once you've found properties that catch your eye,
          save them to your account or make a shortlist. This
          allows you to compare and revisit your favorites as
          you make your decision.`,
        },
        {
          step: "Step 03",
          title: "Personalized Guidance",
          text: `Have questions about a property or need more
          information? Our dedicated team of real estate
          experts is just a call or message away.`,
        },
      ].map((card, index) => (
        <motion.div
          key={index}
          className="w-full md:w-fit rounded-lg p-4 hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="pb-3 border-l pt-4 text-lg pl-4 border-[#262626]">{card.step}</h3>
          <div className="border w-full md:w-fit p-5 md:p-7 border-[#262626] rounded-lg shadow-sm shadow-[#703BF7]">
            <h2 className="text-lg md:text-xl font-semibold">{card.title}</h2>
            <p className="text-xs text-[#999999] whitespace-pre-line">{card.text}</p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* 2nd Row */}
    <div className="flex flex-col md:flex-row gap-6 md:gap-5 items-center md:items-stretch">
      {[
        {
          step: "Step 04",
          title: "See It for Yourself",
          text: `Arrange viewings of the properties you're interested
          in. We'll coordinate with the property owners and
          accompany you to ensure you get a firsthand look
          at your potential new home.`,
        },
        {
          step: "Step 05",
          title: "Making Informed Decisions",
          text: `Before making an offer, our team will assist you
          with due diligence, including property inspections,
          legal checks, and market analysis. We want you
          to be fully informed and confident in your choice.`,
        },
        {
          step: "Step 06",
          title: "Getting the Best Deal",
          text: `We'll help you negotiate the best terms and prepare
          your offer. Our goal is to secure the property at the
          right price and on favorable terms.`,
        },
      ].map((card, index) => (
        <motion.div
          key={index}
          className="w-full md:w-fit rounded-lg p-4 hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="pb-3 border-l pt-4 text-lg pl-4 border-[#262626]">{card.step}</h3>
          <div className="border w-full md:w-fit p-5 md:p-7 border-[#262626] rounded-lg shadow-sm shadow-[#703BF7]">
            <h2 className="text-lg md:text-xl font-semibold">{card.title}</h2>
            <p className="text-xs text-[#999999] whitespace-pre-line">{card.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</article>

               
   </section>
  )
}

export default Navigate