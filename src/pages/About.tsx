import { ArrowRight, BadgeCheck, Building2, Clock, Globe2, Handshake, ShieldCheck, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SEOMetadata from "@/components/SEOMetadata";
import SocialSidebar from "@/components/SocialSidebar";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import aboutHeroImg from "@/assets/ahmedabad office.jpg";
import founderImg from "@/assets/founder.jpeg";
import foundercopyImg from "@/assets/found - Copy.jpeg"
import foundImg from "@/assets/found.jpeg";
import foundersImg from "@/assets/founders.jpeg";
import packagingImg from "@/assets/packaging desk.jpg";
import { siteUrl } from "@/data/siteMetadata";

const values = [
  {
    icon: <ShieldCheck size={22} />,
    title: "Trust-first trade",
    text: "We keep communication clear, pricing practical and commitments realistic so buyers can plan confidently.",
  },
  {
    icon: <BadgeCheck size={22} />,
    title: "Quality focus",
    text: "We align product selection, specifications and packing standards before dispatch.",
  },
  {
    icon: <Globe2 size={22} />,
    title: "Worldwide mindset",
    text: "We support global importers, wholesalers, distributors and private label buyers with export-ready coordination.",
  },
  {
    icon: <Clock size={22} />,
    title: "Responsive execution",
    text: "Fast replies and structured follow-up help buyers move from inquiry to shipment without confusion.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-[#f5f8fb]">
      <SEOMetadata
        title="About Sanderi Exporters - Import Export Company in India"
        description="Sanderi Exporters is an Ahmedabad-based import-export company connecting global buyers with Indian agricultural products. We specialise in rice, spices, peanuts, sesame seeds, pulses and fresh produce with export-ready packaging and documentation."
        keywords="Ahmedabad exporters, about Sanderi Exporters, import export company India, agricultural exporters Ahmedabad, rice exporter Ahmedabad"
        url={`${siteUrl}/about-us`}
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": `${siteUrl}/about-us#webpage`,
          name: "About Sanderi Exporters",
          description:
            "Company story, mission and values for Sanderi Exporters, an Ahmedabad based agricultural products exporter.",
          url: `${siteUrl}/about-us`,
          isPartOf: { "@id": `${siteUrl}/#website` },
          publisher: { "@id": `${siteUrl}/#organization` },
        }}
      />

      <Navbar />
      <SocialSidebar />
      <WhatsAppFloating />

      <main>
        <section className="relative min-h-[74vh] overflow-hidden px-4 pb-16 pt-32 text-white md:pt-40">
          <div className="absolute inset-0">
            <img src={aboutHeroImg} alt="Sanderi Exporters office and export trade story" className="h-full w-full object-cover" />
            <div className="hero-overlay absolute inset-0" />
            <div className="route-grid absolute inset-0" />
            <span className="route-line left-[18%] top-[44%] w-60 rotate-6" />
            <span className="route-line left-[52%] top-[64%] w-48 -rotate-12" style={{ animationDelay: "800ms" }} />
          </div>

          <div className="container relative mx-auto">
            <div className="max-w-4xl animate-reveal-up">
              <span className="badge-premium">About Sanderi Exporters</span>
              <h1 className="mt-6 text-5xl text-white md:text-7xl">A practical export partner for worldwide buyers.</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/74">
                Since 2010, Sanderi Exporters has helped international buyers source Indian products with better coordination, clear documentation support and export-ready packaging.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-20">
          <div className="container mx-auto grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <span className="section-kicker">Our story</span>
              <h2 className="mt-3">Built from sourcing discipline and buyer relationships</h2>
              <p className="mt-5 text-base leading-8 text-[#273244]/74">
                Sanderi Exporters began with a simple goal: help global buyers access dependable Indian products without confusion in sourcing, packaging or paperwork. Today, we support export requirements across rice, spices, oil seeds, peanuts, pulses, fresh produce and private label packaging.
              </p>
              <p className="mt-4 text-base leading-8 text-[#273244]/74">
                Our work is hands-on. We understand requirements, coordinate with suppliers, plan packaging, prepare documents and keep buyers updated. That practical approach is what makes us valuable for importers who need a supplier that behaves like a long-term trade partner.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/products" className="btn-primary">
                  View Product Categories <ArrowRight size={17} />
                </Link>
                <Link to="/contact" className="btn-light">
                  Visit Contact Page
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img src={founderImg} alt="Sanderi Exporters founder and team" className="h-65 w-full object-cover" style={{ borderRadius: "0.5rem" }} />
              <img src={foundImg} alt="Sanderi Exporters office and trade operations" className="mt-10 h-64 w-full object-cover" style={{ borderRadius: "0.5rem" }} />
              <img src={foundersImg} alt="Sanderi Exporters founders and team" className="col-span-2 h-56 w-full object-cover" style={{ borderRadius: "0.5rem" }} />
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20">
          <div className="container mx-auto">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="section-kicker">Office and people</span>
                <h2 className="mt-3">Photos area for your office and personal brand</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-[#273244]/70">
                This gallery is ready for your real office photos, team photos and founder photo. For now it uses project business images so the page still looks professional.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-4">
              {[
                { image: aboutHeroImg, title: "Ahmedabad office", text: "Trade coordination and buyer communication" },
                { image: foundercopyImg, title: "Operations network", text: "Supplier and dispatch follow-up" },
                { image: packagingImg, title: "Packaging desk", text: "Bulk, retail and private label planning" },
                { image: foundersImg, title: "Founder vision", text: "Worldwide sourcing with practical execution" },
              ].map((item) => (
                <div key={item.title} className="trade-card bg-white">
                  <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="text-xl">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#273244]/70">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20">
          <div className="container mx-auto">
            <div className="mb-10 text-center">
              <span className="section-kicker justify-center">Why buyers trust us</span>
              <h2 className="mx-auto mt-3 max-w-3xl">Clear values for international import export work</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-4">
              {values.map((value, index) => (
                <div key={value.title} className="trade-card bg-white p-6 animate-reveal-up" style={{ animationDelay: `${index * 80}ms` }}>
                  <div className="flex h-12 w-12 items-center justify-center bg-[#0a8f9c] text-white" style={{ borderRadius: "0.5rem" }}>
                    {value.icon}
                  </div>
                  <h3 className="mt-5 text-2xl">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#273244]/70">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#121826] px-4 py-20 text-white">
          <div className="container mx-auto grid gap-8 md:grid-cols-2">
            {[
              {
                icon: <Target size={24} />,
                title: "Mission",
                text: "To make Indian export sourcing easier for worldwide buyers through product clarity, practical documentation support, dependable packaging and honest communication.",
              },
              {
                icon: <Handshake size={24} />,
                title: "Vision",
                text: "To grow Sanderi Exporters as a trusted global trade partner for agricultural products, private label packaging and long-term buyer relationships.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-white/14 bg-white/8 p-8" style={{ borderRadius: "0.5rem" }}>
                <div className="flex h-12 w-12 items-center justify-center bg-[#f59e0b] text-[#121826]" style={{ borderRadius: "0.5rem" }}>
                  {item.icon}
                </div>
                <h2 className="mt-6 text-3xl text-white">{item.title}</h2>
                <p className="mt-4 text-base leading-8 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 py-20">
          <div className="container mx-auto grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="section-kicker">Worldwide import export partner</span>
              <h2 className="mt-3 max-w-4xl">Ready to discuss product sourcing, MOQ, packaging or export documents?</h2>
            </div>
            <Link to="/contact" className="btn-primary">
              Contact Sanderi Exporters <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
