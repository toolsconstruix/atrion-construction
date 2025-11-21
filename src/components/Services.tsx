import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Bathroom",
    description: "Transform your bathroom into a luxurious retreat with our expert renovation services. From modern fixtures to complete remodels, we create functional and beautiful spaces tailored to your needs.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    link: "/services/bathroom",
  },
  {
    title: "Kitchen",
    description: "Create the kitchen of your dreams with our comprehensive remodeling services. We combine functionality with style, delivering custom cabinetry, modern appliances, and stunning finishes.",
    image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&q=80",
    link: "/services/kitchen",
  },
  {
    title: "Painting",
    description: "Professional interior and exterior painting services that bring new life to your space. Our skilled painters deliver flawless finishes with attention to detail and quality materials.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80",
    link: "/services/painting",
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
