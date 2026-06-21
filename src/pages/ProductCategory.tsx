import { ArrowLeft, ArrowRight, FileCheck, MessageCircle, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductSlider from "@/components/ProductSlider";
import SEOMetadata from "@/components/SEOMetadata";
import SocialSidebar from "@/components/SocialSidebar";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import { getProductCategory, getSubCategories, getWhatsAppEnquiryUrl, productCategories } from "@/data/productCatalog";
import { siteUrl } from "@/data/siteMetadata";

const ProductCategory = () => {
  const { category } = useParams<{ category: string }>();
  const product = getProductCategory(category);
  const subCategories = getSubCategories(category ?? "");
  const hasSubCategories = subCategories.length > 0;

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f5f8fb]">
        <Navbar />
        <main className="container mx-auto px-4 pb-20 pt-36">
          <div className="max-w-2xl">
            <span className="section-kicker">Product not found</span>
            <h1 className="mt-4 text-4xl">This export category is not available.</h1>
            <p className="mt-5 text-lg leading-8">
              Browse our active product desk to explore rice, spices, peanuts, sesame, pulses, fresh produce, and packaging support.
            </p>
            <Link to="/products" className="btn-primary mt-8 inline-flex">
              Back to Products <ArrowRight size={16} />
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedCategories = productCategories.filter((item) => item.slug !== product.slug).slice(0, 4);
  const productUrl = `${siteUrl}/products/${product.slug}`;

  return (
    <div className="min-h-screen bg-[#f5f8fb]">
      <SEOMetadata
        title={`${product.name} Exporter from India`}
        description={product.seoDescription}
        keywords={`${product.name} exporter India, ${product.name} supplier Ahmedabad, ${product.name} wholesale export, ${product.name} import export, ${product.name} exporters Dubai, ${product.name} exporters UAE, Sanderi Exporters`}
        url={productUrl}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": `${productUrl}#webpage`,
            name: `${product.name} Exporter from India`,
            description: product.seoDescription,
            url: productUrl,
            image: product.image,
            isPartOf: { "@id": `${siteUrl}/#website` },
            publisher: { "@id": `${siteUrl}/#organization` },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
              { "@type": "ListItem", position: 2, name: "Products", item: `${siteUrl}/products` },
              { "@type": "ListItem", position: 3, name: product.name, item: productUrl },
            ],
          },
        ]}
      />

      <Navbar />
      <SocialSidebar />
      <WhatsAppFloating />

      <main>
        {/* Hero */}
        <section className="relative min-h-[78vh] overflow-hidden px-4 pb-16 pt-32 text-white md:pt-40">
          <div className="absolute inset-0">
            <img src={product.image} alt={product.title} className="h-full w-full object-cover" fetchpriority="high" />
            <div className="hero-overlay absolute inset-0" />
            <div className="route-grid absolute inset-0" />
            <span className="route-line left-[12%] top-[36%] w-52 rotate-6" />
            <span className="route-line left-[48%] top-[56%] w-44 -rotate-12" style={{ animationDelay: "900ms" }} />
          </div>

          <div className="container relative mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/70">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-white">Products</Link>
              <span>/</span>
              <span className="font-semibold text-white">{product.name}</span>
            </nav>

            <div className="max-w-4xl animate-reveal-up">
              <span className="badge-premium">{product.kicker}</span>
              <h1 className="mt-6 text-5xl text-white md:text-7xl">{product.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">{product.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={getWhatsAppEnquiryUrl(product.name)} target="_blank" rel="noopener noreferrer" className="btn-accent">
                  WhatsApp Category Inquiry <MessageCircle size={17} />
                </a>
                <Link to="/contact" className="btn-outline">
                  Request Formal Quote <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="border-b border-[#121826]/10 bg-white px-4 py-8">
          <div className="container mx-auto grid gap-4 md:grid-cols-4">
            {[
              { icon: <ShieldCheck size={20} />, title: "Quality checked", text: "Buyer specification matching" },
              { icon: <PackageCheck size={20} />, title: "Packaging support", text: "Bulk, retail and private label" },
              { icon: <FileCheck size={20} />, title: "Documentation", text: "Export paperwork coordination" },
              { icon: <Truck size={20} />, title: "Shipment ready", text: "Container and dispatch planning" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center bg-[#0a8f9c]/10 text-[#0a8f9c]" style={{ borderRadius: "0.5rem" }}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base">{item.title}</h3>
                  <p className="mt-1 text-sm text-[#273244]/68">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Sub-category chooser (if sub-categories exist) ── */}
        {hasSubCategories ? (
          <section className="px-4 py-20">
            <div className="container mx-auto">
              <div className="mb-10">
                <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-[#0a8f9c] hover:underline">
                  <ArrowLeft size={16} /> Back to all categories
                </Link>
                <span className="section-kicker mt-6 block">Choose type</span>
                <h2 className="mt-3">Select a {product.name} type to see all varieties</h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {subCategories.map((sub, index) => {
                  const subVarieties = product.varieties.filter((v) =>
                    sub.varietySlugs.includes(v.slug)
                  );
                  const coverImage = subVarieties[0]?.image || product.image;

                  return (
                    <Link
                      key={sub.slug}
                      to={`/products/${product.slug}/${sub.slug}`}
                      className="trade-card group bg-white animate-reveal-up overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={coverImage}
                          alt={sub.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121826]/85 via-[#121826]/20 to-transparent" />
                        <span
                          className="absolute left-4 top-4 bg-white px-3 py-1 text-xs font-bold text-[#121826]"
                          style={{ borderRadius: "0.5rem" }}
                        >
                          {subVarieties.length} varieties
                        </span>
                        <div className="absolute bottom-5 left-5 right-5">
                          <h3 className="text-3xl text-white">{sub.name}</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-sm leading-7 text-[#273244]/72">{sub.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {subVarieties.slice(0, 3).map((v) => (
                            <span
                              key={v.slug}
                              className="border border-[#121826]/10 bg-[#f5f8fb] px-3 py-1 text-xs font-bold text-[#273244]"
                              style={{ borderRadius: "0.5rem" }}
                            >
                              {v.name}
                            </span>
                          ))}
                          {subVarieties.length > 3 && (
                            <span
                              className="border border-[#0a8f9c]/20 bg-[#0a8f9c]/5 px-3 py-1 text-xs font-bold text-[#0a8f9c]"
                              style={{ borderRadius: "0.5rem" }}
                            >
                              +{subVarieties.length - 3} more
                            </span>
                          )}
                        </div>
                        <div className="mt-6 inline-flex items-center gap-2 font-bold text-[#0a8f9c]">
                          View {sub.name} <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        ) : (
          /* ── Fallback: show all varieties directly (no sub-categories) ── */
          <section className="px-4 py-20">
            <div className="container mx-auto">
              <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <span className="section-kicker">Choose exact product</span>
                  <h2 className="mt-3">Available {product.name} names</h2>
                </div>
                <p className="max-w-xl text-sm leading-7 text-[#273244]/70">
                  Click any variety card to send a WhatsApp enquiry with the product name already included.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {product.varieties.map((variety, index) => (
                  <a
                    key={variety.slug}
                    href={getWhatsAppEnquiryUrl(product.name, variety.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="trade-card group flex min-h-[22rem] flex-col bg-white p-6 animate-reveal-up rounded-2xl shadow-lg"
                    style={{ animationDelay: `${index * 70}ms` }}
                  >
                    <div className="relative mb-4 h-44 w-full overflow-hidden rounded-lg">
                      <img
                        src={variety.image || product.image}
                        alt={variety.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-sm font-bold text-[#0a8f9c]">{variety.subtitle}</p>
                    <h3 className="mt-3 text-2xl">{variety.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#273244]/72">{variety.description}</p>
                    <div className="mt-auto pt-6">
                      <span className="inline-flex items-center gap-2 font-bold text-[#0a8f9c]">
                        Enquire on WhatsApp <ArrowRight size={16} />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* More categories */}
        <section className="px-4 py-16">
          <div className="container mx-auto">
            <div className="mb-8 flex items-center justify-between gap-4">
              <h2 className="text-3xl">More categories</h2>
              <Link to="/products" className="font-bold text-[#0a8f9c]">View all</Link>
            </div>
            <div className="grid gap-5 md:grid-cols-4">
              {relatedCategories.map((item) => (
                <Link key={item.slug} to={`/products/${item.slug}`} className="category-card w-full">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="category-card-content">
                    <h3 className="text-xl text-white">{item.name}</h3>
                    <p className="mt-2 text-sm text-white/72">{item.kicker}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ProductSlider compact />
      </main>

      <Footer />
    </div>
  );
};

export default ProductCategory;

// import { ArrowLeft, ArrowRight, FileCheck, MessageCircle, PackageCheck, ShieldCheck, Truck } from "lucide-react";
// import { Link, useParams } from "react-router-dom";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// import ProductSlider from "@/components/ProductSlider";
// import SEOMetadata from "@/components/SEOMetadata";
// import SocialSidebar from "@/components/SocialSidebar";
// import WhatsAppFloating from "@/components/WhatsAppFloating";
// import { getProductCategory, getSubCategories, getWhatsAppEnquiryUrl, productCategories } from "@/data/productCatalog";
// import { siteUrl } from "@/data/siteMetadata";

// const ProductCategory = () => {
//   const { category } = useParams<{ category: string }>();
//   const product = getProductCategory(category);
//   const subCategories = getSubCategories(category ?? "");
//   const hasSubCategories = subCategories.length > 0;

//   if (!product) {
//     return (
//       <div className="min-h-screen bg-[#f5f8fb]">
//         <Navbar />
//         <main className="container mx-auto px-4 pb-20 pt-36">
//           <div className="max-w-2xl">
//             <span className="section-kicker">Product not found</span>
//             <h1 className="mt-4 text-4xl">This export category is not available.</h1>
//             <p className="mt-5 text-lg leading-8">
//               Browse our active product desk to explore rice, spices, peanuts, sesame, pulses, fresh produce, and packaging support.
//             </p>
//             <Link to="/products" className="btn-primary mt-8 inline-flex">
//               Back to Products <ArrowRight size={16} />
//             </Link>
//           </div>
//         </main>
//         <Footer />
//       </div>
//     );
//   }

//   const relatedCategories = productCategories.filter((item) => item.slug !== product.slug).slice(0, 4);
//   const productUrl = `${siteUrl}/products/${product.slug}`;

//   return (
//     <div className="min-h-screen bg-[#f5f8fb]">
//       <SEOMetadata
//         title={`${product.name} Exporter from India`}
//         description={product.seoDescription}
//         keywords={`${product.name} exporter India, ${product.name} supplier Ahmedabad, ${product.name} wholesale export, ${product.name} import export, ${product.name} exporters Dubai, ${product.name} exporters UAE, Sanderi Exporters`}
//         url={productUrl}
//         schema={[
//           {
//             "@context": "https://schema.org",
//             "@type": "CollectionPage",
//             "@id": `${productUrl}#webpage`,
//             name: `${product.name} Exporter from India`,
//             description: product.seoDescription,
//             url: productUrl,
//             image: product.image,
//             isPartOf: { "@id": `${siteUrl}/#website` },
//             publisher: { "@id": `${siteUrl}/#organization` },
//           },
//           {
//             "@context": "https://schema.org",
//             "@type": "BreadcrumbList",
//             itemListElement: [
//               { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
//               { "@type": "ListItem", position: 2, name: "Products", item: `${siteUrl}/products` },
//               { "@type": "ListItem", position: 3, name: product.name, item: productUrl },
//             ],
//           },
//         ]}
//       />

//       <Navbar />
//       <SocialSidebar />
//       <WhatsAppFloating />

//       <main>
//         {/* Hero */}
//         <section className="relative min-h-[78vh] overflow-hidden px-4 pb-16 pt-32 text-white md:pt-40">
//           <div className="absolute inset-0">
//             <img src={product.image} alt={product.title} className="h-full w-full object-cover" fetchpriority="high" />
//             <div className="hero-overlay absolute inset-0" />
//             <div className="route-grid absolute inset-0" />
//             <span className="route-line left-[12%] top-[36%] w-52 rotate-6" />
//             <span className="route-line left-[48%] top-[56%] w-44 -rotate-12" style={{ animationDelay: "900ms" }} />
//           </div>

//           <div className="container relative mx-auto">
//             {/* Breadcrumb */}
//             <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/70">
//               <Link to="/" className="hover:text-white">Home</Link>
//               <span>/</span>
//               <Link to="/products" className="hover:text-white">Products</Link>
//               <span>/</span>
//               <span className="font-semibold text-white">{product.name}</span>
//             </nav>

//             <div className="max-w-4xl animate-reveal-up">
//               <span className="badge-premium">{product.kicker}</span>
//               <h1 className="mt-6 text-5xl text-white md:text-7xl">{product.title}</h1>
//               <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">{product.description}</p>
//               <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//                 <a href={getWhatsAppEnquiryUrl(product.name)} target="_blank" rel="noopener noreferrer" className="btn-accent">
//                   WhatsApp Category Inquiry <MessageCircle size={17} />
//                 </a>
//                 <Link to="/contact" className="btn-outline">
//                   Request Formal Quote <ArrowRight size={17} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Trust bar */}
//         <section className="border-b border-[#121826]/10 bg-white px-4 py-8">
//           <div className="container mx-auto grid gap-4 md:grid-cols-4">
//             {[
//               { icon: <ShieldCheck size={20} />, title: "Quality checked", text: "Buyer specification matching" },
//               { icon: <PackageCheck size={20} />, title: "Packaging support", text: "Bulk, retail and private label" },
//               { icon: <FileCheck size={20} />, title: "Documentation", text: "Export paperwork coordination" },
//               { icon: <Truck size={20} />, title: "Shipment ready", text: "Container and dispatch planning" },
//             ].map((item) => (
//               <div key={item.title} className="flex items-start gap-3">
//                 <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center bg-[#0a8f9c]/10 text-[#0a8f9c]" style={{ borderRadius: "0.5rem" }}>
//                   {item.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-base">{item.title}</h3>
//                   <p className="mt-1 text-sm text-[#273244]/68">{item.text}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ── Sub-category chooser (if sub-categories exist) ── */}
//         {hasSubCategories ? (
//           <section className="px-4 py-20">
//             <div className="container mx-auto">
//               <div className="mb-10">
//                 <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-[#0a8f9c] hover:underline">
//                   <ArrowLeft size={16} /> Back to all categories
//                 </Link>
//                 <span className="section-kicker mt-6 block">Choose type</span>
//                 <h2 className="mt-3">Select a {product.name} type to see all varieties</h2>
//               </div>

//               <div className="grid gap-6 md:grid-cols-2">
//                 {subCategories.map((sub, index) => {
//                   const subVarieties = product.varieties.filter((v) =>
//                     sub.varietySlugs.includes(v.slug)
//                   );
//                   const coverImage = subVarieties[0]?.image || product.image;

//                   return (
//                     <Link
//                       key={sub.slug}
//                       to={`/products/${product.slug}/${sub.slug}`}
//                       className="trade-card group bg-white animate-reveal-up overflow-hidden"
//                       style={{ animationDelay: `${index * 100}ms` }}
//                     >
//                       <div className="relative h-64 overflow-hidden">
//                         <img
//                           src={coverImage}
//                           alt={sub.name}
//                           className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                           loading="lazy"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-[#121826]/85 via-[#121826]/20 to-transparent" />
//                         <span
//                           className="absolute left-4 top-4 bg-white px-3 py-1 text-xs font-bold text-[#121826]"
//                           style={{ borderRadius: "0.5rem" }}
//                         >
//                           {subVarieties.length} varieties
//                         </span>
//                         <div className="absolute bottom-5 left-5 right-5">
//                           <h3 className="text-3xl text-white">{sub.name}</h3>
//                         </div>
//                       </div>
//                       <div className="p-6">
//                         <p className="text-sm leading-7 text-[#273244]/72">{sub.description}</p>
//                         <div className="mt-4 flex flex-wrap gap-2">
//                           {subVarieties.slice(0, 3).map((v) => (
//                             <span
//                               key={v.slug}
//                               className="border border-[#121826]/10 bg-[#f5f8fb] px-3 py-1 text-xs font-bold text-[#273244]"
//                               style={{ borderRadius: "0.5rem" }}
//                             >
//                               {v.name}
//                             </span>
//                           ))}
//                           {subVarieties.length > 3 && (
//                             <span
//                               className="border border-[#0a8f9c]/20 bg-[#0a8f9c]/5 px-3 py-1 text-xs font-bold text-[#0a8f9c]"
//                               style={{ borderRadius: "0.5rem" }}
//                             >
//                               +{subVarieties.length - 3} more
//                             </span>
//                           )}
//                         </div>
//                         <div className="mt-6 inline-flex items-center gap-2 font-bold text-[#0a8f9c]">
//                           View {sub.name} <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
//                         </div>
//                       </div>
//                     </Link>
//                   );
//                 })}
//               </div>
//             </div>
//           </section>
//         ) : (
//           /* ── Fallback: show all varieties directly (no sub-categories) ── */
//           <section className="px-4 py-20">
//             <div className="container mx-auto">
//               <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
//                 <div>
//                   <span className="section-kicker">Choose exact product</span>
//                   <h2 className="mt-3">Available {product.name} names</h2>
//                 </div>
//                 <p className="max-w-xl text-sm leading-7 text-[#273244]/70">
//                   Click any variety card to send a WhatsApp enquiry with the product name already included.
//                 </p>
//               </div>

//               <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//                 {product.varieties.map((variety, index) => (
//                   <a
//                     key={variety.slug}
//                     href={getWhatsAppEnquiryUrl(product.name, variety.name)}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="trade-card group flex min-h-[22rem] flex-col bg-white p-6 animate-reveal-up rounded-2xl shadow-lg"
//                     style={{ animationDelay: `${index * 70}ms` }}
//                   >
//                     <div className="relative mb-4 h-44 w-full overflow-hidden rounded-lg">
//                       <img
//                         src={variety.image || product.image}
//                         alt={variety.name}
//                         className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                         loading="lazy"
//                       />
//                     </div>
//                     <p className="text-sm font-bold text-[#0a8f9c]">{variety.subtitle}</p>
//                     <h3 className="mt-3 text-2xl">{variety.name}</h3>
//                     <p className="mt-3 text-sm leading-7 text-[#273244]/72">{variety.description}</p>
//                     <div className="mt-auto pt-6">
//                       <span className="inline-flex items-center gap-2 font-bold text-[#0a8f9c]">
//                         Enquire on WhatsApp <ArrowRight size={16} />
//                       </span>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </section>
//         )}

//         {/* More categories */}
//         <section className="px-4 py-16">
//           <div className="container mx-auto">
//             <div className="mb-8 flex items-center justify-between gap-4">
//               <h2 className="text-3xl">More categories</h2>
//               <Link to="/products" className="font-bold text-[#0a8f9c]">View all</Link>
//             </div>
//             <div className="grid gap-5 md:grid-cols-4">
//               {relatedCategories.map((item) => (
//                 <Link key={item.slug} to={`/products/${item.slug}`} className="category-card w-full">
//                   <img src={item.image} alt={item.title} loading="lazy" />
//                   <div className="category-card-content">
//                     <h3 className="text-xl text-white">{item.name}</h3>
//                     <p className="mt-2 text-sm text-white/72">{item.kicker}</p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>

//         <ProductSlider compact />
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default ProductCategory;

// import { ArrowLeft, ArrowRight, FileCheck, MessageCircle, PackageCheck, ShieldCheck, Truck } from "lucide-react";
// import { Link, useParams } from "react-router-dom";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// import ProductSlider from "@/components/ProductSlider";
// import SEOMetadata from "@/components/SEOMetadata";
// import SocialSidebar from "@/components/SocialSidebar";
// import WhatsAppFloating from "@/components/WhatsAppFloating";
// import { getProductCategory, getWhatsAppEnquiryUrl, productCategories } from "@/data/productCatalog";
// import { siteUrl } from "@/data/siteMetadata";

// const ProductCategory = () => {
//   const { category } = useParams<{ category: string }>();
//   const product = getProductCategory(category);

//   if (!product) {
//     return (
//       <div className="min-h-screen bg-[#f5f8fb]">
//         <Navbar />
//         <main className="container mx-auto px-4 pb-20 pt-36">
//           <div className="max-w-2xl">
//             <span className="section-kicker">Product not found</span>
//             <h1 className="mt-4 text-4xl">This export category is not available.</h1>
//             <p className="mt-5 text-lg leading-8">
//               Browse our active product desk to explore rice, spices, peanuts, sesame, pulses, fresh produce, and packaging support.
//             </p>
//             <Link to="/products" className="btn-primary mt-8">
//               Back to Products <ArrowRight size={16} />
//             </Link>
//           </div>
//         </main>
//         <Footer />
//       </div>
//     );
//   }

//   const relatedCategories = productCategories.filter((item) => item.slug !== product.slug).slice(0, 4);
//   const productUrl = `${siteUrl}/products/${product.slug}`;

//   return (
//     <div className="min-h-screen bg-[#f5f8fb]">
//       <SEOMetadata
//         title={`${product.name} Exporter from India`}
//         description={product.seoDescription}
//         keywords={`${product.name} exporter India, ${product.name} supplier Ahmedabad, ${product.name} wholesale export, ${product.name} import export, ${product.name} exporters Dubai, ${product.name} exporters UAE, Sanderi Exporters`}
//         url={productUrl}
//         schema={[
//           {
//             "@context": "https://schema.org",
//             "@type": "CollectionPage",
//             "@id": `${productUrl}#webpage`,
//             name: `${product.name} Exporter from India`,
//             description: product.seoDescription,
//             url: productUrl,
//             image: product.image,
//             isPartOf: { "@id": `${siteUrl}/#website` },
//             publisher: { "@id": `${siteUrl}/#organization` },
//           },
//           {
//             "@context": "https://schema.org",
//             "@type": "ItemList",
//             name: `${product.name} export varieties`,
//             itemListElement: product.varieties.map((variety, index) => ({
//               "@type": "ListItem",
//               position: index + 1,
//               name: variety.name,
//               description: variety.description,
//               url: productUrl,
//             })),
//           },
//           {
//             "@context": "https://schema.org",
//             "@type": "BreadcrumbList",
//             itemListElement: [
//               { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
//               { "@type": "ListItem", position: 2, name: "Products", item: `${siteUrl}/products` },
//               { "@type": "ListItem", position: 3, name: product.name, item: productUrl },
//             ],
//           },
//         ]}
//       />

//       <Navbar />
//       <SocialSidebar />
//       <WhatsAppFloating />

//       <main>
//         <section className="relative min-h-[78vh] overflow-hidden px-4 pb-16 pt-32 text-white md:pt-40">
//           <div className="absolute inset-0">
//             <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
//             <div className="hero-overlay absolute inset-0" />
//             <div className="route-grid absolute inset-0" />
//             <span className="route-line left-[12%] top-[36%] w-52 rotate-6" />
//             <span className="route-line left-[48%] top-[56%] w-44 -rotate-12" style={{ animationDelay: "900ms" }} />
//           </div>

//           <div className="container relative mx-auto">
//             <Link to="/products" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-white/78 hover:text-white">
//               <ArrowLeft size={18} />
//               Back to product desk
//             </Link>

//             <div className="max-w-4xl animate-reveal-up">
//               <span className="badge-premium">{product.kicker}</span>
//               <h1 className="mt-6 text-5xl text-white md:text-7xl">{product.title}</h1>
//               <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">{product.description}</p>
//               <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//                 <a href={getWhatsAppEnquiryUrl(product.name)} target="_blank" rel="noopener noreferrer" className="btn-accent">
//                   WhatsApp Category Inquiry <MessageCircle size={17} />
//                 </a>
//                 <Link to="/contact" className="btn-outline">
//                   Request Formal Quote <ArrowRight size={17} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="border-b border-[#121826]/10 bg-white px-4 py-8">
//           <div className="container mx-auto grid gap-4 md:grid-cols-4">
//             {[
//               { icon: <ShieldCheck size={20} />, title: "Quality checked", text: "Buyer specification matching" },
//               { icon: <PackageCheck size={20} />, title: "Packaging support", text: "Bulk, retail and private label" },
//               { icon: <FileCheck size={20} />, title: "Documentation", text: "Export paperwork coordination" },
//               { icon: <Truck size={20} />, title: "Shipment ready", text: "Container and dispatch planning" },
//             ].map((item) => (
//               <div key={item.title} className="flex items-start gap-3">
//                 <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center bg-[#0a8f9c]/10 text-[#0a8f9c]" style={{ borderRadius: "0.5rem" }}>
//                   {item.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-base">{item.title}</h3>
//                   <p className="mt-1 text-sm text-[#273244]/68">{item.text}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="px-4 py-20">
//           <div className="container mx-auto">
//             <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
//               <div>
//                 <span className="section-kicker">Choose exact product</span>
//                 <h2 className="mt-3">Available {product.name} names</h2>
//               </div>
//               <p className="max-w-xl text-sm leading-7 text-[#273244]/70">
//                 Click any variety card to send a WhatsApp enquiry with the product name already included.
//               </p>
//             </div>

//             <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//               {product.varieties.map((variety, index) => (
//                 <a
//                   key={variety.slug}
//                   href={getWhatsAppEnquiryUrl(product.name, variety.name)}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="trade-card group flex min-h-[22rem] flex-col bg-white p-6 animate-reveal-up rounded-2xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1"
//                   style={{ animationDelay: `${index * 70}ms` }}
//                 >
//                   <div className="relative mb-4 h-44 w-full overflow-hidden rounded-lg">
//                     <img
//                       src={variety.image || product.image}
//                       alt={variety.name}
//                       className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent" />
//                   </div>
//                   <div className="mb-5 flex items-center justify-between gap-4">
//                     <div
//                       className="h-2 w-16"
//                       style={{ background: product.color, borderRadius: "0.5rem" }}
//                     />
//                     <MessageCircle size={22} className="text-[#0a8f9c]" />
//                   </div>
//                   <p className="text-sm font-bold text-[#0a8f9c]">{variety.subtitle}</p>
//                   <h3 className="mt-3 text-3xl">{variety.name}</h3>
//                   <p className="mt-4 text-sm leading-7 text-[#273244]/72">{variety.description}</p>

//                   <div className="mt-5 grid gap-2">
//                     {variety.specs.map((spec) => (
//                       <span
//                         key={spec}
//                         className="border border-[#121826]/10 bg-[#f5f8fb] px-3 py-2 text-xs font-bold text-[#273244]"
//                         style={{ borderRadius: "0.5rem" }}
//                       >
//                         {spec}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="mt-auto pt-6">
//                     <p className="mb-4 text-xs font-bold uppercase text-[#273244]/54">Packaging: {variety.packaging}</p>
//                     <span className="inline-flex items-center gap-2 font-bold text-[#0a8f9c]">
//                       Enquire on WhatsApp <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
//                     </span>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section className="bg-white px-4 py-20">
//           <div className="container mx-auto">
//             <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
//               <div>
//                 <span className="section-kicker">Export support</span>
//                 <h2 className="mt-3">Built for worldwide buyers</h2>
//               </div>
//               <div className="grid gap-4 sm:grid-cols-2">
//                 {[
//                   "MOQ and pricing guidance for importers and wholesale buyers",
//                   "Specification matching before procurement and packing",
//                   "Private label, PP bag, jute bag, carton and bulk pack support",
//                   "Commercial invoice, packing list and shipment coordination",
//                 ].map((item) => (
//                   <div key={item} className="border-l-4 border-[#f59e0b] bg-[#f5f8fb] p-4 text-sm font-semibold text-[#273244]">
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="px-4 py-16">
//           <div className="container mx-auto">
//             <div className="mb-8 flex items-center justify-between gap-4">
//               <h2 className="text-3xl">More categories</h2>
//               <Link to="/products" className="font-bold text-[#0a8f9c]">
//                 View all
//               </Link>
//             </div>
//             <div className="grid gap-5 md:grid-cols-4">
//               {relatedCategories.map((item) => (
//                 <Link key={item.slug} to={`/products/${item.slug}`} className="category-card w-full">
//                   <img src={item.image} alt={item.title} />
//                   <div className="category-card-content">
//                     <h3 className="text-xl text-white">{item.name}</h3>
//                     <p className="mt-2 text-sm text-white/72">{item.kicker}</p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>

//         <ProductSlider compact />
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default ProductCategory;
