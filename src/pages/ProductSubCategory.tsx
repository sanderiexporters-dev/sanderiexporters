import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SEOMetadata from "@/components/SEOMetadata";
import SocialSidebar from "@/components/SocialSidebar";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import {
  getProductCategory,
  getSubCategories,
  getSubCategoryVarieties,
  getWhatsAppEnquiryUrl,
} from "@/data/productCatalog";
import { siteUrl } from "@/data/siteMetadata";

const ProductSubCategory = () => {
  const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
  const product = getProductCategory(category);
  const subCategories = getSubCategories(category ?? "");

  // ── If no subcategory in URL → show the sub-category chooser ──
  if (!subcategory) {
    if (!product) {
      return (
        <div className="min-h-screen bg-[#f5f8fb]">
          <Navbar />
          <main className="container mx-auto px-4 pb-20 pt-36">
            <h1 className="text-4xl">Category not found</h1>
            <Link to="/products" className="btn-primary mt-8 inline-flex">Back to Products</Link>
          </main>
          <Footer />
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-[#f5f8fb]">
        <SEOMetadata
          title={`${product.name} Sub-Categories`}
          description={product.seoDescription}
          url={`${siteUrl}/products/${product.slug}`}
        />
        <Navbar />
        <SocialSidebar />
        <WhatsAppFloating />

        <main>
          {/* Hero */}
          <section className="relative min-h-[60vh] overflow-hidden px-4 pb-16 pt-32 text-white md:pt-40">
            <div className="absolute inset-0">
              <img src={product.image} alt={product.title} className="h-full w-full object-cover" fetchpriority="high" />
              <div className="hero-overlay absolute inset-0" />
              <div className="route-grid absolute inset-0" />
            </div>
            <div className="container relative mx-auto">
              {/* Breadcrumb */}
              <nav className="mb-6 flex items-center gap-2 text-sm text-white/70">
                <Link to="/" className="hover:text-white">Home</Link>
                <span>/</span>
                <Link to="/products" className="hover:text-white">Products</Link>
                <span>/</span>
                <span className="text-white font-semibold">{product.name}</span>
              </nav>

              <div className="max-w-3xl animate-reveal-up">
                <span className="badge-premium">{product.kicker}</span>
                <h1 className="mt-6 text-5xl text-white md:text-6xl">{product.title}</h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76">{product.description}</p>
              </div>
            </div>
          </section>

          {/* Sub-category picker */}
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
                  const varieties = getSubCategoryVarieties(product.slug, sub.slug);
                  const coverImage = varieties[0]?.image || product.image;
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
                          {varieties.length} varieties
                        </span>
                        <div className="absolute bottom-5 left-5 right-5">
                          <h3 className="text-3xl text-white">{sub.name}</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-sm leading-7 text-[#273244]/72">{sub.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {varieties.slice(0, 3).map((v) => (
                            <span
                              key={v.slug}
                              className="border border-[#121826]/10 bg-[#f5f8fb] px-3 py-1 text-xs font-bold text-[#273244]"
                              style={{ borderRadius: "0.5rem" }}
                            >
                              {v.name}
                            </span>
                          ))}
                          {varieties.length > 3 && (
                            <span className="border border-[#0a8f9c]/20 bg-[#0a8f9c]/5 px-3 py-1 text-xs font-bold text-[#0a8f9c]" style={{ borderRadius: "0.5rem" }}>
                              +{varieties.length - 3} more
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
        </main>
        <Footer />
      </div>
    );
  }

  // ── Sub-category variety listing ──
  const sub = subCategories.find((s) => s.slug === subcategory);
  const varieties = getSubCategoryVarieties(category ?? "", subcategory);

  if (!product || !sub) {
    return (
      <div className="min-h-screen bg-[#f5f8fb]">
        <Navbar />
        <main className="container mx-auto px-4 pb-20 pt-36">
          <h1 className="text-4xl">Sub-category not found</h1>
          <Link to="/products" className="btn-primary mt-8 inline-flex">Back to Products</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const coverImage = varieties[0]?.image || product.image;

  return (
    <div className="min-h-screen bg-[#f5f8fb]">
      <SEOMetadata
        title={`${sub.name} — ${product.name} Exporter from India`}
        description={sub.description}
        url={`${siteUrl}/products/${product.slug}/${sub.slug}`}
        schema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
            { "@type": "ListItem", position: 2, name: "Products", item: `${siteUrl}/products` },
            { "@type": "ListItem", position: 3, name: product.name, item: `${siteUrl}/products/${product.slug}` },
            { "@type": "ListItem", position: 4, name: sub.name, item: `${siteUrl}/products/${product.slug}/${sub.slug}` },
          ],
        }}
      />

      <Navbar />
      <SocialSidebar />
      <WhatsAppFloating />

      <main>
        {/* Hero */}
        <section className="relative min-h-[55vh] overflow-hidden px-4 pb-14 pt-32 text-white md:pt-40">
          <div className="absolute inset-0">
            <img src={coverImage} alt={sub.name} className="h-full w-full object-cover" fetchpriority="high" />
            <div className="hero-overlay absolute inset-0" />
            <div className="route-grid absolute inset-0" />
          </div>
          <div className="container relative mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/70">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-white">Products</Link>
              <span>/</span>
              <Link to={`/products/${product.slug}`} className="hover:text-white">{product.name}</Link>
              <span>/</span>
              <span className="font-semibold text-white">{sub.name}</span>
            </nav>

            <div className="max-w-3xl animate-reveal-up">
              <span className="badge-premium">{product.name}</span>
              <h1 className="mt-5 text-5xl text-white md:text-6xl">{sub.name}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76">{sub.description}</p>
            </div>
          </div>
        </section>

        {/* Back + breadcrumb bar */}
        <div className="border-b border-[#121826]/10 bg-white px-4 py-4">
          <div className="container mx-auto flex items-center gap-3">
            <Link
              to={`/products/${product.slug}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0a8f9c] hover:underline"
            >
              <ArrowLeft size={16} /> Back to {product.name} types
            </Link>
            <span className="text-[#121826]/30">·</span>
            <span className="text-sm text-[#273244]/60">{varieties.length} varieties</span>
          </div>
        </div>

        {/* Variety cards */}
        <section className="px-4 py-20">
          <div className="container mx-auto">
            <div className="mb-10">
              <span className="section-kicker">Choose exact product</span>
              <h2 className="mt-3">Available {sub.name} varieties</h2>
              <p className="mt-3 text-sm leading-7 text-[#273244]/70">
                Click any card to send a WhatsApp enquiry with the product name already included.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {varieties.map((variety, index) => (
                <a
                  key={variety.slug}
                  href={getWhatsAppEnquiryUrl(product.name, variety.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trade-card group flex min-h-[22rem] flex-col bg-white p-6 animate-reveal-up rounded-2xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <div className="relative mb-4 h-44 w-full overflow-hidden rounded-lg">
                    <img
                      src={variety.image || product.image}
                      alt={variety.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent" />
                  </div>

                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div className="h-2 w-16" style={{ background: product.color, borderRadius: "0.5rem" }} />
                    <MessageCircle size={22} className="text-[#0a8f9c]" />
                  </div>

                  <p className="text-sm font-bold text-[#0a8f9c]">{variety.subtitle}</p>
                  <h3 className="mt-3 text-2xl">{variety.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#273244]/72">{variety.description}</p>

                  <div className="mt-5 grid gap-2">
                    {variety.specs.map((spec) => (
                      <span
                        key={spec}
                        className="border border-[#121826]/10 bg-[#f5f8fb] px-3 py-2 text-xs font-bold text-[#273244]"
                        style={{ borderRadius: "0.5rem" }}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <p className="mb-3 text-xs font-bold uppercase text-[#273244]/54">
                      Packaging: {variety.packaging}
                    </p>
                    <span className="inline-flex items-center gap-2 font-bold text-[#0a8f9c]">
                      Enquire on WhatsApp <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#121826] px-4 py-16 text-white">
          <div className="container mx-auto grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="section-kicker text-white/76">Talk to export team</span>
              <h2 className="mt-3 text-white">Send product name and quantity. We guide MOQ, packaging and export details.</h2>
            </div>
            <a
              href={getWhatsAppEnquiryUrl(product.name)}
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

export default ProductSubCategory;

// import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
// import { Link, useParams } from "react-router-dom";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// import SEOMetadata from "@/components/SEOMetadata";
// import SocialSidebar from "@/components/SocialSidebar";
// import WhatsAppFloating from "@/components/WhatsAppFloating";
// import {
//   getProductCategory,
//   getSubCategories,
//   getSubCategoryVarieties,
//   getWhatsAppEnquiryUrl,
// } from "@/data/productCatalog";
// import { siteUrl } from "@/data/siteMetadata";

// const ProductSubCategory = () => {
//   const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
//   const product = getProductCategory(category);
//   const subCategories = getSubCategories(category ?? "");

//   // ── If no subcategory in URL → show the sub-category chooser ──
//   if (!subcategory) {
//     if (!product) {
//       return (
//         <div className="min-h-screen bg-[#f5f8fb]">
//           <Navbar />
//           <main className="container mx-auto px-4 pb-20 pt-36">
//             <h1 className="text-4xl">Category not found</h1>
//             <Link to="/products" className="btn-primary mt-8 inline-flex">Back to Products</Link>
//           </main>
//           <Footer />
//         </div>
//       );
//     }

//     return (
//       <div className="min-h-screen bg-[#f5f8fb]">
//         <SEOMetadata
//           title={`${product.name} Sub-Categories`}
//           description={product.seoDescription}
//           url={`${siteUrl}/products/${product.slug}`}
//         />
//         <Navbar />
//         <SocialSidebar />
//         <WhatsAppFloating />

//         <main>
//           {/* Hero */}
//           <section className="relative min-h-[60vh] overflow-hidden px-4 pb-16 pt-32 text-white md:pt-40">
//             <div className="absolute inset-0">
//               <img src={product.image} alt={product.title} className="h-full w-full object-cover" fetchpriority="high" />
//               <div className="hero-overlay absolute inset-0" />
//               <div className="route-grid absolute inset-0" />
//             </div>
//             <div className="container relative mx-auto">
//               {/* Breadcrumb */}
//               <nav className="mb-6 flex items-center gap-2 text-sm text-white/70">
//                 <Link to="/" className="hover:text-white">Home</Link>
//                 <span>/</span>
//                 <Link to="/products" className="hover:text-white">Products</Link>
//                 <span>/</span>
//                 <span className="text-white font-semibold">{product.name}</span>
//               </nav>

//               <div className="max-w-3xl animate-reveal-up">
//                 <span className="badge-premium">{product.kicker}</span>
//                 <h1 className="mt-6 text-5xl text-white md:text-6xl">{product.title}</h1>
//                 <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76">{product.description}</p>
//               </div>
//             </div>
//           </section>

//           {/* Sub-category picker */}
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
//                   const varieties = getSubCategoryVarieties(product.slug, sub.slug);
//                   const coverImage = varieties[0]?.image || product.image;
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
//                           {varieties.length} varieties
//                         </span>
//                         <div className="absolute bottom-5 left-5 right-5">
//                           <h3 className="text-3xl text-white">{sub.name}</h3>
//                         </div>
//                       </div>
//                       <div className="p-6">
//                         <p className="text-sm leading-7 text-[#273244]/72">{sub.description}</p>
//                         <div className="mt-4 flex flex-wrap gap-2">
//                           {varieties.slice(0, 3).map((v) => (
//                             <span
//                               key={v.slug}
//                               className="border border-[#121826]/10 bg-[#f5f8fb] px-3 py-1 text-xs font-bold text-[#273244]"
//                               style={{ borderRadius: "0.5rem" }}
//                             >
//                               {v.name}
//                             </span>
//                           ))}
//                           {varieties.length > 3 && (
//                             <span className="border border-[#0a8f9c]/20 bg-[#0a8f9c]/5 px-3 py-1 text-xs font-bold text-[#0a8f9c]" style={{ borderRadius: "0.5rem" }}>
//                               +{varieties.length - 3} more
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
//         </main>
//         <Footer />
//       </div>
//     );
//   }

//   // ── Sub-category variety listing ──
//   const sub = subCategories.find((s) => s.slug === subcategory);
//   const varieties = getSubCategoryVarieties(category ?? "", subcategory);

//   if (!product || !sub) {
//     return (
//       <div className="min-h-screen bg-[#f5f8fb]">
//         <Navbar />
//         <main className="container mx-auto px-4 pb-20 pt-36">
//           <h1 className="text-4xl">Sub-category not found</h1>
//           <Link to="/products" className="btn-primary mt-8 inline-flex">Back to Products</Link>
//         </main>
//         <Footer />
//       </div>
//     );
//   }

//   const coverImage = varieties[0]?.image || product.image;

//   return (
//     <div className="min-h-screen bg-[#f5f8fb]">
//       <SEOMetadata
//         title={`${sub.name} — ${product.name} Exporter from India`}
//         description={sub.description}
//         url={`${siteUrl}/products/${product.slug}/${sub.slug}`}
//         schema={{
//           "@context": "https://schema.org",
//           "@type": "BreadcrumbList",
//           itemListElement: [
//             { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
//             { "@type": "ListItem", position: 2, name: "Products", item: `${siteUrl}/products` },
//             { "@type": "ListItem", position: 3, name: product.name, item: `${siteUrl}/products/${product.slug}` },
//             { "@type": "ListItem", position: 4, name: sub.name, item: `${siteUrl}/products/${product.slug}/${sub.slug}` },
//           ],
//         }}
//       />

//       <Navbar />
//       <SocialSidebar />
//       <WhatsAppFloating />

//       <main>
//         {/* Hero */}
//         <section className="relative min-h-[55vh] overflow-hidden px-4 pb-14 pt-32 text-white md:pt-40">
//           <div className="absolute inset-0">
//             <img src={coverImage} alt={sub.name} className="h-full w-full object-cover" fetchpriority="high" />
//             <div className="hero-overlay absolute inset-0" />
//             <div className="route-grid absolute inset-0" />
//           </div>
//           <div className="container relative mx-auto">
//             {/* Breadcrumb */}
//             <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/70">
//               <Link to="/" className="hover:text-white">Home</Link>
//               <span>/</span>
//               <Link to="/products" className="hover:text-white">Products</Link>
//               <span>/</span>
//               <Link to={`/products/${product.slug}`} className="hover:text-white">{product.name}</Link>
//               <span>/</span>
//               <span className="font-semibold text-white">{sub.name}</span>
//             </nav>

//             <div className="max-w-3xl animate-reveal-up">
//               <span className="badge-premium">{product.name}</span>
//               <h1 className="mt-5 text-5xl text-white md:text-6xl">{sub.name}</h1>
//               <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76">{sub.description}</p>
//             </div>
//           </div>
//         </section>

//         {/* Back + breadcrumb bar */}
//         <div className="border-b border-[#121826]/10 bg-white px-4 py-4">
//           <div className="container mx-auto flex items-center gap-3">
//             <Link
//               to={`/products/${product.slug}`}
//               className="inline-flex items-center gap-2 text-sm font-bold text-[#0a8f9c] hover:underline"
//             >
//               <ArrowLeft size={16} /> Back to {product.name} types
//             </Link>
//             <span className="text-[#121826]/30">·</span>
//             <span className="text-sm text-[#273244]/60">{varieties.length} varieties</span>
//           </div>
//         </div>

//         {/* Variety cards */}
//         <section className="px-4 py-20">
//           <div className="container mx-auto">
//             <div className="mb-10">
//               <span className="section-kicker">Choose exact product</span>
//               <h2 className="mt-3">Available {sub.name} varieties</h2>
//               <p className="mt-3 text-sm leading-7 text-[#273244]/70">
//                 Click any card to send a WhatsApp enquiry with the product name already included.
//               </p>
//             </div>

//             <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//               {varieties.map((variety, index) => (
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
//                       loading="lazy"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent" />
//                   </div>

//                   <div className="mb-4 flex items-center justify-between gap-4">
//                     <div className="h-2 w-16" style={{ background: product.color, borderRadius: "0.5rem" }} />
//                     <MessageCircle size={22} className="text-[#0a8f9c]" />
//                   </div>

//                   <p className="text-sm font-bold text-[#0a8f9c]">{variety.subtitle}</p>
//                   <h3 className="mt-3 text-2xl">{variety.name}</h3>
//                   <p className="mt-3 text-sm leading-7 text-[#273244]/72">{variety.description}</p>

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
//                     <p className="mb-3 text-xs font-bold uppercase text-[#273244]/54">
//                       Packaging: {variety.packaging}
//                     </p>
//                     <span className="inline-flex items-center gap-2 font-bold text-[#0a8f9c]">
//                       Enquire on WhatsApp <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
//                     </span>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="bg-[#121826] px-4 py-16 text-white">
//           <div className="container mx-auto grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
//             <div>
//               <span className="section-kicker text-white/76">Talk to export team</span>
//               <h2 className="mt-3 text-white">Send product name and quantity. We guide MOQ, packaging and export details.</h2>
//             </div>
//             <a
//               href={getWhatsAppEnquiryUrl(product.name)}
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

// export default ProductSubCategory;