import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Building2, Users, TrendingUp, Award } from "lucide-react";

const CommercialConstruction = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToQuote = () => {
    const element = document.getElementById("quote");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    "Office buildings and corporate spaces",
    "Retail stores and shopping centers",
    "Restaurants and hospitality venues",
    "Industrial facilities and warehouses",
    "Medical offices and clinics",
    "Educational facilities",
    "Multi-unit residential buildings",
    "Tenant improvements and fit-outs"
  ];

  const benefits = [
    {
      icon: Building2,
      title: "Commercial Expertise",
      description: "Specialized knowledge in commercial building codes and requirements"
    },
    {
      icon: Users,
      title: "Minimal Disruption",
      description: "Efficient scheduling to minimize impact on your business operations"
    },
    {
      icon: TrendingUp,
      title: "Budget Management",
      description: "Transparent pricing and cost control throughout the project"
    },
    {
      icon: Award,
      title: "Licensed & Insured",
      description: "Full licensing, bonding, and comprehensive insurance coverage"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center py-20 md:py-24 mt-24 md:mt-28">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1920&q=80)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-secondary/80"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Commercial Construction Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Building successful business spaces with professional expertise and on-time delivery. 
              From offices to retail, we create environments where businesses thrive.
            </p>
            <Button onClick={scrollToQuote} size="lg" className="text-lg px-8 py-6 h-auto mb-8">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Professional Commercial Construction Solutions
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                ATRION Construction delivers comprehensive commercial construction services tailored to your 
                business needs. We understand the unique challenges of commercial projects—tight deadlines, 
                budget constraints, and the need to minimize disruption to your operations.
              </p>
              <p>
                Our experienced team has successfully completed projects across various commercial sectors, 
                from modern office spaces to retail stores and industrial facilities. We combine technical 
                expertise with practical business understanding to deliver projects that meet your functional 
                requirements and exceed your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Commercial Services We Provide
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Businesses Choose ATRION
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-primary/10 p-4 rounded-lg w-fit mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="quote" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Commercial Space?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss your commercial construction project. Contact us for a consultation and detailed quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto">
                <a href="tel:+17812687795">Call (781) 268-7795</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto bg-white text-secondary hover:bg-white/90">
                <a href="mailto:atrionconstruction@gmail.com">Email Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommercialConstruction;
