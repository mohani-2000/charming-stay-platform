import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxDividerProps {
  image: string;
  alt: string;
  height?: string;
}

const ParallaxDivider = ({ image, alt, height = "60vh" }: ParallaxDividerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden"
      style={{ height }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
      >
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="w-full h-[140%] object-cover absolute top-[-20%]"
        />
      </motion.div>
    </div>
  );
};

export default ParallaxDivider;
