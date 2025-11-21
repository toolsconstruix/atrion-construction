import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ClipboardCheck, Calendar, Users2, Target } from "lucide-react";

const ProjectManagement = () => {
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
    "Complete project planning and scheduling",
    "Budget development and cost control",
    "Contractor and vendor coordination",
    "Quality assurance and inspections",
    "Timeline management and tracking",
    "Risk assessment and mitigation",
    "Regular progress reporting",
    "Change order management"
  ];

  const benefits = [
    {
      icon: ClipboardCheck,
      title: "Comprehensive Planning",
      description: "Detailed project plans that anticipate challenges and ensure success"
    },
    {
      icon: Calendar,
      title: "On-Time Delivery",
      description: "Rigorous scheduling and monitoring to keep projects on track"
    },
    {
      icon: Users2,
      title: "Expert Coordination",
      description: "Seamless management of all contractors, vendors, and stakeholders"
    },
    {
      icon: Target,
      title: "Goal Achievement",
      description: "Focused execution that delivers results within budget and timeline"
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
            backgroundImage: `url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-secondary/80"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Professional Project Management
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Expert oversight and coordination for construction projects of any size. 
              We ensure seamless execution, quality control, and on-time, on-budget delivery.
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
              Strategic Project Management for Construction Success
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                Construction projects involve countless moving parts—from coordinating multiple contractors 
                to managing budgets, timelines, and quality standards. ATRION Construction's professional 
                project management services provide the expertise and oversight needed to navigate these 
                complexities successfully.
              </p>
              <p>
                Our experienced project managers serve as your single point of contact, coordinating all 
                aspects of your construction project. We handle the details so you don't have to, providing 
                regular updates and ensuring that every phase of your project meets our high standards for 
                quality, safety, and efficiency.
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
              Our Project Management Services
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
              Why Choose Our Project Management
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

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our Project Management Process
            </h2>
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">1. Initial Planning & Assessment</h3>
                <p className="text-muted-foreground">
                  We begin by thoroughly understanding your project goals, budget, and timeline requirements.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">2. Detailed Scheduling & Budgeting</h3>
                <p className="text-muted-foreground">
                  Create comprehensive project plans with realistic timelines and detailed cost breakdowns.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">3. Execution & Coordination</h3>
                <p className="text-muted-foreground">
                  Manage all contractors, vendors, and resources to ensure smooth project execution.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">4. Monitoring & Quality Control</h3>
                <p className="text-muted-foreground">
                  Continuous oversight with regular inspections and progress reporting to maintain quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="quote" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Expert Project Management?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let our experienced project managers guide your construction project to success. Contact us today!
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

export default ProjectManagement;
