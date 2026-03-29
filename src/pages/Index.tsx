import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BookingBar from "@/components/BookingBar";
import PropertiesPreview from "@/components/PropertiesPreview";
import AboutPreview from "@/components/AboutPreview";
import TestimonialParallax from "@/components/TestimonialParallax";
import ParallaxGallery from "@/components/ParallaxGallery";
import ExperiencesBanner from "@/components/ExperiencesBanner";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <BookingBar />
    <PropertiesPreview />
    <AboutPreview />
    <TestimonialParallax />
    <ExperiencesBanner />
    <ParallaxGallery />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
