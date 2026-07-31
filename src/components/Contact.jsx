import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt
} from "react-icons/fa";

import portfolio from "../data/portfolioData";

const Contact = () => {
    return (
        <section id="contact" className="py-28 bg-slate-900">

            <div className="max-w-4xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center">
                    Contact
                </h2>

                <div className="w-24 h-1 bg-cyan-500 rounded-full mx-auto mt-4 mb-16"></div>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-slate-950 p-8 rounded-xl text-center">
                        <FaPhone className="text-cyan-400 text-3xl mx-auto" />
                        <p className="mt-4">{portfolio.contact.phone}</p>
                    </div>

                    <div className="bg-slate-950 p-8 rounded-xl text-center">
                        <FaEnvelope className="text-cyan-400 text-3xl mx-auto" />
                        <p className="mt-4">{portfolio.contact.email}</p>
                    </div>

                    <div className="bg-slate-950 p-8 rounded-xl text-center">
                        <FaMapMarkerAlt className="text-cyan-400 text-3xl mx-auto" />
                        <p className="mt-4">{portfolio.contact.location}</p>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Contact;