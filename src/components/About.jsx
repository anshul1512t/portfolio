import { motion } from "framer-motion";
import portfolio from "../data/portfolioData";

const About = () => {
  const { about } = portfolio.personal;

  return (
    <section
      id="about"
      className="py-28 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl font-bold text-center">
            {about.title}
          </h2>

          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-400 mt-10 text-lg leading-8 max-w-4xl mx-auto text-center">
            {about.description}
          </p>

        </motion.div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {about.stats.map((item) => (

            <motion.div
              key={item.title}
              whileHover={{ y: -8 }}
              className="bg-slate-800 rounded-xl p-8 border border-slate-700 text-center"
            >

              <h3 className="text-5xl font-bold text-cyan-400">
                {item.number}
              </h3>

              <p className="mt-3 text-gray-400">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Learning */}

        <div className="mt-20">

          <h3 className="text-2xl font-semibold text-center mb-10">
            Currently Learning
          </h3>

          <div className="flex flex-wrap justify-center gap-5">

            {about.currentlyLearning.map((tech) => (

              <motion.div
                key={tech}
                whileHover={{ scale: 1.08 }}
                className="px-6 py-3 rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-400 transition"
              >
                {tech}
              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;