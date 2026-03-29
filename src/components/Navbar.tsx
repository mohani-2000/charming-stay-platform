import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import amaniLogo from "@/assets/amani-logo.png";

interface NavbarProps {
  currentLang: string;
  onLangChange: (lang: string) => void;
}

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "sw", label: "Kiswahili" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
];

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#properties", label: "Properties" },
  { href: "#about", label: "About" },
  { href: "#experiences", label: "Experiences" },
  { href: "#contact", label: "Contact" },
];

const Navbar = ({ currentLang, onLangChange }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#home" className="flex-shrink-0">
          <img src={amaniLogo} alt="Amani Collection" className="h-12 w-auto" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm tracking-[0.2em] uppercase text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-foreground hover:text-primary transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider">
                {currentLang}
              </span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-card border border-border py-2 min-w-[140px]">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLangChange(lang.code);
                      setLangOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-secondary transition-colors ${
                      currentLang === lang.code
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <div className="flex flex-col py-4 px-6 gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-body text-sm tracking-[0.2em] uppercase text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-border pt-4 flex flex-wrap gap-3">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    onLangChange(lang.code);
                    setMobileOpen(false);
                  }}
                  className={`text-xs uppercase tracking-wider px-3 py-1 border border-border ${
                    currentLang === lang.code
                      ? "text-primary border-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
