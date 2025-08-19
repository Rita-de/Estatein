
import  'react'
import Message1 from './messagefile/Message1'
import Message2 from './messagefile/Message2'
import Message3 from './messagefile/Message3'
import Mesage4 from './messagefile/Mesage4'
import Message5 from './messagefile/Message5'
import { motion } from "framer-motion";

const Message = () => {
  return (
    <section className='pb-5'>
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center justify-center mb-6 pl-4 pr-4 sm:pl-7 sm:pr-7 md:pl-10 md:pr-10 lg:items-start lg:mb-0 lg:pl-7 xl:pl-15 2xl:pl-17 w-full max-w-4xl mx-auto">
        
        {/* Image */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <img
            src="/About/Abstract Design.png"
            alt=""
            width={50}
            className="mx-auto lg:mx-0"
          />
        </motion.span>

        {/* Heading + Paragraph */}
        <motion.span
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-2 pl-0 lg:pl-3 text-center lg:text-left">
            Let's Make it Happen
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#999999] pt-3 pl-0 lg:pl-4 text-center lg:text-left">
            Ready to take the first step toward your dream property? Fill out the form below, 
            and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.
          </p>
        </motion.span>
        
      </div>
    </motion.article>
 

        <article className="flex flex-col gap-4 w-full max-w-4xl mx-auto px-4 sm:px-7 md:px-10">
          <Message1 />
          <Message2 />
          <Message3 />
          <Mesage4 />
          <Message5 />
        </article>
    </section>
  )
}

export default Message