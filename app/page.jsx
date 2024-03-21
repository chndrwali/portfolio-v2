import About from "@/components/About/About";
import Cta from "@/components/Cta/Cta";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Work from "@/components/Work/Work";


export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mt-64 sm:mt-0"></div>
      <About />
      <Services />
      <Work />
      <Cta />
    </main>
  );
}
