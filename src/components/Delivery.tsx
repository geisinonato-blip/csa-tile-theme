import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Delivery = () => {
  const areas = [
    "Ribeirão das Neves",
    "Justinópolis",
    "Venda Nova",
    "Contagem",
    "Belo Horizonte",
    "Toda região metropolitana de BH"
  ];

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Antônio+Cândido+Rocha,+05,+Labanca+(Justinópolis),+Ribeirão+das+Neves+-+MG,+33900-670";

  return (
    <section id="entregas" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-primary">Área de Entrega</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Atendemos toda a região metropolitana de Belo Horizonte com frota própria e prazos rápidos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Áreas de entrega */}
          <div>
            <div className="bg-card p-8 rounded-2xl shadow-medium">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Regiões Atendidas</h3>
              </div>
              
              <ul className="space-y-3 mb-8">
                {areas.map((area) => (
                  <li key={area} className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground">{area}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                  <Clock className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Tijolos à Pronta Entrega</p>
                    <p className="text-sm text-muted-foreground">
                      Envio imediato com frota própria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-green-500/10 rounded-lg border-l-4 border-green-500">
                  <MapPin className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Frete GRÁTIS até 30km</p>
                    <p className="text-sm text-muted-foreground">
                      Região de Justinópolis - quantidade mínima 200 unidades
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Fora do raio de 30km: frete a combinar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa/Informações */}
          <div>
            <div className="bg-card p-8 rounded-2xl shadow-medium">
              <h3 className="text-2xl font-bold text-foreground mb-6">Localização da Fábrica</h3>
              
              {/* Google Maps Embed */}
              <div className="mb-6 rounded-lg overflow-hidden shadow-medium">
                <iframe 
                  src="https://www.google.com/maps?q=Rua+Antônio+Cândido+Rocha,+05,+Labanca+(Justinópolis),+Ribeirão+das+Neves+-+MG,+33900-670&output=embed"
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Cerâmica Santo Antônio"
                />
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="font-semibold text-primary mb-1">Endereço:</p>
                  <p className="text-foreground">
                    Rua Antônio Cândido Rocha, 05<br />
                    Labanca (Justinópolis)<br />
                    Ribeirão das Neves – MG<br />
                    CEP 33900-670
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-primary mb-1">Horário de Funcionamento:</p>
                  <p className="text-foreground">
                    Segunda a Sexta: 7h às 17h
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-primary mb-1">Raio de Atendimento:</p>
                  <p className="text-foreground">
                    Região metropolitana de BH<br />
                    <span className="text-green-600 font-semibold">Frete GRÁTIS até 30km da fábrica</span>
                  </p>
                </div>
              </div>

              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 h-4 w-4" />
                  Abrir no Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
