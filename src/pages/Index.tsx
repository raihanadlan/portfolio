import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";

import { Projects } from "@/components/portfolio/Projects";
import { Journey } from "@/components/portfolio/Journey";
import { Contact } from "@/components/portfolio/Contact";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { CursorSpotlight } from "@/components/portfolio/CursorSpotlight";

const Index = () => {
  return (
    <main className="relative">
      <ScrollProgress />
      <CursorSpotlight />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Journey />
      <Contact />
    </main>
  );
};

export default Index;
