import { ArrowRight, Globe, Ship, Package, TrendingUp, Award, Users, Building } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import WhatsAppFloating from "@/components/WhatsAppFloating";

// Updated Hero Background & Product Images
import heroBg from "@/assets/hero-bg.jpg";
import riceImg from "@/assets/rice.jpg";
import peanutsImg from "@/assets/peanuts.jpg";
import sesameImg from "@/assets/sesame.jpg";
import spicesImg from "@/assets/spices.jpg";

const products = [
  {
    title: "Rice Range",
    description: "Basmati, Non-Basmati, Parboiled, and Broken Rice. Sourced for premium quality and aroma.",
    image: riceImg,
    category: "Export",
    details: "Packaging: 5kg to 50kg (PP/Jute)",
  },
  {
    title: "Peanuts & Groundnuts",
    description: "Bold and Java Peanuts. Available in Raw, Shelled, or Inshell forms for consumption or oil.",
    image: peanutsImg,
    category: "Export",
    details: "Raw, Shelled, or Inshell forms",
  },
  {
    title: "Sesame & Oil Seeds",
    description: "Premium White, Black, and Hulled Sesame Seeds along with Sunflower and Mustard seeds.",
    image: sesameImg,
    category: "Export",
    details: "High purity Sortex-cleaned",
  },
  {
    title: "Indian Spices",
    description: "Turmeric Fingers, Cumin, Coriander, Red Chilli, and Fennel Seeds. Guaranteed purity.",
    image: spicesImg,
    category: "Export",
    details: "Machine-cleaned / Sortex-cleaned",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Global Trade"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>
        
        <div className="relative container mx-auto px-4 py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground/90 text-sm mb-8 animate-fade-in">
            <Globe size={16} className="text-accent" />
            Serving 50+ Countries Worldwide
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 animate-slide-up">
            Trusted Import & Export
            <br />
            <span className="text-accent">Solutions</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Connecting Global Markets with Quality & Trust. Your reliable partner for seamless international trade operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/products">
              <Button variant="hero" size="xl">
                Explore Products <ArrowRight size={20} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero-outline" size="xl">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary-foreground/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard number="15+" label="Years Experience" icon={<Award size={24} />} />
            <StatCard number="50+" label="Countries Served" icon={<Globe size={24} />} />
            <StatCard number="500+" label="Happy Clients" icon={<Users size={24} />} />
            <StatCard number="1000+" label="Shipments Delivered" icon={<Ship size={24} />} />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                About Sanderi Exporters
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Gateway to 
                <span className="text-accent"> Global Trade</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Since 2010, Sanderi Exporters has been at the forefront of international trade, 
                connecting businesses across continents with quality products and reliable logistics solutions.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Comprehensive import and export services",
                  "Quality assured products from verified sources",
                  "End-to-end logistics and documentation support",
                  "Competitive pricing and timely delivery",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <Package size={14} className="text-accent" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about-us">
                <Button variant="accent">
                  Learn More About Us <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-primary rounded-xl p-6 text-center">
                    <Building size={32} className="text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary-foreground">15+</div>
                    <div className="text-primary-foreground/70 text-sm">Years in Business</div>
                  </div>
                  <div className="bg-accent rounded-xl p-6 text-center">
                    <TrendingUp size={32} className="text-accent-foreground mx-auto mb-2" />
                    <div className="text-2xl font-bold text-accent-foreground">98%</div>
                    <div className="text-accent-foreground/80 text-sm">Client Satisfaction</div>
                  </div>
                </div>
                <div className="pt-8 space-y-4">
                  <div className="bg-secondary rounded-xl p-6 text-center">
                    <Globe size={32} className="text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">50+</div>
                    <div className="text-muted-foreground text-sm">Countries</div>
                  </div>
                  <div className="bg-primary rounded-xl p-6 text-center">
                    <Ship size={32} className="text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary-foreground">1000+</div>
                    <div className="text-primary-foreground/70 text-sm">Shipments</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section (Latest Update) */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Premium Range"
            subtitle="Explore our top-selling agricultural exports sourced from verified farms."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="animate-slide-up h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="accent" size="lg">
                View Full Product Range <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Trading Globally?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Let us help you expand your business horizons. Get in touch with our expert team today 
            and discover the possibilities of international trade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/feedback">
              <Button variant="hero" size="xl">
                Send Inquiry <ArrowRight size={20} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero-outline" size="xl">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloating/>
    </div>
  );
};

export default Home;