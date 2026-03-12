import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import SocialSidebar from "@/components/SocialSidebar";

import riceImg from "@/assets/rice.jpg";
import peanutsImg from "@/assets/peanuts.jpg";
import sesameImg from "@/assets/sesame.jpg";
import spicesImg from "@/assets/spices.jpg";
import pulsesImg from "@/assets/pulses.jpg";
import freshProduceImg from "@/assets/fresh-produce.jpg";

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
  { title: "Rice Range", description: "Basmati, Non-Basmati, Parboiled, and Broken Rice. Sourced for premium quality and aroma.", image: riceImg, category: "Export", details: "Packaging: 5kg, 10kg, 25kg, 50kg (PP/Jute/Private Label)" },
  { title: "Peanuts / Groundnuts", description: "Bold and Java Peanuts. Available in Raw, Shelled, or Inshell forms for consumption or oil extraction.", image: peanutsImg, category: "Export", details: "Forms: Roasted, Blanched, Raw, Shelled, Inshell" },
  { title: "Sesame & Oil Seeds", description: "Premium White, Black, and Hulled Sesame Seeds. Also supplying high-purity Sunflower and Mustard seeds.", image: sesameImg, category: "Export", details: "Varieties: White, Black, Hulled, Sunflower, Mustard Seeds" },
  { title: "Indian Spices", description: "Turmeric Fingers/Powder, Cumin, Coriander, Red Chilli, and Fennel Seeds. Machine or Sortex cleaned.", image: spicesImg, category: "Export", details: "Quality: Machine-cleaned / Sortex-cleaned" },
  { title: "Pulses & Lentils", description: "Nutritious Chickpeas, Green Moong, Masoor Dal, Toor Dal, and Urad Dal processed for international safety.", image: pulsesImg, category: "Export", details: "Types: Chickpeas, Green Moong, Masoor, Toor, Urad Dal" },
  { title: "Fruits & Vegetables", description: "Onions, Garlic, Mangoes, Pomegranates, Coconut, Drumstick, Ginger, and seasonal specialty items.", image: freshProduceImg, category: "Export", details: "Includes: Suran, Ash Gourd, Pumpkin, Raw Turmeric, Banana" },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");

  return (
    <div className="min-h-screen" style={{ background: C.cream }}>
      <Navbar />

      {/* ── Hero ── */}
      <section
        className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden text-center"
        style={{ background: `linear-gradient(145deg, ${C.espresso}, ${C.espressoDark})` }}
      >
        <div style={{ position: "absolute", top: "-15%", left: "-5%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle,rgba(192,133,82,0.10) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-15%", right: "-5%", width: 240, height: 240, borderRadius: "50%", background: "radial-gradient(circle,rgba(192,133,82,0.08) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div className="relative container mx-auto px-4" style={{ color: C.cream }}>
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: C.caramel, display: "block", marginBottom: "1.25rem" }}>
            Premium Exports
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: C.cream }}>
            Our <span style={{ color: C.caramel }}>Product Range</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,248,240,0.70)" }}>
            Explore our comprehensive range of agricultural exports, pulses, and fresh seasonal produce.
          </p>
        </div>
      </section>

      {/* ── Filter bar ── */}
      <section className="py-6 border-b" style={{ background: C.parchment, borderColor: "rgba(212,186,160,0.4)" }}>
        <div className="container mx-auto px-4 flex justify-center">
          <button
            style={{
              padding: "0.5rem 2rem",
              background: `linear-gradient(135deg, ${C.espresso}, ${C.cognac})`,
              color: C.cream,
              borderRadius: 999,
              fontSize: "0.82rem",
              fontWeight: 500,
              letterSpacing: "0.06em",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(75,46,43,0.20)",
            }}
          >
            All Products
          </button>
        </div>
      </section>

      {/* ── Products Grid ── */}
      <section className="py-20" style={{ background: C.cream }}>
        <div className="container mx-auto px-4">
          <SectionHeading title="What We Trade" subtitle="Premium quality products sourced from verified Indian farms." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>

          {/* Seasonal availability box */}
          <div
            className="mt-16 p-8 rounded-2xl"
            style={{
              background: C.parchment,
              border: `1.5px dashed rgba(192,133,82,0.35)`,
              position: "relative",
            }}
          >
            {/* Corner ornaments */}
            <div style={{ position: "absolute", top: 12, left: 12, width: 20, height: 20, borderTop: `1.5px solid ${C.caramel}`, borderLeft: `1.5px solid ${C.caramel}`, opacity: 0.5 }} />
            <div style={{ position: "absolute", top: 12, right: 12, width: 20, height: 20, borderTop: `1.5px solid ${C.caramel}`, borderRight: `1.5px solid ${C.caramel}`, opacity: 0.5 }} />
            <div style={{ position: "absolute", bottom: 12, left: 12, width: 20, height: 20, borderBottom: `1.5px solid ${C.caramel}`, borderLeft: `1.5px solid ${C.caramel}`, opacity: 0.5 }} />
            <div style={{ position: "absolute", bottom: 12, right: 12, width: 20, height: 20, borderBottom: `1.5px solid ${C.caramel}`, borderRight: `1.5px solid ${C.caramel}`, opacity: 0.5 }} />

            <h4 className="font-bold text-lg mb-4" style={{ color: C.espresso }}>Seasonal Fresh Item Availability:</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm" style={{ color: C.muted }}>
              {["Onions & Potatoes", "Mangoes (Seasonal)", "Pomegranates", "Green Chilly", "Suran (Elephant Yam)", "Drumstick (Moringa)", "Ash Gourd / Pumpkin", "Raw Turmeric"].map((item, i) => (
                <p key={i} className="flex items-center gap-1.5">
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: C.caramel, display: "inline-block", flexShrink: 0 }} />
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-6 text-xs italic" style={{ color: "rgba(75,46,43,0.45)" }}>Note: Export availability depends on government regulations and harvest seasons.</p>
          </div>
        </div>
      </section>

      {/* ── Trade Process ── */}
      <section className="py-20" style={{ background: C.parchment }}>
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Trade Process" subtitle="A streamlined approach for smooth global transactions" />
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Inquiry", desc: "Share your requirements" },
              { step: "02", title: "Quotation", desc: "Competitive pricing" },
              { step: "03", title: "Agreement", desc: "Documentation & Terms" },
              { step: "04", title: "Delivery", desc: "Timely global shipment" },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${C.espresso}, ${C.cognac})` }}
                >
                  <span className="font-bold text-xl" style={{ color: C.caramel }}>{item.step}</span>
                </div>
                <h4 className="font-bold mb-2" style={{ color: C.espresso }}>{item.title}</h4>
                <p className="text-sm" style={{ color: C.muted }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloating />
      <SocialSidebar />
    </div>
  );
};

export default Products;