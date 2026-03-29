import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import propertyNgome from "@/assets/property-ngome.jpg";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Amani Collection!\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSubject: ${form.subject}\n\n${form.message}`;
    window.open(`https://wa.me/255123456789?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[40vh] overflow-hidden">
        <img src={propertyNgome} alt="Contact" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-gold-light mb-4">
              Get In Touch
            </p>
            <h1 className="font-heading text-5xl md:text-7xl font-light text-heading-light">
              Contact Us
            </h1>
            <div className="separator-line mt-4" style={{ background: "hsl(38, 45%, 75%)" }} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-light mb-2">
                Send Us a Message
              </h2>
              <div className="separator-line !ml-0 !mb-8" />

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2 block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-card text-foreground px-4 py-3 text-sm font-body border border-border outline-none focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-card text-foreground px-4 py-3 text-sm font-body border border-border outline-none focus:border-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-card text-foreground px-4 py-3 text-sm font-body border border-border outline-none focus:border-primary transition-colors"
                      placeholder="+255 123 456 789"
                    />
                  </div>
                  <div>
                    <label className="font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2 block">
                      Subject
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full bg-card text-foreground px-4 py-3 text-sm font-body border border-border outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select a subject</option>
                      <option value="Booking Enquiry">Booking Enquiry</option>
                      <option value="Group Booking">Group Booking</option>
                      <option value="Experiences">Experiences</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2 block">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-card text-foreground px-4 py-3 text-sm font-body border border-border outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your dream safari..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-body text-[10px] tracking-[0.25em] uppercase px-12 py-4 hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4" />
                  Send via WhatsApp
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <div>
                <h3 className="font-heading text-2xl mb-6">Contact Information</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-card border border-border flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">Phone</p>
                      <p className="font-body text-sm">+255 123 456 789</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-card border border-border flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">Email</p>
                      <p className="font-body text-sm">info@amanisafarilodge.co.tz</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-card border border-border flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">Address</p>
                      <p className="font-body text-sm">Arusha, Tanzania</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-card border border-border flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">WhatsApp</p>
                      <a
                        href="https://wa.me/255123456789"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-sm text-primary hover:underline"
                      >
                        Chat with us
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map placeholder */}
              <div className="bg-card border border-border p-8 text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-heading text-xl mb-2">Visit Our Office</h4>
                <p className="text-muted-foreground font-body text-xs leading-relaxed">
                  Our head office is located in Arusha, the gateway to Tanzania's Northern Safari Circuit.
                  We welcome visitors by appointment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
