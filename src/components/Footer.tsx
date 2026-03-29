import { Mail, Phone, MapPin } from "lucide-react";
import amaniLogo from "@/assets/amani-logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={amaniLogo} alt="Amani Collection" className="h-16 w-auto mb-6" />
            <p className="text-muted-foreground font-body text-xs leading-relaxed">
              Restaurants, Hotels, Camps & Lodges across Tanzania's most spectacular destinations.
            </p>
          </div>

          {/* Destinations */}
          <div>
            <h5 className="font-heading text-lg mb-4 text-heading">Destinations</h5>
            <ul className="space-y-2">
              {["Arusha", "Tarangire", "Ngorongoro", "Serengeti", "Zanzibar"].map((d) => (
                <li key={d}>
                  <a href="#properties" className="text-muted-foreground font-body text-xs hover:text-primary transition-colors">
                    {d}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-heading text-lg mb-4 text-heading">Quick Links</h5>
            <ul className="space-y-2">
              {["About Us", "Our Properties", "Experiences", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground font-body text-xs hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-heading text-lg mb-4 text-heading">Contact Us</h5>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-body text-xs">+255 123 456 789</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-body text-xs">info@amanisafarilodge.co.tz</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-body text-xs">Arusha, Tanzania</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground font-body text-xs">
            © 2026 Amani Collection. All rights reserved.
          </p>
          <p className="text-muted-foreground font-body text-xs">
            www.amanisafarilodge.co.tz
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
