import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Binoculars, CalendarCheck, Bed, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroMain from "@/assets/hero-main.jpg";
import propertySilale from "@/assets/property-silale.jpg";
import propertyLobo from "@/assets/property-lobo.jpg";
import propertyNgome from "@/assets/property-ngome.jpg";

const VALUES = [
  { icon: Binoculars, title: "Expert Safari Guides", text: "Travel with highly experienced local guides who ensure safe journeys, deep wildlife knowledge, and unforgettable game-drive experiences." },
  { icon: CalendarCheck, title: "Custom Travel Planning", text: "Every itinerary is thoughtfully designed to match your travel style, pace, and interests for a truly personalized African experience." },
  { icon: Bed, title: "Luxury & Comfort Stays", text: "Handpicked lodges and camps offering comfort, stunning locations, and authentic African hospitality throughout your journey." },
  { icon: ShieldCheck, title: "Safe & Responsible Travel", text: "We follow responsible tourism practices and prioritize guest safety while respecting wildlife, local communities, and natural environments." },
];

const TEAM = [
  { name: "Joseph Mwangi", role: "Founder & CEO", desc: "With 25+ years in luxury hospitality across East Africa." },
  { name: "Amina Bakari", role: "Head of Guest Relations", desc: "Ensuring every guest experience exceeds expectations." },
  { name: "David Njoroge", role: "Head Naturalist", desc: "A walking encyclopedia of Tanzania's wildlife and ecosystems." },
];

const AboutPage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="relative h-[50vh] overflow-hidden">
        <motion.img src={heroMain} alt="About Us" className="w-full h-[130%] object-cover absolute top-0" style={{ y: heroY }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-gold-light mb-4">Our Story</p>
            <h1 className="font-heading text-5xl md:text-7xl font-light text-heading-light">About Us</h1>
            <div className="separator-line mt-4" style={{ background: "hsl(38, 45%, 75%)" }} />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary mb-4">Our Heritage</p>
              <h2 className="font-heading text-3xl md:text-5xl font-light mb-6 leading-tight">
                A Legacy of African Luxury
              </h2>
              <div className="separator-line !ml-0" />
              <p className="text-muted-foreground font-body text-sm leading-[2] mt-6 mb-6">
                Founded with a deep love for Tanzania's extraordinary landscapes and cultures, Amani Collection
                has grown from a single lodge into a portfolio of remarkable properties spanning the country's
                most breathtaking destinations — including lodges, camps, and restaurants.
              </p>
              <p className="text-muted-foreground font-body text-sm leading-[2]">
                Our name — "Amani" — means peace in Swahili, reflecting our commitment to creating tranquil
                sanctuaries where guests can reconnect with nature, with each other, and with themselves.
                Every property has been designed to harmonize with its environment, using local materials
                and supporting the communities that make Tanzania so special.
              </p>
            </motion.div>
            <div className="relative h-[500px]">
              <img src={propertySilale} alt="Our heritage" loading="lazy" className="absolute top-0 left-0 w-[65%] h-[60%] object-cover shadow-xl" />
              <img src={propertyLobo} alt="Our lodges" loading="lazy" className="absolute bottom-0 right-0 w-[60%] h-[55%] object-cover shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary mb-4">Why Choose Us</p>
            <h2 className="font-heading text-3xl md:text-5xl font-light">The Amani Difference</h2>
            <div className="separator-line" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center p-8 bg-background hover:shadow-lg transition-shadow duration-500"
              >
                <div className="w-14 h-14 mx-auto mb-5 border border-primary/30 flex items-center justify-center">
                  <v.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h4 className="font-heading text-xl mb-3">{v.title}</h4>
                <p className="text-muted-foreground font-body text-xs leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary mb-4">Leadership</p>
            <h2 className="font-heading text-3xl md:text-5xl font-light">Our Team</h2>
            <div className="separator-line" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((t) => (
              <div key={t.name} className="text-center">
                <div className="w-24 h-24 mx-auto bg-secondary rounded-full flex items-center justify-center mb-5">
                  <span className="font-heading text-2xl text-primary">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h4 className="font-heading text-xl mb-1">{t.name}</h4>
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary mb-3">{t.role}</p>
                <p className="text-muted-foreground font-body text-xs">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats parallax */}
      <section className="relative py-24 overflow-hidden">
        <img src={propertyNgome} alt="Stats" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "6", label: "Properties" },
              { num: "15+", label: "Years of Excellence" },
              { num: "50+", label: "Expert Staff" },
              { num: "10K+", label: "Happy Guests" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-heading text-5xl md:text-6xl text-gold-light mb-2">{s.num}</p>
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
