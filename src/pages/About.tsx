import { Target, Eye, Heart, Award, Globe, Handshake, Shield, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import aboutHeroImg from "@/assets/about-hero.jpg";
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

const values = [
  { icon: <Shield size={28} />, title: "Integrity", description: "We conduct all business with honesty and transparency, building lasting relationships based on trust." },
  { icon: <Award size={28} />, title: "Quality", description: "We never compromise on quality, ensuring every product meets international standards." },
  { icon: <Globe size={28} />, title: "Global Reach", description: "Our extensive network spans across continents, connecting markets worldwide." },
  { icon: <Clock size={28} />, title: "Reliability", description: "Timely deliveries and consistent service you can always count on." },
];

const About = () => {
  return (
    <div className="min-h-screen" style={{ background: C.cream }}>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutHeroImg} alt="About Us" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, rgba(75,46,43,0.95), rgba(45,26,24,0.82))` }} />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: C.caramel, display: "block", marginBottom: "1.25rem" }}>
            Our Story
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up" style={{ color: C.cream }}>
            About <span style={{ color: C.caramel }}>Sanderi Exporters</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s", color: "rgba(255,248,240,0.70)" }}>
            Your trusted partner in international trade since 2010
          </p>
        </div>
      </section>

      {/* ── Story Section ── */}
      <section className="py-20" style={{ background: C.cream }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 text-sm font-medium rounded-full mb-4" style={{ background: "rgba(192,133,82,0.10)", color: C.caramel }}>
                Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6" style={{ color: C.espresso }}>
                Building Bridges Across <span style={{ color: C.caramel }}>Borders</span>
              </h2>
              <p className="mb-4 leading-relaxed" style={{ color: C.muted }}>
                Founded in 2010, Sanderi Exporters began with a simple vision: to connect quality products with global markets. What started as a small trading venture has grown into a comprehensive import-export enterprise serving clients across 50+ countries.
              </p>
              <p className="mb-4 leading-relaxed" style={{ color: C.muted }}>
                Over the years, we have built a reputation for reliability, quality, and customer-centric service. Our team of experienced professionals works tirelessly to ensure smooth transactions, timely deliveries, and complete satisfaction for all our partners.
              </p>
              <p className="leading-relaxed" style={{ color: C.muted }}>
                Today, we are proud to be a trusted name in international trade, handling diverse product categories from agricultural goods to industrial equipment, always maintaining our commitment to excellence.
              </p>
            </div>

            {/* Stats card */}
            <div className="relative">
              <div
                className="rounded-2xl p-8 relative overflow-hidden"
                style={{ background: C.parchment, border: "1px solid rgba(212,186,160,0.5)" }}
              >
                <div style={{ position: "absolute", top: 0, right: 0, width: 140, height: 140, borderRadius: "50%", background: "rgba(192,133,82,0.12)", transform: "translate(40%, -40%)" }} />
                {/* Corner ornament */}
                <div style={{ position: "absolute", bottom: 12, left: 12, width: 22, height: 22, borderBottom: `1.5px solid rgba(192,133,82,0.4)`, borderLeft: `1.5px solid rgba(192,133,82,0.4)` }} />

                <div className="relative space-y-6">
                  {[
                    { icon: <Award size={22} style={{ color: C.caramel }} />, title: "15+ Years of Excellence", desc: "Trusted by businesses worldwide" },
                    { icon: <Globe size={22} style={{ color: C.caramel }} />, title: "Global Network", desc: "Operations in 50+ countries" },
                    { icon: <Handshake size={22} style={{ color: C.caramel }} />, title: "500+ Happy Clients", desc: "Long-term partnerships built on trust" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `linear-gradient(135deg, ${C.espresso}, ${C.cognac})` }}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1" style={{ color: C.espresso }}>{item.title}</h4>
                        <p className="text-sm" style={{ color: C.muted }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-20" style={{ background: `linear-gradient(145deg, ${C.espresso}, ${C.espressoDark})` }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Target size={32} style={{ color: C.caramel }} />,
                title: "Our Mission",
                text: "To facilitate seamless international trade by providing reliable, efficient, and quality-focused import-export services. We aim to be the preferred partner for businesses seeking to expand their global footprint, delivering value through excellence in every transaction.",
              },
              {
                icon: <Eye size={32} style={{ color: C.caramel }} />,
                title: "Our Vision",
                text: "To become a global leader in import-export solutions, recognized for our integrity, innovation, and commitment to customer success. We envision a world where trade barriers are minimized, and businesses of all sizes can access international markets with confidence.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 md:p-10"
                style={{ background: "rgba(255,248,240,0.07)", border: "1px solid rgba(255,248,240,0.10)", backdropFilter: "blur(4px)" }}
              >
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{ background: "rgba(192,133,82,0.15)", border: "1px solid rgba(192,133,82,0.25)" }}>
                  {card.icon}
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4" style={{ color: C.cream }}>{card.title}</h3>
                <p style={{ color: "rgba(255,248,240,0.72)", lineHeight: 1.8 }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-20" style={{ background: C.cream }}>
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Core Values" subtitle="The principles that guide everything we do at Sanderi Exporters" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="rounded-xl p-6 text-center shadow-md transition-all duration-300"
                style={{ background: C.parchment, border: "1px solid rgba(212,186,160,0.5)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 28px rgba(75,46,43,0.12)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 12px rgba(75,46,43,0.06)"; }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(192,133,82,0.10)", color: C.caramel }}>
                  {value.icon}
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2" style={{ color: C.espresso }}>{value.title}</h4>
                <p className="text-sm" style={{ color: C.muted }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20" style={{ background: C.parchment }}>
        <div className="container mx-auto px-4">
          <SectionHeading title="Why Choose Sanderi Exporters?" subtitle="We go above and beyond to ensure your success in international trade" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Expert Team", description: "Our experienced professionals understand the complexities of international trade and provide expert guidance." },
              { title: "Quality Assurance", description: "Rigorous quality checks at every step ensure you receive only the best products." },
              { title: "Competitive Pricing", description: "We leverage our global network to offer the most competitive rates in the market." },
              { title: "Timely Delivery", description: "Our efficient logistics ensure your shipments arrive on time, every time." },
              { title: "Documentation Support", description: "Complete assistance with all trade documentation and compliance requirements." },
              { title: "Customer Focus", description: "Your success is our priority. We provide personalized service tailored to your needs." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" style={{ background: `linear-gradient(135deg, ${C.caramel}, #D4A06A)` }}>
                  <Heart size={16} style={{ color: C.cream }} />
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: C.espresso }}>{item.title}</h4>
                  <p className="text-sm" style={{ color: C.muted }}>{item.description}</p>
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

export default About;