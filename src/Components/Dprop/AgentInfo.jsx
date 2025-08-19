
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function AgentInfo() {
  return (
    <section className="w-full py-10 bg-[#0f0f0f] text-white mt-19">
      <motion.div
        className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6 border border-[#262626] rounded-2xl shadow-lg shadow-[#333] p-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Agent Image */}
        <motion.img
          src="Dprop/gojo.png"
          alt="Agent"
          className="w-28 h-28 object-cover rounded-full border-2 border-[#703BF7] shadow-md"
          whileHover={{ scale: 1.05 }}
        />

        {/* Agent Details */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-[#703BF7]">Rita Mira</h2>
          <p className="text-sm text-gray-400">Senior Real Estate Agent</p>
          <p className="mt-3 text-gray-300 leading-relaxed">
            With over 10 years of experience in the property market, John has
            helped hundreds of clients find their dream homes. Feel free to
            reach out for a personalized property consultation.
          </p>

          {/* Contact Buttons */}
          <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 bg-[#703BF7] hover:bg-transparent border border-[#703BF7] px-5 py-2 rounded-xl transition-all duration-300 hover:text-[#703BF7]"
            >
              <Phone size={18} />
              Call Now
            </a>
            <a
              href="mailto:agent@example.com"
              className="flex items-center gap-2 bg-transparent border border-[#703BF7] hover:bg-[#703BF7] px-5 py-2 rounded-xl transition-all duration-300 hover:text-white"
            >
              <Mail size={18} />
              Send Email
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
