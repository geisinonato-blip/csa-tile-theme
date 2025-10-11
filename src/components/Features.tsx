import { Award, DollarSign, Truck, Settings, Handshake } from "lucide-react";
import mascote from "@/assets/mascote-csa.png";

const Features = () => {
  const features = [
    {
      icon: Award,
      title: "Tradição e qualidade desde 1976",
      description: "Quase 50 anos de excelência na fabricação de tijolos"
    },
    {
      icon: DollarSign,
      title: "Um dos melhores preços da região",
      description: "Negocie direto com quem produz — sem intermediários"
    },
    {
      icon: Truck,
      title: "Entrega rápida a partir de 1 milheiro",
      description: "Frota própria para atender BH e região metropolitana"
    },
    {
      icon: Settings,
      title: "Produção própria com controle de qualidade",
      description: "Matéria-prima selecionada e processos rigorosos"
    },
    {
      icon: Handshake,
      title: "Atendemos obras, depósitos e construtoras",
      description: "Soluções personalizadas para cada tipo de cliente"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Mascote decorativo */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 hidden xl:block">
        <img src={mascote} alt="Mascote CSA" className="w-96 h-96" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-primary">Por que escolher a CSA?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Diferenciais que fazem da Cerâmica Santo Antônio referência em qualidade e confiança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-card shadow-soft hover:shadow-medium transition-smooth"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl text-center shadow-medium">
            <p className="text-2xl font-bold text-primary mb-2">
              💼 Negocie direto com quem produz
            </p>
            <p className="text-lg text-muted-foreground">
              Sem intermediários, com preço justo e atendimento personalizado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
