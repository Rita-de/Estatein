import { LineChart, BadgeDollarSign, Gavel, Megaphone } from "lucide-react";
import { motion } from "framer-motion";

const sellingFeatures = [
  {
    icon: LineChart,
    title: "Valuation Mastery",
    description:
      "Discover the true worth of your property with our expert valuation services.",
  },
  {
    icon: Megaphone,
    title: "Strategic Marketing",
    description:
      "Selling a property requires more than just a listing; it demands a strategic marketing approach.",
  },
  {
    icon: BadgeDollarSign,
    title: "Negotiation Wizardry",
    description:
      "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
  },
  {
    icon: Gavel,
    title: "Closing Success",
    description:
      "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
  },
];

export default function UnlockPropertyValue() {
  return (
    <section className="py-1 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Unlock Property Value
        </h2>
        <p className="text-zinc-400 max-w-3xl mx-auto md:mx-0">
          Selling your property should be a rewarding experience, and at
          Estation, we make sure it is. Our Property Selling Service is designed
          to maximize the value of your property, ensuring you get the best deal
          possible.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {sellingFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-purple-500 transition-all"
            >
              <Icon className="text-purple-400 mb-4" size={28} />
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-zinc-400 text-sm">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-zinc-900 rounded-xl p-8 border border-zinc-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
      >
        <div className="flex-1">
          <h3 className="text-white text-xl font-semibold mb-2">
            Unlock the Value of Your Property Today
          </h3>
          <p className="text-zinc-400">
            Ready to unlock the true value of your property? Explore our
            Property Selling Service categories and let us help you achieve the
            best deal possible for your valuable asset.
          </p>
        </div>
        <div className="flex-shrink-0">
          <button className="bg-white text-black px-5 py-2 rounded-md font-medium hover:bg-gray-200 transition">
            Learn More
          </button>
        </div>
      </motion.div>
    </section>
  );
}
