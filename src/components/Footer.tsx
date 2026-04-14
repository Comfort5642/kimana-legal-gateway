const Footer = () => (
  <footer className="bg-navy-dark border-t border-navy-light/20 py-10">
    <div className="container-narrow px-4 sm:px-6 lg:px-8 text-center">
      <p className="font-heading text-lg font-bold text-primary-foreground mb-1">
        Kurumi Esendi <span className="text-gold">&</span> Co. Advocates
      </p>
      <p className="text-primary-foreground/50 text-sm mb-4">Kimana, Kajiado County, Kenya</p>
      <p className="text-primary-foreground/30 text-xs">© {new Date().getFullYear()} Kurumi Esendi & Co. Advocates. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
