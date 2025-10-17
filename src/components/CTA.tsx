import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import mascote from "@/assets/mascote-csa-oficial.jpg";

const CTA = () => {
  const whatsappNumber = "5531984680246";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de fazer um orçamento de tijolos.`;

  return (
    <section className="py-20 bg-gradient-to-r from-accent/90 to-accent relative overflow-hidden">
      {/* Mascote decorativo */}
      <div className="absolute left-0 bottom-0 hidden lg:block">
        <img src={mascote} alt="Mascote CSA" className="h-64 opacity-20" />
      </div>
      <div className="absolute right-0 top-0 hidden lg:block">
        <img src={mascote} alt="Mascote CSA" className="h-64 opacity-20 transform scale-x-[-1]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-6">
            💬 Pronto para fazer seu pedido?
          </h2>
          <p className="text-white/95 text-xl md:text-2xl mb-8 leading-relaxed">
            Fale com nosso time e receba seu orçamento personalizado sem compromisso.
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-white hover:bg-white/90 text-accent-foreground shadow-strong text-lg px-10 py-7 h-auto"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-6 w-6" />
              Falar com Vendas no WhatsApp
            </a>
          </Button>
          <p className="mt-6 text-white/80">
            📞 (31) 3639-1045 | WhatsApp: (31) 98468-0246 — Atendimento de segunda a sexta, 7h às 17h
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
