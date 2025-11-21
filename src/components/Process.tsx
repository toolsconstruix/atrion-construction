import { FileText, Ruler, Hammer, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Consultation",
    description: "We meet with you to understand your vision, requirements, and budget for your construction project.",
  },
  {
    icon: Ruler,
    title: "Planning & Design",
    description: "Our team creates detailed plans and designs, ensuring every aspect meets your specifications.",
  },
  {
    icon: Hammer,
    title: "Construction",
    description: "Expert craftsmen execute the project with precision, using quality materials and proven techniques.",
  },
  {
    icon: CheckCircle,
    title: "Final Inspection",
    description: "We conduct a thorough walkthrough to ensure exceptional quality and your complete satisfaction.",
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Construction Process
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            A systematic approach that delivers consistent, outstanding results every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-10 w-10 text-white" />
                </div>
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-4 font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/80 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
