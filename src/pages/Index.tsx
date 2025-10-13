import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Features from "@/components/Features";
import Delivery from "@/components/Delivery";
import About from "@/components/About";
import Calculator from "@/components/Calculator";
import Reviews from "@/components/Reviews";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCalculator from "@/components/FloatingCalculator";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <Calculator />
        <Features />
        <Delivery />
        <About />
        <Reviews />
        <Blog />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <FloatingCalculator />
    </div>
  );
};

export default Index;
