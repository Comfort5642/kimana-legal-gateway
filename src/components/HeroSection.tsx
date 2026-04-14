import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import heroImage from "@/assets/advocate-hero.jpg";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center bg-navy-dark overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/90 to-navy-dark/40 z-10" />
    <img src={heroImage} alt="Kurumi Esendi advocate in office" className="absolute inset-0 w-full h-full object-cover object-top" width={1280} height={720} />

    <div className="relative z-20 container-narrow px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-2xl">
        <div className="inline-block bg-gold/20 border border-gold/40 rounded px-3 py-1 text-sm text-gold mb-6 animate-fade-in-up">
          Kimana, Kajiado County
        </div>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Trusted Legal Solutions in Kimana & Kajiado County
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Reliable, professional, and results-driven legal representation
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <a href="tel:+254700000000" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-secondary-foreground px-6 py-3 rounded font-semibold transition-colors">
            <Phone className="w-5 h-5" /> Call Now
          </a>
          <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-primary-foreground px-6 py-3 rounded font-semibold transition-colors">
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 border-2 border-gold/50 hover:border-gold text-primary-foreground px-6 py-3 rounded font-semibold transition-colors">
            <CalendarCheck className="w-5 h-5" /> Book Consultation
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
