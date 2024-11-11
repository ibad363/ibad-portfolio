import Hero from "./components/Hero";
import About from "./about/page";
import Skills from "./skills/page";
import Project from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  return (
           <div>
            <Hero/>
            <About/>
            <Skills/>
            <Project/>
            <Contact/>
           </div>
  );
}
