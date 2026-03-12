import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { Star, Quote, ChevronLeft, ChevronRight, Award, ShieldCheck, ClipboardCheck, Globe, Zap, Users, Shield, TrendingUp, BarChart3 } from "lucide-react";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import SocialSidebar from "@/components/SocialSidebar";

const C = {
  cream:    "#FFF8F0",
  espresso: "#4B2E2B",
  espressoDark: "#2D1A18",
  cognac:   "#8C5A3C",
  caramel:  "#C08552",
  parchment:"#F5EDE3",
  muted:    "rgba(75,46,43,0.68)",
};

const whyChooseUs = [
  { title: "Unmatched Quality Control", description: "Every product undergoes a rigorous 3-stage quality check to ensure it meets international export standards before shipment.", icon: <ShieldCheck size={32} style={{ color: C.caramel }} /> },
  { title: "Global Network", description: "With a distribution presence in over 50 countries, we navigate complex international trade routes with ease and efficiency.", icon: <Globe size={32} style={{ color: C.caramel }} /> },
  { title: "Competitive Pricing", description: "Our direct sourcing from farmers and manufacturers allows us to provide premium products at highly competitive market rates.", icon: <TrendingUp size={32} style={{ color: C.caramel }} /> },
  { title: "Customer-Centric Approach", description: "We provide dedicated account managers for every client, ensuring personalized service and 24/7 communication.", icon: <Users size={32} style={{ color: C.caramel }} /> },
  { title: "Fast & Reliable Logistics", description: "Our tie-ups with global shipping leaders ensure that your consignments reach you on time, every single time.", icon: <Zap size={32} style={{ color: C.caramel }} /> },
  { title: "Transparent Operations", description: "From real-time tracking to clear documentation, we believe in keeping our partners informed at every step of the trade.", icon: <BarChart3 size={32} style={{ color: C.caramel }} /> },
];

const reviews = [
  { name: "Global Traders Inc.", country: "UAE", text: "Working with Sanderi has been a game changer. Their attention to quality and shipping timelines is unparalleled in the industry.", stars: 5 },
  { name: "Green Earth Organics", country: "Singapore", text: "Reliable and compliant. Their certifications give our food products the edge in ASEAN markets.", stars: 5 },
  { name: "Apex Industrial", country: "Germany", text: "The team is professional and the logistics are seamless. We've seen a significant reduction in lead times.", stars: 4 },
  { name: "Loom & Thread", country: "UK", text: "Excellent communication and premium product quality. They truly understand the needs of global markets.", stars: 5 },
  { name: "Spice Route Ltd", country: "USA", text: "Their purity standards are top-notch. Our spices remained fresh and aromatic throughout the long sea transit.", stars: 5 },
  { name: "TechNova Solutions", country: "Australia", text: "Professionalism at its best. Very satisfied with their attention to detail and partnership-driven approach.", stars: 5 },
];

const certifications = [
  { title: "ISO 9001:2015", subtitle: "Quality Management System", valid: "Valid 2026", icon: <Award size={38} style={{ color: C.caramel }} /> },
  { title: "FSSAI Certified", subtitle: "Food Safety Standards", valid: "Valid 2026", icon: <ShieldCheck size={38} style={{ color: C.caramel }} /> },
  { title: "APEDA Registered", subtitle: "Agricultural Export Authority", valid: "Valid 2026", icon: <Globe size={38} style={{ color: C.caramel }} /> },
  { title: "GMP Certified", subtitle: "Good Manufacturing Practice", valid: "Valid 2026", icon: <ClipboardCheck size={38} style={{ color: C.caramel }} /> },
];

