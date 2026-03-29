import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { PROPERTIES } from "@/components/PropertiesPreview";
import heroMain from "@/assets/hero-main.jpg";

const PropertiesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[50vh] overflow-hidden">
        <img src={heroMain} alt="Our Properties" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-gold-light mb-4">
              Our Collection
            </p>
            <h1 className="font-heading text-5xl md:text-7xl font-light text-heading-light">
              Properties
            </h1>
            <div className="separator-line mt-4" style={{ background: "hsl(38, 45%, 75%)" }} />
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-24 md:space-y-32">
            {PROPERTIES.map((property, index) => (
              <motion.div
                key={property.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut" as const }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-10 md:gap-16 items-center`}
              >
                <Link
                  to={`/properties/${property.slug}`}
                  className="w-full md:w-3/5 overflow-hidden group"
                >
                  <img
                    src={property.image}
                    alt={property.name}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="w-full h-[400px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                <div className="w-full md:w-2/5 space-y-5">
                  <p className="font-body text-[10px] tracking-[0.35em] uppercase text-primary">
                    {property.location}
                  </p>
                  <h3 className="font-heading text-3xl md:text-5xl font-light leading-tight">
                    {property.name}
                  </h3>
                  <div className="separator-line !ml-0" />
                  <p className="text-muted-foreground font-body text-sm leading-[1.9]">
                    {property.description}
                  </p>
                  <Link
                    to={`/properties/${property.slug}`}
                    className="inline-block font-body text-[10px] tracking-[0.25em] uppercase border border-primary text-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 mt-4"
                  >
                    Discover More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PropertiesPage;
