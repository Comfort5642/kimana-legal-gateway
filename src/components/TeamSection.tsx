import { Scale, Briefcase, GraduationCap } from "lucide-react";
import reenahPhoto from "@/assets/advocate-hero.jpg";
<<<<<<< HEAD
import gracePhoto from "@/assets/grace-mwende.svg";
import janePhoto from "@/assets/jane-wambui.svg";
import mercyPhoto from "@/assets/mercy-njeri.svg";
=======
>>>>>>> 4c6226e43f5b4aac8947460dd5ea01c7a6f22cbc

const TeamSection = () => (
  <section id="team" className="section-padding bg-card">
    <div className="container-narrow">
      <div className="text-center mb-14">
        <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-2">Our Team</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Meet the Team</h2>
      </div>
<<<<<<< HEAD

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1 flex justify-center">
          <div className="w-64 h-80 rounded-lg overflow-hidden border-2 border-gold/30 shadow-xl">
            <img src={reenahPhoto} alt="Reenah Esendi, Managing Partner" className="w-full h-full object-cover object-top" />
          </div>
        </div>

        <div className="md:col-span-2 space-y-4">
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

      <div className="max-w-6xl mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-4">Advocates</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold/30">
                  <img src={gracePhoto} alt="Grace Mwende" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold">Grace Mwende</div>
                  <div className="text-sm text-muted-foreground">Advocate</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">Grace specialises in civil litigation and land matters, offering client-focused representation across Kajiado County.</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold/30">
                  <img src={janePhoto} alt="Jane Wambui" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold">Jane Wambui</div>
                  <div className="text-sm text-muted-foreground">Advocate</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">Jane focuses on family and succession matters and provides sensitive, client-centred advice.</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-4">Legal Assistants</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold/30">
                  <img src={mercyPhoto} alt="Mercy Njeri" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold">Mercy Njeri</div>
                  <div className="text-sm text-muted-foreground">Legal Assistant</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">Mercy manages client intake, prepares case documents, and ensures smooth communication between clients and advocates.</div>
                </div>
=======
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
>>>>>>> 4c6226e43f5b4aac8947460dd5ea01c7a6f22cbc
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TeamSection;
