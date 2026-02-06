import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
// import Experience from "@/components/Experience"; // 👈 Commented out (Uncomment if you want to show a timeline)
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog"; // This is your "Intel Radar"
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import SectionTransition, { PageTransition } from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-black text-white selection:bg-primary/30">
        <Header />
        
        <Hero />
        
        <SectionTransition delay={0.1}>
          <Skills />
        </SectionTransition>

        {/* Swapped Order: Certs are often more important than Projects for SOC roles */}
        <SectionTransition delay={0.1}>
          <Certifications />
        </SectionTransition>

        <SectionTransition delay={0.1}>
          <Projects />
        </SectionTransition>

        {/* This is your "Industry Radar" / Live Threat Feed */}
        <SectionTransition delay={0.1}>
          <Blog /> 
        </SectionTransition>

        <SectionTransition delay={0.1}>
          <Contact />
        </SectionTransition>

        <BackToTop />
      </main>
    </PageTransition>
  );
}