import { Users, Wrench, PiggyBank, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const managementFeatures = [
  {
    icon: Users,
    title: "Tenant Harmony",
    description:
      "Our Tenant Management service ensures that your tenants are cared for with precision and efficiency.",
  },
  {
    icon: Wrench,
    title: "Maintenance Ease",
    description:
      "Stay proactive by promptly addressing repairs and upkeep to protect your property’s value.",
  },
  {
    icon: PiggyBank,
    title: "Financial Peace of Mind",
    description:
      "Financial aspects are stress-free with our transparent reporting and timely rent collection.",
  },
  {
    icon: ShieldCheck,
    title: "Legal Guardian",
    description:
      "Stay compliant with property laws and legal standards effortlessly.",
  },
];

export default function EffortlessPropertyManagement() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Effortless Property Management
        </h2>
        <p className="text-zinc-400 max-w-3xl mx-auto md:mx-0">
          Owning a property should be effortless. Our Property Management
          Service takes the hassle out of property ownership, offering
          customizable solutions tailored to your needs. Explore our categories
          to see how we make property management effortless for you.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {managementFeatures.map((feature, index) => {
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
            Experience Effortless Property Management
          </h3>
          <p className="text-zinc-400">
            Ready to experience hassle-free property management? Explore our
            Property Management Service categories and take advantage of
            tailored solutions that simplify the benefits of property ownership.
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
