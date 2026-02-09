import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Credentials from "./components/Credentials";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BharatYaatriProject from "./components/BharatYaatriProject";

// Home page component
function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Achievements />
      <Education />
      <Credentials />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/bharat-yaatri" element={<BharatYaatriProject />} />
      </Routes>
    </Router>
  );
}
