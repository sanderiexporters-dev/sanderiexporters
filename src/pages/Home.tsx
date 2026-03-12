import { ArrowRight, Globe, Ship, Package, TrendingUp, Award, Users, Building } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import StatCard from "@/components/StatCard";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import SocialSidebar from "@/components/SocialSidebar";

import heroBg from "@/assets/hero-bg-2.jpg";
import riceImg from "@/assets/rice.jpg";
import peanutsImg from "@/assets/peanuts.jpg";
import sesameImg from "@/assets/sesame.jpg";
import spicesImg from "@/assets/spices.jpg";

const C = {
  cream:    "#FFF8F0",
  espresso: "#4B2E2B",
  espressoDark: "#2D1A18",
  cognac:   "#8C5A3C",
  caramel:  "#C08552",
  parchment:"#F5EDE3",
  muted:    "rgba(75,46,43,0.68)",
};

const products = [
  { title: "Rice Range", description: "Basmati, Non-Basmati, Parboiled, and Broken Rice. Sourced for premium quality and aroma.", image: riceImg, category: "Export", details: "Packaging: 5kg to 50kg (PP/Jute)" },
  { title: "Peanuts & Groundnuts", description: "Bold and Java Peanuts. Available in Raw, Shelled, or Inshell forms for consumption or oil.", image: peanutsImg, category: "Export", details: "Raw, Shelled, or Inshell forms" },
  { title: "Sesame & Oil Seeds", description: "Premium White, Black, and Hulled Sesame Seeds along with Sunflower and Mustard seeds.", image: sesameImg, category: "Export", details: "High purity Sortex-cleaned" },
  { title: "Indian Spices", description: "Turmeric Fingers, Cumin, Coriander, Red Chilli, and Fennel Seeds. Guaranteed purity.", image: spicesImg, category: "Export", details: "Machine-cleaned / Sortex-cleaned" },
];

