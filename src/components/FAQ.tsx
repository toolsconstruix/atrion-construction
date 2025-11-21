import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a typical construction project take?",
    answer: "Project timelines vary based on scope and complexity. A simple renovation may take 2-4 weeks, while custom home construction typically requires 6-12 months. We provide detailed timelines during the planning phase and keep you updated throughout the project to ensure transparency and manage expectations.",
  },
  {
    question: "Do you handle permits and inspections?",
    answer: "Yes! We manage all necessary permits and coordinate required inspections throughout the construction process. Our team is well-versed in local building codes and regulations, ensuring your project meets all compliance requirements. This comprehensive service saves you time and ensures everything is done correctly.",
  },
  {
    question: "What is your payment structure?",
    answer: "We typically work with a milestone-based payment structure. This includes an initial deposit, progress payments at key project stages, and a final payment upon completion. We provide transparent, detailed quotes upfront with no hidden fees, and we're happy to discuss payment plans that work for your budget.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely! We are fully licensed, bonded, and insured. Our team carries comprehensive liability insurance and workers' compensation coverage to protect both you and our workers. We're happy to provide proof of insurance and licensing upon request, giving you complete peace of mind.",
  },
  {
    question: "Can you work with my existing architect or designer?",
    answer: "Yes, we collaborate effectively with architects, designers, and other professionals. We believe in teamwork and open communication to bring your vision to life. Whether you have existing plans or need help with design, we're flexible and committed to making your project a success.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our services
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
