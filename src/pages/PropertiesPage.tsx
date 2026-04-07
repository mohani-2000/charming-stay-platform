import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { PROPERTIES } from "@/components/PropertiesPreview";
import { UtensilsCrossed, Home, Mountain, TreePine, Compass, Bed } from "lucide-react";

const icons = [Home, Mountain, TreePine, UtensilsCrossed, Compass, Bed];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const PropertiesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="pt-28 pb-12 text-center">
        <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary mb-3">
          Our Collection
        </p>
        <h1 className="font-heading text-5xl md:text-7xl font-light">
          Accommodation
        </h1>
        <div className="separator-line" />
        <p className="max-w-2xl mx-auto text-muted-foreground font-body text-sm leading-[1.9] mt-6 px-6">
          Experience comfort, nature & wilderness in perfect harmony. Nestled in the heart of nature, our properties offer a range of luxury accommodations that blend modern comfort with authentic wilderness charm.
        </p>
      </div>

      {/* Pento Grid */}
      <section className="px-2 md:px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[320px] md:auto-rows-[380px] lg:auto-rows-[420px] gap-2 md:gap-3 max-w-[1600px] mx-auto">
          {PROPERTIES.map((property, i) => {
            const rowIndex = Math.floor(i / 3);
            const posInRow = i % 3;
            const isEvenRow = rowIndex % 2 === 0;
            const isTextCard = isEvenRow ? posInRow === 1 : posInRow % 2 === 0;
            const Icon = icons[i % icons.length];

            if (isTextCard) {
              return (
                <motion.div
                  key={property.slug}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeIn}
                  className="flex flex-col items-center justify-center text-center px-8 py-10 bg-card"
                >
                  <Icon className="w-8 h-8 text-primary mb-5 stroke-[1]" />
                  <p className="font-body text-[9px] tracking-[0.3em] uppercase text-primary/70 mb-2">
                    {property.location} · {property.type === "restaurant" ? "Restaurant" : "Lodge"}
                  </p>
                  <h3 className="font-heading text-2xl md:text-3xl font-light italic mb-4 leading-tight">
                    {property.name}
                  </h3>
                  <p className="text-muted-foreground font-body text-xs leading-[1.9] max-w-[280px] mb-6">
                    {property.description}
                  </p>
                  <Link
                    to={`/properties/${property.slug}`}
                    className="font-body text-[10px] tracking-[0.25em] uppercase text-primary story-link"
                  >
                    {property.linkText}
                  </Link>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={property.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeIn}
              >
                <Link
                  to={`/properties/${property.slug}`}
                  className="block w-full h-full overflow-hidden group relative"
                >
                  <img
                    src={property.image}
                    alt={property.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100">
                    <div>
                      <p className="font-body text-[9px] tracking-[0.3em] uppercase text-gold-light mb-1">
                        {property.type === "restaurant" ? "Restaurant" : "Lodge"}
                      </p>
                      <span className="font-heading text-xl text-white font-light">
                        {property.name}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PropertiesPage;
