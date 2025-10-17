import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tijolos.jpg";

const Hero = () => {
  const whatsappNumber = "5531984680246";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de fazer um orçamento de tijolos.`;

  return (
    <section id="inicio" className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-white mb-6 leading-tight">
            Tijolos Direto da Cerâmica — Qualidade e Preço que Constroem Confiança
          </h1>
          <p className="text-white/95 text-xl md:text-2xl mb-8 leading-relaxed">
            Desde <strong>1976</strong> produzindo tijolos com excelência e oferecendo um dos <strong>melhores preços</strong> de Justinópolis e região metropolitana de Belo Horizonte.
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-strong text-lg px-8 py-6 h-auto"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Comprar Tijolos
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
