import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "João Silva",
      rating: 5,
      comment: "Excelente qualidade dos tijolos! Entrega rápida e preço justo. Recomendo muito!",
      date: "Há 2 semanas"
    },
    {
      id: 2,
      name: "Maria Santos",
      rating: 5,
      comment: "Comprei para minha obra e fiquei muito satisfeita. Atendimento excelente e produto de primeira qualidade.",
      date: "Há 1 mês"
    },
    {
      id: 3,
      name: "Carlos Pereira",
      rating: 5,
      comment: "Melhor preço da região! Já é a terceira vez que compro. Sempre pontual na entrega.",
      date: "Há 3 semanas"
    },
    {
      id: 4,
      name: "Ana Costa",
      rating: 5,
      comment: "Tijolos de ótima qualidade, entrega rápida e preço competitivo. Super recomendo!",
      date: "Há 2 meses"
    }
  ];

  const googleBusinessUrl = "https://www.google.com/maps/place/Cer%C3%A2mica+Santo+Ant%C3%B4nio/@-19.7667,-44.0869,15z";

  return (
    <section id="avaliacoes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-primary">O que Nossos Clientes Dizem</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Avaliações reais de clientes que confiam na qualidade da Cerâmica Santo Antônio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
          {reviews.map((review) => (
            <Card key={review.id} className="p-6 hover:shadow-medium transition-shadow">
              {/* Rating Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating
                        ? "fill-accent text-accent"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-foreground text-sm mb-4 leading-relaxed">
                "{review.comment}"
              </p>

              {/* Author & Date */}
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground text-sm">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.date}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <a href={googleBusinessUrl} target="_blank" rel="noopener noreferrer">
              <Star className="mr-2 h-5 w-5 fill-accent text-accent" />
              Ver Mais Avaliações no Google
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
