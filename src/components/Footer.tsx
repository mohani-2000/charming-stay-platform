import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import amaniLogo from "@/assets/amani-logo.png";

const Footer = () => {
  return (
    <footer className="bg-dark-section border-t border-gold/20 py-16 md:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={amaniLogo} alt="Amani Collection" className="h-14 w-auto mb-6" />
            <p className="text-dark-section-foreground/60 font-body text-xs leading-relaxed">
              Restaurants, Hotels, Camps & Lodges across Tanzania's most spectacular destinations.
            </p>
          </div>

          {/* Destinations */}
          <div>
            <h5 className="font-heading text-lg mb-5 text-gold-light">Destinations</h5>
            <ul className="space-y-2.5">
              {["Arusha", "Tarangire", "Ngorongoro", "Serengeti", "Zanzibar"].map((d) => (
                <li key={d}>
                  <Link to="/properties" className="text-white/80 font-body text-xs hover:text-gold transition-colors">
                    {d}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-heading text-lg mb-5 text-gold-light">Quick Links</h5>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Properties", href: "/properties" },
                { label: "Experiences", href: "/experiences" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-dark-section-foreground/60 font-body text-xs hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-heading text-lg mb-5 text-gold-light">Contact Us</h5>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-dark-section-foreground/60">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="font-body text-xs">+255 123 456 789</span>
              </li>
              <li className="flex items-center gap-3 text-dark-section-foreground/60">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="font-body text-xs">info@amanisafarilodge.co.tz</span>
              </li>
              <li className="flex items-start gap-3 text-dark-section-foreground/60">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="font-body text-xs">Arusha, Tanzania</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-section-foreground/40 font-body text-xs">
            © 2026 Amani Collection. All rights reserved.
          </p>
          <p className="text-dark-section-foreground/40 font-body text-xs">
            www.amanisafarilodge.co.tz
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
