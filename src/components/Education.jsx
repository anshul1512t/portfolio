import { motion } from "framer-motion";
import portfolio from "../data/portfolioData";

const Education = () => {
    return (
        <section id="education" className="py-28 bg-slate-950">
            <div className="max-w-5xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center">
                    Education
                </h2>

                <div className="w-24 h-1 bg-cyan-500 rounded-full mx-auto mt-4 mb-16"></div>

                <div className="space-y-8">

                    {portfolio.education.map((edu, index) => (

                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            className="bg-slate-900 border border-slate-800 rounded-xl p-6"
                        >
                            <h3 className="text-2xl font-semibold">
                                {edu.degree}
                            </h3>

                            <p className="text-cyan-400 mt-2">
                                {edu.institute}
                            </p>

                            <div className="flex justify-between mt-4 text-gray-400">
                                <span>{edu.year}</span>
                                <span>{edu.marks}</span>
                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
};

export default Education;