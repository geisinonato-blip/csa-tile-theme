import fabricaImage from "@/assets/fabrica-aerea.png";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Imagem */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={fabricaImage} 
                alt="Fábrica Cerâmica Santo Antônio - Produção de tijolos desde 1976"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-4xl font-bold">1976</p>
                <p className="text-lg">Ano de fundação</p>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="order-1 lg:order-2">
            <h2 className="mb-6 text-primary">Sobre a Cerâmica Santo Antônio</h2>
            
            <div className="space-y-4 text-lg text-foreground/90 leading-relaxed">
              <p>
                Desde <strong className="text-primary">1976</strong>, a <strong className="text-primary">Cerâmica Santo Antônio (CSA)</strong> vem construindo uma história de qualidade, resistência e preço justo em <strong>Ribeirão das Neves (MG)</strong>.
              </p>

              <p>
                Especializada na <strong>fabricação de tijolos 8 e 12 furos</strong>, a CSA é referência regional para quem busca <strong>comprar tijolos em BH, Justinópolis, Venda Nova e região metropolitana</strong>, com <strong>entrega rápida</strong> e <strong>negociação direta com o produtor</strong>.
              </p>

              <p>
                Nossa produção própria, com <strong>matéria-prima cuidadosamente selecionada</strong> e <strong>processos rigorosos de controle de qualidade</strong>, nos permite manter um compromisso inabalável: oferecer <strong>um dos melhores preços de Minas Gerais</strong> sem abrir mão da excelência.
              </p>

              <p className="font-semibold text-primary text-xl">
                💪 Construindo o futuro com a solidez de quase 50 anos de tradição.
              </p>
            </div>
          </div>
        </div>

        {/* Destaques em números */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: "48+", label: "Anos de experiência" },
            { number: "2", label: "Modelos de tijolos" },
            { number: "3", label: "Classificações de qualidade" },
            { number: "5", label: "Cidades atendidas" }
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-card rounded-xl shadow-soft">
              <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
