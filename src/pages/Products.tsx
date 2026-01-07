import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import WhatsAppFloating from "@/components/WhatsAppFloating";

// Assets
import riceImg from "@/assets/rice.jpg";
import peanutsImg from "@/assets/peanuts.jpg";
import sesameImg from "@/assets/sesame.jpg";
import spicesImg from "@/assets/spices.jpg";
import pulsesImg from "@/assets/pulses.jpg";
import freshProduceImg from "@/assets/fresh-produce.jpg";

const products = [
  {
    title: "Rice Range",
    description: "Basmati, Non-Basmati, Parboiled, and Broken Rice. Sourced for premium quality and aroma.",
    image: riceImg,
    category: "Export",
    details: "Packaging: 5kg, 10kg, 25kg, 50kg (PP/Jute/Private Label)",
  },
  {
    title: "Peanuts / Groundnuts",
    description: "Bold and Java Peanuts. Available in Raw, Shelled, or Inshell forms for consumption or oil extraction.",
    image: peanutsImg,
    category: "Export",
    details: "Forms: Roasted, Blanched, Raw, Shelled, Inshell",
  },
  {
    title: "Sesame & Oil Seeds",
    description: "Premium White, Black, and Hulled Sesame Seeds. Also supplying high-purity Sunflower and Mustard seeds.",
    image: sesameImg,
    category: "Export",
    details: "Varieties: White, Black, Hulled, Sunflower, Mustard Seeds",
  },
  {
    title: "Indian Spices",
    description: "Turmeric Fingers/Powder, Cumin, Coriander, Red Chilli, and Fennel Seeds. Machine or Sortex cleaned.",
    image: spicesImg,
    category: "Export",
    details: "Quality: Machine-cleaned / Sortex-cleaned",
  },
  {
    title: "Pulses & Lentils",
    description: "Nutritious Chickpeas, Green Moong, Masoor Dal, Toor Dal, and Urad Dal processed for international safety.",
    image: pulsesImg,
    category: "Export",
    details: "Types: Chickpeas, Green Moong, Masoor, Toor, Urad Dal",
  },
  {
    title: "Fruits & Vegetables",
    description: "Onions, Garlic, Mangoes, Pomegranates, Coconut, Drumstick, Ginger, and seasonal specialty items.",
    image: freshProduceImg,
    category: "Export",
    details: "Includes: Suran, Ash Gourd, Pumpkin, Raw Turmeric, Banana",
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-accent">Product Range</span>
          </h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Explore our comprehensive range of agricultural exports, pulses, and fresh seasonal produce.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 bg-secondary border-b">
        <div className="container mx-auto px-4 flex justify-center">
          <button className="px-8 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium shadow-lg">
            All Products
          </button>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What We Trade"
            subtitle="Premium quality products sourced from verified Indian farms."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard 
                key={index} 
                {...product} 
                // We pass details as part of the description or handle it in the component
              />
            ))}
          </div>
          
          <div className="mt-16 p-8 bg-secondary/30 rounded-2xl border border-dashed border-primary/20">
            <h4 className="font-bold text-lg mb-4 text-primary">Seasonal Fresh Item Availability:</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
              <p>• Onions & Potatoes</p>
              <p>• Mangoes (Seasonal)</p>
              <p>• Pomegranates</p>
              <p>• Green Chilly</p>
              <p>• Suran (Elephant Yam)</p>
              <p>• Drumstick (Moringa)</p>
              <p>• Ash Gourd / Pumpkin</p>
              <p>• Raw Turmeric</p>
            </div>
            <p className="mt-6 text-xs italic opacity-70">Note: Export availability depends on government regulations and harvest seasons.</p>
          </div>
        </div>
      </section>

      {/* Trade Process Diagram */}
      
      
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Trade Process"
            subtitle="A streamlined approach for smooth global transactions"
          />
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Inquiry", desc: "Share your requirements" },
              { step: "02", title: "Quotation", desc: "Competitive pricing" },
              { step: "03", title: "Agreement", desc: "Documentation & Terms" },
              { step: "04", title: "Delivery", desc: "Timely global shipment" },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary text-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="font-bold text-xl">{item.step}</span>
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
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

export default Products;