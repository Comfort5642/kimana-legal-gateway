import { Star } from "lucide-react";

const testimonials = [
  {
    name: "James M.",
    role: "Land Buyer, Kimana",
    text: "Kurumi Esendi & Co. handled my land purchase seamlessly. They did thorough due diligence and I got my title deed without any issues. Highly professional!",
  },
  {
    name: "Grace W.",
    role: "Family Law Client",
    text: "During a very difficult custody case, the team was compassionate and fought for my rights. I felt supported every step of the way. Thank you!",
  },
  {
    name: "Peter K.",
    role: "Business Owner, Kajiado",
    text: "They registered my company in record time and drafted all my contracts. Affordable, efficient, and always available when I need legal advice.",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="section-padding bg-card">
    <div className="container-narrow">
      <div className="text-center mb-14">
        <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-2">Client Stories</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">What Our Clients Say</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="p-8 rounded-lg border border-border bg-muted/30 flex flex-col">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed flex-1 mb-6">"{t.text}"</p>
            <div>
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
