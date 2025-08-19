
import "react";
import { motion } from "framer-motion";



const  Message1 = () => {


  return (

    <form>
      <motion.div
        className="flex flex-col gap-6 sm:flex-row sm:justify-center pt-8"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.15, // delays each input slightly
              duration: 0.5,
            },
          },
        }}
        viewport={{ once: true }}
      >
        {/* First Name */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <label htmlFor="fname">First Name</label>
          <br />
          <input
            type="text"
            id="fname"
            placeholder="Enter First Name"
            className="border border-[#262626] px-2.5 py-1.5 rounded-lg mt-3 shadow shadow-[#333] w-full"
            required
          />
        </motion.div>

        {/* Last Name */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <label htmlFor="lname">Last Name</label>
          <br />
          <input
            type="text"
            id="lname"
            placeholder="Enter Last Name"
            className="border border-[#262626] px-2.5 py-1.5 rounded-lg mt-3 shadow shadow-[#333] w-full"
            required
          />
        </motion.div>

        {/* Email */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            placeholder="Luke@gmail.com"
            className="border border-[#262626] px-2.5 py-1.5 rounded-lg mt-3 shadow shadow-[#333] w-full"
            required
          />
        </motion.div>

        {/* Phone Number */}
       <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <label htmlFor="num">Phone Number</label>
          <br />
          <input
            type="text"
            id="num"
            placeholder="00000000000"
            className="border border-[#262626] px-2.5 py-1.5 rounded-lg mt-3 shadow shadow-[#333] w-full"
            required
          />
        </motion.div>
      </motion.div>
   
   </form>

  );
};

export default Message1;
