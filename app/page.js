import HeroWrapper from "@/components/hero/HeroWrapper";
import About from "@/components/About";
import Education from "@/components/Education";
import FAQ from "@/components/FAQ";
import Projects from "@/components/Projects";
import TechnicalSkills from "@/components/TechnicalSkills";

export default function Home() {
  return (
    <>
      <HeroWrapper />

      <About />
      <TechnicalSkills />
      <Projects />
      <Education />
      <FAQ />
    </>
  );
}
