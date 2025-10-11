import { Calculator as CalculatorIcon, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Calculator from "./Calculator";

const FloatingCalculator = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          className={`fixed bottom-6 left-6 z-50 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full p-4 shadow-strong transition-all duration-300 group ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
          }`}
          aria-label="Abrir calculadora de tijolos"
        >
          <CalculatorIcon className="h-8 w-8" />
          <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-secondary text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-medium">
            Calcular Tijolos
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">Calculadora de Tijolos</DialogTitle>
        </DialogHeader>
        <Calculator />
      </DialogContent>
    </Dialog>
  );
};

export default FloatingCalculator;
