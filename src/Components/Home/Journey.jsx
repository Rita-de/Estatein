
import { MailCheck, Send } from 'lucide-react'
import  'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";



const Journey = () => {
    return(

    <motion.section
      className="w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full pt-30">
        <div className="border-t border-b border-[#262626] px-4 lg:pl-30 lg:pr-15 pb-5">
          <motion.h2
            className="text-2xl md:text-3xl pt-6 md:pt-9 pl-2 md:pl-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Start Your Real Estate Journey Today
          </motion.h2>

          <motion.div
            className="flex flex-col md:flex-row md:justify-between gap-4 pb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="text-xs pt-3 md:max-w-2xl">
              Your dream property is just a click away. Whether you're looking
              for a new home, a strategic investment, or expert real estate
              advice,
              <br className="hidden md:block" />
              Estatein is here to assist you every step of the way. Take the
              first step towards your real estate goals and explore our
              available properties
              <br className="hidden md:block" /> or get in touch with our team
              for personalized assistance.
            </p>
            <button className="bg-[#703BF7] px-4 py-2 rounded-lg text-md whitespace-nowrap self-start md:self-center">
              <Link to="/Dprop">Explore Properties </Link>
            </button>
          </motion.div>
        </div>

        <motion.article
          className="flex flex-col lg:flex-row justify-between px-4 lg:pl-9 lg:pr-9 pt-8 pb-4 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="pt-6 lg:pt-9 space-y-2.5 flex-shrink-0">
            <img
              src="/home/logo2.png"
              alt=""
              width={120}
              className="ml-0 lg:ml-5"
            />
            <span className="flex items-center border border-[#262626] rounded-md px-3 py-2 w-full max-w-xs">
              <MailCheck className="w-5 h-5 mr-2 text-gray-400" />
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className="bg-transparent outline-none flex-grow text-xs ml-1"
              />
              <Send className="w-5 h-5 text-white" />
            </span>
          </div>

          <div className="flex flex-wrap gap-6 text-xs pt-6 lg:pt-9 w-full lg:w-auto">
            {[
              ["Home", ["Hero Section", "Features", "Properties", "Testimonials", "FaQ's"]],
              ["About Us", ["Our Story", "Our Works", "How it Works", "Our Team", "Our Clients"]],
              ["Properties", ["Portfolio", "Categories"]],
              ["Services", ["Valuation Mastery", "Strategic Marketing", "Negotiation Wizardry", "Closing Success", "Property Management"]],
              ["Contact Us", ["Contact Form", "Our Offices"]],
            ].map(([title, links], i) => (
              <motion.span
                key={title}
                className="space-y-1.5 min-w-[110px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * (i + 1), duration: 0.4 }}
              >
                <h5 className="text-[#999999] pb-1">{title}</h5>
                {links.map((link) => (
                  <h5 key={link}>{link}</h5>
                ))}
              </motion.span>
            ))}
          </div>
        </motion.article>
   </div>
    </motion.section>
  );
};

export default Journey