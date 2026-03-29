import { useState, useEffect } from "react";
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
    subtitle: "Tarangire · Ngorongoro · Serengeti",
    title: "Where wilderness\nmeets elegance.",
  },
  {
    image: propertyNgome,
    subtitle: "Unforgettable Experiences",
    title: "The journey of\na lifetime awaits.",
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
    <section id="home" className="relative h-screen overflow-hidden">
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.subtitle}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="font-body text-xs tracking-[0.35em] uppercase text-primary mb-6 animate-fade-in-up">
          {SLIDES[current].subtitle}
        </p>
        <h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-heading whitespace-pre-line animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          {SLIDES[current].title}
        </h1>
        <a
          href="#properties"
          className="mt-10 inline-block font-body text-xs tracking-[0.3em] uppercase border border-primary text-primary px-10 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Explore Our Collection
        </a>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary w-8" : "bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
