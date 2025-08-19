import {  Mail, Phone, } from "lucide-react";

import  "react";
import ChevronSelect from "./Chevron";
import RadioButtons from "../Radio";
import { motion } from "framer-motion";

const Message3 = () => {

  return (
    <form>

    <motion.article
      className="w-full pb-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.15, duration: 0.5 },
        },
      }}
    >
      <motion.div
        className="flex flex-col md:flex-row gap-6 md:gap-9 justify-center pt-6"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {/* Budget */}
        <motion.div
          className="w-full md:w-auto"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <label htmlFor="local">Budget</label>
          <br />
          <span className="flex items-center border border-[#262626] rounded-md px-4 py-2 w-full max-w-xs mt-2 shadow shadow-[#333]">
            <input
              type="text"
              id="local"
              placeholder="Select Budget"
              className="bg-transparent outline-none flex-grow text-xs ml-1"
            />
            <ChevronSelect />
          </span>
        </motion.div>

        {/* Preferred Contact Method */}
        <motion.form
          action=""
          className="w-full md:w-auto"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <label>Preferred Contact Method</label>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Phone */}
            <motion.span
              className="flex items-center border border-[#262626] mt-2 p-1 py-2 rounded-lg w-full sm:w-auto"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Phone size={20} width={30} />
              <input
                type="number"
                placeholder=" Enter Your Number"
                className="ml-2 flex-grow bg-transparent outline-none text-xs"
              />
              <input
                type="checkbox"
                name="number"
                id="number"
                className="ml-2"
              />
              <RadioButtons />
            </motion.span>

            {/* Email */}
            <motion.span
              className="flex items-center border border-[#262626] mt-2 p-1 py-2 rounded-lg w-full sm:w-auto"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Mail size={20} width={30} />
              <input
                type="mail"
                placeholder=" Enter Your Email"
                className="ml-2 flex-grow bg-transparent outline-none text-xs"
              />
              <input
                type="checkbox"
                name="email"
                id="email"
                className="ml-2"
              />
            </motion.span>
          </div>
        </motion.form>
      </motion.div>
    </motion.article>
  

    </form>
  );
};

export default Message3;