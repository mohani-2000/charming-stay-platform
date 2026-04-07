import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import heroMain from "@/assets/hero-main.jpg";
import propertySilale from "@/assets/property-silale.jpg";
import propertyNgome from "@/assets/property-ngome.jpg";

const SLIDES = [
  {
    image: heroMain,
    subtitle: "Restaurants, Hotels, Camps & Lodges",
    title: "Discover a world\nof African luxury.",
  },
  {
    image: propertySilale,
    subtitle: "Arusha · Ngorongoro · Serengeti · Zanzibar",
    title: "Where wilderness\nmeets elegance.",
  },
  {
    image: propertyNgome,
    subtitle: "Luxury Safari Accommodation",
    title: "Experience comfort,\nnature & wilderness.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1500"
          style={{
            opacity: i === current ? 1 : 0,
            transitionDuration: "1.5s",
          }}
        >
          <img
            src={slide.image}
            alt={slide.subtitle}
            className="w-full h-full object-cover animate-ken-burns"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <p className="font-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-gold-light mb-8">
              {SLIDES[current].subtitle}
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-light leading-[1.1] text-heading-light whitespace-pre-line">
              {SLIDES[current].title}
            </h1>
            <div className="separator-line mt-8 mb-8" style={{ background: "hsl(38, 45%, 75%)" }} />
            <Link
              to="/properties"
              className="inline-block font-body text-[10px] md:text-xs tracking-[0.3em] uppercase border border-gold-light text-gold-light px-12 py-4 hover:bg-gold-light/10 transition-all duration-500"
            >
              Explore Our Collection
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-4">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[2px] transition-all duration-500 ${
              i === current ? "bg-gold-light w-12" : "bg-white/30 w-6"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-10 z-10 hidden lg:flex flex-col items-center gap-2">
        <span className="font-body text-[9px] tracking-[0.3em] uppercase text-gold-light/60 [writing-mode:vertical-lr]">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gold-light/30 relative overflow-hidden">
          <div className="w-full h-4 bg-gold-light absolute animate-float" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