const Home = () => {
  return (
    <div className="min-h-screen" style={{ background: C.cream }}>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Global Trade" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(75,46,43,0.82) 0%, rgba(45,26,24,0.65) 50%, rgba(75,46,43,0.50) 100%)" }} />
        </div>

        <div className="relative container mx-auto px-4 py-32 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8 animate-fade-in"
            style={{ background: "rgba(255,248,240,0.10)", backdropFilter: "blur(8px)", color: "rgba(255,248,240,0.88)", border: "1px solid rgba(255,248,240,0.15)" }}
          >
            <Globe size={16} style={{ color: C.caramel }} />
            Serving 48+ Countries Worldwide
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-slide-up" style={{ color: C.cream }}>
            Trusted Import & Export
            <br />
            <span style={{ color: C.caramel }}>Solutions</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s", color: "rgba(255,248,240,0.75)" }}>
            Connecting Global Markets with Quality & Trust. Your reliable partner for seamless international trade operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/products">
              <button
                style={{
                  padding: "0.9rem 2rem",
                  background: `linear-gradient(135deg, ${C.caramel}, #D4A06A)`,
                  color: C.cream,
                  border: "none",
                  borderRadius: 4,
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  boxShadow: "0 6px 20px rgba(192,133,82,0.35)",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                Explore Products <ArrowRight size={18} />
              </button>
            </Link>
            <Link to="/contact">
              <button
                style={{
                  padding: "0.9rem 2rem",
                  background: "transparent",
                  color: C.cream,
                  border: `1.5px solid rgba(255,248,240,0.55)`,
                  borderRadius: 4,
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,248,240,0.10)"; (e.currentTarget as HTMLButtonElement).style.borderColor = C.cream; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,248,240,0.55)"; }}
              >
                Get in Touch
              </button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full flex justify-center pt-2" style={{ border: "2px solid rgba(255,248,240,0.35)" }}>
            <div className="w-1 h-3 rounded-full animate-bounce" style={{ background: "rgba(255,248,240,0.55)" }} />
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16" style={{ background: `linear-gradient(135deg, ${C.espresso}, ${C.espressoDark})` }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard number="14+" label="Years Experience" icon={<Award size={24} />} />
            <StatCard number="48+" label="Countries Served" icon={<Globe size={24} />} />
            <StatCard number="479+" label="Happy Clients" icon={<Users size={24} />} />
            <StatCard number="1120+" label="Shipments Delivered" icon={<Ship size={24} />} />
          </div>
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className="py-20" style={{ background: C.cream }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 text-sm font-medium rounded-full mb-4" style={{ background: "rgba(192,133,82,0.10)", color: C.caramel }}>
                About Sanderi Exporters
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6" style={{ color: C.espresso }}>
                Your Gateway to <span style={{ color: C.caramel }}>Global Trade</span>
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: C.muted }}>
                Since 2010, Sanderi Exporters has been at the forefront of international trade, connecting businesses across continents with quality products and reliable logistics solutions.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Comprehensive import and export services",
                  "Quality assured products from verified sources",
                  "End-to-end logistics and documentation support",
                  "Competitive pricing and timely delivery",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(192,133,82,0.15)" }}>
                      <Package size={14} style={{ color: C.caramel }} />
                    </div>
                    <span style={{ color: C.espresso }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about-us">
                <button
                  style={{
                    padding: "0.75rem 1.75rem",
                    background: `linear-gradient(135deg, ${C.caramel}, #D4A06A)`,
                    color: C.cream,
                    border: "none",
                    borderRadius: 4,
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    boxShadow: "0 4px 16px rgba(192,133,82,0.30)",
                    transition: "transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                >
                  Learn More About Us <ArrowRight size={16} />
                </button>
              </Link>
            </div>

            {/* Mini stat grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-xl p-6 text-center" style={{ background: `linear-gradient(135deg, ${C.espresso}, ${C.cognac})` }}>
                    <Building size={32} className="mx-auto mb-2" style={{ color: C.caramel }} />
                    <div className="text-2xl font-bold" style={{ color: C.cream }}>14+</div>
                    <div className="text-sm" style={{ color: "rgba(255,248,240,0.70)" }}>Years in Business</div>
                  </div>
                  <div className="rounded-xl p-6 text-center" style={{ background: `linear-gradient(135deg, ${C.caramel}, #D4A06A)` }}>
                    <TrendingUp size={32} className="mx-auto mb-2" style={{ color: C.cream }} />
                    <div className="text-2xl font-bold" style={{ color: C.cream }}>98%</div>
                    <div className="text-sm" style={{ color: "rgba(255,248,240,0.80)" }}>Client Satisfaction</div>
                  </div>
                </div>
                <div className="pt-8 space-y-4">
                  <div className="rounded-xl p-6 text-center" style={{ background: C.parchment, border: "1px solid rgba(212,186,160,0.5)" }}>
                    <Globe size={32} className="mx-auto mb-2" style={{ color: C.espresso }} />
                    <div className="text-2xl font-bold" style={{ color: C.espresso }}>48+</div>
                    <div className="text-sm" style={{ color: C.muted }}>Countries</div>
                  </div>
                  <div className="rounded-xl p-6 text-center" style={{ background: `linear-gradient(135deg, ${C.espresso}, ${C.cognac})` }}>
                    <Ship size={32} className="mx-auto mb-2" style={{ color: C.caramel }} />
                    <div className="text-2xl font-bold" style={{ color: C.cream }}>1120+</div>
                    <div className="text-sm" style={{ color: "rgba(255,248,240,0.70)" }}>Shipments</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Products Preview ── */}
      <section className="py-20" style={{ background: C.parchment }}>
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Premium Range" subtitle="Explore our top-selling agricultural exports sourced from verified farms." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <div key={i} className="animate-slide-up h-full" style={{ animationDelay: `${i * 0.1}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products">
              <button
                style={{
                  padding: "0.85rem 2rem",
                  background: `linear-gradient(135deg, ${C.caramel}, #D4A06A)`,
                  color: C.cream,
                  border: "none",
                  borderRadius: 4,
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  boxShadow: "0 4px 16px rgba(192,133,82,0.30)",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                View Full Product Range <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20" style={{ background: `linear-gradient(145deg, ${C.espresso}, ${C.espressoDark})`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-20%", left: "30%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(192,133,82,0.10) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6" style={{ color: C.cream }}>
            Ready to Start Trading Globally?
          </h2>
          <p className="max-w-2xl mx-auto mb-8" style={{ color: "rgba(255,248,240,0.70)" }}>
            Let us help you expand your business horizons. Get in touch with our expert team today and discover the possibilities of international trade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/feedback">
              <button
                style={{
                  padding: "0.9rem 2rem",
                  background: `linear-gradient(135deg, ${C.caramel}, #D4A06A)`,
                  color: C.cream,
                  border: "none",
                  borderRadius: 4,
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  boxShadow: "0 6px 20px rgba(192,133,82,0.30)",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                Send Inquiry <ArrowRight size={18} />
              </button>
            </Link>
            <Link to="/contact">
              <button
                style={{
                  padding: "0.9rem 2rem",
                  background: "transparent",
                  color: C.cream,
                  border: `1.5px solid rgba(255,248,240,0.45)`,
                  borderRadius: 4,
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,248,240,0.10)"; (e.currentTarget as HTMLButtonElement).style.borderColor = C.cream; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,248,240,0.45)"; }}
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloating />
      <SocialSidebar />
    </div>
  );
};

export default Home;