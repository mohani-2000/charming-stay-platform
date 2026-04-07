import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import propertySilale from "@/assets/property-silale.jpg";
import propertyOlduvai from "@/assets/property-olduvai.jpg";
import propertyNgome from "@/assets/property-ngome.jpg";
import propertyCottages from "@/assets/property-cottages.jpg";
import propertyLobo from "@/assets/property-lobo.jpg";
import propertyManyara from "@/assets/property-manyara.jpg";

export type PropertyType = "lodge" | "restaurant";

export const PROPERTIES = [
  {
    slug: "amani-safari-lodge",
    name: "Amani Safari Lodge",
    location: "Arusha",
    type: "lodge" as PropertyType,
    description:
      "Peaceful, green, and close to all major parks in northern Tanzania. Nestled within Mringa Coffee Estate, Arusha.",
    image: propertySilale,
    linkText: "Inquiry Room",
    longDescription:
      "Amani Safari Lodge is a tranquil retreat nestled within the lush Mringa Coffee Estate in Arusha. Surrounded by verdant gardens and towering shade trees, the lodge offers a peaceful base from which to explore Tanzania's renowned northern safari circuit. Each room is thoughtfully appointed with locally crafted furnishings and opens onto private verandas overlooking manicured grounds. Guests enjoy farm-fresh cuisine at the on-site restaurant, rejuvenating spa treatments, and easy access to Tarangire, Lake Manyara, Ngorongoro, and the Serengeti.",
    rates: {
      title: "Amani Safari Lodge",
      fullBoard: {
        peak: { single: 1135, double: 756, triple: 1703, family: 756 },
        high: { single: 848, double: 565, triple: 1272, family: 565 },
        low: { single: 613, double: 408, triple: 919, family: 408 },
      },
      safariPackage: {
        peak: { single: 1345, double: 966, triple: 2175, family: 966 },
        high: { single: 1058, double: 775, triple: 1745, family: 775 },
        low: { single: 823, double: 618, triple: 1392, family: 618 },
      },
    },
  },
  {
    slug: "amani-eserian-ngorongoro",
    name: "Amani Eserian Ngorongoro",
    location: "Ngorongoro",
    type: "lodge" as PropertyType,
    description:
      "A calm, scenic stay in the Ngorongoro Conservation Area with views you'll never forget.",
    image: propertyOlduvai,
    linkText: "Inquiry Room",
    longDescription:
      "Perched on the rim of the magnificent Ngorongoro Crater, Amani Eserian offers an unparalleled blend of luxury and raw natural beauty. Each suite commands sweeping views across the crater floor — home to over 25,000 large animals including the Big Five. The lodge's architecture draws inspiration from traditional Maasai boma design, using local stone and reclaimed timber. Guests enjoy guided crater descents, cultural visits to nearby Maasai villages, and evenings around the fire pit beneath the Milky Way.",
  },
  {
    slug: "amani-farmhouse",
    name: "Amani Farmhouse",
    location: "Arusha",
    type: "lodge" as PropertyType,
    description:
      "A quiet home in the countryside where you can relax and feel cared for. Located in the Kili Golf and Wildlife Estate, Arusha.",
    image: propertyNgome,
    linkText: "Inquiry Room",
    longDescription:
      "Set within the exclusive Kili Golf and Wildlife Estate in Usa River, Arusha, Amani Farmhouse is a charming countryside retreat that feels like a home away from home. The property blends rustic elegance with modern comfort, featuring spacious rooms with garden views, a swimming pool surrounded by tropical flora, and expansive lawns where wildlife roams freely. Ideal for families and couples seeking a serene getaway before or after safari, with championship golf right at the doorstep.",
    rates: {
      title: "Amani Farmhouse",
      fullBoard: {
        peak: { single: 1459, double: 972, triple: 2189, family: 972 },
        high: { single: 1090, double: 727, triple: 1636, family: 727 },
        low: { single: 788, double: 525, triple: 1182, family: 525 },
      },
      safariPackage: {
        peak: { single: 1729, double: 1242, triple: 2797, family: 1242 },
        high: { single: 1360, double: 997, triple: 2243, family: 997 },
        low: { single: 1058, double: 795, triple: 1790, family: 795 },
      },
    },
  },
  {
    slug: "farmhouse-restaurant",
    name: "Farmhouse Restaurant",
    location: "Arusha",
    type: "restaurant" as PropertyType,
    description:
      "Located within the Kili Golf and Wildlife Estate in Usa River, Arusha, a perfect retreat for families to relax, refresh, and enjoy serene surroundings.",
    image: propertyCottages,
    linkText: "Book Table",
    longDescription:
      "Farmhouse Restaurant is a culinary gem set within the beautiful Kili Golf and Wildlife Estate in Usa River, Arusha. Offering a menu that celebrates local Tanzanian flavors alongside international favorites, the restaurant provides a relaxed dining experience amidst stunning natural surroundings. Families can enjoy leisurely meals on the open terrace overlooking the estate's lush gardens, while children explore the safe, wildlife-friendly grounds. Perfect for pre-safari dining, celebrations, or a peaceful afternoon retreat.",
  },
  {
    slug: "olduvai-museum-restaurant",
    name: "Olduvai Museum Restaurant",
    location: "Ngorongoro",
    type: "restaurant" as PropertyType,
    description:
      "Located within the Ngorongoro Conservation Area, Olduvai Museum Restaurant offers a relaxing dining stop surrounded by history and breathtaking landscapes.",
    image: propertyLobo,
    linkText: "Book Table",
    longDescription:
      "Positioned at the cradle of mankind within the Ngorongoro Conservation Area, Olduvai Museum Restaurant offers a unique dining experience where history meets culinary artistry. Adjacent to the world-famous Olduvai Gorge — where some of humanity's earliest fossils were discovered — the restaurant serves hearty Tanzanian cuisine and refreshments to safari travelers. The panoramic terrace offers breathtaking views across the ancient landscape, making it the perfect stop to refuel and reflect during your crater exploration.",
  },
  {
    slug: "amani-restaurant",
    name: "Amani Restaurant",
    location: "Arusha",
    type: "restaurant" as PropertyType,
    description:
      "Nestled within Mringa Coffee Estate, Amani Restaurant blends fine dining with the serene charm of Arusha's lush coffee fields.",
    image: propertyManyara,
    linkText: "Book Table",
    longDescription:
      "Amani Restaurant is an elegant dining destination nestled within the Mringa Coffee Estate in Arusha. The restaurant offers a refined farm-to-table experience, sourcing fresh ingredients from the estate's own gardens and local producers. Diners enjoy a fusion of Tanzanian and international cuisine beneath the canopy of century-old trees, accompanied by the aroma of freshly roasted coffee. Whether for a romantic dinner, a family celebration, or a quiet afternoon coffee, Amani Restaurant delivers an unforgettable culinary journey.",
  },
];

