import  'react'
import { motion } from "framer-motion";

const Mesage4 = () => {
  return (
    <article>

<motion.div 
  className="grid justify-center gap-2 px-4"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <label htmlFor="local" className="text-base md:text-lg">Message</label>
  <input
    type="text"
    id="local"
    name="message" 
    placeholder="Enter your Message here..."
    className="lg:w-150 max-w-md border-2 border-[#262626] rounded-lg shadow shadow-[#333] py-4 px-3"
  />
</motion.div>


    </article>
  )
}

export default Mesage4