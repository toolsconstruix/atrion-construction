import { Button } from "@/components/ui/button";

const About = () => {
  const scrollToQuote = () => {
    const element = document.getElementById("quote");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Trusted Partner for Complete Construction Solutions
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At ATRION Construction, we understand that your home or business is more than just a structure – 
                it's where life happens, memories are made, and success is built. That's why we're committed to 
                providing exceptional construction services that not only meet but exceed your expectations.
              </p>
              <p>
                With years of industry experience and a team of certified professionals, we bring expertise, 
                reliability, and attention to detail to every project. Our advanced construction techniques combined 
                with quality materials ensures your space is not just built, but built to last.
              </p>
              <p>
                We take pride in our work and stand behind every service we provide. From residential homes to 
                commercial properties, we deliver consistent quality that has made us the preferred choice in Boston 
                and surrounding areas.
              </p>
            </div>
            <Button onClick={scrollToQuote} size="lg" className="mt-8">
              Request a Quote
            </Button>
          </div>

          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                alt="Professional construction in action"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-lg shadow-lg max-w-xs hidden lg:block">
              <p className="text-4xl font-bold mb-2">15+</p>
              <p className="text-lg">Years of Excellence in Construction Services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
