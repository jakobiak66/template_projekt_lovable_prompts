import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Elektroinstallation from "./pages/leistungen/Heizung.tsx";
import Sicherheitsanlagen from "./pages/leistungen/Sanitaer.tsx";
import Hausgeraete from "./pages/leistungen/Gas.tsx";
import Laden from "./pages/leistungen/Service.tsx";
import Leistungen from "./pages/Leistungen.tsx";
import Kontakt from "./pages/Kontakt.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/leistungen/elektroinstallation" element={<Elektroinstallation />} />
          <Route path="/leistungen/sicherheitsanlagen" element={<Sicherheitsanlagen />} />
          <Route path="/leistungen/hausgeraete" element={<Hausgeraete />} />
          <Route path="/leistungen/laden" element={<Laden />} />
          <Route path="/kontakt" element={<Kontakt />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
