import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLang } from "@/components/LanguageContext";
import amaniLogo from "@/assets/amani-logo.png";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "sw", label: "Kiswahili" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
];

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "About" },
  { href: "/experiences", label: "Experiences" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLang();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";
  const navBg = scrolled || !isHome
    ? "bg-dark-section backdrop-blur-md shadow-sm"
    : "bg-transparent";

  const textColor = scrolled || !isHome ? "text-gold-light" : "text-primary-foreground";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="container mx-auto flex items-center justify-between py-5 px-6 lg:px-12">
        <Link to="/" className="flex-shrink-0">
          <img src={amaniLogo} alt="Amani Collection" className="h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`story-link font-body text-[11px] tracking-[0.25em] uppercase transition-colors duration-300 ${
                location.pathname === link.href
                  ? "text-gold"
                  : `${textColor} hover:text-gold`
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-2 ${textColor} hover:text-primary transition-colors`}
            >
              <Globe className="w-4 h-4" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-body">
                {lang}
              </span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-3 bg-background border border-border py-2 min-w-[150px] shadow-lg">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setLangOpen(false);
                    }}
                    className={`block w-full text-left px-5 py-2.5 text-sm font-body hover:bg-secondary transition-colors ${
                      lang === l.code ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden ${textColor}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark-section border-t border-gold/20 animate-fade-in">
          <div className="flex flex-col py-6 px-6 gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-body text-sm tracking-[0.2em] uppercase transition-colors ${
                  location.pathname === link.href ? "text-gold" : "text-gold-light hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border pt-4 flex flex-wrap gap-3">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code);
                    setMobileOpen(false);
                  }}
                  className={`text-xs uppercase tracking-wider px-3 py-1.5 border ${
                    lang === l.code
                      ? "text-primary border-primary"
                      : "text-muted-foreground border-border"
                  }`}
                >
                  {l.label}
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
