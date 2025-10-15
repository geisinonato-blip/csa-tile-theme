import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "A História da Cerâmica Santo Antônio: Tradição, Qualidade e Raízes em Ribeirão das Neves",
      excerpt: "De um sonho familiar em Justinópolis a uma referência regional. Conheça a trajetória de quase 50 anos de trabalho, união e compromisso com a qualidade.",
      date: "15 de Janeiro, 2024",
      slug: "historia-ceramica-santo-antonio"
    },
    {
      id: 2,
      title: "A História do Fundador da Cerâmica Santo Antônio: Trabalho, Família e Tijolo por Tijolo",
      excerpt: "Conheça a inspiradora história do Sr. Antônio (Sinô): de agricultor a empreendedor visionário. Uma jornada de superação, família e valores que construíram um legado.",
      date: "22 de Janeiro, 2024",
      slug: "origem-csa-trajetoria-fundador"
    },
    {
      id: 3,
      title: "Tipos de tijolos: 8 e 12 furos — resistência, economia e uso ideal",
      excerpt: "Entenda as diferenças entre os tijolos 8 e 12 furos e qual é o mais adequado para cada tipo de construção.",
      date: "29 de Janeiro, 2024",
      slug: "tipos-tijolos-8-12-furos"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-primary">Blog da CSA</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa história, produtos e dicas sobre construção com tijolos de qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article) => (
            <Card key={article.id} className="shadow-medium hover:shadow-strong transition-smooth flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <CardTitle className="text-xl leading-tight">{article.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-base leading-relaxed">
                  {article.excerpt}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full group" asChild>
                  <a href={`/blog/${article.slug}`}>
                    Ler mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Em breve, mais conteúdos sobre construção, dicas e novidades da Cerâmica Santo Antônio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
