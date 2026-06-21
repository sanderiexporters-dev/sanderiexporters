import { CheckCircle, Users, Globe, Zap, Award, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOMetadata from "@/components/SEOMetadata";
import SocialSidebar from "@/components/SocialSidebar";
import WhatsAppFloating from "@/components/WhatsAppFloating";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <CheckCircle size={32} className="text-blue-600" />,
      title: "Verified Quality",
      description: "All products are sourced from certified farms and undergo rigorous quality checks before export."
    },
    {
      icon: <Users size={32} className="text-blue-600" />,
      title: "Expert Team",
      description: "14+ years of experience with a dedicated team committed to excellence in every shipment."
    },
    {
      icon: <Globe size={32} className="text-blue-600" />,
      title: "Global Reach",
      description: "Successfully serving 48+ countries with a strong network of reliable logistics partners."
    },
    {
      icon: <Zap size={32} className="text-blue-600" />,
      title: "Fast Processing",
      description: "Quick turnaround times on orders without compromising on quality or documentation accuracy."
    },
    {
      icon: <Award size={32} className="text-blue-600" />,
      title: "Best Practices",
      description: "Following international standards and certifications for safe and compliant exports."
    },
    {
      icon: <Shield size={32} className="text-blue-600" />,
      title: "Secure Transactions",
      description: "Transparent pricing, secure payments, and complete documentation for peace of mind."
    },
  ];

  const operationalStrengths = [
    {
      title: "State-of-the-Art Facilities",
      description: "Modern warehousing and processing facilities equipped with quality control systems",
      emoji: "🏭",
      images: ["🏢", "📦", "⚙️"]
    },
    {
      title: "Expert Sourcing",
      description: "Direct relationships with verified farmers and suppliers across India",
      emoji: "🚜",
      images: ["👨‍🌾", "📊", "✓"]
    },
    {
      title: "Seamless Export",
      description: "Complete documentation, compliance, and logistics coordination",
      emoji: "✈️",
      images: ["📋", "🌍", "📦"]
    },
    {
      title: "Customer Focus",
      description: "Responsive communication and dedicated support throughout the process",
      emoji: "🤝",
      images: ["💬", "👥", "😊"]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <SEOMetadata
        title="Why Choose Sanderi Exporters | Trusted Agricultural Exports"
        description="Discover why 500+ clients worldwide trust Sanderi Exporters for quality, reliability, and professional agricultural export solutions."
        keywords="agricultural export, quality assurance, export partner, reliable supplier"
        url="https://sanderiexporters.com/WhyChooseUs"
      />

      <Navbar />
      <SocialSidebar />
      <WhatsAppFloating />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Why Choose Sanderi Exporters?
            </h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-8">
              We've built our reputation on quality, reliability, and professional service. Here's what sets us apart in the agricultural export industry.
            </p>
          </div>
        </section>

        {/* Core Reasons */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-neutral-900">Our Competitive Advantages</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, i) => (
                <div
                  key={i}
                  className="bg-neutral-50 p-8 rounded-lg border border-neutral-200 hover:border-blue-500 hover:shadow-lg transition-all"
                >
                  <div className="mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{reason.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operational Strengths with Placeholder Images */}
        <section className="py-20 px-4 bg-neutral-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-neutral-900">Our Operational Strengths</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {operationalStrengths.map((strength, i) => (
                <div key={i} className="bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Image Placeholder */}
                  <div className="bg-gradient-to-br from-blue-100 to-blue-50 aspect-video flex items-center justify-center border-b border-neutral-200">
                    <div className="flex items-center justify-center gap-4">
                      {strength.images.map((img, j) => (
                        <div key={j} className="text-5xl">{img}</div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <div className="text-4xl mb-4">{strength.emoji}</div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">{strength.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{strength.description}</p>
                    <p className="text-xs text-neutral-400 mt-4">*Placeholder image - Replace with actual office/operations photos</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Transparency */}
        <section className="py-20 px-4 bg-blue-600 text-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Process is Transparent</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { number: "1", step: "Inquiry", desc: "We understand your complete requirements" },
                { number: "2", step: "Sampling", desc: "Quality samples approved by you" },
                { number: "3", step: "Production", desc: "Careful sourcing and preparation" },
                { number: "4", step: "Export", desc: "Full documentation and tracking" },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 p-6 rounded-lg border border-white/20 text-center">
                  <div className="text-4xl font-bold mb-3 text-blue-300">{item.number}</div>
                  <h3 className="text-lg font-bold mb-2">{item.step}</h3>
                  <p className="text-blue-100 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900">Client Success Metrics</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { metric: "500+", label: "Happy Clients", icon: "😊" },
                { metric: "48+", label: "Countries Served", icon: "🌍" },
                { metric: "1000+", label: "Successful Shipments", icon: "✈️" },
                { metric: "99%", label: "On-Time Delivery", icon: "⏱️" },
              ].map((stat, i) => (
                <div key={i} className="text-center p-6">
                  <div className="text-5xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.metric}</div>
                  <p className="text-neutral-600 font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 px-4 bg-neutral-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900">Certifications & Compliance</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "📜", title: "Export Certified", desc: "Fully registered and licensed for international agricultural exports" },
                { icon: "✓", title: "Quality Assured", desc: "ISO compliant processes and international quality standards" },
                { icon: "🛡️", title: "Food Safe", desc: "Meets FDA, EU, and international food safety regulations" },
              ].map((cert, i) => (
                <div key={i} className="bg-white p-8 rounded-lg border border-neutral-200 text-center hover:shadow-lg transition-shadow">
                  <div className="text-5xl mb-4">{cert.icon}</div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{cert.title}</h3>
                  <p className="text-neutral-600">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-neutral-900 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Experience Our Difference</h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
              Join 500+ satisfied clients who trust Sanderi Exporters for quality agricultural products and professional service
            </p>
            <Link to="/contact" className="btn-primary">
              Get Started Today
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhyChooseUs;
