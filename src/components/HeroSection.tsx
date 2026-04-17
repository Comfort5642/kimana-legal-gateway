import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import reenahPhoto from "@/assets/advocate-hero.jpg";
import kajiadoBg from "@/assets/kajiado-landscape.jpg";

const HeroSection = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center bg-navy-dark overflow-hidden"
  >
    {/* Kajiado landscape background — slow Ken Burns drift for "dynamic" feel */}
    <div
      className="absolute inset-0 z-0 animate-[heroPan_30s_ease-in-out_infinite_alternate] bg-cover bg-center"
      style={{ backgroundImage: `url(${kajiadoBg})` }}
      aria-hidden="true"
    />

    {/* Navy gradient overlay — heavier on the left so left-aligned copy stays readable */}
    <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy-dark via-navy-dark/85 to-navy-dark/30" />

    {/* Reenah portrait, composited bottom-right, fading into the landscape */}
    <img
      src={reenahPhoto}
      alt="Reenah Esendi, Managing Partner at Kurumi Esendi Advocates"
      width={720}
      height={1080}
      className="hidden md:block absolute right-0 bottom-0 z-20 h-[70%] lg:h-[78%] w-auto object-contain object-bottom opacity-70 mix-blend-luminosity drop-shadow-xl [mask-image:linear-gradient(to_left,black_55%,transparent_100%)]"
    />

    {/* Copy block — tightened left padding per request */}
    <div className="relative z-30 w-full pl-4 sm:pl-6 lg:pl-10 pr-4 sm:pr-6 lg:pr-8 pt-20">
      <div className="max-w-2xl text-left">
        <div className="inline-block bg-gold/20 border border-gold/40 rounded px-3 py-1 text-sm text-gold mb-4 animate-fade-in-up">
          Kimana, Kajiado County
        </div>
        <h1
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-snug mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Trusted Legal Solutions in Kimana & Kajiado County
        </h1>
        <p
          className="text-lg md:text-xl text-primary-foreground/80 mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Reliable, professional, and results-driven legal representation
        </p>
        <div
          className="flex flex-wrap gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="tel:+254792214178"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-secondary-foreground px-6 py-3 rounded font-semibold transition-colors"
          >
            <Phone className="w-5 h-5" /> Call Now
          </a>
          <a
            href="https://wa.me/254792214178"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-primary-foreground px-6 py-3 rounded font-semibold transition-colors"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-gold/50 hover:border-gold text-primary-foreground px-6 py-3 rounded font-semibold transition-colors"
          >
            <CalendarCheck className="w-5 h-5" /> Book Consultation
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
