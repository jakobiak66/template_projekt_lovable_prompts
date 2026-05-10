import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Sanitaer from "./pages/Sanitaer.tsx";
import Heizung from "./pages/Heizung.tsx";
import Waermepumpe from "./pages/Waermepumpe.tsx";
import Beratung from "./pages/Beratung.tsx";
import Kontakt from "./pages/Kontakt.tsx";
import Karriere from "./pages/Karriere.tsx";
import NotFound from "./pages/NotFound.tsx";
import { ScrollToTop } from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ueber-uns" element={<About />} />
          <Route path="/leistungen/installation-sanitaer" element={<Sanitaer />} />
          <Route path="/leistungen/installation-heizgeraet" element={<Heizung />} />
          <Route path="/leistungen/waermepumpe" element={<Waermepumpe />} />
          <Route path="/leistungen/kostenlose-beratung" element={<Beratung />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/karriere" element={<Karriere />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
