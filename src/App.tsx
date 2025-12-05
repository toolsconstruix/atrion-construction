import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Bathroom from "./pages/Bathroom";
import Kitchen from "./pages/Kitchen";
import Painting from "./pages/Painting";
import RenovationRemodeling from "./pages/RenovationRemodeling";
import ResidentialConstruction from "./pages/ResidentialConstruction";
import CommercialConstruction from "./pages/CommercialConstruction";
import ScheduleAppointment from "./pages/ScheduleAppointment";
import AppointmentSuccess from "./pages/AppointmentSuccess";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

const CleaningServicesRedirect = () => {
  useEffect(() => {
    window.location.href = "https://cleaningservices.atrionconstruction.com/";
  }, []);
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cleaningservices/*" element={<CleaningServicesRedirect />} />
          <Route path="/services/bathroom" element={<Bathroom />} />
          <Route path="/services/kitchen" element={<Kitchen />} />
          <Route path="/services/painting" element={<Painting />} />
          <Route path="/services/renovation-remodeling" element={<RenovationRemodeling />} />
          <Route path="/services/residential-construction" element={<ResidentialConstruction />} />
          <Route path="/services/commercial-construction" element={<CommercialConstruction />} />
          <Route path="/schedule-appointment" element={<ScheduleAppointment />} />
          <Route path="/appointment-success" element={<AppointmentSuccess />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
