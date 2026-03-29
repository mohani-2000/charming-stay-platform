import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import propertySilale from "@/assets/property-silale.jpg";
import propertyOlduvai from "@/assets/property-olduvai.jpg";
import propertyNgome from "@/assets/property-ngome.jpg";
import propertyCottages from "@/assets/property-cottages.jpg";
import propertyLobo from "@/assets/property-lobo.jpg";
import propertyManyara from "@/assets/property-manyara.jpg";

const PARALLAX_IMAGES = [
  { src: propertySilale, alt: "Silale Tarangire" },
  { src: propertyOlduvai, alt: "Olduvai Ngorongoro" },
  { src: propertyNgome, alt: "The Ngome House" },
  { src: propertyCottages, alt: "Golf & Wildlife Cottages" },
  { src: propertyLobo, alt: "Lobo Serengeti" },
  { src: propertyManyara, alt: "Manyara Park" },
];

const ParallaxImage = ({ src, alt, index }: { src: string; alt: string; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <div
      ref={ref}
      className={`relative h-[60vh] md:h-[70vh] overflow-hidden ${
        index % 2 === 0 ? "md:ml-0 md:mr-[15%]" : "md:mr-0 md:ml-[15%]"
      }`}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        width={1200}
        height={800}
        style={{ y, opacity }}
        className="w-full h-[120%] object-cover absolute top-[-10%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-8 md:bottom-12 md:left-12"
      >
        <h3 className="font-heading text-3xl md:text-5xl text-heading-light font-light">
          {alt}
        </h3>
      </motion.div>
    </div>
  );
};

const ParallaxGallery = () => {
  return (
    <section className="py-20 md:py-28 bg-dark-section">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
            Gallery
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-light text-heading-light">
            A Visual Journey
          </h2>
          <div className="separator-line mt-6" />
        </div>
        <div className="space-y-8 md:space-y-12">
          {PARALLAX_IMAGES.map((img, i) => (
            <ParallaxImage key={i} src={img.src} alt={img.alt} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParallaxGallery;
