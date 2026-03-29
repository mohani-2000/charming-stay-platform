import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Sunrise, Mountain, Utensils, Camera, TreePine, Wind } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import propertyLobo from "@/assets/property-lobo.jpg";
import propertySilale from "@/assets/property-silale.jpg";
import propertyCottages from "@/assets/property-cottages.jpg";
import propertyManyara from "@/assets/property-manyara.jpg";

const EXPERIENCES = [
  {
    icon: Sunrise,
    title: "Hot Air Balloon Safari",
    description: "Float above the Serengeti at dawn and witness the Great Migration from a perspective few ever experience. Land for a champagne breakfast in the bush.",
    image: propertyLobo,
  },
  {
    icon: Mountain,
    title: "Ngorongoro Crater Descent",
    description: "Descend into the world's largest intact volcanic caldera — home to over 25,000 large animals including the Big Five, all in a single day.",
    image: propertySilale,
  },
  {
    icon: Utensils,
    title: "Bush Dinner Under the Stars",
    description: "An intimate dinner set under the African sky, surrounded by the sounds of the wilderness. Our chefs prepare a multi-course meal featuring local ingredients.",
    image: propertyCottages,
  },
  {
    icon: Camera,
    title: "Photography Safari",
    description: "Join our resident wildlife photographer for specialized game drives focused on capturing the perfect shot. All skill levels welcome.",
    image: propertyManyara,
  },
  {
    icon: TreePine,
    title: "Guided Bush Walks",
    description: "Explore the ecosystem on foot with experienced Maasai guides. Learn about medicinal plants, animal tracking, and the ancient rhythms of the savanna.",
    image: propertyLobo,
  },
  {
    icon: Wind,
    title: "Cultural Immersion",
    description: "Visit authentic Maasai and Hadzabe communities. Participate in traditional ceremonies, learn ancient hunting techniques, and share stories around the fire.",
    image: propertySilale,
  },
];

const ExperienceCard = ({ exp, index }: { exp: typeof EXPERIENCES[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-10 md:gap-16 items-center`}
    >
      <div className="w-full md:w-1/2 overflow-hidden h-[350px] md:h-[450px]">
        <motion.img
          src={exp.image}
          alt={exp.title}
          loading="lazy"
          style={{ y: imgY }}
          className="w-full h-[130%] object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 space-y-5">
        <div className="w-14 h-14 border border-primary/30 flex items-center justify-center">
          <exp.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
        </div>
        <h3 className="font-heading text-3xl md:text-4xl font-light leading-tight">{exp.title}</h3>
        <div className="separator-line !ml-0" />
        <p className="text-muted-foreground font-body text-sm leading-[1.9]">{exp.description}</p>
        <a
          href={`https://wa.me/255123456789?text=${encodeURIComponent(`Hello! I'm interested in the ${exp.title} experience.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-body text-[10px] tracking-[0.25em] uppercase border border-primary text-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Book Experience
        </a>
      </div>
    </motion.div>
  );
};

const ExperiencesPage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section ref={heroRef} className="relative h-[50vh] overflow-hidden">
        <motion.img src={propertyLobo} alt="Experiences" className="w-full h-[130%] object-cover absolute top-0" style={{ y: heroY }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-gold-light mb-4">Curated Adventures</p>
            <h1 className="font-heading text-5xl md:text-7xl font-light text-heading-light">Experiences</h1>
            <div className="separator-line mt-4" style={{ background: "hsl(38, 45%, 75%)" }} />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="font-heading text-3xl md:text-4xl font-light mb-6">
              Adventures That Define a Lifetime
            </h2>
            <p className="text-muted-foreground font-body text-sm leading-[1.9]">
              Each experience is carefully curated by our team of expert naturalists and hospitality
              professionals to ensure authentic, meaningful encounters with Tanzania's extraordinary
              landscapes, wildlife, and cultures.
            </p>
          </div>
          <div className="space-y-20 md:space-y-28">
            {EXPERIENCES.map((exp, i) => (
              <ExperienceCard key={exp.title} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ExperiencesPage;
