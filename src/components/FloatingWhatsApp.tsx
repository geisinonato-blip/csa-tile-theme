import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = "5531984680246";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de fazer um orçamento de tijolos.`;

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-strong transition-all duration-300 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
      }`}
      aria-label="Falar com vendas no WhatsApp"
    >
      <MessageCircle className="h-8 w-8 animate-pulse group-hover:animate-none" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-secondary text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-medium">
        Fale conosco!
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
