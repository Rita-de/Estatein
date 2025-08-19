import { LineChart, Percent, Layers } from "lucide-react";
import { motion } from "framer-motion";

const investmentFeatures = [
  {
    icon: LineChart,
    title: "Market Insight",
    description:
      "Stay ahead of market trends with our detailed research and expert analysis.",
  },
  {
    icon: Percent,
    title: "ROI Assessment",
    description:
      "Maximize returns by evaluating the potential performance of your investments.",
  },
  {
    icon: Layers,
    title: "Diversification Mastery",
    description:
      "Our experts guide you in creating diversified portfolios to minimize risk and optimize returns.",
  },
];

export default function SmartInvestments() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Smart Investments, Informed Decisions
        </h2>
        <p className="text-zinc-400 max-w-3xl mx-auto md:mx-0">
          Discover smarter ways to invest in real estate. Gain valuable
          insights, leverage data, and implement strategies tailored to your
          goals, ensuring you make confident and informed decisions.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {/* Feature Cards */}
        {investmentFeatures.map((feature, index) => {
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

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-white font-semibold mb-2">
              Unlock Your Investment Potential
            </h3>
            <p className="text-zinc-400 text-sm mb-4">
              Explore our Property Investment Service categories to identify the
              best strategies for building and diversifying your wealth.
            </p>
          </div>
          <button className="bg-white text-black px-5 py-2 rounded-md font-medium hover:bg-gray-200 transition">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
