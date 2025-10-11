import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Features from "@/components/Features";
import Delivery from "@/components/Delivery";
import About from "@/components/About";
import Calculator from "@/components/Calculator";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <Features />
        <Delivery />
        <About />
        <Calculator />
        <Blog />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
