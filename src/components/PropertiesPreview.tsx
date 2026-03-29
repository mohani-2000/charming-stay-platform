import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import propertySilale from "@/assets/property-silale.jpg";
import propertyOlduvai from "@/assets/property-olduvai.jpg";
import propertyNgome from "@/assets/property-ngome.jpg";
import propertyCottages from "@/assets/property-cottages.jpg";
import propertyLobo from "@/assets/property-lobo.jpg";
import propertyManyara from "@/assets/property-manyara.jpg";

export const PROPERTIES = [
  {
    slug: "silale-tarangire",
    name: "The Silale Tarangire Park",
    location: "Tarangire",
    description:
      "Perched on the Great Rift Valley escarpment, enjoy breathtaking lake views and diverse ecosystems from forest to flamingo-filled shores, all within intimate proximity.",
    image: propertySilale,
    longDescription:
      "Nestled along the edge of the Great Rift Valley, The Silale Tarangire Park offers an unrivaled vantage point over one of Africa's most dramatic landscapes. Wake to panoramic lake views stretching to the horizon, where thousands of flamingos paint the shores pink. Our intimate lodge features handcrafted suites that blend seamlessly with the natural environment, each offering private viewing decks and plunge pools. Guided walking safaris through ancient baobab forests and night game drives reveal the park's incredible biodiversity.",
  },
  {
    slug: "olduvai-ngorongoro",
    name: "Olduvai Ngorongoro",
    location: "Ngorongoro",
    description:
      "Experience luxury amidst rolling greens and wildlife. Our Golf Cottages blend championship golf access with intimate wilderness encounters.",
    image: propertyOlduvai,
    longDescription:
      "Set against the backdrop of the Ngorongoro Highlands, Olduvai offers a unique fusion of world-class golf and authentic African safari. Our cottages are thoughtfully positioned along the fairways, where wildlife roams freely between holes. Each morning begins with mist rolling over the crater rim, and each evening ends with sundowners overlooking the vast caldera. The property features a spa, farm-to-table restaurant, and dedicated safari guides.",
  },
  {
    slug: "ngome-house",
    name: "The Ngome House",
    location: "Serengeti",
    description:
      "Immerse yourself in the world's most famous wildlife ecosystem. Year-round game viewing and front-row access to the Great Migration.",
    image: propertyNgome,
    longDescription:
      "The Ngome House stands as a monument to understated luxury in the heart of the Serengeti. Built with local stone and timber, the lodge commands sweeping views of the endless plains. During migration season, witness millions of wildebeest and zebra from your private terrace. Our expert naturalists lead exclusive game drives, bush walks, and hot air balloon experiences. The lodge features an infinity pool that seems to merge with the savanna.",
  },
  {
    slug: "golf-wildlife-cottages",
    name: "Golf & Wildlife Cottages",
    location: "Tarangire",
    description:
      "Witness dramatic elephant migrations in Tanzania's most underrated park. Baobab forests, seasonal wetlands, and intimate wildlife encounters.",
    image: propertyCottages,
    longDescription:
      "Tucked within Tarangire's iconic baobab woodland, our Golf & Wildlife Cottages offer front-row seats to one of Africa's greatest wildlife spectacles — the annual elephant migration. Each cottage is a private sanctuary with floor-to-ceiling windows, outdoor rain showers, and wrap-around decks. The property's championship golf course weaves through natural corridors where giraffes and zebras are frequent visitors. Evening game drives offer encounters with leopards, lions, and the park's famous tree-climbing pythons.",
  },
  {
    slug: "lobo-serengeti",
    name: "Lobo Serengeti",
    location: "Serengeti",
    description:
      "Your exclusive retreat combining city convenience with personalized service that defines The Amani Collection experience.",
    image: propertyLobo,
    longDescription:
      "Perched atop a granite kopje in the northern Serengeti, Lobo offers perhaps the most dramatic setting of any lodge in East Africa. The open-air lounge frames the endless savanna like a living painting, while resident hyraxes scamper across the ancient rocks. Our suites are carved into the hillside, each with private balconies overlooking the migration routes. The property features a rock pool, observatory deck for stargazing, and a wine cellar with curated African vintages.",
  },
  {
    slug: "manyara-park",
    name: "Manyara Park",
    location: "Manyara",
    description:
      "Positioned at the cradle of mankind, witness archaeological wonders and experience one of Africa's most spectacular ecosystems.",
    image: propertyManyara,
    longDescription:
      "Lake Manyara Park lodge sits at the intersection of history and wilderness, where the Great Rift Valley wall plunges dramatically to the lake shore below. Our elevated tented suites are nestled among ancient mahogany and fig trees, offering views across the alkaline lake famous for its flamingo populations. The property serves as an ideal base for exploring the Ngorongoro Conservation Area, Olduvai Gorge, and the cultural villages of the Maasai and Hadzabe peoples.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const PropertiesPreview = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary mb-4">
            Our Collection
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-light">
            Lodges & Camps
          </h2>
          <div className="separator-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROPERTIES.map((property, index) => (
            <motion.div
              key={property.slug}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
            >
              <Link to={`/properties/${property.slug}`} className="group block">
                <div className="overflow-hidden mb-6">
                  <img
                    src={property.image}
                    alt={property.name}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="font-body text-[10px] tracking-[0.35em] uppercase text-primary mb-2">
                  {property.location}
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-light leading-tight mb-3 group-hover:text-primary transition-colors">
                  {property.name}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed line-clamp-2">
                  {property.description}
                </p>
                <span className="inline-block mt-4 font-body text-[10px] tracking-[0.25em] uppercase text-primary story-link">
                  Discover More
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesPreview;
