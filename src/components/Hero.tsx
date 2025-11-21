import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToQuote = () => {
    const element = document.getElementById("quote");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1541976590-713941681591?w=1920&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-secondary/80"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Professional Construction Services for Your Dream Project
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Transform your vision into reality with our expert construction services. Using advanced techniques and quality materials, 
            we deliver exceptional results that stand the test of time while ensuring safety and satisfaction throughout every phase.
          </p>
          <Button onClick={scrollToQuote} size="lg" className="text-lg px-8 py-6 h-auto">
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
