import { LangProvider, useLang } from "@/components/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BookingBar from "@/components/BookingBar";
import PropertiesSection from "@/components/PropertiesSection";
import AboutSection from "@/components/AboutSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const PageContent = () => {
  const { lang, setLang } = useLang();

  return (
    <div className="min-h-screen">
      <Navbar currentLang={lang} onLangChange={setLang} />
      <HeroSection />
      <BookingBar />
      <PropertiesSection />
      <AboutSection />
      <ExperiencesSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

const Index = () => (
  <LangProvider>
    <PageContent />
  </LangProvider>
);

export default Index;
