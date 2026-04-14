import { MapPin, Clock, BadgeDollarSign, UserCheck, Award } from "lucide-react";

const reasons = [
  { icon: MapPin, title: "Local Expertise in Kimana", desc: "We understand local land registries, courts, and community dynamics." },
  { icon: Clock, title: "Fast Document Turnaround", desc: "Efficient preparation and processing of your legal documents." },
  { icon: BadgeDollarSign, title: "Affordable Legal Fees", desc: "Transparent pricing with no hidden charges for all services." },
  { icon: UserCheck, title: "Personalized Legal Support", desc: "Every client receives dedicated, individual attention." },
  { icon: Award, title: "Professional Representation", desc: "Skilled advocacy before courts, tribunals, and public offices." },
];

const WhyChooseUs = () => (
  <section id="why-us" className="section-padding bg-cream">
    <div className="container-narrow">
      <div className="text-center mb-14">
        <p className="text-gold-dark font-semibold uppercase tracking-widest text-sm mb-2">Our Advantage</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Why Choose Us</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-navy rounded-lg flex items-center justify-center">
              <Icon className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
