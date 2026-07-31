import { motion } from "framer-motion";
import portfolio from "../data/portfolioData";

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-28 bg-slate-950"
        >
            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-center">
                        Skills
                    </h2>

                    <div className="w-24 h-1 bg-cyan-500 rounded-full mx-auto mt-4"></div>

                    <p className="text-center text-gray-400 mt-6 max-w-2xl mx-auto">
                        Technologies I use to build modern web applications,
                        APIs and AI-powered software.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mt-16">

                    {portfolio.skills.map((group) => (

                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="bg-slate-900 rounded-xl p-8 border border-slate-800"
                        >

                            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
                                {group.category}
                            </h3>

                            <div className="flex flex-wrap gap-4">

                                {group.items.map((skill) => (

                                    <span
                                        key={skill}
                                        className="px-4 py-2 rounded-full bg-slate-800 hover:bg-cyan-500 hover:text-black transition duration-300 cursor-default"
                                    >
                                        {skill}
                                    </span>

                                ))}

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
};

export default Skills;