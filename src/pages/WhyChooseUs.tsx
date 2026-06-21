import { ArrowRight, BadgeCheck, Clock, FileCheck, Globe2, Handshake, PackageCheck, ShieldCheck, Ship, Sparkles, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOMetadata from "@/components/SEOMetadata";
import SocialSidebar from "@/components/SocialSidebar";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import heroImg from "@/assets/agriculture.jpg";
import packagingImg from "@/assets/packaging desk.jpg";
import rawMaterialsImg from "@/assets/supplier coordination.png";
import machineryImg from "@/assets/operation followup.jpg";
import aboutHeroImg from "@/assets/buyer support.png";
import { siteUrl } from "@/data/siteMetadata";
//
const reasons = [
  {
    icon: <ShieldCheck size={24} />,
    title: "Quality-first sourcing",
    text: "Product selection is matched with buyer specifications, export suitability and repeat supply requirements before shipment planning.",
  },
  {
    icon: <FileCheck size={24} />,
    title: "Clear documentation",
    text: "Commercial invoice, packing list details and export coordination are handled with practical communication at each stage.",
  },
  {
    icon: <Globe2 size={24} />,
    title: "Worldwide buyer mindset",
    text: "We support importers, distributors, wholesalers, processors and private label buyers across global trade channels.",
  },
  {
    icon: <Clock size={24} />,
    title: "Fast response rhythm",
    text: "Structured replies, MOQ guidance and packaging clarity help buyers move quickly from inquiry to quote.",
  },
  {
    icon: <PackageCheck size={24} />,
    title: "Packaging flexibility",
    text: "Bulk bags, cartons, retail packs and buyer-brand packaging are planned around the product and destination market.",
  },
  {
    icon: <Handshake size={24} />,
    title: "Long-term trade focus",
    text: "We work like a practical sourcing desk, not a one-time seller, so repeat buyers get cleaner coordination.",
  },
];

const operations = [
  {
    image: rawMaterialsImg,
    title: "Supplier coordination",
    text: "Sourcing across agricultural categories with clear quantity, grade and packing expectations.",
  },
  {
    image: packagingImg,
    title: "Packaging desk",
    text: "Bulk, retail and private label packing options for importers and wholesale buyers.",
  },
  {
    image: machineryImg,
    title: "Operational follow-up",
    text: "Dispatch planning, shipment readiness and export communication across every order stage.",
  },
  {
    image: aboutHeroImg,
    title: "Buyer support",
    text: "Responsive communication for pricing, product details, samples and formal quote requests.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-[#f5f8fb]">
      <SEOMetadata
        title="Why Choose Sanderi Exporters"
        description="Ahmedabad-based Sanderi Exporters - a trusted import-export partner for agricultural buyers. We provide export-ready rice, spices, peanuts, sesame seeds and fresh produce with packaging, quality checks and documentation for UAE, Europe, Africa and global importers."
        keywords="Ahmedabad export partner, import export Ahmedabad, agricultural exporters India, rice exporters Ahmedabad, spices exporters Ahmedabad, Dubai importers, export documentation India"
        url={`${siteUrl}/why-choose-us`}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${siteUrl}/why-choose-us#webpage`,
          name: "Why Choose Sanderi Exporters",
          description:
            "Reasons global importers choose Sanderi Exporters for agricultural products from India.",
          url: `${siteUrl}/why-choose-us`,
          isPartOf: { "@id": `${siteUrl}/#website` },
          publisher: { "@id": `${siteUrl}/#organization` },
        }}
      />

      <Navbar />
      <SocialSidebar />
      <WhatsAppFloating />

      <main>
        <section className="relative min-h-[78vh] overflow-hidden px-4 pb-16 pt-32 text-white md:pt-40">
          <div className="absolute inset-0">
            <img src={heroImg} alt="Sanderi Exporters trusted import export operations" className="h-full w-full object-cover" />
            <div className="hero-overlay absolute inset-0" />
            <div className="route-grid absolute inset-0" />
            <span className="route-line left-[13%] top-[36%] w-56 rotate-6" />
            <span className="route-line left-[48%] top-[57%] w-52 -rotate-12" style={{ animationDelay: "800ms" }} />
          </div>

          <div className="container relative mx-auto">
            <div className="max-w-5xl animate-reveal-up">
              <span className="badge-premium">Why choose Sanderi Exporters</span>
              <h1 className="mt-6 max-w-5xl text-5xl text-white md:text-7xl">
                A sharper trade partner for serious worldwide buyers.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
                We combine product sourcing, packaging clarity, documentation coordination and responsive communication so importers can buy from India with more confidence.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/products" className="btn-accent">
                  Explore Product Desk <ArrowRight size={17} />
                </Link>
                <Link to="/contact" className="btn-outline">
                  Talk to Export Team <Ship size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20">
          <div className="container mx-auto">
            <div className="mb-10 grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-end">
              <div>
                <span className="section-kicker">Competitive advantages</span>
                <h2 className="mt-3">What makes the buying process smoother</h2>
              </div>
              <p className="text-sm leading-7 text-[#273244]/72">
                Import export work needs speed, detail and trust. These are the practical reasons buyers choose us for agricultural products and packaging support.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {reasons.map((reason, index) => (
                <div key={reason.title} className="trade-card bg-white p-6 animate-reveal-up" style={{ animationDelay: `${index * 70}ms` }}>
                  <div className="flex h-12 w-12 items-center justify-center bg-[#0a8f9c] text-white" style={{ borderRadius: "0.5rem" }}>
                    {reason.icon}
                  </div>
                  <h3 className="mt-5 text-2xl">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#273244]/70">{reason.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20">
          <div className="container mx-auto">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="section-kicker">Operational strengths</span>
                <h2 className="mt-3">From product desk to dispatch desk</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-[#273244]/70">
                The website now uses real business visuals from the project assets, giving every page a stronger import-export identity.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {operations.map((operation, index) => (
                <div key={operation.title} className="trade-card bg-white animate-reveal-up" style={{ animationDelay: `${index * 80}ms` }}>
                  <img src={operation.image} alt={operation.title} className="h-56 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="text-xl">{operation.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#273244]/70">{operation.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="section-kicker">Transparent workflow</span>
              <h2 className="mt-3">Four steps that keep export buying clean</h2>
              <p className="mt-5 text-base leading-8 text-[#273244]/72">
                Buyers get clarity on product names, quantity, packaging and export planning before moving forward. That keeps the process simple and professional.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: <Sparkles size={22} />, title: "Requirement", text: "Product, grade, quantity, destination and packaging details." },
                { icon: <BadgeCheck size={22} />, title: "Quotation", text: "MOQ, availability, pricing direction and packing options." },
                { icon: <PackageCheck size={22} />, title: "Preparation", text: "Sourcing, packing coordination and document planning." },
                { icon: <Truck size={22} />, title: "Shipment", text: "Dispatch communication and buyer-side coordination." },
              ].map((step, index) => (
                <div key={step.title} className="border border-[#121826]/10 bg-white p-5 animate-reveal-up" style={{ borderRadius: "0.5rem", animationDelay: `${index * 70}ms` }}>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center bg-[#f59e0b] text-[#121826]" style={{ borderRadius: "0.5rem" }}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#273244]/70">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#121826] px-4 py-16 text-white">
          <div className="container mx-auto grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="section-kicker text-white/78">Ready for a dependable supplier?</span>
              <h2 className="mt-3 max-w-4xl text-white">Share your product requirement and get practical export guidance.</h2>
            </div>
            <Link to="/contact" className="btn-accent">
              Request a Quote <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhyChooseUs;
