import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { Star, Quote, ChevronLeft, ChevronRight, Award, ShieldCheck, ClipboardCheck, Globe, Zap, Users, Shield, TrendingUp, BarChart3, Clock } from "lucide-react";
import WhatsAppFloating from "@/components/WhatsAppFloating";

const whyChooseUs = [
  {
    title: "Unmatched Quality Control",
    description: "Every product undergoes a rigorous 3-stage quality check to ensure it meets international export standards before shipment.",
    icon: <ShieldCheck className="text-accent" size={32} />,
  },
  {
    title: "Global Network",
    description: "With a distribution presence in over 50 countries, we navigate complex international trade routes with ease and efficiency.",
    icon: <Globe className="text-accent" size={32} />,
  },
  {
    title: "Competitive Pricing",
    description: "Our direct sourcing from farmers and manufacturers allows us to provide premium products at highly competitive market rates.",
    icon: <TrendingUp className="text-accent" size={32} />,
  },
  {
    title: "Customer-Centric Approach",
    description: "We provide dedicated account managers for every client, ensuring personalized service and 24/7 communication.",
    icon: <Users className="text-accent" size={32} />,
  },
  {
    title: "Fast & Reliable Logistics",
    description: "Our tie-ups with global shipping leaders ensure that your consignments reach you on time, every single time.",
    icon: <Zap className="text-accent" size={32} />,
  },
  {
    title: "Transparent Operations",
    description: "From real-time tracking to clear documentation, we believe in keeping our partners informed at every step of the trade.",
    icon: <BarChart3 className="text-accent" size={32} />,
  },
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
  { title: "ISO 9001:2015", subtitle: "Quality Management System", valid: "Valid 2026", icon: <Award className="text-accent" size={40} /> },
  { title: "FSSAI Certified", subtitle: "Food Safety Standards", valid: "Valid 2026", icon: <ShieldCheck className="text-accent" size={40} /> },
  { title: "APEDA Registered", subtitle: "Agricultural Export Authority", valid: "Valid 2026", icon: <Globe className="text-accent" size={40} /> },
  { title: "GMP Certified", subtitle: "Good Manufacturing Practice", valid: "Valid 2026", icon: <ClipboardCheck className="text-accent" size={40} /> },
];

const WhyChooseUs = () => {
  const [activeReview, setActiveReview] = useState(0);

  const nextReview = () => setActiveReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  const prevReview = () => setActiveReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextReview, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up">
            Why Partner with <span className="text-accent">Sanderi?</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Experience excellence in global trade with a partner committed to quality, trust, and seamless logistics.
          </p>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 bg-secondary/50 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 bg-background rounded-xl shadow-sm border border-border/50">
                <div className="mb-4 p-3 bg-accent/5 rounded-full">{cert.icon}</div>
                <h4 className="font-bold text-foreground text-sm md:text-base">{cert.title}</h4>
                <p className="text-muted-foreground text-xs">{cert.subtitle}</p>
                <span className="mt-2 text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded">
                  {cert.valid}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Sets Us Apart"
            subtitle="We go beyond just exports. We build long-term international partnerships through reliable performance."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="p-8 bg-card rounded-2xl shadow-md border border-border/50 hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="font-heading font-bold text-xl text-foreground mb-3">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Slider */}
      <section className="py-20 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeading title="Client Reviews" subtitle="Trusted by businesses across the globe for our consistency and quality" />
          
          <div className="relative max-w-4xl mx-auto mt-12">
            <div className="relative bg-card p-8 md:p-12 rounded-3xl shadow-xl border border-border/40">
              <Quote className="absolute top-6 left-6 text-accent/20" size={60} />
              
              <div className="relative z-10 text-center">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(reviews[activeReview].stars)].map((_, i) => (
                    <Star key={i} size={20} className="fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl font-medium italic text-foreground leading-relaxed mb-8">
                  "{reviews[activeReview].text}"
                </p>
                
                <div>
                  <h4 className="font-bold text-lg text-primary">{reviews[activeReview].name}</h4>
                  <p className="text-muted-foreground">{reviews[activeReview].country}</p>
                </div>
              </div>

              <button onClick={prevReview} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-primary">
                <ChevronLeft size={32} />
              </button>
              <button onClick={nextReview} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-primary">
                <ChevronRight size={32} />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveReview(i)}
                  className={`h-2 rounded-full transition-all ${activeReview === i ? "w-8 bg-accent" : "w-2 bg-accent/30"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide our every transaction and international shipment"
            light
          />
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
            ].map((value, index) => (
              <div key={index} className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
                <ShieldCheck className="text-accent flex-shrink-0" size={20} />
                <span className="text-primary-foreground font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Workflow Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Seamless Export Workflow"
            subtitle="Our systematic approach ensures your trade orders are executed flawlessly"
          />
          <div className="max-w-4xl mx-auto">
            {[
              { step: "01", title: "Inquiry & Quotation", desc: "Detailed understanding of your requirements followed by transparent, competitive market pricing." },
              { step: "02", title: "Sourcing & Quality Check", desc: "Procurement from premium sources and rigorous testing against international safety standards." },
              { step: "03", title: "Compliance & Documentation", desc: "Expert handling of all legal paperwork including IEC, GST, and custom export documents." },
              { step: "04", title: "Secure Shipment", desc: "Container-optimized loading and shipping via trusted global logistics partners." },
              { step: "05", title: "Destination Delivery", desc: "Final clearance support and tracking until the consignment reaches your warehouse." },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-accent font-bold">{item.step}</span>
                  </div>
                  {index < 4 && <div className="w-0.5 h-full bg-border mt-2" />}
                </div>
                <div className="flex-1 pb-8">
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloating />
    </div>
  );
};

export default WhyChooseUs;