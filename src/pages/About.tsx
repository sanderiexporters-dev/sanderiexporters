import { Target, Eye, Heart, Award, Globe, Handshake, Shield, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import aboutHeroImg from "@/assets/about-hero.jpg";
import WhatsAppFloating from "@/components/WhatsAppFloating";

const values = [
  {
    icon: <Shield size={28} />,
    title: "Integrity",
    description: "We conduct all business with honesty and transparency, building lasting relationships based on trust.",
  },
  {
    icon: <Award size={28} />,
    title: "Quality",
    description: "We never compromise on quality, ensuring every product meets international standards.",
  },
  {
    icon: <Globe size={28} />,
    title: "Global Reach",
    description: "Our extensive network spans across continents, connecting markets worldwide.",
  },
  {
    icon: <Clock size={28} />,
    title: "Reliability",
    description: "Timely deliveries and consistent service you can always count on.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutHeroImg}
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up">
            About <span className="text-accent">Sanderi Exporters</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Your trusted partner in international trade since 2010
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building Bridges Across 
                <span className="text-accent"> Borders</span>
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded in 2010, Sanderi Exporters began with a simple vision: to connect 
                quality products with global markets. What started as a small trading 
                venture has grown into a comprehensive import-export enterprise serving 
                clients across 50+ countries.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Over the years, we have built a reputation for reliability, quality, and 
                customer-centric service. Our team of experienced professionals works 
                tirelessly to ensure smooth transactions, timely deliveries, and complete 
                satisfaction for all our partners.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we are proud to be a trusted name in international trade, handling 
                diverse product categories from agricultural goods to industrial equipment, 
                always maintaining our commitment to excellence.
              </p>
            </div>
            <div className="relative">
              <div className="bg-secondary rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">15+ Years of Excellence</h4>
                      <p className="text-muted-foreground text-sm">Trusted by businesses worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Global Network</h4>
                      <p className="text-muted-foreground text-sm">Operations in 50+ countries</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Handshake className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">500+ Happy Clients</h4>
                      <p className="text-muted-foreground text-sm">Long-term partnerships built on trust</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 md:p-10">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6">
                <Target size={32} className="text-accent-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                To facilitate seamless international trade by providing reliable, efficient, 
                and quality-focused import-export services. We aim to be the preferred 
                partner for businesses seeking to expand their global footprint, delivering 
                value through excellence in every transaction.
              </p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 md:p-10">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6">
                <Eye size={32} className="text-accent-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                To become a global leader in import-export solutions, recognized for our 
                integrity, innovation, and commitment to customer success. We envision a 
                world where trade barriers are minimized, and businesses of all sizes can 
                access international markets with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do at Sanderi Exporters"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 text-center card-hover shadow-md"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-accent">
                  {value.icon}
                </div>
                <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Choose Sanderi Exporters?"
            subtitle="We go above and beyond to ensure your success in international trade"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Our experienced professionals understand the complexities of international trade and provide expert guidance.",
              },
              {
                title: "Quality Assurance",
                description: "Rigorous quality checks at every step ensure you receive only the best products.",
              },
              {
                title: "Competitive Pricing",
                description: "We leverage our global network to offer the most competitive rates in the market.",
              },
              {
                title: "Timely Delivery",
                description: "Our efficient logistics ensure your shipments arrive on time, every time.",
              },
              {
                title: "Documentation Support",
                description: "Complete assistance with all trade documentation and compliance requirements.",
              },
              {
                title: "Customer Focus",
                description: "Your success is our priority. We provide personalized service tailored to your needs.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart size={16} className="text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloating/>
    </div>
  );
};

export default About;
