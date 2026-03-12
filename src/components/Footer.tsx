import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Logo from "./Logo";

const C = {
  cream:    "#FFF8F0",
  espresso: "#4B2E2B",
  espressoDark: "#2D1A18",
  cognac:   "#8C5A3C",
  caramel:  "#C08552",
};

const Footer = () => {
  return (
    <footer style={{ background: `linear-gradient(145deg, ${C.espresso}, ${C.espressoDark})`, color: C.cream }}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div className="space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,248,240,0.70)" }}>
              Your trusted partner in international trade. Connecting global markets with quality products and reliable service since 2010.
            </p>
            <div className="flex gap-3 pt-2">
              {[
                { href: "https://www.facebook.com/share/1ECJCcdSn2/", icon: <Facebook size={17} /> },
                { href: "https://www.linkedin.com/in/sanderi-exporters-017a743b1", icon: <Linkedin size={17} /> },
                { href: "https://www.instagram.com/sanderiexporters?igsh=MWw1bjVnd3Q5c3Zjdw==", icon: <Instagram size={17} /> },
                { href: "https://wa.me/917990343575", icon: <MessageCircle size={17} />, label: "WhatsApp" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2 rounded-full transition-all duration-300"
                  style={{ background: "rgba(255,248,240,0.08)", color: C.cream, textDecoration: "none", display: "flex" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = C.caramel;
                    (e.currentTarget as HTMLAnchorElement).style.color = C.cream;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,248,240,0.08)";
                    (e.currentTarget as HTMLAnchorElement).style.color = C.cream;
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-heading font-semibold text-lg mb-6"
              style={{ fontFamily: "'Cinzel', serif", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: C.caramel }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about-us" },
                { label: "Products", path: "/products" },
                { label: "Why Choose Us", path: "/WhyChooseUs" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm transition-colors"
                    style={{ color: "rgba(255,248,240,0.68)", textDecoration: "none" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = C.caramel)}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,248,240,0.68)")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-heading font-semibold text-lg mb-6"
              style={{ fontFamily: "'Cinzel', serif", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: C.caramel }}
            >
              Our Services
            </h4>
            <ul className="space-y-3">
              {["Agricultural Products", "FMCG Goods", "Industrial Equipment", "Textile Materials", "Custom Packaging"].map((item) => (
                <li key={item} className="text-sm" style={{ color: "rgba(255,248,240,0.68)" }}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="font-heading font-semibold text-lg mb-6"
              style={{ fontFamily: "'Cinzel', serif", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: C.caramel }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={17} className="flex-shrink-0 mt-0.5" style={{ color: C.caramel }} />
                <span className="text-sm" style={{ color: "rgba(255,248,240,0.68)", lineHeight: 1.7 }}>
                  Ff 19 satymev 2 opp Kargil petrol pump sg Highway sola<br />
                  Ahmedabad, Gujarat 380060
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={17} className="flex-shrink-0" style={{ color: C.caramel }} />
                <span className="text-sm" style={{ color: "rgba(255,248,240,0.68)" }}>+91 7990343575</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={17} className="flex-shrink-0" style={{ color: C.caramel }} />
                <a
                  href="https://wa.me/917990343575"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors"
                  style={{ color: "rgba(255,248,240,0.68)", textDecoration: "none" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = C.caramel)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,248,240,0.68)")}
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={17} className="flex-shrink-0" style={{ color: C.caramel }} />
                <span className="text-sm" style={{ color: "rgba(255,248,240,0.68)" }}>info@sanderiexporters.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(255,248,240,0.10)" }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: "rgba(255,248,240,0.42)" }}>
              © {new Date().getFullYear()} Sanderi Exporters. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service"].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="text-sm transition-colors"
                  style={{ color: "rgba(255,248,240,0.42)", textDecoration: "none" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = C.cream)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,248,240,0.42)")}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
