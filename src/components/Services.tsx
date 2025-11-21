import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Residential Construction",
    description: "From custom homes to renovations and additions, we bring your vision to life with quality craftsmanship and attention to detail. Our team handles every aspect of residential construction with precision and care.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    link: "/services/residential-construction",
  },
  {
    title: "Commercial Construction",
    description: "Expert construction services for commercial properties including offices, retail spaces, and industrial facilities. We deliver projects on time and within budget while maintaining the highest quality standards.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    link: "/services/commercial-construction",
  },
  {
    title: "Renovation & Remodeling",
    description: "Transform your existing space with our comprehensive renovation services. Whether it's a kitchen remodel, bathroom upgrade, or complete home makeover, we ensure exceptional results.",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
    link: "/services/renovation-remodeling",
  },
  {
    title: "Project Management",
    description: "Professional project management services ensuring seamless coordination, timely completion, and quality control throughout every phase of your construction project.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    link: "/services/project-management",
  },
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Construction Services Tailored to Your Needs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a complete range of professional construction solutions to bring your vision to life with quality and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <Link to={service.link}>
                <div className="relative h-64 overflow-hidden cursor-pointer">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </Link>
              <div className="p-6">
                <Link to={service.link}>
                  <h3 className="text-2xl font-semibold mb-3 hover:text-primary transition-colors cursor-pointer">
                    {service.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <Link to={service.link}>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
