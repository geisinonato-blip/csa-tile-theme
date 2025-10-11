import { Phone, MapPin, Clock, Mail } from "lucide-react";
import logoCSA from "@/assets/logo-csa-oficial.jpg";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contato" className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo e descrição */}
          <div>
            <div className="mb-4">
              <img src={logoCSA} alt="Cerâmica Santo Antônio - CSA Logo" className="h-20" />
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Construindo qualidade desde 1976 com os melhores tijolos de Ribeirão das Neves e região.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("produtos")} className="text-white/80 hover:text-white transition-smooth text-sm">
                  Produtos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("sobre")} className="text-white/80 hover:text-white transition-smooth text-sm">
                  Sobre Nós
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("blog")} className="text-white/80 hover:text-white transition-smooth text-sm">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contato")} className="text-white/80 hover:text-white transition-smooth text-sm">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Phone className="h-4 w-4 text-white shrink-0 mt-0.5" />
                <a href="https://wa.me/5531984680246" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-smooth">
                  (31) 98468-0246
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Clock className="h-4 w-4 text-white shrink-0 mt-0.5" />
                <span className="text-white/80">
                  Seg a Sex: 7h às 17h
                </span>
              </li>
            </ul>
          </div>

          {/* Endereço */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Localização</h4>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="h-4 w-4 text-white shrink-0 mt-0.5" />
              <address className="text-white/80 not-italic">
                Rua Antônio Cândido Rocha, 05<br />
                Labanca (Justinópolis)<br />
                Ribeirão das Neves – MG<br />
                CEP 33900-670
              </address>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>
              &copy; {new Date().getFullYear()} Cerâmica Santo Antônio. Todos os direitos reservados.
            </p>
            <p className="font-semibold text-white">
              🧱 Construindo qualidade desde 1976
            </p>
          </div>
        </div>

        {/* SEO Keywords footer */}
        <div className="mt-8 text-xs text-white/50 text-center">
          <p>
            Comprar tijolos em BH | Comprar tijolos em Justinópolis | Comprar tijolos em Ribeirão das Neves | 
            Comprar tijolos em Venda Nova BH | Fábrica de tijolos | Tijolos 8 furos | Tijolos 12 furos | 
            Cerâmica MG | Materiais de construção BH
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
