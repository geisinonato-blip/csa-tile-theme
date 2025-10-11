import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import tijolo8 from "@/assets/tijolo-8-furos.jpg";
import tijolo12 from "@/assets/tijolo-12-furos.jpg";

const Products = () => {
  const whatsappNumber = "5531984680246";

  const products = [
    {
      name: "Tijolo 8 Furos",
      dimensions: "9 x 19 x 29 cm",
      image: tijolo8,
      qualities: [
        { name: "1ª Linha Premium", description: "Alta resistência e acabamento superior" },
        { name: "Requeimado", description: "Mais escuro, firme e econômico" },
        { name: "2ª Linha", description: "Excelente custo-benefício para obras básicas" }
      ]
    },
    {
      name: "Tijolo 12 Furos",
      dimensions: "14 x 19 x 29 cm",
      image: tijolo12,
      qualities: [
        { name: "1ª Linha Premium", description: "Alta resistência e acabamento superior" },
        { name: "Requeimado", description: "Mais escuro, firme e econômico" },
        { name: "2ª Linha", description: "Excelente custo-benefício para obras básicas" }
      ]
    }
  ];

  const handleWhatsApp = (productName: string, quality: string) => {
    const message = `Olá! Gostaria de solicitar um orçamento de ${productName} - ${quality}.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="produtos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-primary">Nossos Produtos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dois modelos de tijolos com três classificações de qualidade para atender todas as necessidades da sua obra.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.name} className="shadow-medium hover:shadow-strong transition-smooth overflow-hidden">
              <div className="h-64 overflow-hidden bg-white">
                <img 
                  src={product.image} 
                  alt={`${product.name} - Cerâmica Santo Antônio`}
                  className="w-full h-full object-contain p-8 hover:scale-105 transition-smooth"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{product.name}</CardTitle>
                <CardDescription className="text-lg">Dimensões: {product.dimensions}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {product.qualities.map((quality) => (
                    <div key={quality.name} className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-smooth">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-foreground">{quality.name}</h4>
                          <Badge className="bg-green-500 text-white text-xs hover:bg-green-600">
                            Pronta Entrega
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{quality.description}</p>
                      </div>
                      <Button 
                        size="sm"
                        onClick={() => handleWhatsApp(product.name, quality.name)}
                        className="bg-primary hover:bg-primary/90 shrink-0"
                      >
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Pedir
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg max-w-3xl mx-auto">
          <p className="text-lg font-semibold text-center">
            📦 Entregas a partir de <span className="text-primary">1 milheiro</span>, com <span className="text-primary">condições especiais</span> para compras em quantidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
