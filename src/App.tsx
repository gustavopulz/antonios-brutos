import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Highlights from "./sections/Highlights";
import About from "./sections/About";
import Catalog from "./sections/Catalog";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";

export default function App() {
  return (
    <div className="relative bg-hero-gradient">
      <Header />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Catalog />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />

      <a
        href="https://wa.me/5519997404451"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-6 right-6 md:bottom-10 md:right-10 bg-[#25D366] rounded-full shadow-lg p-3 hover:scale-110 transition"
        aria-label="Falar no WhatsApp"
      >
        <img
          src="/whatsapp.png"
          alt="WhatsApp"
          className="w-9 h-9"
          draggable={false}
        />
      </a>
    </div>
  );
}
