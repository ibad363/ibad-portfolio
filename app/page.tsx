import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Experience/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  );
}