const WhyChooseUs = () => {
  const [activeReview, setActiveReview] = useState(0);
  const nextReview = () => setActiveReview((p) => (p === reviews.length - 1 ? 0 : p + 1));
  const prevReview = () => setActiveReview((p) => (p === 0 ? reviews.length - 1 : p - 1));

  useEffect(() => {
    const timer = setInterval(nextReview, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: C.cream }}>
      <Navbar />

      {/* ── Hero ── */}
      <section
        className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden text-center"
        style={{ background: `linear-gradient(145deg, ${C.espresso}, ${C.espressoDark})` }}
      >
        <div style={{ position: "absolute", top: "-15%", right: "-5%", width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle,rgba(192,133,82,0.10) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-15%", left: "-5%", width: 240, height: 240, borderRadius: "50%", background: "radial-gradient(circle,rgba(192,133,82,0.08) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div className="relative container mx-auto px-4">
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: C.caramel, display: "block", marginBottom: "1.25rem" }}>
            Our Advantage
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up" style={{ color: C.cream }}>
            Why Partner with <span style={{ color: C.caramel }}>Sanderi?</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s", color: "rgba(255,248,240,0.70)" }}>
            Experience excellence in global trade with a partner committed to quality, trust, and seamless logistics.
          </p>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="py-12 border-b" style={{ background: C.parchment, borderColor: "rgba(212,186,160,0.4)" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4 rounded-xl" style={{ background: C.cream, border: "1px solid rgba(212,186,160,0.5)", boxShadow: "0 2px 12px rgba(75,46,43,0.06)" }}>
                <div className="mb-4 p-3 rounded-full" style={{ background: "rgba(192,133,82,0.08)" }}>{cert.icon}</div>
                <h4 className="font-bold text-sm md:text-base" style={{ color: C.espresso }}>{cert.title}</h4>
                <p className="text-xs" style={{ color: C.muted }}>{cert.subtitle}</p>
                <span className="mt-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded" style={{ color: C.caramel, background: "rgba(192,133,82,0.10)" }}>
                  {cert.valid}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Grid ── */}
      <section className="py-20" style={{ background: C.cream }}>
        <div className="container mx-auto px-4">
          <SectionHeading title="What Sets Us Apart" subtitle="We go beyond just exports. We build long-term international partnerships through reliable performance." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl shadow-md animate-slide-up transition-all duration-300"
                style={{ background: C.parchment, border: "1px solid rgba(212,186,160,0.5)", animationDelay: `${i * 0.1}s`, borderTop: `3px solid ${C.caramel}` }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 32px rgba(75,46,43,0.12)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 12px rgba(75,46,43,0.06)"; }}
              >
                <div className="mb-4 w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "rgba(192,133,82,0.10)" }}>
                  {item.icon}
                </div>
                <h4 className="font-heading font-bold text-xl mb-3" style={{ color: C.espresso }}>{item.title}</h4>
                <p style={{ color: C.muted, lineHeight: 1.75 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews Slider ── */}
      <section className="py-20 overflow-hidden" style={{ background: C.parchment }}>
        <div className="container mx-auto px-4">
          <SectionHeading title="Client Reviews" subtitle="Trusted by businesses across the globe for our consistency and quality" />
          <div className="relative max-w-4xl mx-auto mt-12">
            <div className="relative p-8 md:p-12 rounded-3xl" style={{ background: C.cream, border: "1px solid rgba(212,186,160,0.5)", boxShadow: "0 12px 32px rgba(75,46,43,0.10)" }}>
              <Quote size={60} style={{ position: "absolute", top: 24, left: 24, color: "rgba(192,133,82,0.15)" }} />
              <div className="relative z-10 text-center">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(reviews[activeReview].stars)].map((_, i) => (
                    <Star key={i} size={20} style={{ fill: C.caramel, color: C.caramel }} />
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-medium italic mb-8" style={{ color: C.espresso, lineHeight: 1.7 }}>
                  "{reviews[activeReview].text}"
                </p>
                <div>
                  <h4 className="font-bold text-lg" style={{ color: C.espresso }}>{reviews[activeReview].name}</h4>
                  <p style={{ color: C.cognac }}>{reviews[activeReview].country}</p>
                </div>
              </div>
              <button onClick={prevReview} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors" style={{ color: C.cognac, background: "transparent", border: "none", cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(192,133,82,0.10)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              ><ChevronLeft size={32} /></button>
              <button onClick={nextReview} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors" style={{ color: C.cognac, background: "transparent", border: "none", cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(192,133,82,0.10)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              ><ChevronRight size={32} /></button>
            </div>
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, i) => (
                <button key={i} onClick={() => setActiveReview(i)} style={{ height: 8, width: activeReview === i ? 32 : 8, borderRadius: 4, background: activeReview === i ? C.caramel : "rgba(192,133,82,0.30)", border: "none", cursor: "pointer", transition: "all 0.3s ease" }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-20" style={{ background: `linear-gradient(145deg, ${C.espresso}, ${C.espressoDark})` }}>
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Core Values" subtitle="The principles that guide our every transaction and international shipment" light />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Absolute Integrity in Documentation",
              "Uncompromising Product Quality",
              "Ethical Sourcing from Direct Farmers",
              "On-time Delivery Schedules",
              "Sustainable Trade Practices",
              "Regulatory Compliance (FDA, FSSAI)",
              "Innovative Logistics Solutions",
              "Risk Mitigation Strategies",
              "Long-term Partnership Focus",
            ].map((value, i) => (
              <div key={i} className="flex items-center gap-3 rounded-lg p-4" style={{ background: "rgba(255,248,240,0.07)", border: "1px solid rgba(255,248,240,0.08)" }}>
                <ShieldCheck size={20} style={{ color: C.caramel, flexShrink: 0 }} />
                <span className="font-medium" style={{ color: "rgba(255,248,240,0.88)" }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Workflow ── */}
      <section className="py-20" style={{ background: C.cream }}>
        <div className="container mx-auto px-4">
          <SectionHeading title="Seamless Export Workflow" subtitle="Our systematic approach ensures your trade orders are executed flawlessly" />
          <div className="max-w-4xl mx-auto">
            {[
              { step: "01", title: "Inquiry & Quotation", desc: "Detailed understanding of your requirements followed by transparent, competitive market pricing." },
              { step: "02", title: "Sourcing & Quality Check", desc: "Procurement from premium sources and rigorous testing against international safety standards." },
              { step: "03", title: "Compliance & Documentation", desc: "Expert handling of all legal paperwork including IEC, GST, and custom export documents." },
              { step: "04", title: "Secure Shipment", desc: "Container-optimized loading and shipping via trusted global logistics partners." },
              { step: "05", title: "Destination Delivery", desc: "Final clearance support and tracking until the consignment reaches your warehouse." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `linear-gradient(135deg, ${C.espresso}, ${C.cognac})` }}>
                    <span className="font-bold" style={{ color: C.caramel }}>{item.step}</span>
                  </div>
                  {i < 4 && <div style={{ width: 1.5, flex: 1, background: "rgba(192,133,82,0.25)", marginTop: 8 }} />}
                </div>
                <div className="flex-1 pb-8">
                  <h4 className="font-heading font-semibold text-lg mb-2" style={{ color: C.espresso }}>{item.title}</h4>
                  <p style={{ color: C.muted }}>{item.desc}</p>
                </div>
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

export default WhyChooseUs;