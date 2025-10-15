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
      <main className="px-40">
        <Hero />
        <Highlights />
        <About />
        <Catalog />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
