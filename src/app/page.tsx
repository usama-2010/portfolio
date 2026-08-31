import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { ScrollProgress } from "@/components/scroll-progress";
import Hero from "./hero";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import ContactForm from "./contact-form";
import Experience from "./experience";

export default function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-clip bg-paper dark:bg-paper-dark">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Resume />
        <ContactForm />
      </main>
      <SiteFooter />
    </div>
  );
}
