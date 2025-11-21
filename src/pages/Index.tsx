import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import QuoteForm from "@/components/QuoteForm";
import ContactForm from "@/components/ContactForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <Process />
      <About />
      <FAQ />
      <QuoteForm />
      <ContactForm />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
