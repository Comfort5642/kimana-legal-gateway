import { Scale, Shield, Users } from "lucide-react";

const stats = [
  { icon: Scale, label: "Practice Areas", value: "8+" },
  { icon: Shield, label: "Client Trust", value: "100%" },
  { icon: Users, label: "Clients Served", value: "500+" },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-card">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-2">About Us</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Kurumi Esendi & Co. Advocates</h2>
      </div>
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-muted-foreground text-lg leading-relaxed">
          We are a client-focused law firm providing accessible, reliable legal services to individuals, businesses, and land investors in Kimana and the wider Kajiado County. With deep local expertise and a commitment to results, we walk with our clients through every legal challenge — from land transactions and family matters to business registration and debt recovery.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex flex-col items-center p-8 rounded-lg bg-muted/50 border border-border">
            <Icon className="w-10 h-10 text-gold mb-4" />
            <span className="text-3xl font-bold text-foreground font-heading">{value}</span>
            <span className="text-muted-foreground mt-1">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
