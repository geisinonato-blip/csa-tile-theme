import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import TijolosRibeiraoNeves from "./pages/TijolosRibeiraoNeves";
import TijolosJustinopolis from "./pages/TijolosJustinopolis";
import TijolosVendaNova from "./pages/TijolosVendaNova";
import TijolosContagem from "./pages/TijolosContagem";
import TijolosBeloHorizonte from "./pages/TijolosBeloHorizonte";
import TijolosSantaLuzia from "./pages/TijolosSantaLuzia";
import TijolosVespasiano from "./pages/TijolosVespasiano";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/tijolos-em-ribeirao-das-neves" element={<TijolosRibeiraoNeves />} />
          <Route path="/tijolos-em-justinopolis" element={<TijolosJustinopolis />} />
          <Route path="/tijolos-em-venda-nova" element={<TijolosVendaNova />} />
          <Route path="/tijolos-em-contagem" element={<TijolosContagem />} />
          <Route path="/tijolos-em-belo-horizonte" element={<TijolosBeloHorizonte />} />
          <Route path="/tijolos-em-santa-luzia" element={<TijolosSantaLuzia />} />
          <Route path="/tijolos-em-vespasiano" element={<TijolosVespasiano />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
