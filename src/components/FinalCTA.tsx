import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const scrollToQuote = () => {
    const element = document.getElementById("quote");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-32">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-secondary/85"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Service you can trust!
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Let us know how we can help you today.
          </p>
          <Button onClick={scrollToQuote} size="lg" className="text-lg px-10 py-6 h-auto">
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
