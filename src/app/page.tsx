import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <div className="relative z-10">
        <About />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
