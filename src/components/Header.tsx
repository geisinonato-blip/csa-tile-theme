import { useState } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoCSA from "@/assets/logo-horizontal-csa.png";

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
          <button 
            onClick={() => scrollToSection("inicio")} 
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-smooth"
            aria-label="Voltar ao início"
          >
            <img src={logoCSA} alt="Cerâmica Santo Antônio - CSA Logo" className="h-14 md:h-20" />
          </button>

          {/* Contact Info & Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Contact Numbers */}
            <div className="flex items-center gap-4 border-r border-border pr-6">
              <a href="tel:+553136391045" className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-smooth">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">(31) 3639-1045</span>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-green-600 hover:text-green-700 transition-smooth">
                <MessageCircle className="h-4 w-4" />
                <span className="font-semibold">(31) 98468-0246</span>
              </a>
            </div>
            
            {/* Navigation */}
            <nav className="flex items-center gap-6">
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
              
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Orçamento
                </a>
              </Button>
            </nav>
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
              {/* Contact Numbers */}
              <div className="flex flex-col gap-3 pb-4 border-b border-border">
                <a href="tel:+553136391045" className="flex items-center gap-2 text-foreground hover:text-primary transition-smooth">
                  <Phone className="h-4 w-4" />
                  <span className="font-semibold">(31) 3639-1045</span>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-smooth">
                  <MessageCircle className="h-4 w-4" />
                  <span className="font-semibold">(31) 98468-0246</span>
                </a>
              </div>
              
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
              
              <Button asChild className="bg-primary hover:bg-primary/90 w-full mt-4">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Orçamento WhatsApp
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
