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

    {/* Content row: Amani Safari Lodge */}
    <ContentImageRow
      image={propertySilale}
      alt="Amani Safari Lodge"
      subtitle="Arusha"
      title="Amani Safari Lodge"
      description="Peaceful, green, and close to all major parks in northern Tanzania. Nestled within Mringa Coffee Estate, Arusha — your perfect base for exploring the northern safari circuit."
      linkTo="/properties/amani-safari-lodge"
      linkText="Inquiry Room"
    />

    {/* Parallax divider 2 */}
    <ParallaxDivider image={propertyLobo} alt="Serengeti sunset" />

    {/* Content row: Amani Eserian Ngorongoro */}
    <ContentImageRow
      image={propertyOlduvai}
      alt="Amani Eserian Ngorongoro"
      subtitle="Ngorongoro"
      title="Amani Eserian Ngorongoro"
      description="A calm, scenic stay in the Ngorongoro Conservation Area with views you'll never forget. Perched on the crater rim with sweeping views of Africa's Eden."
      linkTo="/properties/amani-eserian-ngorongoro"
      linkText="Inquiry Room"
      reversed
    />

    {/* Parallax divider 3 */}
    <ParallaxDivider image={propertyOlduvai} alt="Ngorongoro highlands" />

    {/* About / Why Choose Us section */}
    <AboutPreview />

    {/* Parallax divider 4 */}
    <ParallaxDivider image={propertyManyara} alt="Manyara lakeside" />

    {/* Content row: Amani Farmhouse */}
    <ContentImageRow
      image={propertyNgome}
      alt="Amani Farmhouse"
      subtitle="Arusha"
      title="Amani Farmhouse"
      description="A quiet home in the countryside where you can relax and feel cared for. Located in the Kili Golf and Wildlife Estate, Arusha — perfect for families and couples."
      linkTo="/properties/amani-farmhouse"
      linkText="Inquiry Room"
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
