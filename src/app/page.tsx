import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SteamAreas from "@/components/SteamAreas";
import Teaching from "@/components/Teaching";
import Gallery from "@/components/Gallery";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SteamAreas />
        <Teaching />
        <Gallery />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
