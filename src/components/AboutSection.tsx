import { Compass, Utensils, Shield, Heart } from "lucide-react";

const FEATURES = [
  {
    icon: Compass,
    title: "Safari Adventures",
    description: "Expert-guided game drives across Tanzania's most iconic national parks and conservation areas.",
  },
  {
    icon: Utensils,
    title: "Fine Dining",
    description: "Farm-to-table cuisine blending local Tanzanian flavors with international culinary excellence.",
  },
  {
    icon: Shield,
    title: "Conservation",
    description: "Committed to preserving Tanzania's wildlife and supporting local communities through sustainable tourism.",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description: "Every detail curated to create unforgettable moments. Your journey, your way.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-primary mb-4">
            About Us
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-light mb-8">
            The Amani Collection
          </h2>
          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            Amani Collection is a portfolio of extraordinary lodges, camps, hotels, and restaurants across
            Tanzania's most breathtaking destinations — from the Serengeti plains to the spice island of
            Zanzibar. We believe in the rare combination of world-class hospitality and authentic African experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="text-center group p-8">
              <div className="w-16 h-16 mx-auto mb-6 border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-heading text-xl mb-3">{feature.title}</h4>
              <p className="text-muted-foreground font-body text-xs leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
