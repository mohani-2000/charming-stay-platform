import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroMain from "@/assets/hero-main.jpg";

const ExperiencesBanner = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative py-32 md:py-44 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={heroMain}
          alt="Experiences"
          className="w-full h-[130%] object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/55" />
      </motion.div>
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center max-w-3xl">
        <p className="font-body text-[10px] tracking-[0.4em] uppercase text-gold-light mb-4">
          Experiences
        </p>
        <h2 className="font-heading text-4xl md:text-6xl font-light text-heading-light mb-6">
          Unforgettable Moments
        </h2>
        <div className="separator-line" style={{ background: "hsl(38, 45%, 75%)" }} />
        <p className="text-dark-section-foreground font-body text-sm leading-[1.9] mt-8 mb-12">
          From sunrise balloon safaris over the Serengeti to intimate bush dinners under the stars,
          every experience at Amani Collection is designed to create memories that last a lifetime.
        </p>
        <Link
          to="/experiences"
          className="inline-block font-body text-[10px] tracking-[0.3em] uppercase border border-gold-light text-gold-light px-12 py-4 hover:bg-gold-light/10 transition-all duration-500"
        >
          Plan Your Experience
        </Link>
      </div>
    </section>
  );
};

export default ExperiencesBanner;
