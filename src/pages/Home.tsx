import { ArrowRight, BadgeCheck, Boxes, FileCheck, Globe2, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SEOMetadata from "@/components/SEOMetadata";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import heroBg from "@/assets/hero-bg-2.jpg";
import { productCategories } from "@/data/productCatalog";
import { company, siteUrl } from "@/data/siteMetadata";

// Lazy-load components that are below the fold
const ProductSlider = lazy(() => import("@/components/ProductSlider"));
const SocialSidebar = lazy(() => import("@/components/SocialSidebar"));

// Lazy-import heavy founder images so they don't block initial load
import founderImg from "@/assets/founder.jpeg";
import foundImg from "@/assets/found.jpeg";
import foundersImg from "@/assets/founders.jpeg";

const tradeStats = [
  { number: "16+", label: "Years in export trade" },
  { number: "29+", label: "Countries served" },
  { number: "1120+", label: "Shipments coordinated" },
  { number: "245+", label: "Buyer relationships" },
];

const serviceBlocks = [
  {
    icon: <BadgeCheck size={22} />,
    title: "Verified product sourcing",
    text: "Rice, spices, oil seeds, peanuts, pulses and fresh produce are sourced with buyer specifications, export suitability and repeat supply in mind.",
  },
  {
    icon: <Boxes size={22} />,
    title: "Bulk and private label packaging",
    text: "We support PP bags, jute bags, cartons, retail packs and buyer-brand packaging for importers, distributors and wholesale channels.",
  },
  {
    icon: <FileCheck size={22} />,
    title: "Export documentation support",
    text: "Commercial documents, packing details, shipment coordination and destination-market requirements are handled with clear communication.",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f5f8fb]">
      <SEOMetadata
        title="Agricultural Products Exporter from India"
        description="Sanderi Exporters supplies rice, spices, peanuts, sesame seeds, pulses and fresh produce from India to worldwide importers with packaging and export documentation support."
        keywords="agricultural products exporter India, import export company Ahmedabad, rice exporter India, spices exporter India, peanut exporter India, sesame seeds exporter India, pulses exporter India, fresh produce exporter India"
        url={`${siteUrl}/`}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${siteUrl}/#webpage`,
          name: "Sanderi Exporters",
          url: `${siteUrl}/`,
          description: "Agricultural products exporter from India supplying rice, spices, peanuts, sesame seeds, pulses and fresh produce to worldwide buyers.",
          isPartOf: { "@id": `${siteUrl}/#website` },
          publisher: { "@id": `${siteUrl}/#organization` },
          about: { "@id": `${siteUrl}/#organization` },
          mainEntity: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: company.name },
        }}
      />

      <Navbar />
      <Suspense fallback={null}>
        <SocialSidebar />
      </Suspense>
      <WhatsAppFloating />

      <main>
        {/* ── HERO ── LCP image: eager + high priority */}
        <section className="relative min-h-[92vh] overflow-hidden px-4 pb-16 pt-32 text-white md:pt-40">
          <div className="absolute inset-0">
            <img
              src={heroBg}
              alt="Sanderi Exporters worldwide import export trade"
              className="h-full w-full object-cover"
              fetchpriority="high"
              decoding="sync"
              width={1920}
              height={1080}
            />
            <div className="hero-overlay absolute inset-0" />
            <div className="route-grid absolute inset-0" />
            <span className="route-line left-[9%] top-[31%] w-64 rotate-6" />
            <span className="route-line left-[42%] top-[48%] w-56 -rotate-12" style={{ animationDelay: "650ms" }} />
            <span className="route-line left-[22%] top-[68%] w-44 rotate-3" style={{ animationDelay: "1300ms" }} />
          </div>

          <div className="container relative mx-auto">
            <div className="max-w-5xl animate-reveal-up">
              <span className="badge-premium">Sanderi Exporters</span>
              <h1 className="mt-6 max-w-5xl text-5xl text-white md:text-7xl">
                Import export company for worldwide agricultural trade.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
                We connect global buyers with export-ready rice, spices, peanuts, sesame seeds, pulses, fresh produce and private label packaging from India through dependable sourcing, documentation support and shipment coordination.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/products" className="btn-accent">
                  Explore Product Desk <ArrowRight size={17} />
                </Link>
                <Link to="/contact" className="btn-outline">
                  Request Worldwide Quote <Globe2 size={17} />
                </Link>
              </div>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-4">
              {tradeStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="border border-white/14 bg-white/10 p-5 backdrop-blur-md animate-reveal-up"
                  style={{ borderRadius: "0.5rem", animationDelay: `${index * 90}ms` }}
                >
                  <div className="font-display text-3xl font-bold text-white">{stat.number}</div>
                  <p className="mt-2 text-sm font-semibold text-white/68">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCT SLIDER ── below fold, lazy loaded */}
        <Suspense fallback={<div className="h-64 bg-[#121826]" />}>
          <ProductSlider />
        </Suspense>

        {/* ── CATEGORY GRID ── */}
        <section className="px-4 py-20">
          <div className="container mx-auto">
            <div className="mb-10 grid gap-5 md:grid-cols-[0.95fr_1.05fr] md:items-end">
              <div>
                <span className="section-kicker">Worldwide product categories</span>
                <h2 className="mt-3">Click a category to go deeper into product names</h2>
              </div>
              <p className="text-sm leading-7 text-[#273244]/72">
                Rice opens Basmati, Non-Basmati, Sona Masoori, IR64, Parboiled and Broken Rice. Spices opens Turmeric, Cumin, Coriander, Red Chilli and more. Every exact product card sends a direct WhatsApp enquiry.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {productCategories.slice(0, 4).map((category, index) => (
                <Link
                  key={category.slug}
                  to={`/products/${category.slug}`}
                  className="category-card w-full animate-reveal-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <img
                    src={category.image}
                    alt={`${category.name} export category`}
                    loading="lazy"
                    decoding="async"
                    width={272}
                    height={192}
                  />
                  <div className="category-card-content">
                    <h3 className="text-2xl text-white">{category.name}</h3>
                    <p className="mt-2 text-sm text-white/72">{category.kicker}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link to="/products" className="btn-primary">
                View All Product Categories <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── FOUNDER SECTION ── heavy images, all lazy */}
        <section className="bg-white px-4 py-20">
          <div className="container mx-auto">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={founderImg}
                  alt="Export logistics and industrial trade support"
                  className="h-65 w-full object-cover"
                  style={{ borderRadius: "0.5rem" }}
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={260}
                />
                <img
                  src={foundImg}
                  alt="Private label export packaging options"
                  className="mt-10 h-64 w-full object-cover"
                  style={{ borderRadius: "0.5rem" }}
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={256}
                />
                <img
                  src={foundersImg}
                  alt="Sourcing and export raw material coordination"
                  className="col-span-2 h-56 w-full object-cover"
                  style={{ borderRadius: "0.5rem" }}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={224}
                />
              </div>

              <div>
                <span className="section-kicker">Built for serious importers</span>
                <h2 className="mt-3">A trade partner for sourcing, packaging and export execution</h2>
                <p className="mt-5 text-base leading-8 text-[#273244]/72">
                  Sanderi Exporters helps international buyers source Indian agricultural products with clear communication, quality-focused selection and practical export support. Our work is simple: understand your product requirement, match the right supply, prepare export packaging and keep the buying process moving.
                </p>
                <div className="mt-8 grid gap-4">
                  {serviceBlocks.map((item) => (
                    <div key={item.title} className="flex items-start gap-4 border border-[#121826]/10 bg-[#f5f8fb] p-5" style={{ borderRadius: "0.5rem" }}>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#0a8f9c] text-white" style={{ borderRadius: "0.5rem" }}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-[#273244]/70">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPORT PROCESS ── */}
        <section className="px-4 py-20">
          <div className="container mx-auto">
            <div className="mb-10 text-center">
              <span className="section-kicker justify-center">Export process</span>
              <h2 className="mx-auto mt-3 max-w-3xl">From inquiry to shipment with clean steps</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-4">
              {[
                { step: "01", title: "Requirement", text: "Share product name, quantity, destination, packaging and quality expectations." },
                { step: "02", title: "Quote", text: "Receive pricing, MOQ guidance, packing options and availability details." },
                { step: "03", title: "Preparation", text: "Product sourcing, packing coordination and export document planning begins." },
                { step: "04", title: "Shipment", text: "Dispatch support, shipment communication and buyer-side coordination." },
              ].map((item, index) => (
                <div key={item.step} className="trade-card bg-white p-6 animate-reveal-up" style={{ animationDelay: `${index * 80}ms` }}>
                  <div className="font-display text-4xl font-bold text-[#0a8f9c]">{item.step}</div>
                  <h3 className="mt-5 text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#273244]/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHATSAPP CTA ── */}
        <section className="bg-[#121826] px-4 py-20 text-white">
          <div className="container mx-auto grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="section-kicker text-white/76">Talk to export team</span>
              <h2 className="mt-3 max-w-4xl text-white">Send product name and quantity. We will guide MOQ, packaging and export details.</h2>
            </div>
            <a
              href="https://wa.me/917990343575?text=Hello%20Sanderi%20Exporters%2C%20I%20want%20to%20discuss%20import%20export%20products%20and%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
            >
              WhatsApp Inquiry <MessageCircle size={17} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;


// import { ArrowRight, BadgeCheck, Boxes, FileCheck, Globe2, MessageCircle, Ship, TrendingUp } from "lucide-react";
// import { Link } from "react-router-dom";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// import ProductSlider from "@/components/ProductSlider";
// import SEOMetadata from "@/components/SEOMetadata";
// import SocialSidebar from "@/components/SocialSidebar";
// import WhatsAppFloating from "@/components/WhatsAppFloating";
// import heroBg from "@/assets/hero-bg-2.jpg";
// import founderImg from "@/assets/founder.jpeg";
// import foundImg from "@/assets/found.jpeg";
// import foundersImg from "@/assets/founders.jpeg";
// import { productCategories } from "@/data/productCatalog";
// import { company, siteUrl } from "@/data/siteMetadata";

// const tradeStats = [
//   { number: "16+", label: "Years in export trade" },
//   { number: "29+", label: "Countries served" },
//   { number: "1120+", label: "Shipments coordinated" },
//   { number: "245+", label: "Buyer relationships" },
// ];

// const serviceBlocks = [
//   {
//     icon: <BadgeCheck size={22} />,
//     title: "Verified product sourcing",
//     text: "Rice, spices, oil seeds, peanuts, pulses and fresh produce are sourced with buyer specifications, export suitability and repeat supply in mind.",
//   },
//   {
//     icon: <Boxes size={22} />,
//     title: "Bulk and private label packaging",
//     text: "We support PP bags, jute bags, cartons, retail packs and buyer-brand packaging for importers, distributors and wholesale channels.",
//   },
//   {
//     icon: <FileCheck size={22} />,
//     title: "Export documentation support",
//     text: "Commercial documents, packing details, shipment coordination and destination-market requirements are handled with clear communication.",
//   },
// ];

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-[#f5f8fb]">
//       <SEOMetadata
//         title="Agricultural Products Exporter from India"
//         description="Sanderi Exporters supplies rice, spices, peanuts, sesame seeds, pulses and fresh produce from India to worldwide importers with packaging and export documentation support."
//         keywords="agricultural products exporter India, import export company Ahmedabad, rice exporter India, spices exporter India, peanut exporter India, sesame seeds exporter India, pulses exporter India, fresh produce exporter India"
//         url={`${siteUrl}/`}
//         schema={{
//           "@context": "https://schema.org",
//           "@type": "WebPage",
//           "@id": `${siteUrl}/#webpage`,
//           name: "Sanderi Exporters",
//           url: `${siteUrl}/`,
//           description:
//             "Agricultural products exporter from India supplying rice, spices, peanuts, sesame seeds, pulses and fresh produce to worldwide buyers.",
//           isPartOf: { "@id": `${siteUrl}/#website` },
//           publisher: { "@id": `${siteUrl}/#organization` },
//           about: { "@id": `${siteUrl}/#organization` },
//           mainEntity: {
//             "@type": "Organization",
//             "@id": `${siteUrl}/#organization`,
//             name: company.name,
//           },
//         }}
//       />

//       <Navbar />
//       <SocialSidebar />
//       <WhatsAppFloating />

//       <main>
//         <section className="relative min-h-[92vh] overflow-hidden px-4 pb-16 pt-32 text-white md:pt-40">
//           <div className="absolute inset-0">
//             <img src={heroBg} alt="Sanderi Exporters worldwide import export trade" className="h-full w-full object-cover" />
//             <div className="hero-overlay absolute inset-0" />
//             <div className="route-grid absolute inset-0" />
//             <span className="route-line left-[9%] top-[31%] w-64 rotate-6" />
//             <span className="route-line left-[42%] top-[48%] w-56 -rotate-12" style={{ animationDelay: "650ms" }} />
//             <span className="route-line left-[22%] top-[68%] w-44 rotate-3" style={{ animationDelay: "1300ms" }} />
//           </div>

//           <div className="container relative mx-auto">
//             <div className="max-w-5xl animate-reveal-up">
//               <span className="badge-premium">
//                 Sanderi Exporters
//               </span>
//               <h1 className="mt-6 max-w-5xl text-5xl text-white md:text-7xl">
//                 Import export company for worldwide agricultural trade.
//               </h1>
//               <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
//                 We connect global buyers with export-ready rice, spices, peanuts, sesame seeds, pulses, fresh produce and private label packaging from India through dependable sourcing, documentation support and shipment coordination.
//               </p>

//               <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//                 <Link to="/products" className="btn-accent">
//                   Explore Product Desk <ArrowRight size={17} />
//                 </Link>
//                 <Link to="/contact" className="btn-outline">
//                   Request Worldwide Quote <Globe2 size={17} />
//                 </Link>
//               </div>
//             </div>

//             <div className="mt-14 grid gap-4 md:grid-cols-4">
//               {tradeStats.map((stat, index) => (
//                 <div
//                   key={stat.label}
//                   className="border border-white/14 bg-white/10 p-5 backdrop-blur-md animate-reveal-up"
//                   style={{ borderRadius: "0.5rem", animationDelay: `${index * 90}ms` }}
//                 >
//                   <div className="font-display text-3xl font-bold text-white">{stat.number}</div>
//                   <p className="mt-2 text-sm font-semibold text-white/68">{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <ProductSlider />

//         <section className="px-4 py-20">
//           <div className="container mx-auto">
//             <div className="mb-10 grid gap-5 md:grid-cols-[0.95fr_1.05fr] md:items-end">
//               <div>
//                 <span className="section-kicker">Worldwide product categories</span>
//                 <h2 className="mt-3">Click a category to go deeper into product names</h2>
//               </div>
//               <p className="text-sm leading-7 text-[#273244]/72">
//                 Rice opens Basmati, Non-Basmati, Sona Masoori, IR64, Parboiled and Broken Rice. Spices opens Turmeric, Cumin, Coriander, Red Chilli and more. Every exact product card sends a direct WhatsApp enquiry.
//               </p>
//             </div>

//             <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
//               {productCategories.slice(0, 4).map((category, index) => (
//                 <Link
//                   key={category.slug}
//                   to={`/products/${category.slug}`}
//                   className="category-card w-full animate-reveal-up"
//                   style={{ animationDelay: `${index * 80}ms` }}
//                 >
//                   <img src={category.image} alt={`${category.name} export category`} />
//                   <div className="category-card-content">
//                     <h3 className="text-2xl text-white">{category.name}</h3>
//                     <p className="mt-2 text-sm text-white/72">{category.kicker}</p>
//                   </div>
//                 </Link>
//               ))}
//             </div>

//             <div className="mt-8 text-center">
//               <Link to="/products" className="btn-primary">
//                 View All Product Categories <ArrowRight size={17} />
//               </Link>
//             </div>
//           </div>
//         </section>

//         <section className="bg-white px-4 py-20">
//           <div className="container mx-auto">
//             <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
//               <div className="grid grid-cols-2 gap-4">
//                 <img src={founderImg} alt="Export logistics and industrial trade support" className="h-65 w-full object-cover" style={{ borderRadius: "0.5rem" }} />
//                 <img src={foundImg} alt="Private label export packaging options" className="mt-10 h-64 w-full object-cover" style={{ borderRadius: "0.5rem" }} />
//                 <img src={foundersImg} alt="Sourcing and export raw material coordination" className="col-span-2 h-56 w-full object-cover" style={{ borderRadius: "0.5rem" }} />
//               </div>

//               <div>
//                 <span className="section-kicker">Built for serious importers</span>
//                 <h2 className="mt-3">A trade partner for sourcing, packaging and export execution</h2>
//                 <p className="mt-5 text-base leading-8 text-[#273244]/72">
//                   Sanderi Exporters helps international buyers source Indian agricultural products with clear communication, quality-focused selection and practical export support. Our work is simple: understand your product requirement, match the right supply, prepare export packaging and keep the buying process moving.
//                 </p>

//                 <div className="mt-8 grid gap-4">
//                   {serviceBlocks.map((item) => (
//                     <div key={item.title} className="flex items-start gap-4 border border-[#121826]/10 bg-[#f5f8fb] p-5" style={{ borderRadius: "0.5rem" }}>
//                       <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#0a8f9c] text-white" style={{ borderRadius: "0.5rem" }}>
//                         {item.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-xl">{item.title}</h3>
//                         <p className="mt-2 text-sm leading-7 text-[#273244]/70">{item.text}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="px-4 py-20">
//           <div className="container mx-auto">
//             <div className="mb-10 text-center">
//               <span className="section-kicker justify-center">Export process</span>
//               <h2 className="mx-auto mt-3 max-w-3xl">From inquiry to shipment with clean steps</h2>
//             </div>

//             <div className="grid gap-5 md:grid-cols-4">
//               {[
//                 { step: "01", title: "Requirement", text: "Share product name, quantity, destination, packaging and quality expectations." },
//                 { step: "02", title: "Quote", text: "Receive pricing, MOQ guidance, packing options and availability details." },
//                 { step: "03", title: "Preparation", text: "Product sourcing, packing coordination and export document planning begins." },
//                 { step: "04", title: "Shipment", text: "Dispatch support, shipment communication and buyer-side coordination." },
//               ].map((item, index) => (
//                 <div key={item.step} className="trade-card bg-white p-6 animate-reveal-up" style={{ animationDelay: `${index * 80}ms` }}>
//                   <div className="font-display text-4xl font-bold text-[#0a8f9c]">{item.step}</div>
//                   <h3 className="mt-5 text-2xl">{item.title}</h3>
//                   <p className="mt-3 text-sm leading-7 text-[#273244]/70">{item.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section className="bg-[#121826] px-4 py-20 text-white">
//           <div className="container mx-auto grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
//             <div>
//               <span className="section-kicker text-white/76">Talk to export team</span>
//               <h2 className="mt-3 max-w-4xl text-white">Send product name and quantity. We will guide MOQ, packaging and export details.</h2>
//             </div>
//             <a
//               href="https://wa.me/917990343575?text=Hello%20Sanderi%20Exporters%2C%20I%20want%20to%20discuss%20import%20export%20products%20and%20pricing."
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn-accent"
//             >
//               WhatsApp Inquiry <MessageCircle size={17} />
//             </a>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Home;
