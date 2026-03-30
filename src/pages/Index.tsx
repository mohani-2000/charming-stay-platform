import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BookingBar from "@/components/BookingBar";
import ContentImageRow from "@/components/ContentImageRow";
import ParallaxDivider from "@/components/ParallaxDivider";
import AboutPreview from "@/components/AboutPreview";
import TestimonialParallax from "@/components/TestimonialParallax";
import PropertiesPreview from "@/components/PropertiesPreview";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import propertySilale from "@/assets/property-silale.jpg";
import propertyOlduvai from "@/assets/property-olduvai.jpg";
import propertyNgome from "@/assets/property-ngome.jpg";
import propertyCottages from "@/assets/property-cottages.jpg";
import propertyLobo from "@/assets/property-lobo.jpg";
import propertyManyara from "@/assets/property-manyara.jpg";
import heroMain from "@/assets/hero-main.jpg";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <BookingBar />

    {/* Parallax divider 1 */}
    <ParallaxDivider image={heroMain} alt="Tanzania landscape" />

    {/* Content row: Image left + text right */}
    <ContentImageRow
      image={propertySilale}
      alt="The Silale Tarangire Park"
      subtitle="Tarangire"
      title="The Silale Tarangire Park"
      description="Perched on the Great Rift Valley escarpment, enjoy breathtaking lake views and diverse ecosystems from forest to flamingo-filled shores, all within intimate proximity to Tanzania's most iconic wildlife."
      linkTo="/properties/silale-tarangire"
    />

    {/* Parallax divider 2 */}
    <ParallaxDivider image={propertyLobo} alt="Serengeti sunset" />

    {/* Content row: reversed — text left + image right */}
    <ContentImageRow
      image={propertyNgome}
      alt="The Ngome House"
      subtitle="Serengeti"
      title="The Ngome House"
      description="Immerse yourself in the world's most famous wildlife ecosystem. Year-round game viewing and front-row access to the Great Migration from the heart of the Serengeti plains."
      linkTo="/properties/ngome-house"
      reversed
    />

    {/* Parallax divider 3 */}
    <ParallaxDivider image={propertyOlduvai} alt="Ngorongoro highlands" />

    {/* About section */}
    <AboutPreview />

    {/* Parallax divider 4 */}
    <ParallaxDivider image={propertyManyara} alt="Manyara lakeside" />

    {/* Content row: Image left + text right */}
    <ContentImageRow
      image={propertyCottages}
      alt="Golf & Wildlife Cottages"
      subtitle="Tarangire"
      title="Golf & Wildlife Cottages"
      description="Witness dramatic elephant migrations in Tanzania's most underrated park. Baobab forests, seasonal wetlands, and intimate wildlife encounters paired with championship golf."
      linkTo="/properties/golf-wildlife-cottages"
    />

    {/* Testimonial parallax section */}
    <TestimonialParallax />

    {/* All properties grid */}
    <PropertiesPreview />

    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
