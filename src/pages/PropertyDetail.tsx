import { useParams, Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, MapPin, Star, UtensilsCrossed, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import RatesTable from "@/components/RatesTable";
import { PROPERTIES, CHILD_POLICY, ACTIVITIES_EXTRAS, LOBO_ACTIVITIES } from "@/components/PropertiesPreview";

const PropertyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const property = PROPERTIES.find((p) => p.slug === slug);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl mb-4">Property Not Found</h1>
          <Link to="/properties" className="text-primary font-body text-sm">
            ← Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  const otherProperties = PROPERTIES.filter((p) => p.slug !== slug).slice(0, 3);
  const isRestaurant = property.type === "restaurant";
  const ctaText = isRestaurant ? "Book a Table" : "Enquire Now";
  const ctaMessage = isRestaurant
    ? `Hello! I'd like to book a table at ${property.name}.`
    : `Hello! I'm interested in booking ${property.name}.`;

  // Determine which activities list to use based on property
  const activities = property.slug === "amani-farmhouse" ? LOBO_ACTIVITIES : ACTIVITIES_EXTRAS;

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero with parallax */}
      <section ref={heroRef} className="relative h-[70vh] overflow-hidden">
        <motion.img
          src={property.image}
          alt={property.name}
          className="w-full h-[120%] object-cover absolute top-0"
          style={{ y: heroY }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" />
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 flex items-end pb-16 md:pb-20"
        >
          <div className="container mx-auto px-6 lg:px-12">
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 text-gold-light font-body text-xs tracking-[0.2em] uppercase mb-6 hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> All Properties
            </Link>
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-4 h-4 text-gold-light" />
              <span className="font-body text-[10px] tracking-[0.35em] uppercase text-gold-light">
                {property.location}
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-heading-light leading-tight">
              {property.name}
            </h1>
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { label: "Location", value: property.location },
                { label: "Type", value: isRestaurant ? "Restaurant" : "Lodge & Camp", icon: isRestaurant ? UtensilsCrossed : Home },
                { label: "Rating", value: "5 Star", icon: Star },
              ].map((item) => (
                <div key={item.label} className="text-center p-6 bg-card">
                  <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                    {item.label}
                  </p>
                  <p className="font-heading text-xl flex items-center justify-center gap-2">
                    {item.icon && <item.icon className="w-4 h-4 text-gold" />}
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-light mb-6">
                About {property.name}
              </h2>
              <div className="separator-line !ml-0 !mb-8" />
              <p className="text-muted-foreground font-body text-sm leading-[2]">
                {property.longDescription}
              </p>
            </motion.div>

            {/* Rates Table (only for properties with rates) */}
            {property.rates && (
              <RatesTable
                rates={property.rates}
                activities={activities}
                childPolicy={CHILD_POLICY}
              />
            )}

            {/* Booking CTA */}
            <div className="mt-16 p-10 bg-card text-center">
              <h3 className="font-heading text-2xl md:text-3xl mb-4">
                {isRestaurant ? `Dine at ${property.name}` : `Ready to Experience ${property.name}?`}
              </h3>
              <p className="text-muted-foreground font-body text-sm mb-8">
                {isRestaurant
                  ? "Reserve your table for an unforgettable dining experience."
                  : "Contact us to plan your perfect stay."}
              </p>
              <a
                href={`https://wa.me/255742136679?text=${encodeURIComponent(ctaMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-body text-[10px] tracking-[0.25em] uppercase bg-primary text-primary-foreground px-12 py-4 hover:opacity-90 transition-opacity"
              >
                {ctaText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other Properties */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary mb-3">
              Continue Exploring
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-light">Other Properties</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherProperties.map((p) => (
              <Link key={p.slug} to={`/properties/${p.slug}`} className="group">
                <div className="overflow-hidden mb-4">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary mb-1">
                  {p.location}
                </p>
                <h4 className="font-heading text-xl group-hover:text-primary transition-colors">
                  {p.name}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PropertyDetail;
