import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-slate-950 text-white">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects/>

      <Education />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;