import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, PaintBucket, Home, Building2, Shield } from "lucide-react";

const Painting = () => {
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
    "Interior painting services",
    "Exterior painting and protection",
    "Cabinet and trim painting",
    "Deck and fence staining",
    "Wallpaper removal and installation",
    "Drywall repair and preparation",
    "Color consultation",
    "Commercial painting projects"
  ];

  const benefits = [
    {
      icon: PaintBucket,
      title: "Quality Materials",
      description: "Premium paints and finishes for lasting beauty and protection"
    },
    {
      icon: Home,
      title: "Interior Expertise",
      description: "Flawless interior finishes that transform your living spaces"
    },
    {
      icon: Building2,
      title: "Exterior Protection",
      description: "Durable exterior coatings that withstand the elements"
    },
    {
      icon: Shield,
      title: "Surface Preparation",
      description: "Meticulous prep work ensuring smooth, long-lasting results"
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
            backgroundImage: `url(https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920&q=80)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-secondary/80"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Professional Painting Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Bring new life to your space with expert painting services. 
              From interior walls to exterior protection, we deliver flawless finishes every time.
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
              Expert Painting Solutions
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                A fresh coat of paint can completely transform your space, adding value, protection, and 
                personality to your home or business. ATRION Construction's professional painters combine 
                technical expertise with artistic skill to deliver stunning results that last.
              </p>
              <p>
                We use only premium paints and materials, ensuring superior coverage, durability, and finish. 
                Our meticulous preparation process and attention to detail guarantee smooth, even results that 
                enhance your property's appearance and protect it from the elements.
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
              Painting Services We Offer
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
              Why Choose Our Painting Services
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
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let our expert painters bring your vision to life. Contact us today for a free estimate!
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

export default Painting;
