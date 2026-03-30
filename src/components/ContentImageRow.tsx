import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

interface ContentImageRowProps {
  image: string;
  alt: string;
  subtitle: string;
  title: string;
  description: string;
  linkTo?: string;
  linkText?: string;
  reversed?: boolean;
}

const ContentImageRow = ({
  image,
  alt,
  subtitle,
  title,
  description,
  linkTo,
  linkText = "Discover More",
  reversed = false,
}: ContentImageRowProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div
      ref={ref}
      className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} min-h-[70vh]`}
    >
      {/* Image column — 5/12 */}
      <div className="w-full lg:w-5/12 overflow-hidden relative min-h-[400px] lg:min-h-0">
        <motion.img
          src={image}
          alt={alt}
          loading="lazy"
          style={{ y: imgY }}
          className="absolute inset-0 w-full h-[120%] object-cover top-[-10%]"
        />
      </div>

      {/* Text column — 7/12 */}
      <div className="w-full lg:w-7/12 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-8 py-16 md:px-16 lg:px-20 xl:px-28 max-w-2xl"
        >
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary mb-4">
            {subtitle}
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-light mb-6 leading-tight">
            {title}
          </h2>
          <div className="separator-line !ml-0" />
          <p className="text-muted-foreground font-body text-sm leading-[1.9] mt-6 mb-8">
            {description}
          </p>
          {linkTo && (
            <Link
              to={linkTo}
              className="inline-block font-body text-[10px] tracking-[0.25em] uppercase border border-primary text-primary px-10 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              {linkText}
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ContentImageRow;
