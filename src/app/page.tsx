import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <section id="home">
        <Hero />
      </section>
      <div className="relative z-10">
        <section id="about">
          <About />
        </section>
        <section id="resume">
          <Experience />
        </section>
        <Skills />
        <section id="contact">
          <Contact />
        </section>
      </div>
    </main>
  );
}
