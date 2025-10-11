import { useState } from "react";
import { Plus, Trash2, Calculator as CalcIcon, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface Wall {
  id: number;
  width: number;
  height: number;
  doorWidth: number;
  doorHeight: number;
}

const Calculator = () => {
  const [brickType, setBrickType] = useState<"8" | "12">("8");
  const [walls, setWalls] = useState<Wall[]>([
    { id: 1, width: 0, height: 0, doorWidth: 0, doorHeight: 0 }
  ]);

  const BRICKS_PER_SQM = 17; // 17 tijolos por m²
  const whatsappNumber = "5531984680246";

  const addWall = () => {
    const newId = Math.max(...walls.map(w => w.id), 0) + 1;
    setWalls([...walls, { id: newId, width: 0, height: 0, doorWidth: 0, doorHeight: 0 }]);
  };

  const removeWall = (id: number) => {
    if (walls.length > 1) {
      setWalls(walls.filter(w => w.id !== id));
    } else {
      toast.error("É necessário pelo menos uma parede!");
    }
  };

  const updateWall = (id: number, field: keyof Wall, value: number) => {
    setWalls(walls.map(w => 
      w.id === id ? { ...w, [field]: value } : w
    ));
  };

  const calculateTotal = () => {
    let totalArea = 0;

    walls.forEach(wall => {
      const wallArea = wall.width * wall.height;
      const doorArea = wall.doorWidth * wall.doorHeight;
      const netArea = wallArea - doorArea;
      totalArea += netArea > 0 ? netArea : 0;
    });

    const totalBricks = Math.ceil(totalArea * BRICKS_PER_SQM);
    const thousands = Math.ceil(totalBricks / 1000);

    return { totalArea, totalBricks, thousands };
  };

  const handleSendWhatsApp = () => {
    const { totalArea, totalBricks, thousands } = calculateTotal();

    if (totalBricks === 0) {
      toast.error("Preencha as dimensões das paredes para calcular!");
      return;
    }

    const wallsDetails = walls.map((wall, index) => {
      const wallArea = wall.width * wall.height;
      const doorArea = wall.doorWidth * wall.doorHeight;
      const netArea = wallArea - doorArea;
      return `Parede ${index + 1}: ${wall.width}m x ${wall.height}m${doorArea > 0 ? ` (desconto porta/janela: ${wall.doorWidth}m x ${wall.doorHeight}m)` : ''} = ${netArea.toFixed(2)}m²`;
    }).join('\n');

    const message = `🧱 *Orçamento de Tijolos - Cerâmica Santo Antônio*

📋 *Tipo:* Tijolo ${brickType} furos

📐 *Detalhes das paredes:*
${wallsDetails}

📊 *Resultado do cálculo:*
• Área total: ${totalArea.toFixed(2)}m²
• Quantidade de tijolos: ${totalBricks.toLocaleString('pt-BR')}
• Milheiros necessários: ${thousands}

Gostaria de solicitar um orçamento!`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const { totalArea, totalBricks, thousands } = calculateTotal();

  return (
    <section id="calculadora" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-primary">Calculadora de Tijolos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Calcule quantos tijolos você precisa para sua obra de forma rápida e precisa.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-strong">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalcIcon className="h-6 w-6 text-primary" />
              Faça seu cálculo
            </CardTitle>
            <CardDescription>
              Preencha as dimensões de cada parede. O cálculo considera 17 tijolos por m² (já inclui margem de segurança).
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Seleção do tipo de tijolo */}
            <div className="space-y-2">
              <Label htmlFor="brick-type">Tipo de Tijolo</Label>
              <Select value={brickType} onValueChange={(value: "8" | "12") => setBrickType(value)}>
                <SelectTrigger id="brick-type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="8">Tijolo 8 furos (9 x 19 x 29 cm)</SelectItem>
                  <SelectItem value="12">Tijolo 12 furos (14 x 19 x 29 cm)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Paredes */}
            <div className="space-y-6">
              {walls.map((wall, index) => (
                <div key={wall.id} className="p-6 bg-muted/50 rounded-lg space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-lg">Parede {index + 1}</h4>
                    {walls.length > 1 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeWall(wall.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`width-${wall.id}`}>Largura da Parede (metros) *</Label>
                      <Input
                        id={`width-${wall.id}`}
                        type="number"
                        min="0"
                        step="0.1"
                        placeholder="Ex: 5.5"
                        value={wall.width || ""}
                        onChange={(e) => updateWall(wall.id, "width", parseFloat(e.target.value) || 0)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`height-${wall.id}`}>Altura da Parede (metros) *</Label>
                      <Input
                        id={`height-${wall.id}`}
                        type="number"
                        min="0"
                        step="0.1"
                        placeholder="Ex: 3.0"
                        value={wall.height || ""}
                        onChange={(e) => updateWall(wall.id, "height", parseFloat(e.target.value) || 0)}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`door-width-${wall.id}`}>Largura Porta/Janela (opcional)</Label>
                      <Input
                        id={`door-width-${wall.id}`}
                        type="number"
                        min="0"
                        step="0.1"
                        placeholder="Ex: 1.0"
                        value={wall.doorWidth || ""}
                        onChange={(e) => updateWall(wall.id, "doorWidth", parseFloat(e.target.value) || 0)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`door-height-${wall.id}`}>Altura Porta/Janela (opcional)</Label>
                      <Input
                        id={`door-height-${wall.id}`}
                        type="number"
                        min="0"
                        step="0.1"
                        placeholder="Ex: 2.1"
                        value={wall.doorHeight || ""}
                        onChange={(e) => updateWall(wall.id, "doorHeight", parseFloat(e.target.value) || 0)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Botão adicionar parede */}
            <Button
              variant="outline"
              onClick={addWall}
              className="w-full border-dashed"
            >
              <Plus className="mr-2 h-4 w-4" />
              Adicionar Outra Parede
            </Button>

            {/* Resultado */}
            {totalBricks > 0 && (
              <div className="p-6 bg-primary/10 rounded-lg border-2 border-primary space-y-3">
                <h3 className="text-xl font-bold text-primary">Resultado do Cálculo</h3>
                <div className="space-y-2">
                  <p className="text-lg">
                    <span className="font-semibold">Área total:</span> {totalArea.toFixed(2)} m²
                  </p>
                  <p className="text-lg">
                    <span className="font-semibold">Quantidade de tijolos:</span> {totalBricks.toLocaleString('pt-BR')} unidades
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    Milheiros necessários: {thousands}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  * Pedido mínimo: 1 milheiro. Cálculo já inclui margem de segurança.
                </p>
              </div>
            )}

            {/* Botão WhatsApp */}
            <Button
              onClick={handleSendWhatsApp}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 h-auto shadow-medium"
              size="lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Fechar Pedido no WhatsApp (31) 98468-0246
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Calculator;
