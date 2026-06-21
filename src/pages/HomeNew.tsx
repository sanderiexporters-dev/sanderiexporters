import { ArrowRight, Award, Globe, Package, Ship, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductSlider from "@/components/ProductSlider";
import SEOMetadata from "@/components/SEOMetadata";
import SocialSidebar from "@/components/SocialSidebar";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import RequestQuoteForm from "@/components/RequestQuoteForm";

const Home = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <SEOMetadata
        title="Premium Import Export Company in India | Sanderi Exporters"
        description="Ahmedabad-based Sanderi Exporters - global suppliers of rice, spices, peanuts, sesame seeds and fresh produce. Export-ready packing, quality assurance and full export documentation for buyers in UAE, Europe, Africa and worldwide."
        keywords="Ahmedabad exporters, import export India, rice exporter India, spices exporter, agricultural exporter Ahmedabad, Dubai rice exporters"
        url="https://sanderiexporters.com/"
      />

      <Navbar />
      <SocialSidebar />
      <WhatsAppFloating />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="text-white">
                <div className="inline-block bg-blue-500/30 text-blue-100 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Trusted in 48+ Countries
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Premium Agricultural Exports from India
                </h1>
                <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                  Connecting global buyers with export-ready rice, spices, peanuts, sesame seeds, and seasonal produce through reliable sourcing, quality assurance, and complete documentation support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/products" className="btn-primary">
                    Explore Products <ArrowRight size={18} />
                  </Link>
                  <Link to="/contact" className="btn-outline">
                    Request Quote
                  </Link>
                </div>
              </div>
              <div className="text-7xl text-center opacity-80">📦</div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4 bg-white border-b border-neutral-200">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "14+", label: "Years Experience", icon: "📅" },
                { number: "48+", label: "Countries Served", icon: "🌍" },
                { number: "500+", label: "Happy Clients", icon: "😊" },
                { number: "1000+", label: "Shipments", icon: "✈️" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
                  <div className="text-neutral-600 text-sm font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Slider */}
        <ProductSlider />

        {/* About Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-5xl text-center">🏢</div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">About Sanderi Exporters</h2>
                <p className="text-lg text-neutral-600 mb-4 leading-relaxed">
                  Since 2010, we have been connecting international buyers with premium agricultural products from India. Our commitment to quality, transparent communication, and seamless documentation has earned us the trust of 500+ buyers across 48 countries.
                </p>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  We specialize in rice, spices, peanuts, sesame seeds, pulses, and seasonal produce - all sourced from verified farms and prepared for export-ready standards.
                </p>
                <Link to="/about-us" className="btn-primary">
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Request Quote (10s) */}
        <RequestQuoteForm />

        {/* Core Capabilities */}
        <section className="py-16 px-4 bg-neutral-50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-neutral-900 text-center">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "✓",
                  title: "Quality Assurance",
                  description: "Export-grade product selection with rigorous quality checks and certifications",
                },
                {
                  icon: "📋",
                  title: "Documentation Support",
                  description: "Complete export documentation, compliance, and shipping coordination",
                },
                {
                  icon: "🤝",
                  title: "Buyer Support",
                  description: "Responsive communication and long-term partnership focus",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-lg border border-neutral-200 hover:border-blue-500 transition-colors hover:shadow-lg">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-neutral-900">{item.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-neutral-900 text-center">Our Products</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Rice", emoji: "🍚", desc: "Basmati, Non-Basmati, Sona Masoori, IR64" },
                { name: "Fruits", emoji: "🍎", desc: "Apples, Mangoes, Oranges, Pomegranates" },
                { name: "Spices", emoji: "🌶️", desc: "Turmeric, Cumin, Coriander, Chilli" },
                { name: "Peanuts", emoji: "🥜", desc: "Raw, Shelled, Blanched, Roasted" },
                { name: "Sesame", emoji: "🌾", desc: "White, Black, Hulled varieties" },
                { name: "Pulses", emoji: "🫘", desc: "Chickpeas, Moong, Masoor, Toor Dal" },
              ].map((product) => (
                <Link
                  key={product.name}
                  to={`/product/${product.name.toLowerCase()}`}
                  className="bg-neutral-50 p-8 rounded-lg border border-neutral-200 hover:border-blue-500 hover:bg-blue-50 transition-all hover:shadow-lg group"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{product.emoji}</div>
                  <h3 className="text-xl font-bold mb-2 text-neutral-900">{product.name}</h3>
                  <p className="text-sm text-neutral-600">{product.desc}</p>
                  <div className="mt-4 text-blue-600 font-semibold flex items-center gap-2">
                    View Details <ArrowRight size={16} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trade Process */}
        <section className="py-16 px-4 bg-blue-600 text-white">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Export Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Requirement Understanding",
                  desc: "We understand your product, packaging, and market needs",
                },
                {
                  step: "02",
                  title: "Sampling & Approval",
                  desc: "Quality samples provided for your approval",
                },
                {
                  step: "03",
                  title: "Production & Documentation",
                  desc: "Procurement and export documents prepared",
                },
                {
                  step: "04",
                  title: "Dispatch & Delivery",
                  desc: "Coordinated shipment with full tracking",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 p-6 rounded-lg border border-white/20">
                  <div className="text-3xl font-bold mb-3">{item.step}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-blue-100 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-neutral-900 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Trading?</h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
              Get in touch with us for product inquiries, competitive pricing, and bulk orders
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Contact Us <ArrowRight size={18} />
              </Link>
              <Link to="/products" className="btn-outline">
                Browse Products
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
