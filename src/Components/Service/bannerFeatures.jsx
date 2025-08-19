    import { Home, BadgeDollarSign, Building2, LineChart } from "lucide-react";
    import 'react'
import { motion } from "framer-motion";

const bannerFeatures = [
  {
    title: "Find Your Dream Home",
    icon: Home,
  },
  {
    title: "Unlock Property Value",
    icon: BadgeDollarSign,
  },
  {
    title: "Effortless Property Management",
    icon: Building2,
  },
  {
    title: "Smart Investments, Informed Decisions",
    icon: LineChart,
  },
];



export default function BannerFeatures() {
  return (
    <section className="bg-black py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
      {/* Header */}
      <div className="text-center mb-10 grid justify-center ">
       
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          Elevate Your Real Estate Experience
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
          Maximize valuation, achieve your real estate aspirations with expert guidance. 
          Explore our comprehensive range of services, each designed to cater to your 
          unique needs.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {bannerFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-purple-500 hover:shadow-lg transition-all cursor-pointer flex flex-col items-center text-center"
            >
          
              <Icon className="text-purple-400 mb-3" size={28} />
              <h3 className="text-white font-semibold text-base sm:text-lg">
                {feature.title}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
