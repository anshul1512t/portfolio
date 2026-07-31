import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

import portfolio from "../data/portfolioData";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 text-lg mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            {portfolio.personal.name}
          </h1>

          <h2 className="text-2xl md:text-3xl mt-4 text-slate-300">
            {portfolio.personal.role}
          </h2>

          <p className="mt-6 text-gray-400 leading-8 max-w-xl">
            {portfolio.personal.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href={portfolio.personal.resume}
              className="px-7 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition font-semibold flex items-center gap-2"
            >
              <FaDownload />
              Resume
            </a>

            <a
              href={portfolio.social.github}
              target="_blank"
              className="px-7 py-3 rounded-lg border border-slate-700 hover:border-cyan-400 transition flex items-center gap-2"
            >
              <FaGithub />
              GitHub
            </a>

          </div>

          <div className="flex gap-6 mt-10 text-3xl">

            <a
              href={portfolio.social.github}
              target="_blank"
            >
              <FaGithub className="hover:text-cyan-400 transition" />
            </a>

            <a
              href={portfolio.social.linkedin}
              target="_blank"
            >
              <FaLinkedin className="hover:text-cyan-400 transition" />
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30"></div>

            <img
              src={portfolio.personal.image}
              alt="profile"
              className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-cyan-500"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;