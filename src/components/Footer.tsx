import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-secondary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <img src="/logo_atrion_main.png" alt="ATRION Construction Services" className="h-12 w-auto mb-6 brightness-0 invert" />
            <p className="text-white/80 leading-relaxed">
              Your trusted partner for professional construction services in Boston, MA. 
              Quality craftsmanship you can count on.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection("home")} className="text-white/80 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="text-white/80 hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-white/80 hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-white/80 hover:text-white transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-white/80 hover:text-white transition-colors">
                  Request a Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3 text-white/80">
              <li>Bathroom Remodeling</li>
              <li>Kitchen Renovation</li>
              <li>Painting Services</li>
              <li>Project Management</li>
              <li>Custom Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-white/80">
                  Boston, MA<br />
                  United States
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="text-white/80 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@atrion.com" className="text-white/80 hover:text-white transition-colors">
                  info@atrion.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} ATRION Construction Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
