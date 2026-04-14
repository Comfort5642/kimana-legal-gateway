import { Phone, MessageCircle, MapPin } from "lucide-react";

const CTASection = () => (
  <section className="section-padding bg-navy-dark relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light/30" />
    <div className="relative container-narrow text-center">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
        Speak to an Advocate Today
      </h2>
      <p className="text-primary-foreground/60 text-lg mb-10 max-w-xl mx-auto">
        Get professional legal advice tailored to your situation. We're ready to help.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="tel:+254700000000" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-secondary-foreground px-8 py-3 rounded font-semibold transition-colors">
          <Phone className="w-5 h-5" /> Call
        </a>
        <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-primary-foreground px-8 py-3 rounded font-semibold transition-colors">
          <MessageCircle className="w-5 h-5" /> WhatsApp
        </a>
        <a href="#contact" className="inline-flex items-center gap-2 border-2 border-gold/50 hover:border-gold text-primary-foreground px-8 py-3 rounded font-semibold transition-colors">
          <MapPin className="w-5 h-5" /> Visit Office
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
