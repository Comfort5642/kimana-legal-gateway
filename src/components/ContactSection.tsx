import { MapPin, Phone, MessageCircle, Clock, Mail } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding bg-cream">
    <div className="container-narrow">
      <div className="text-center mb-14">
        <p className="text-gold-dark font-semibold uppercase tracking-widest text-sm mb-2">Get In Touch</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Contact Us</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-navy flex items-center justify-center">
              <MapPin className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">Our Office</h3>
              <p className="text-muted-foreground">Kimana Town, Kajiado County, Kenya</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-navy flex items-center justify-center">
              <Phone className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">Phone</h3>
              <a href="tel:+254792214178" className="text-muted-foreground hover:text-gold transition-colors">+254 792 214 178</a>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-navy flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">WhatsApp</h3>
              <a href="https://wa.me/254792214178" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">Chat with us on WhatsApp</a>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-navy flex items-center justify-center">
              <Clock className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">Working Hours</h3>
              <p className="text-muted-foreground">Mon – Fri: 8:00 AM – 5:00 PM<br />Sat: 9:00 AM – 1:00 PM</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden border border-border shadow-lg h-80 lg:h-auto">
          <iframe
            title="Kurumi Esendi & Co. Advocates Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.56!2d37.52!3d-2.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKimana!5e0!3m2!1sen!2ske!4v1600000000000"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
