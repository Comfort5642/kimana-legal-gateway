import { Landmark, Heart, Gavel, FileText, Briefcase, FilePen, Coins, Stamp } from "lucide-react";

const areas = [
  { icon: Landmark, title: "Land & Conveyancing", desc: "Title transfers, searches, land agreements, and due diligence for property transactions." },
  { icon: Heart, title: "Family Law", desc: "Divorce, custody, maintenance, and matrimonial property disputes handled with care." },
  { icon: Gavel, title: "Civil Litigation", desc: "Robust representation in commercial disputes, contract breaches, and civil claims." },
  { icon: FileText, title: "Succession & Probate", desc: "Grant of probate, letters of administration, and estate distribution support." },
  { icon: Briefcase, title: "Business Registration", desc: "Company incorporation, partnerships, and compliance with regulatory requirements." },
  { icon: FilePen, title: "Contract Drafting", desc: "Clear, enforceable agreements for sale, lease, employment, and service contracts." },
  { icon: Coins, title: "Debt Recovery", desc: "Demand letters, negotiation, and litigation to recover outstanding debts." },
  { icon: Stamp, title: "Commissioner for Oaths", desc: "Witnessing of oaths, affidavits, and statutory declarations." },
];

const PracticeAreas = () => (
  <section id="practice" className="section-padding bg-navy-dark">
    <div className="container-narrow">
      <div className="text-center mb-14">
        <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-2">What We Do</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Our Practice Areas</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {areas.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group p-6 rounded-lg bg-navy-light/40 border border-navy-light/30 hover:border-gold/50 transition-all hover:-translate-y-1">
            <Icon className="w-10 h-10 text-gold mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-2">{title}</h3>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PracticeAreas;
