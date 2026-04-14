import { Scale, Briefcase, GraduationCap } from "lucide-react";
import reenahPhoto from "@/assets/advocate-hero.jpg";

const TeamSection = () => (
  <section id="team" className="section-padding bg-card">
    <div className="container-narrow">
      <div className="text-center mb-14">
        <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-2">Our Team</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Meet the Team</h2>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2 flex justify-center">
            <div className="w-64 h-80 rounded-lg overflow-hidden border-2 border-gold/30 shadow-xl">
              <img
                src={reenahPhoto}
                alt="Reenah Esendi, Managing Partner"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="md:col-span-3 space-y-4">
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground">Reenah Esendi</h3>
              <p className="text-gold font-semibold">Managing Partner</p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Reenah Esendi is an advocate experienced in property law, legal consulting, and civil litigation. She is committed to delivering practical, timely, and client-focused legal solutions, offering professional representation, reliable documentation services, and clear legal guidance tailored to clients in Kimana and the wider Kajiado region.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-muted-foreground">
                <GraduationCap className="w-5 h-5 text-gold flex-shrink-0" />
                <span>Law Degree — The Catholic University of Eastern Africa</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Scale className="w-5 h-5 text-gold flex-shrink-0" />
                <span>Land & Conveyancing, Civil Litigation, Succession & Probate</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Briefcase className="w-5 h-5 text-gold flex-shrink-0" />
                <span>Commissioner for Oaths & Notary Public</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TeamSection;
