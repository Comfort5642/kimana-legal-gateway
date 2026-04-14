import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> 4c6226e43f5b4aac8947460dd5ea01c7a6f22cbc

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Practice Areas", href: "#practice" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
<<<<<<< HEAD
  { label: "Team", href: "/team" },
=======
>>>>>>> 4c6226e43f5b4aac8947460dd5ea01c7a6f22cbc
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/95 backdrop-blur-sm border-b border-navy-light/30">
      <div className="container-narrow flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        <a href="#hero" className="font-heading text-lg md:text-xl font-bold text-primary-foreground">
          Kurumi Esendi <span className="text-gold">&</span> Co.
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
<<<<<<< HEAD
            l.href.startsWith("/") ? (
              <Link key={l.href} to={l.href} className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
                {l.label}
              </Link>
            ) : l.href.startsWith("#") ? (
              <Link key={l.href} to={{ pathname: "/", hash: l.href }} className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
                {l.label}
              </Link>
            ) : (
              <a key={l.href} href={l.href} className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
                {l.label}
              </a>
            )
=======
            <a key={l.href} href={l.href} className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
              {l.label}
            </a>
>>>>>>> 4c6226e43f5b4aac8947460dd5ea01c7a6f22cbc
          ))}
          <a href="tel:+254792214178" className="inline-flex items-center gap-2 bg-gold text-secondary-foreground px-4 py-2 rounded text-sm font-semibold hover:bg-gold-dark transition-colors">
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy-dark border-t border-navy-light/20 px-4 pb-4">
          {navLinks.map((l) => (
<<<<<<< HEAD
            l.href.startsWith("/") ? (
              <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className="block py-3 text-primary-foreground/80 hover:text-gold transition-colors border-b border-navy-light/10">
                {l.label}
              </Link>
            ) : l.href.startsWith("#") ? (
              <Link key={l.href} to={{ pathname: "/", hash: l.href }} onClick={() => setOpen(false)} className="block py-3 text-primary-foreground/80 hover:text-gold transition-colors border-b border-navy-light/10">
                {l.label}
              </Link>
            ) : (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-primary-foreground/80 hover:text-gold transition-colors border-b border-navy-light/10">
                {l.label}
              </a>
            )
=======
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-primary-foreground/80 hover:text-gold transition-colors border-b border-navy-light/10">
              {l.label}
            </a>
>>>>>>> 4c6226e43f5b4aac8947460dd5ea01c7a6f22cbc
          ))}
          <a href="tel:+254792214178" className="mt-3 inline-flex items-center gap-2 bg-gold text-secondary-foreground px-4 py-2 rounded text-sm font-semibold">
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
