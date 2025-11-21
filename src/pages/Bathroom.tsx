import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Droplets, Sparkles, Wrench, Shield } from "lucide-react";

const Bathroom = () => {
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
    "Complete bathroom remodeling",
    "Shower and bathtub installation",
    "Vanity and cabinet upgrades",
    "Tile and flooring installation",
    "Plumbing fixture replacement",
    "Lighting and ventilation",
    "Custom storage solutions",
    "Accessibility modifications"
  ];

  const benefits = [
    {
      icon: Droplets,
      title: "Modern Fixtures",
      description: "High-quality, water-efficient fixtures that combine style and functionality"
    },
    {
      icon: Sparkles,
      title: "Luxury Finishes",
      description: "Premium materials and finishes for a spa-like experience"
    },
    {
      icon: Wrench,
      title: "Expert Installation",
      description: "Professional craftsmanship ensuring lasting quality and performance"
    },
    {
      icon: Shield,
      title: "Waterproofing",
      description: "Proper waterproofing and moisture control for long-term durability"
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
            backgroundImage: `url(https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&q=80)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-secondary/80"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Bathroom Remodeling Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Transform your bathroom into a luxurious retreat with expert design and quality craftsmanship. 
              From modern updates to complete renovations, we create spaces you'll love.
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
              Expert Bathroom Renovation
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                Your bathroom should be more than just functional—it should be a personal sanctuary where you 
                can relax and rejuvenate. ATRION Construction specializes in creating beautiful, functional 
                bathrooms that enhance your daily routine and add value to your home.
              </p>
              <p>
                Whether you're looking to update outdated fixtures, improve functionality, or create a spa-like 
                retreat, our experienced team handles every detail with precision. We work with you from design 
                to completion, ensuring your vision becomes reality while staying within budget and timeline.
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
              Bathroom Services We Offer
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
              Why Choose Our Bathroom Services
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
              Ready to Transform Your Bathroom?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's create the bathroom of your dreams. Contact us today for a consultation!
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

export default Bathroom;
