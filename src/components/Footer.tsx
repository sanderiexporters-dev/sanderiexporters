import { Link } from "react-router-dom";
import { ArrowRight, Facebook, Globe2, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Ship } from "lucide-react";
import Logo from "./Logo";
import { productCategories } from "@/data/productCatalog";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Products", path: "/products" },
  { label: "Why Choose Us", path: "/why-choose-us" },
  { label: "Feedback", path: "/feedback" },
  { label: "Contact", path: "/contact" },
];

const services = [
  "Rice, spices, peanuts and oil seeds export",
  "Pulses, fresh produce and agricultural sourcing",
  "Bulk, retail and private label packaging",
  "Commercial documentation coordination",
  "Worldwide buyer communication",
];

const socialLinks = [
  { href: "https://www.facebook.com/share/1ECJCcdSn2/", icon: <Facebook size={17} />, label: "Facebook" },
  { href: "https://www.linkedin.com/in/sanderi-exporters-017a743b1", icon: <Linkedin size={17} />, label: "LinkedIn" },
  { href: "https://www.instagram.com/sanderiexporters?igsh=MWw1bjVnd3Q5c3Zjdw==", icon: <Instagram size={17} />, label: "Instagram" },
  { href: "https://wa.me/917990343575", icon: <MessageCircle size={17} />, label: "WhatsApp" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#121826] text-white">
      <div className="route-grid absolute inset-0 opacity-30" aria-hidden="true" />

      <div className="relative border-b border-white/10 bg-[#0a8f9c] px-4 py-10">
        <div className="container mx-auto grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase text-white/76">
              <Ship size={17} />
              Export-ready sourcing desk
            </span>
            <h2 className="mt-3 max-w-3xl text-3xl text-white md:text-4xl">
              Tell us your product, quantity, destination and packaging requirement.
            </h2>
          </div>
          <Link to="/contact" className="btn-accent">
            Request Quote <ArrowRight size={17} />
          </Link>
        </div>
      </div>

      <div className="container relative mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.7fr_0.8fr_0.9fr]">
          <div>
            <Logo variant="light" size="lg" />
            <p className="mt-6 max-w-md text-sm leading-7 text-white/68">
              Sanderi Exporters connects worldwide buyers with Indian agricultural products, packaging support, practical documentation coordination and responsive trade communication.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["29+ countries", "1120+ shipments", "Since 2010"].map((item) => (
                <span key={item} className="premium-chip border-white/10 bg-white/8 text-white/78">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-11 w-11 items-center justify-center border border-white/12 bg-white/8 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#f59e0b] hover:bg-[#f59e0b] hover:text-[#121826]"
                  style={{ borderRadius: "0.5rem" }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase text-[#f59e0b]">Quick Links</h3>
            <ul className="mt-6 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-sm text-white/68 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase text-[#f59e0b]">Product Desk</h3>
            <ul className="mt-6 space-y-3">
              {productCategories.map((item) => (
                <li key={item.slug}>
                  <Link to={`/products/${item.slug}`} className="text-sm text-white/68 transition-colors hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase text-[#f59e0b]">Contact</h3>
            <ul className="mt-6 space-y-5 text-sm text-white/68">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#f59e0b]" />
                <span>FF 19 Satyamev 2, Opp. Kargil Petrol Pump, SG Highway, Sola, Ahmedabad, Gujarat 380060</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-[#f59e0b]" />
                <a href="tel:+917990343575" className="transition-colors hover:text-white">
                  +91 79903 43575
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-[#f59e0b]" />
                <a href="mailto:info@sanderiexporters.com" className="transition-colors hover:text-white">
                  info@sanderiexporters.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe2 size={18} className="shrink-0 text-[#f59e0b]" />
                <span>Serving importers worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-5 border-t border-white/10 pt-8 text-sm text-white/54 md:grid-cols-[1fr_auto] md:items-center">
          <p>
            © {new Date().getFullYear()} Sanderi Exporters. All rights reserved.
            <span className="mx-2">|</span>
            <a
              href="https://bytebly.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/68 hover:text-white font-semibold"
            >
              Website by Bytebly
            </a>
          </p>
          <div className="flex flex-wrap gap-4 md:justify-end">
            {services.slice(0, 3).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
