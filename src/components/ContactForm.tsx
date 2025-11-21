import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactForm = () => {
  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your construction project? Contact us today and let's bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 p-4 rounded-lg w-fit mb-6">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Phone</h3>
              <a 
                href="tel:+17812687795" 
                className="text-lg text-muted-foreground hover:text-primary transition-colors block mb-2"
              >
                (781) 268-7795
              </a>
              <p className="text-sm text-muted-foreground">
                Call us for immediate assistance
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 p-4 rounded-lg w-fit mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Email</h3>
              <a 
                href="mailto:atrionconstruction@gmail.com" 
                className="text-lg text-muted-foreground hover:text-primary transition-colors block mb-2 break-all"
              >
                atrionconstruction@gmail.com
              </a>
              <p className="text-sm text-muted-foreground">
                Send us your project details
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 p-4 rounded-lg w-fit mb-6">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Location</h3>
              <p className="text-lg text-muted-foreground mb-2">
                Boston, MA
              </p>
              <p className="text-sm text-muted-foreground">
                Serving Boston and surrounding areas
              </p>
            </div>
          </div>

          <div className="mt-12 bg-primary/5 p-8 rounded-lg border border-primary/20">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                <div className="space-y-1 text-muted-foreground">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
