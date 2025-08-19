import'react'
import { motion } from "framer-motion";


const Message5 = () => {
  
  return (

    <motion.article
      className="pt-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="w-full flex justify-center px-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-[#703BF7] text-white px-6 py-3 rounded-2xl shadow-sm shadow-[#703BF7] 
          hover:bg-transparent hover:text-[#703BF7] hover:border hover:border-[#262626] 
          hover:drop-shadow-md hover:drop-shadow-[#333] transition duration-300 ease-in-out"
        >
          Send Your Message
        </motion.button>
      </div>
    </motion.article>
  );
}



  

export default Message5