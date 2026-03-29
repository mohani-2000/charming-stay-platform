import propertySilale from "@/assets/property-silale.jpg";
import propertyOlduvai from "@/assets/property-olduvai.jpg";
import propertyNgome from "@/assets/property-ngome.jpg";
import propertyCottages from "@/assets/property-cottages.jpg";
import propertyLobo from "@/assets/property-lobo.jpg";
import propertyManyara from "@/assets/property-manyara.jpg";

const PROPERTIES = [
  {
    name: "The Silale Tarangire Park",
    location: "Tarangire",
    description:
      "Perched on the Great Rift Valley escarpment, enjoy breathtaking lake views and diverse ecosystems from forest to flamingo-filled shores, all within intimate proximity.",
    image: propertySilale,
  },
  {
    name: "Olduvai Ngorongoro",
    location: "Ngorongoro",
    description:
      "Experience luxury amidst rolling greens and wildlife. Our Golf Cottages blend championship golf access with intimate wilderness encounters.",
    image: propertyOlduvai,
  },
  {
    name: "The Ngome House",
    location: "Serengeti",
    description:
      "Immerse yourself in the world's most famous wildlife ecosystem. Year-round game viewing and front-row access to the Great Migration from the comfort of unparalleled luxury.",
    image: propertyNgome,
  },
  {
    name: "Golf & Wildlife Cottages",
    location: "Tarangire",
    description:
      "Witness dramatic elephant migrations in Tanzania's most underrated park. Baobab forests, seasonal wetlands, and intimate wildlife encounters await at this exclusive sanctuary.",
    image: propertyCottages,
  },
  {
    name: "Lobo Serengeti",
    location: "Serengeti",
    description:
      "Your exclusive urban retreat before and after safari adventures. Combining city convenience with the privacy and personalized service that defines The Amani Collection experience.",
    image: propertyLobo,
  },
  {
    name: "Manyara Park",
    location: "Manyara",
    description:
      "Positioned at the cradle of mankind, witness archaeological wonders and experience one of Africa's most spectacular and diverse ecosystems.",
    image: propertyManyara,
  },
];

const PropertiesSection = () => {
  return (
    <section id="properties" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-primary mb-4">
            Our Collection
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-light">
            Lodges & Camps
          </h2>
        </div>

        <div className="space-y-24 md:space-y-32">
          {PROPERTIES.map((property, index) => (
            <div
              key={property.name}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-16 items-center`}
            >
              <div className="w-full md:w-3/5 overflow-hidden group">
                <img
                  src={property.image}
                  alt={property.name}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-2/5 space-y-5">
                <p className="font-body text-[10px] tracking-[0.35em] uppercase text-primary">
                  {property.location}
                </p>
                <h3 className="font-heading text-3xl md:text-5xl font-light leading-tight">
                  {property.name}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {property.description}
                </p>
                <a
                  href="#contact"
                  className="inline-block font-body text-xs tracking-[0.25em] uppercase border border-primary text-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 mt-4"
                >
                  Discover More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
