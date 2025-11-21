import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Bathroom from "./pages/Bathroom";
import Kitchen from "./pages/Kitchen";
import Painting from "./pages/Painting";
import RenovationRemodeling from "./pages/RenovationRemodeling";
import ResidentialConstruction from "./pages/ResidentialConstruction";
import CommercialConstruction from "./pages/CommercialConstruction";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/bathroom" element={<Bathroom />} />
          <Route path="/services/kitchen" element={<Kitchen />} />
          <Route path="/services/painting" element={<Painting />} />
          <Route path="/services/renovation-remodeling" element={<RenovationRemodeling />} />
          <Route path="/services/residential-construction" element={<ResidentialConstruction />} />
          <Route path="/services/commercial-construction" element={<CommercialConstruction />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
