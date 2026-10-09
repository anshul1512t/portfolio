import {
    FaGithub,
    FaLinkedin,
    FaLaptopCode
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import portfolio from "../data/portfolioData";

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 py-8">

            <div className="max-w-7xl mx-auto px-6">

                <div className="flex justify-center gap-8 text-3xl">

                    <a href={portfolio.social.github} target="_blank">
                        <FaGithub />
                    </a>

                    <a href={portfolio.social.linkedin} target="_blank">
                        <FaLinkedin />
                    </a>

                    <a href={portfolio.social.leetcode} target="_blank">
                        <SiLeetcode />
                    </a>

                    <a href={portfolio.social.naukri} target="_blank">
                        <FaLaptopCode />
                    </a>

                </div>

                <p className="text-center text-gray-500 mt-8">
<<<<<<< HEAD
                    © {new Date().getFullYear()} Your Name. Built with React & Tailwind CSS.
=======
                    © {new Date().getFullYear()} Anshul Kumar. Built with React & Tailwind CSS.
>>>>>>> be1859e (Update portfolio projects)
                </p>

            </div>
        </footer>
    );
};

export default Footer;