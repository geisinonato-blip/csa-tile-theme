import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoCSA from "@/assets/logo-csa-oficial.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const whatsappNumber = "5531984680246";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de fazer um orçamento de tijolos.`;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-card shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logoCSA} alt="Cerâmica Santo Antônio - CSA Logo" className="h-12 md:h-16" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection("inicio")} className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Início
            </button>
            <button onClick={() => scrollToSection("produtos")} className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Produtos
            </button>
            <button onClick={() => scrollToSection("entregas")} className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Entregas
            </button>
            <button onClick={() => scrollToSection("sobre")} className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Sobre
            </button>
            <button onClick={() => scrollToSection("blog")} className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Blog
            </button>
            <button onClick={() => scrollToSection("contato")} className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Falar com Vendas
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("inicio")} className="text-left text-sm font-medium text-foreground hover:text-primary transition-smooth">
                Início
              </button>
              <button onClick={() => scrollToSection("produtos")} className="text-left text-sm font-medium text-foreground hover:text-primary transition-smooth">
                Produtos
              </button>
              <button onClick={() => scrollToSection("entregas")} className="text-left text-sm font-medium text-foreground hover:text-primary transition-smooth">
                Entregas
              </button>
              <button onClick={() => scrollToSection("sobre")} className="text-left text-sm font-medium text-foreground hover:text-primary transition-smooth">
                Sobre
              </button>
              <button onClick={() => scrollToSection("blog")} className="text-left text-sm font-medium text-foreground hover:text-primary transition-smooth">
                Blog
              </button>
              <button onClick={() => scrollToSection("contato")} className="text-left text-sm font-medium text-foreground hover:text-primary transition-smooth">
                Contato
              </button>
              <Button asChild className="bg-primary hover:bg-primary/90 w-full">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Falar com Vendas
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
