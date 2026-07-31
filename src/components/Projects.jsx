import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import portfolio from "../data/portfolioData";

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-slate-900">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center">
                    Featured Projects
                </h2>

                <p className="text-gray-400 text-center mt-4 mb-16">
                    Projects demonstrating AI, Full Stack Development and modern backend
                    engineering.
                </p>

                <div className="space-y-10">

                    {portfolio.projects.map((project) => (
                        <motion.div
                            key={project.id}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden"
                        >
                            <div className="grid lg:grid-cols-2">

                                {project.deploymentOffline ? (
                                    <div className="w-full min-h-[350px] bg-slate-950 flex items-center justify-center p-8">
                                        <div className="text-center">
                                            <div className="text-6xl mb-6">🚧</div>

                                            <h3 className="text-2xl font-bold">
                                                Live Demo Unavailable
                                            </h3>

                                            <p className="text-gray-400 mt-4">
                                                This project was deployed on Railway using MySQL.
                                            </p>

                                            <p className="text-gray-400 mt-2">
                                                The free hosting expired, so the live demo is temporarily unavailable.
                                            </p>

                                            <div className="mt-6 text-yellow-300">
                                                🟡 Deployment Temporarily Offline
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-full h-[320px] lg:h-full overflow-hidden">
                                        <video
                                            className="w-full h-full object-cover"
                                            controls
                                            playsInline
                                        >
                                            <source src={project.video} type="video/mp4" />
                                        </video>
                                    </div>
                                )}


                                {/* Content */}

                                <div className="p-8">

                                    {project.featured && (
                                        <span className="bg-cyan-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                                            Featured
                                        </span>
                                    )}

                                    <h3 className="text-3xl font-bold mt-5">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 mt-4">
                                        {project.description}
                                    </p>

                                    {/* Features */}

                                    <div className="mt-6">

                                        <h4 className="font-semibold mb-3">
                                            Key Features
                                        </h4>

                                        <ul className="grid md:grid-cols-2 gap-2">

                                            {project.features.map((feature) => (
                                                <li key={feature} className="text-gray-300">
                                                    ✔ {feature}
                                                </li>
                                            ))}

                                        </ul>

                                    </div>

                                    {/* Tech */}

                                    <div className="flex flex-wrap gap-3 mt-8">

                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="bg-slate-800 px-3 py-2 rounded-lg text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}

                                    </div>

                                    {/* Buttons */}

                                    <div className="flex flex-wrap gap-4 mt-8">

                                        {project.githubFrontend && (
                                            <a
                                                href={project.githubFrontend}
                                                target="_blank"
                                                className="bg-slate-800 px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-cyan-500 hover:text-black transition"
                                            >
                                                <FaGithub />
                                                Frontend
                                            </a>
                                        )}

                                        {project.githubBackend && (
                                            <a
                                                href={project.githubBackend}
                                                target="_blank"
                                                className="bg-slate-800 px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-cyan-500 hover:text-black transition"
                                            >
                                                <FaGithub />
                                                Backend
                                            </a>
                                        )}

                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                className="bg-cyan-500 text-black px-5 py-3 rounded-lg flex items-center gap-2"
                                            >
                                                <FaExternalLinkAlt />
                                                Live Demo
                                            </a>
                                        )}

                                    </div>

                                </div>

                            </div>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Projects;