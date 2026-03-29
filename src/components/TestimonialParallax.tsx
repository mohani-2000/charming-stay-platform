import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import propertyLobo from "@/assets/property-lobo.jpg";
import propertyNgome from "@/assets/property-ngome.jpg";

const TestimonialParallax = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={ref} className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: stacked parallax images */}
          <div className="relative h-[500px] md:h-[600px]">
            <motion.div
              style={{ y: y1 }}
              className="absolute top-0 left-0 w-[70%] h-[65%] overflow-hidden shadow-2xl z-10"
            >
              <img
                src={propertyLobo}
                alt="Lobo Serengeti lounge"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              style={{ y: y2 }}
              className="absolute bottom-0 right-0 w-[65%] h-[55%] overflow-hidden shadow-2xl"
            >
              <img
                src={propertyNgome}
                alt="Ngome House exterior"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right: text */}
          <div>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary mb-4">
              What Our Guests Say
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-light mb-6 leading-tight">
              "An experience that transcends any safari I've ever known."
            </h2>
            <div className="separator-line !ml-0" />
            <p className="text-muted-foreground font-body text-sm leading-[1.9] mt-6 mb-4">
              Every moment at Amani Collection was thoughtfully crafted — from the warm welcomes to the
              breathtaking sundowners overlooking the Serengeti. The attention to detail and genuine warmth
              of the staff made us feel like family, not guests.
            </p>
            <p className="font-heading text-lg text-primary italic">— Sarah & James, London</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialParallax;
