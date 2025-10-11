import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Delivery = () => {
  const areas = [
    "Ribeirão das Neves",
    "Justinópolis",
    "Venda Nova",
    "Contagem",
    "Belo Horizonte"
  ];

  const googleMapsUrl = "https://www.google.com/maps/place/Cer%C3%A2mica+Santo+Ant%C3%B4nio/@-19.7667,-44.0869,15z";

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

              <div className="flex items-start gap-3 p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Entrega Rápida</p>
                  <p className="text-sm text-muted-foreground">
                    Frota própria com agendamento flexível para sua obra
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa/Informações */}
          <div>
            <div className="bg-card p-8 rounded-2xl shadow-medium">
              <h3 className="text-2xl font-bold text-foreground mb-6">Localização da Fábrica</h3>
              
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
                    Até 50km da fábrica com condições especiais para grandes volumes
                  </p>
                </div>
              </div>

              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 h-4 w-4" />
                  Ver no Google Maps
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