export const CHILD_POLICY = [
  { rule: "Under 5yrs", rate: "FOC" },
  { rule: "Per Child between 6 - 11yrs sharing with 2 adults", rate: "50% of the adult sharing rate" },
  { rule: "Per Child between 6 - 15yrs sharing with 1 adult", rate: "Double room rate" },
  { rule: "Per Child between 6 - 15yrs in own room", rate: "75% of the adult sharing rate" },
];

export const ACTIVITIES_EXTRAS = [
  { activity: "Sundowner (min 02 guests) - on request & weather permitting", price: "US$ 70 per person" },
  { activity: "Bush Breakfast (min 02 guests) - on request & weather permitting", price: "US$ 40 per person" },
  { activity: "Lunch Box", price: "US$ 30 per person" },
  { activity: "For Honeymooners: Bottle of Wine & Chocolates", price: "US$ 40" },
];

export const LOBO_ACTIVITIES = [
  { activity: "Sundowner (min 02 guests) - on request & weather permitting", price: "US$ 100 per person" },
  { activity: "Bush Breakfast (min 02 guests) - on request & weather permitting", price: "US$ 60 per person" },
  { activity: "Lunch Box", price: "US$ 40 per person" },
  { activity: "For Honeymooners: Bottle of Wine & Chocolates", price: "US$ 50" },
];

export const SEASON_DATES = {
  peak: "01 July - 31 Oct\n20 Dec - 3 Jan",
  high: "04 Jan - 31 March\n01 Jun - 30 Jun\n01 Nov - 19 Dec",
  low: "01 Apr - 31 May",
};

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
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
            Lodges, Camps & Restaurants
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
                  {property.location} · {property.type === "restaurant" ? "Restaurant" : "Lodge"}
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-light leading-tight mb-3 group-hover:text-primary transition-colors">
                  {property.name}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed line-clamp-2">
                  {property.description}
                </p>
                <span className="inline-block mt-4 font-body text-[10px] tracking-[0.25em] uppercase text-primary story-link">
                  {property.linkText}
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
