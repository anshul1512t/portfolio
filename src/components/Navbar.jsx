import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import portfolio from "../data/portfolioData";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}

                <a
                    href="#home"
                    className="text-2xl font-bold text-cyan-400 tracking-wide"
                >
                    {portfolio.personal.name}
                </a>

                {/* Desktop */}

                <ul className="hidden md:flex gap-8">
                    {portfolio.navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="relative text-gray-300 hover:text-cyan-400 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all hover:after:w-full"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Button */}

                <button
                    className="md:hidden text-white text-xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}

            {menuOpen && (
                <div className="md:hidden bg-slate-900">
                    {portfolio.navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="block px-6 py-4 border-b border-slate-800 hover:bg-slate-800"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;