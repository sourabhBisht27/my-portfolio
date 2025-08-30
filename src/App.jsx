import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import SocialLinks from "./components/SocialLinks";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import ScrollDots from "./components/ScrollDots";
import Hero from "./sections/Hero";

export default function App() {
  return (
    <main>
      <ScrollDots />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <SocialLinks />
    </main>
  );
}
