import { Send } from "lucide-react";
import "react";
import { motion } from "framer-motion";

const Team = () => {
  const team = [
    { name: "Max Mitchell", role: "Founder", img: "/About/T1.png" },
    { name: "Sarah Johnson", role: "Chief Real Estate Officer", img: "/About/T2.png" },
    { name: "David Brown", role: "Head of Property Management", img: "/About/T3.png" },
    { name: "Michael Turner", role: "Legal Counsel", img: "/About/T4.png" },
  ];
  return (
    <section className="w-full ">
    <article className="pt-10 pb-10 flex flex-col items-center w-full">
      {/* Title Section */}
      <motion.div
        className="flex flex-col justify-center items-center w-full px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span>
          <img src="/About/Abstract Design.png" alt="" width={50} />
        </span>
        <span className="text-center">
          <h2 className="text-3xl md:text-4xl pt-2">Meet the Estatein Team</h2>
          <p className="text-xs text-[#999999] pt-3 max-w-xl mx-auto">
            At Estatein, our success is driven by the dedication and expertise of our team.
            Get to know the people behind our mission to make your real estate dreams a reality.
          </p>
        </span>
      </motion.div>

      {/* Team Cards */}
      <div className="flex flex-col md:flex-row md:space-x-8 gap-8 pt-10 w-full justify-center items-center">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            className="border border-[#262626] w-65 max-w-xs grid justify-center h-83 px-3 p-4 rounded-lg shadow hover:shadow-[#703BF7] hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
          >
            {/* Profile Image */}
            <div
              className="w-[170px] h-[170px] bg-no-repeat bg-center bg-cover mx-auto rounded-lg shadow shadow-[#262626]"
              style={{ backgroundImage: `url(${member.img})` }}
            >
              <div className="grid items-center justify-center">
                <div className="bg-[url(/About/Bird.png)] w-[50px] h-[50px] bg-no-repeat bg-cover bg-center rounded-full mt-34"></div>
              </div>
            </div>

            {/* Info */}
            <div className="grid justify-center items-center pt-4">
              <h2 className="pt-1 text-lg text-center">{member.name}</h2>
              <p className="text-xs text-[#999999] text-center">{member.role}</p>
            </div>

            {/* Input */}
            <span className="flex items-center border border-[#262626] rounded-2xl px-3 py-2 w-fit max-w-xs mt-3 mx-auto bg-[#1A1A1A]">
              <input
                type="text"
                placeholder="Say Hello 👋"
                className="bg-transparent outline-none flex-grow text-xs ml-1"
              />
              <span className="w-[35px] h-[35px] bg-[#703BF7] rounded-full grid items-center pl-2">
                <Send className="w-5 h-5 text-white" />
              </span>
            </span>
          </motion.div>
        ))}
      </div>
    </article>


    </section>
  );
};

export default Team;
