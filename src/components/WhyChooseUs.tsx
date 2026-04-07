import { Binoculars, CalendarCheck, Bed, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const REASONS = [
  {
    icon: Binoculars,
    title: "Expert Safari Guides",
    description:
      "Travel with highly experienced local guides who ensure safe journeys, deep wildlife knowledge, and unforgettable game-drive experiences.",
  },
  {
    icon: CalendarCheck,
    title: "Custom Travel Planning",
    description:
      "Every itinerary is thoughtfully designed to match your travel style, pace, and interests for a truly personalized African experience.",
  },
  {
    icon: Bed,
    title: "Luxury & Comfort Stays",
    description:
      "Handpicked lodges and camps offering comfort, stunning locations, and authentic African hospitality throughout your journey.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Responsible Travel",
    description:
      "We follow responsible tourism practices and prioritize guest safety while respecting wildlife, local communities, and natural environments throughout every journey.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary mb-4">
            Why Choose Us
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-light">
            The Amani Difference
          </h2>
          <div className="separator-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center group p-8 bg-background hover:shadow-lg transition-shadow duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-6 border border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors duration-500">
                <reason.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h4 className="font-heading text-xl mb-3">{reason.title}</h4>
              <p className="text-muted-foreground font-body text-xs leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
