import { HardHat, Award, Clock, Shield } from "lucide-react";

const benefits = [
  {
    icon: HardHat,
    title: "Expert Craftsmanship",
    description: "Our skilled professionals bring years of experience and precision to every construction project.",
  },
  {
    icon: Award,
    title: "Quality Materials",
    description: "We use only premium, durable materials that ensure longevity and superior results.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Our efficient project management ensures your construction is completed on schedule.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "We maintain the highest safety standards to protect our team, your property, and your investment.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-background p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">
                  <Icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
