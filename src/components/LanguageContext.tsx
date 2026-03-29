import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type Translations = Record<string, Record<string, string>>;

const TRANSLATIONS: Translations = {
  en: {},
  sw: {
    "Explore Our Collection": "Gundua Mkusanyiko Wetu",
    "Our Collection": "Mkusanyiko Wetu",
    "Lodges & Camps": "Nyumba za Wageni na Kambi",
    "Discover More": "Gundua Zaidi",
    "Book Now": "Weka Nafasi Sasa",
    "About Us": "Kuhusu Sisi",
    "Experiences": "Uzoefu",
    "Contact": "Wasiliana",
    "Home": "Nyumbani",
    "Properties": "Mali",
  },
  fr: {
    "Explore Our Collection": "Explorez Notre Collection",
    "Our Collection": "Notre Collection",
    "Lodges & Camps": "Lodges et Camps",
    "Discover More": "En Savoir Plus",
    "Book Now": "Réserver",
    "About Us": "À Propos",
    "Experiences": "Expériences",
    "Contact": "Contact",
    "Home": "Accueil",
    "Properties": "Propriétés",
  },
  de: {
    "Explore Our Collection": "Entdecken Sie Unsere Kollektion",
    "Our Collection": "Unsere Kollektion",
    "Lodges & Camps": "Lodges und Camps",
    "Discover More": "Mehr Entdecken",
    "Book Now": "Jetzt Buchen",
    "About Us": "Über Uns",
    "Experiences": "Erlebnisse",
    "Contact": "Kontakt",
    "Home": "Startseite",
    "Properties": "Unterkünfte",
  },
  es: {
    "Explore Our Collection": "Explore Nuestra Colección",
    "Our Collection": "Nuestra Colección",
    "Lodges & Camps": "Lodges y Campamentos",
    "Discover More": "Descubrir Más",
    "Book Now": "Reservar Ahora",
    "About Us": "Sobre Nosotros",
    "Experiences": "Experiencias",
    "Contact": "Contacto",
    "Home": "Inicio",
    "Properties": "Propiedades",
  },
};

interface LangContextType {
  lang: string;
  setLang: (lang: string) => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
  t: (key: string) => key,
});

export const useLang = () => useContext(LangContext);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState("en");

  const t = useCallback(
    (key: string) => {
      if (lang === "en") return key;
      return TRANSLATIONS[lang]?.[key] || key;
    },
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
};
