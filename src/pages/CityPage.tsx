import { Helmet } from "react-helmet";
import { MessageCircle, MapPin, Clock, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCalculator from "@/components/FloatingCalculator";

interface CityPageProps {
  cityName: string;
  slug: string;
  metaDescription: string;
  introText: string;
  localKeywords: string[];
}

const CityPage = ({ cityName, slug, metaDescription, introText, localKeywords }: CityPageProps) => {
  const whatsappNumber = "5531984680246";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de fazer um orçamento de tijolos em ${cityName}.`;
  const factoryAddress = "Rua Antônio Cândido Rocha, 05, Labanca (Justinópolis), Ribeirão das Neves - MG, 33900-670";
  
  // Google Maps embed URL from factory to city
  const mapsEmbedUrl = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dw7Y83LCCfR9iw&origin=${encodeURIComponent(factoryAddress)}&destination=${encodeURIComponent(cityName + ", MG, Brasil")}&zoom=12`;

  return (
    <>
      <Helmet>
        <title>Tijolos em {cityName} – Cerâmica Santo Antônio | Entrega Rápida</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={localKeywords.join(", ")} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Tijolos em ${cityName} – Cerâmica Santo Antônio`} />
        <meta property="og:description" content={metaDescription} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Tijolos em ${cityName} – Cerâmica Santo Antônio`} />
        <meta name="twitter:description" content={metaDescription} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://tijoloscsa.com.br/tijolos-em-${slug}`} />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Cerâmica Santo Antônio",
            "image": "https://tijoloscsa.com.br/logo-csa.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Antônio Cândido Rocha, 05",
              "addressLocality": "Ribeirão das Neves",
              "addressRegion": "MG",
              "postalCode": "33900-670",
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -19.7547,
              "longitude": -44.0464
            },
            "telephone": "+553136391045",
            "priceRange": "$$",
            "areaServed": cityName,
            "openingHours": "Mo-Fr 07:00-17:00"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-foreground mb-6">
                  Tijolos em {cityName} – Cerâmica Santo Antônio
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                  {introText}
                </p>
                <Button 
                  asChild 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-strong text-lg px-10 py-7 h-auto"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-6 w-6" />
                    Falar com Vendas no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Delivery Info Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-center mb-12 text-primary">
                  Entrega em {cityName}
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-card p-6 rounded-xl shadow-medium text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                      <Truck className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Frete GRÁTIS</h3>
                    <p className="text-muted-foreground text-sm">
                      Até 30km da fábrica<br />
                      Quantidade mínima: 200 unidades
                    </p>
                  </div>

                  <div className="bg-card p-6 rounded-xl shadow-medium text-center">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Pronta Entrega</h3>
                    <p className="text-muted-foreground text-sm">
                      Tijolos disponíveis<br />
                      Entrega imediata com frota própria
                    </p>
                  </div>

                  <div className="bg-card p-6 rounded-xl shadow-medium text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Atendimento Local</h3>
                    <p className="text-muted-foreground text-sm">
                      Especialistas em {cityName}<br />
                      (31) 98468-0246
                    </p>
                  </div>
                </div>

                {/* Map Section */}
                <div className="bg-card p-8 rounded-2xl shadow-medium">
                  <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                    📍 Rota da Fábrica até {cityName}
                  </h3>
                  
                  <div className="rounded-lg overflow-hidden shadow-medium mb-6">
                    <iframe 
                      src={mapsEmbedUrl}
                      width="100%" 
                      height="400" 
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Rota da Cerâmica Santo Antônio até ${cityName}`}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary">📍 Nossa Fábrica:</h4>
                      <p className="text-foreground text-sm">
                        Rua Antônio Cândido Rocha, 05<br />
                        Labanca (Justinópolis)<br />
                        Ribeirão das Neves – MG<br />
                        CEP 33900-670
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary">🕒 Horário de Atendimento:</h4>
                      <p className="text-foreground text-sm">
                        Segunda a Sexta: 7h às 17h<br />
                        Sábado: Consulte disponibilidade<br />
                        <span className="text-green-600 font-semibold">WhatsApp 24h: (31) 98468-0246</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Products Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-center mb-12 text-primary">
                  Nossos Produtos em {cityName}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-card p-8 rounded-2xl shadow-medium">
                    <h3 className="text-2xl font-bold text-foreground mb-4">🧱 Tijolo 8 Furos</h3>
                    <ul className="space-y-2 text-muted-foreground mb-6">
                      <li>✓ Ideal para alvenaria de vedação</li>
                      <li>✓ Alta resistência e durabilidade</li>
                      <li>✓ Ótimo isolamento térmico</li>
                      <li>✓ Padrão de qualidade certificado</li>
                    </ul>
                    <p className="text-sm text-muted-foreground italic">
                      Entrega garantida em {cityName}
                    </p>
                  </div>

                  <div className="bg-card p-8 rounded-2xl shadow-medium">
                    <h3 className="text-2xl font-bold text-foreground mb-4">🧱 Tijolo 12 Furos</h3>
                    <ul className="space-y-2 text-muted-foreground mb-6">
                      <li>✓ Maior leveza para estruturas</li>
                      <li>✓ Excelente isolamento acústico</li>
                      <li>✓ Reduz peso na estrutura</li>
                      <li>✓ Facilita execução da obra</li>
                    </ul>
                    <p className="text-sm text-muted-foreground italic">
                      Pronta entrega para {cityName}
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <Button 
                    asChild 
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-medium text-lg px-10 py-6 h-auto"
                  >
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Solicitar Orçamento para {cityName}
                    </a>
                  </Button>
                  <p className="mt-4 text-muted-foreground">
                    📞 (31) 98468-0246 — Atendimento especializado em {cityName}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Local Keywords Footer */}
          <section className="py-12 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {localKeywords.join(" | ")}
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingWhatsApp />
        <FloatingCalculator />
      </div>
    </>
  );
};

export default CityPage;
