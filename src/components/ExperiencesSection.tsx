import heroMain from "@/assets/hero-main.jpg";

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroMain} alt="Experience" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
        <p className="font-body text-xs tracking-[0.35em] uppercase text-primary mb-4">
          Experiences
        </p>
        <h2 className="font-heading text-4xl md:text-6xl font-light mb-8">
          Unforgettable Moments
        </h2>
        <p className="text-foreground font-body text-sm leading-relaxed mb-10">
          From sunrise balloon safaris over the Serengeti to intimate bush dinners under the stars,
          every experience at Amani Collection is designed to create memories that last a lifetime.
          Discover our curated collection of adventures across Tanzania.
        </p>
        <a
          href="#contact"
          className="inline-block font-body text-xs tracking-[0.25em] uppercase border border-primary text-primary px-10 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Plan Your Experience
        </a>
      </div>
    </section>
  );
};

export default ExperiencesSection;
