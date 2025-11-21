import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Sparkles, PaintBucket, Lightbulb, Heart } from "lucide-react";

const RenovationRemodeling = () => {
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
    "Kitchen remodeling and upgrades",
    "Bathroom renovations",
    "Whole home makeovers",
    "Room additions and expansions",
    "Flooring installation and replacement",
    "Interior and exterior painting",
    "Lighting and electrical upgrades",
    "Structural modifications"
  ];

  const benefits = [
    {
      icon: Sparkles,
      title: "Modern Updates",
      description: "Transform outdated spaces into contemporary, functional areas"
    },
    {
      icon: PaintBucket,
      title: "Design Expertise",
      description: "Professional design guidance to maximize your space's potential"
    },
    {
      icon: Lightbulb,
      title: "Smart Solutions",
      description: "Innovative ideas that enhance both aesthetics and functionality"
    },
    {
      icon: Heart,
      title: "Personal Touch",
      description: "Customized renovations that reflect your unique style and needs"
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
            backgroundImage: `url(https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1920&q=80)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-secondary/80"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Renovation & Remodeling Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Breathe new life into your space with expert renovation and remodeling services. 
              From kitchens to complete home makeovers, we transform your vision into reality.
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
              Transform Your Space with Expert Renovations
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                Whether you're looking to update a single room or undertake a complete home transformation, 
                ATRION Construction brings creativity, expertise, and meticulous attention to detail to every 
                renovation project. We understand that renovations can be disruptive, which is why we work 
                efficiently to minimize inconvenience while maximizing results.
              </p>
              <p>
                Our renovation services go beyond simple updates—we reimagine spaces to better suit your 
                lifestyle, improve functionality, and increase your property's value. From concept to completion, 
                we guide you through every step of the renovation process, ensuring your satisfaction at every stage.
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
              Renovation Services We Offer
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
              The ATRION Renovation Advantage
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
              Ready to Renovate Your Space?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss your renovation ideas and create a plan to transform your space. Contact us today!
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

export default RenovationRemodeling;
