// src/pages/RicePage.tsx
// Level 1: /products/rice               → Basmati | Non-Basmati chooser
// Level 2: /products/rice/basmati       → 13 variety cards (direct WhatsApp)
//          /products/rice/non-basmati   → Non Parboiled | Parboiled chooser
// Level 3: /products/rice/non-basmati/non-parboiled → 10 variety cards
//          /products/rice/non-basmati/parboiled      → 10 variety cards

import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SEOMetadata from "@/components/SEOMetadata";
import SocialSidebar from "@/components/SocialSidebar";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import { riceTypes, getRiceType, getRiceSubGroup, RiceVariety, RiceSubGroup } from "@/data/riceData";
import { getWhatsAppEnquiryUrl, productCategories } from "@/data/productCatalog";
import riceImg from "@/assets/rice.jpg";

// ─── Reusable: Related Categories Section ───────────────────────────────────

const MoreCategoriesSection = () => {
  // Filters out 'rice' so it only shows other global categories (e.g., Spices, Peanuts, etc.)
  const relatedCategories = productCategories.filter((item) => item.slug !== "rice").slice(0, 4);

  return (
    <section className="px-4 py-16 border-t border-[#121826]/5 bg-[#f5f8fb]">
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
  );
};

// ─── Reusable: variety card grid ─────────────────────────────────────────────
// ─── Reusable: variety card grid ─────────────────────────────────────────────
// ─── Reusable: variety card grid ─────────────────────────────────────────────
// ─── Reusable: variety card grid ─────────────────────────────────────────────

// ─── Reusable: variety card grid ─────────────────────────────────────────────
// ─── Reusable: variety card grid ─────────────────────────────────────────────
// ─── Reusable: variety card grid ─────────────────────────────────────────────
//// ─── Reusable: variety card grid ─────────────────────────────────────────────

const VarietyGrid = ({
  varieties,
  typeName,
}: {
  varieties: RiceVariety[];
  typeName: string;
}) => (
  /* CHANGED HERE: Limit grid structure to maximum 3 columns (xl:grid-cols-3) */
  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    {varieties.map((v, i) => (
      <a
        key={v.slug}
        href={getWhatsAppEnquiryUrl("Rice", `${typeName} - ${v.name}`)}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full animate-reveal-up"
        style={{ animationDelay: `${i * 55}ms` }}
        aria-label={`Send WhatsApp enquiry for ${v.name}`}
      >
        <article className="trade-card group flex h-full flex-col bg-white overflow-hidden shadow-sm" style={{ borderRadius: "0.75rem" }}>
          
          {/* Padded Top Section containing the Image, Orange Line, and Message Circle Icon */}
          <div className="relative">
            {/* The padded inner container for the product image */}
            <div className="relative mt-5 h-52 overflow-hidden px-5">
              <img
                src={v.image}
                alt={v.name}
                className="h-full w-full object-cover"
                style={{ borderRadius: "0.5rem" }}
                loading="lazy"
              />
            </div>

            {/* The distinct Orange Accent Line positioned directly below the image */}
            <div className="h-1.5 w-14 bg-[#bd5338] mt-5 ml-5 rounded-full" />
            
            {/* The Floating WhatsApp Message Circle Icon on the right side */}
            <div className="absolute bottom-[-6px] right-6 text-[#0a8f9c]/40 transition-colors group-hover:text-[#0a8f9c]">
              <MessageCircle size={22} strokeWidth={1.8} />
            </div>
          </div>

          {/* Core Content Body Wrapper */}
          <div className="flex flex-1 flex-col px-5 pb-6 pt-4">
            {/* Subtitle / Kicker */}
            <span className="text-xs font-semibold tracking-wide text-[#0a8f9c]">
              Premium {typeName.toLowerCase()}
            </span>

            {/* Title */}
            <h3 className="mt-1 text-2xl font-bold text-[#121826]">{v.name}</h3>
            
            {/* Short Description */}
            <p className="mt-2 text-sm text-[#273244]/75 leading-relaxed">
              {v.description}
            </p>

            {/* Full-width descriptive specification rows matching your Ajwain example */}
            {v.varietySlugs && v.varietySlugs.length > 0 && (
              <div className="mt-5 flex flex-col gap-2">
                {v.varietySlugs.map((spec, sIdx) => (
                  <div
                    key={sIdx}
                    className="w-full border border-[#121826]/8 bg-[#f8fafc] px-4 py-2.5 text-sm text-[#273244] font-medium transition-colors group-hover:bg-[#f1f5f9]"
                    style={{ borderRadius: "0.5rem" }}
                  >
                    {/* Replaces URL-safe string slugs back into normal user-friendly display text */}
                    {spec.includes("-") && !spec.includes(" ") 
                      ? spec.replace("np-", "").replace("pb-", "").replace("-", " ") 
                      : spec}
                  </div>
                ))}
              </div>
            )}

            {/* Packaging and Action Footer Elements aligned tightly at the bottom */}
            <div className="mt-auto pt-6">
              <div className="text-[11px] font-bold tracking-wider text-[#273244]/50 uppercase">
                PACKAGING: 5KG, 10KG, 25KG, 50KG PP BAGS
              </div>

              <div className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-[#0a8f9c] group-hover:underline">
                Enquire on WhatsApp <span className="text-base transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </div>

        </article>
      </a>
    ))}
  </div>
);
// const VarietyGrid = ({
//   varieties,
//   typeName,
// }: {
//   varieties: RiceVariety[];
//   typeName: string;
// }) => (
//   <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
//     {varieties.map((v, i) => (
//       <a
//         key={v.slug}
//         href={getWhatsAppEnquiryUrl("Rice", `${typeName} - ${v.name}`)}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="trade-card group flex flex-col bg-white animate-reveal-up overflow-hidden"
//         style={{ animationDelay: `${i * 55}ms` }}
//       >
//         <div className="relative h-44 overflow-hidden">
//           <img
//             src={v.image}
//             alt={v.name}
//             className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//             loading="lazy"
//             decoding="async"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#121826]/65 via-transparent to-transparent" />
//         </div>
//         <div className="flex flex-1 flex-col p-4">
//           <h3 className="text-lg font-bold text-[#121826]">{v.name}</h3>
//           <p className="mt-1 text-xs text-[#273244]/60">{typeName}</p>
//           <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-bold text-[#0a8f9c]">
//             <MessageCircle size={14} /> Enquire on WhatsApp
//           </div>
//         </div>
//       </a>
//     ))}
//   </div>
// );

// ─── Reusable: sub-group chooser cards ───────────────────────────────────────

const SubGroupGrid = ({
  subGroups,
  basePath,
}: {
  subGroups: RiceSubGroup[];
  basePath: string;
}) => (
  <div className="grid gap-6 md:grid-cols-2">
    {subGroups.map((sg, i) => (
      <Link
        key={sg.slug}
        to={`${basePath}/${sg.slug}`}
        className="trade-card group bg-white animate-reveal-up overflow-hidden"
        style={{ animationDelay: `${i * 100}ms` }}
      >
        <div className="relative h-60 overflow-hidden">
          <img
            src={sg.coverImage}
            alt={sg.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121826]/85 via-[#121826]/20 to-transparent" />
          <span className="absolute left-4 top-4 bg-white px-3 py-1 text-xs font-bold text-[#121826]" style={{ borderRadius: "0.5rem" }}>
            {sg.varieties.length} varieties
          </span>
          <div className="absolute bottom-5 left-5 right-5">
            <h3 className="text-3xl text-white">{sg.name}</h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-sm leading-7 text-[#273244]/72">{sg.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {sg.varieties.slice(0, 4).map((v) => (
              <span key={v.slug} className="border border-[#121826]/10 bg-[#f5f8fb] px-3 py-1 text-xs font-bold text-[#273244]" style={{ borderRadius: "0.5rem" }}>
                {v.name}
              </span>
            ))}
            {sg.varieties.length > 4 && (
              <span className="border border-[#0a8f9c]/20 bg-[#0a8f9c]/5 px-3 py-1 text-xs font-bold text-[#0a8f9c]" style={{ borderRadius: "0.5rem" }}>
                +{sg.varieties.length - 4} more
              </span>
            )}
          </div>
          <div className="mt-5 font-bold text-[#0a8f9c]">View {sg.name} varieties →</div>
        </div>
      </Link>
    ))}
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const RicePage = () => {
  const { type, subgroup } = useParams<{ type?: string; subgroup?: string }>();

  // ── LEVEL 3: /products/rice/:type/:subgroup ──────────────────────────────
  if (type && subgroup) {
    const riceType = getRiceType(type);
    const sg = getRiceSubGroup(type, subgroup);

    if (!riceType || !sg) {
      return (
        <div className="min-h-screen bg-[#f5f8fb]">
          <Navbar />
          <main className="container mx-auto px-4 pt-36 pb-20">
            <h1 className="text-3xl">Not found</h1>
            <Link to="/products/rice" className="btn-primary mt-6 inline-flex">Back to Rice</Link>
          </main>
          <Footer />
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-[#f5f8fb]">
        <SEOMetadata
          title={`${sg.name} ${riceType.name} — Rice Exporter India`}
          description={sg.description}
          url={`https://sanderiexporters.com/products/rice/${type}/${subgroup}`}
        />
        <Navbar />
        <SocialSidebar />
        <WhatsAppFloating />
        <main>
          {/* Hero */}
          <section className="relative min-h-[45vh] overflow-hidden px-4 pb-12 pt-32 text-white md:pt-40">
            <div className="absolute inset-0">
              <img src={sg.coverImage} alt={sg.name} className="h-full w-full object-cover" fetchpriority="high" />
              <div className="hero-overlay absolute inset-0" />
              <div className="route-grid absolute inset-0" />
            </div>
            <div className="container relative mx-auto">
              {/* Breadcrumb */}
              <nav className="mb-5 flex flex-wrap items-center gap-2 text-sm text-white/70">
                <Link to="/" className="hover:text-white">Home</Link>
                <span>/</span>
                <Link to="/products" className="hover:text-white">Products</Link>
                <span>/</span>
                <Link to="/products/rice" className="hover:text-white">Rice</Link>
                <span>/</span>
                <Link to={`/products/rice/${type}`} className="hover:text-white">{riceType.name}</Link>
                <span>/</span>
                <span className="font-semibold text-white">{sg.name}</span>
              </nav>
              <span className="badge-premium">Rice Export</span>
              <h1 className="mt-4 text-4xl text-white md:text-5xl">{sg.name} — {riceType.name}</h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/76">{sg.description}</p>
            </div>
          </section>

          {/* Back bar */}
          <div className="border-b border-[#121826]/10 bg-white px-4 py-4">
            <div className="container mx-auto flex items-center gap-3">
              <Link to={`/products/rice/${type}`} className="inline-flex items-center gap-2 text-sm font-bold text-[#0a8f9c] hover:underline">
                <ArrowLeft size={15} /> Back to {riceType.name}
              </Link>
              <span className="text-[#121826]/30">·</span>
              <span className="text-sm text-[#273244]/60">{sg.varieties.length} varieties</span>
            </div>
          </div>

          {/* Variety grid */}
          <section className="px-4 py-16">
            <div className="container mx-auto">
              <span className="section-kicker">Choose variety</span>
              <h2 className="mt-3 mb-10">{sg.name} varieties — {riceType.name}</h2>
              <VarietyGrid varieties={sg.varieties} typeName={`${riceType.name} ${sg.name}`} />
            </div>
          </section>

          {/* WhatsApp CTA */}
          <section className="bg-[#121826] px-4 py-14 text-white">
            <div className="container mx-auto grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <span className="section-kicker text-white/76">Talk to export team</span>
                <h2 className="mt-3 text-white">Send product name and quantity. We guide MOQ, packaging and export details.</h2>
              </div>
              <a href={getWhatsAppEnquiryUrl("Rice", riceType.name)} target="_blank" rel="noopener noreferrer" className="btn-accent">
                WhatsApp Inquiry <MessageCircle size={17} />
              </a>
            </div>
          </section>

          {/* Added More Categories dynamically */}
          <MoreCategoriesSection />
        </main>
        <Footer />
      </div>
    );
  }

  // ── LEVEL 2: /products/rice/:type ────────────────────────────────────────
  if (type) {
    const riceType = getRiceType(type);

    if (!riceType) {
      return (
        <div className="min-h-screen bg-[#f5f8fb]">
          <Navbar />
          <main className="container mx-auto px-4 pt-36 pb-20">
            <h1 className="text-3xl">Type not found</h1>
            <Link to="/products/rice" className="btn-primary mt-6 inline-flex">Back to Rice</Link>
          </main>
          <Footer />
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-[#f5f8fb]">
        <SEOMetadata
          title={`${riceType.name} Exporter from India`}
          description={riceType.description}
          url={`https://sanderiexporters.com/products/rice/${type}`}
        />
        <Navbar />
        <SocialSidebar />
        <WhatsAppFloating />
        <main>
          {/* Hero */}
          <section className="relative min-h-[50vh] overflow-hidden px-4 pb-12 pt-32 text-white md:pt-40">
            <div className="absolute inset-0">
              <img src={riceType.coverImage} alt={riceType.name} className="h-full w-full object-cover" fetchpriority="high" />
              <div className="hero-overlay absolute inset-0" />
              <div className="route-grid absolute inset-0" />
            </div>
            <div className="container relative mx-auto">
              {/* Breadcrumb */}
              <nav className="mb-5 flex flex-wrap items-center gap-2 text-sm text-white/70">
                <Link to="/" className="hover:text-white">Home</Link>
                <span>/</span>
                <Link to="/products" className="hover:text-white">Products</Link>
                <span>/</span>
                <Link to="/products/rice" className="hover:text-white">Rice</Link>
                <span>/</span>
                <span className="font-semibold text-white">{riceType.name}</span>
              </nav>
              <span className="badge-premium">Rice Export</span>
              <h1 className="mt-4 text-4xl text-white md:text-5xl">{riceType.name}</h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/76">{riceType.description}</p>
            </div>
          </section>

          {/* Back bar */}
          <div className="border-b border-[#121826]/10 bg-white px-4 py-4">
            <div className="container mx-auto">
              <Link to="/products/rice" className="inline-flex items-center gap-2 text-sm font-bold text-[#0a8f9c] hover:underline">
                <ArrowLeft size={15} /> Back to Rice types
              </Link>
            </div>
          </div>

          <section className="px-4 py-16">
            <div className="container mx-auto">
              {/* Non-Basmati: show sub-group chooser */}
              {riceType.subGroups ? (
                <>
                  <span className="section-kicker">Choose type</span>
                  <h2 className="mt-3 mb-10">Select {riceType.name} type</h2>
                  <SubGroupGrid subGroups={riceType.subGroups} basePath={`/products/rice/${type}`} />
                </>
              ) : (
                /* Basmati: show varieties directly */
                <>
                  <span className="section-kicker">Choose variety</span>
                  <h2 className="mt-3 mb-10">{riceType.name} varieties</h2>
                  <VarietyGrid varieties={riceType.varieties ?? []} typeName={riceType.name} />
                </>
              )}
            </div>
          </section>

          {/* WhatsApp CTA */}
          <section className="bg-[#121826] px-4 py-14 text-white">
            <div className="container mx-auto grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <span className="section-kicker text-white/76">Talk to export team</span>
                <h2 className="mt-3 text-white">Send product name and quantity. We guide MOQ, packaging and export details.</h2>
              </div>
              <a href={getWhatsAppEnquiryUrl("Rice", riceType.name)} target="_blank" rel="noopener noreferrer" className="btn-accent">
                WhatsApp Inquiry <MessageCircle size={17} />
              </a>
            </div>
          </section>

          {/* Added More Categories dynamically */}
          <MoreCategoriesSection />
        </main>
        <Footer />
      </div>
    );
  }

  // ── LEVEL 1: /products/rice ──────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#f5f8fb]">
      <SEOMetadata
        title="Rice Exporter from India — Basmati and Non-Basmati"
        description="Sanderi Exporters supplies basmati (1121, 1509, Pusa, Sharbati) and non-basmati rice (IR64, Sona Masoori, Parboiled, PR varieties) for worldwide importers."
        url="https://sanderiexporters.com/products/rice"
      />
      <Navbar />
      <SocialSidebar />
      <WhatsAppFloating />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] overflow-hidden px-4 pb-14 pt-32 text-white md:pt-40">
          <div className="absolute inset-0">
            <img src={riceImg} alt="Rice export from India" className="h-full w-full object-cover" fetchpriority="high" />
            <div className="hero-overlay absolute inset-0" />
            <div className="route-grid absolute inset-0" />
          </div>
          <div className="container relative mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-5 flex items-center gap-2 text-sm text-white/70">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-white">Products</Link>
              <span>/</span>
              <span className="font-semibold text-white">Rice</span>
            </nav>
            <span className="badge-premium">Basmati, non-basmati and bulk rice supply</span>
            <h1 className="mt-5 text-5xl text-white md:text-7xl">Export Quality Rice from India</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/76">
              Premium rice varieties for importers, distributors, wholesalers, and private label buyers worldwide.
            </p>
          </div>
        </section>

        {/* Rice type chooser */}
        <section className="px-4 py-16">
          <div className="container mx-auto">
            <div className="mb-6">
              <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-[#0a8f9c] hover:underline">
                <ArrowLeft size={15} /> Back to all categories
              </Link>
            </div>
            <span className="section-kicker block mt-4">Choose rice type</span>
            <h2 className="mt-3 mb-10">Select a type to see all varieties</h2>

            <div className="grid gap-6 md:grid-cols-2">
              {riceTypes.map((rt, i) => {
                const totalVarieties =
                  rt.varieties?.length ??
                  rt.subGroups?.reduce((acc, sg) => acc + sg.varieties.length, 0) ?? 0;

                return (
                  <Link
                    key={rt.slug}
                    to={`/products/rice/${rt.slug}`}
                    className="trade-card group bg-white animate-reveal-up overflow-hidden"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={rt.coverImage}
                        alt={rt.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121826]/85 via-[#121826]/20 to-transparent" />
                      <span className="absolute left-4 top-4 bg-white px-3 py-1 text-xs font-bold text-[#121826]" style={{ borderRadius: "0.5rem" }}>
                        {totalVarieties} varieties
                      </span>
                      <div className="absolute bottom-5 left-5 right-5">
                        <h3 className="text-3xl text-white">{rt.name}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm leading-7 text-[#273244]/72">{rt.description}</p>
                      {/* Show sub-group names as chips for Non-Basmati */}
                      {rt.subGroups && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {rt.subGroups.map((sg) => (
                            <span key={sg.slug} className="border border-[#121826]/10 bg-[#f5f8fb] px-3 py-1 text-xs font-bold text-[#273244]" style={{ borderRadius: "0.5rem" }}>
                              {sg.name}
                            </span>
                          ))}
                        </div>
                      )}
                      {/* Show first 4 variety names for Basmati */}
                      {rt.varieties && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {rt.varieties.slice(0, 4).map((v) => (
                            <span key={v.slug} className="border border-[#121826]/10 bg-[#f5f8fb] px-3 py-1 text-xs font-bold text-[#273244]" style={{ borderRadius: "0.5rem" }}>
                              {v.name}
                            </span>
                          ))}
                          <span className="border border-[#0a8f9c]/20 bg-[#0a8f9c]/5 px-3 py-1 text-xs font-bold text-[#0a8f9c]" style={{ borderRadius: "0.5rem" }}>
                            +{rt.varieties.length - 4} more
                          </span>
                        </div>
                      )}
                      <div className="mt-5 font-bold text-[#0a8f9c]">
                        View {rt.name} →
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Added More Categories dynamically */}
        <MoreCategoriesSection />
      </main>
      <Footer />
    </div>
  );
};

export default RicePage;


// // src/pages/RicePage.tsx
// // Level 1: /products/rice               → Basmati | Non-Basmati chooser
// // Level 2: /products/rice/basmati       → 13 variety cards (direct WhatsApp)
// //          /products/rice/non-basmati   → Non Parboiled | Parboiled chooser
// // Level 3: /products/rice/non-basmati/non-parboiled → 10 variety cards
// //          /products/rice/non-basmati/parboiled      → 10 variety cards

// import { ArrowLeft, MessageCircle } from "lucide-react";
// import { Link, useParams } from "react-router-dom";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// import SEOMetadata from "@/components/SEOMetadata";
// import SocialSidebar from "@/components/SocialSidebar";
// import WhatsAppFloating from "@/components/WhatsAppFloating";
// import { riceTypes, getRiceType, getRiceSubGroup, RiceVariety, RiceSubGroup } from "@/data/riceData";
// import { getWhatsAppEnquiryUrl } from "@/data/productCatalog";
// import riceImg from "@/assets/rice.jpg";

// // ─── Reusable: variety card grid ─────────────────────────────────────────────

// const VarietyGrid = ({
//   varieties,
//   typeName,
// }: {
//   varieties: RiceVariety[];
//   typeName: string;
// }) => (
//   <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
//     {varieties.map((v, i) => (
//       <a
//         key={v.slug}
//         href={getWhatsAppEnquiryUrl("Rice", `${typeName} - ${v.name}`)}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="trade-card group flex flex-col bg-white animate-reveal-up overflow-hidden"
//         style={{ animationDelay: `${i * 55}ms` }}
//       >
//         <div className="relative h-44 overflow-hidden">
//           <img
//             src={v.image}
//             alt={v.name}
//             className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//             loading="lazy"
//             decoding="async"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#121826]/65 via-transparent to-transparent" />
//         </div>
//         <div className="flex flex-1 flex-col p-4">
//           <h3 className="text-lg font-bold text-[#121826]">{v.name}</h3>
//           <p className="mt-1 text-xs text-[#273244]/60">{typeName}</p>
//           <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-bold text-[#0a8f9c]">
//             <MessageCircle size={14} /> Enquire on WhatsApp
//           </div>
//         </div>
//       </a>
//     ))}
//   </div>
// );

// // ─── Reusable: sub-group chooser cards ───────────────────────────────────────

// const SubGroupGrid = ({
//   subGroups,
//   basePath,
// }: {
//   subGroups: RiceSubGroup[];
//   basePath: string;
// }) => (
//   <div className="grid gap-6 md:grid-cols-2">
//     {subGroups.map((sg, i) => (
//       <Link
//         key={sg.slug}
//         to={`${basePath}/${sg.slug}`}
//         className="trade-card group bg-white animate-reveal-up overflow-hidden"
//         style={{ animationDelay: `${i * 100}ms` }}
//       >
//         <div className="relative h-60 overflow-hidden">
//           <img
//             src={sg.coverImage}
//             alt={sg.name}
//             className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//             loading="lazy"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#121826]/85 via-[#121826]/20 to-transparent" />
//           <span className="absolute left-4 top-4 bg-white px-3 py-1 text-xs font-bold text-[#121826]" style={{ borderRadius: "0.5rem" }}>
//             {sg.varieties.length} varieties
//           </span>
//           <div className="absolute bottom-5 left-5 right-5">
//             <h3 className="text-3xl text-white">{sg.name}</h3>
//           </div>
//         </div>
//         <div className="p-6">
//           <p className="text-sm leading-7 text-[#273244]/72">{sg.description}</p>
//           <div className="mt-4 flex flex-wrap gap-2">
//             {sg.varieties.slice(0, 4).map((v) => (
//               <span key={v.slug} className="border border-[#121826]/10 bg-[#f5f8fb] px-3 py-1 text-xs font-bold text-[#273244]" style={{ borderRadius: "0.5rem" }}>
//                 {v.name}
//               </span>
//             ))}
//             {sg.varieties.length > 4 && (
//               <span className="border border-[#0a8f9c]/20 bg-[#0a8f9c]/5 px-3 py-1 text-xs font-bold text-[#0a8f9c]" style={{ borderRadius: "0.5rem" }}>
//                 +{sg.varieties.length - 4} more
//               </span>
//             )}
//           </div>
//           <div className="mt-5 font-bold text-[#0a8f9c]">View {sg.name} varieties →</div>
//         </div>
//       </Link>
//     ))}
//   </div>
// );

// // ─── Main Component ───────────────────────────────────────────────────────────

// const RicePage = () => {
//   const { type, subgroup } = useParams<{ type?: string; subgroup?: string }>();

//   // ── LEVEL 3: /products/rice/:type/:subgroup ──────────────────────────────
//   if (type && subgroup) {
//     const riceType = getRiceType(type);
//     const sg = getRiceSubGroup(type, subgroup);

//     if (!riceType || !sg) {
//       return (
//         <div className="min-h-screen bg-[#f5f8fb]">
//           <Navbar />
//           <main className="container mx-auto px-4 pt-36 pb-20">
//             <h1 className="text-3xl">Not found</h1>
//             <Link to="/products/rice" className="btn-primary mt-6 inline-flex">Back to Rice</Link>
//           </main>
//           <Footer />
//         </div>
//       );
//     }

//     return (
//       <div className="min-h-screen bg-[#f5f8fb]">
//         <SEOMetadata
//           title={`${sg.name} ${riceType.name} — Rice Exporter India`}
//           description={sg.description}
//           url={`https://sanderiexporters.com/products/rice/${type}/${subgroup}`}
//         />
//         <Navbar />
//         <SocialSidebar />
//         <WhatsAppFloating />
//         <main>
//           {/* Hero */}
//           <section className="relative min-h-[45vh] overflow-hidden px-4 pb-12 pt-32 text-white md:pt-40">
//             <div className="absolute inset-0">
//               <img src={sg.coverImage} alt={sg.name} className="h-full w-full object-cover" fetchpriority="high" />
//               <div className="hero-overlay absolute inset-0" />
//               <div className="route-grid absolute inset-0" />
//             </div>
//             <div className="container relative mx-auto">
//               {/* Breadcrumb */}
//               <nav className="mb-5 flex flex-wrap items-center gap-2 text-sm text-white/70">
//                 <Link to="/" className="hover:text-white">Home</Link>
//                 <span>/</span>
//                 <Link to="/products" className="hover:text-white">Products</Link>
//                 <span>/</span>
//                 <Link to="/products/rice" className="hover:text-white">Rice</Link>
//                 <span>/</span>
//                 <Link to={`/products/rice/${type}`} className="hover:text-white">{riceType.name}</Link>
//                 <span>/</span>
//                 <span className="font-semibold text-white">{sg.name}</span>
//               </nav>
//               <span className="badge-premium">Rice Export</span>
//               <h1 className="mt-4 text-4xl text-white md:text-5xl">{sg.name} — {riceType.name}</h1>
//               <p className="mt-4 max-w-2xl text-lg leading-8 text-white/76">{sg.description}</p>
//             </div>
//           </section>

//           {/* Back bar */}
//           <div className="border-b border-[#121826]/10 bg-white px-4 py-4">
//             <div className="container mx-auto flex items-center gap-3">
//               <Link to={`/products/rice/${type}`} className="inline-flex items-center gap-2 text-sm font-bold text-[#0a8f9c] hover:underline">
//                 <ArrowLeft size={15} /> Back to {riceType.name}
//               </Link>
//               <span className="text-[#121826]/30">·</span>
//               <span className="text-sm text-[#273244]/60">{sg.varieties.length} varieties</span>
//             </div>
//           </div>

//           {/* Variety grid */}
//           <section className="px-4 py-16">
//             <div className="container mx-auto">
//               <span className="section-kicker">Choose variety</span>
//               <h2 className="mt-3 mb-10">{sg.name} varieties — {riceType.name}</h2>
//               <VarietyGrid varieties={sg.varieties} typeName={`${riceType.name} ${sg.name}`} />
//             </div>
//           </section>

//           {/* WhatsApp CTA */}
//           <section className="bg-[#121826] px-4 py-14 text-white">
//             <div className="container mx-auto grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
//               <div>
//                 <span className="section-kicker text-white/76">Talk to export team</span>
//                 <h2 className="mt-3 text-white">Send product name and quantity. We guide MOQ, packaging and export details.</h2>
//               </div>
//               <a href={getWhatsAppEnquiryUrl("Rice", riceType.name)} target="_blank" rel="noopener noreferrer" className="btn-accent">
//                 WhatsApp Inquiry <MessageCircle size={17} />
//               </a>
//             </div>
//           </section>
//         </main>
//         <Footer />
//       </div>
//     );
//   }

//   // ── LEVEL 2: /products/rice/:type ────────────────────────────────────────
//   if (type) {
//     const riceType = getRiceType(type);

//     if (!riceType) {
//       return (
//         <div className="min-h-screen bg-[#f5f8fb]">
//           <Navbar />
//           <main className="container mx-auto px-4 pt-36 pb-20">
//             <h1 className="text-3xl">Type not found</h1>
//             <Link to="/products/rice" className="btn-primary mt-6 inline-flex">Back to Rice</Link>
//           </main>
//           <Footer />
//         </div>
//       );
//     }

//     return (
//       <div className="min-h-screen bg-[#f5f8fb]">
//         <SEOMetadata
//           title={`${riceType.name} Exporter from India`}
//           description={riceType.description}
//           url={`https://sanderiexporters.com/products/rice/${type}`}
//         />
//         <Navbar />
//         <SocialSidebar />
//         <WhatsAppFloating />
//         <main>
//           {/* Hero */}
//           <section className="relative min-h-[50vh] overflow-hidden px-4 pb-12 pt-32 text-white md:pt-40">
//             <div className="absolute inset-0">
//               <img src={riceType.coverImage} alt={riceType.name} className="h-full w-full object-cover" fetchpriority="high" />
//               <div className="hero-overlay absolute inset-0" />
//               <div className="route-grid absolute inset-0" />
//             </div>
//             <div className="container relative mx-auto">
//               {/* Breadcrumb */}
//               <nav className="mb-5 flex flex-wrap items-center gap-2 text-sm text-white/70">
//                 <Link to="/" className="hover:text-white">Home</Link>
//                 <span>/</span>
//                 <Link to="/products" className="hover:text-white">Products</Link>
//                 <span>/</span>
//                 <Link to="/products/rice" className="hover:text-white">Rice</Link>
//                 <span>/</span>
//                 <span className="font-semibold text-white">{riceType.name}</span>
//               </nav>
//               <span className="badge-premium">Rice Export</span>
//               <h1 className="mt-4 text-4xl text-white md:text-5xl">{riceType.name}</h1>
//               <p className="mt-4 max-w-2xl text-lg leading-8 text-white/76">{riceType.description}</p>
//             </div>
//           </section>

//           {/* Back bar */}
//           <div className="border-b border-[#121826]/10 bg-white px-4 py-4">
//             <div className="container mx-auto">
//               <Link to="/products/rice" className="inline-flex items-center gap-2 text-sm font-bold text-[#0a8f9c] hover:underline">
//                 <ArrowLeft size={15} /> Back to Rice types
//               </Link>
//             </div>
//           </div>

//           <section className="px-4 py-16">
//             <div className="container mx-auto">
//               {/* Non-Basmati: show sub-group chooser */}
//               {riceType.subGroups ? (
//                 <>
//                   <span className="section-kicker">Choose type</span>
//                   <h2 className="mt-3 mb-10">Select {riceType.name} type</h2>
//                   <SubGroupGrid subGroups={riceType.subGroups} basePath={`/products/rice/${type}`} />
//                 </>
//               ) : (
//                 /* Basmati: show varieties directly */
//                 <>
//                   <span className="section-kicker">Choose variety</span>
//                   <h2 className="mt-3 mb-10">{riceType.name} varieties</h2>
//                   <VarietyGrid varieties={riceType.varieties ?? []} typeName={riceType.name} />
//                 </>
//               )}
//             </div>
//           </section>

//           {/* WhatsApp CTA */}
//           <section className="bg-[#121826] px-4 py-14 text-white">
//             <div className="container mx-auto grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
//               <div>
//                 <span className="section-kicker text-white/76">Talk to export team</span>
//                 <h2 className="mt-3 text-white">Send product name and quantity. We guide MOQ, packaging and export details.</h2>
//               </div>
//               <a href={getWhatsAppEnquiryUrl("Rice", riceType.name)} target="_blank" rel="noopener noreferrer" className="btn-accent">
//                 WhatsApp Inquiry <MessageCircle size={17} />
//               </a>
//             </div>
//           </section>
//         </main>
//         <Footer />
//       </div>
//     );
//   }

//   // ── LEVEL 1: /products/rice ──────────────────────────────────────────────
//   return (
//     <div className="min-h-screen bg-[#f5f8fb]">
//       <SEOMetadata
//         title="Rice Exporter from India — Basmati and Non-Basmati"
//         description="Sanderi Exporters supplies basmati (1121, 1509, Pusa, Sharbati) and non-basmati rice (IR64, Sona Masoori, Parboiled, PR varieties) for worldwide importers."
//         url="https://sanderiexporters.com/products/rice"
//       />
//       <Navbar />
//       <SocialSidebar />
//       <WhatsAppFloating />
//       <main>
//         {/* Hero */}
//         <section className="relative min-h-[60vh] overflow-hidden px-4 pb-14 pt-32 text-white md:pt-40">
//           <div className="absolute inset-0">
//             <img src={riceImg} alt="Rice export from India" className="h-full w-full object-cover" fetchpriority="high" />
//             <div className="hero-overlay absolute inset-0" />
//             <div className="route-grid absolute inset-0" />
//           </div>
//           <div className="container relative mx-auto">
//             {/* Breadcrumb */}
//             <nav className="mb-5 flex items-center gap-2 text-sm text-white/70">
//               <Link to="/" className="hover:text-white">Home</Link>
//               <span>/</span>
//               <Link to="/products" className="hover:text-white">Products</Link>
//               <span>/</span>
//               <span className="font-semibold text-white">Rice</span>
//             </nav>
//             <span className="badge-premium">Basmati, non-basmati and bulk rice supply</span>
//             <h1 className="mt-5 text-5xl text-white md:text-7xl">Export Quality Rice from India</h1>
//             <p className="mt-5 max-w-3xl text-lg leading-8 text-white/76">
//               Premium rice varieties for importers, distributors, wholesalers, and private label buyers worldwide.
//             </p>
//           </div>
//         </section>

//         {/* Rice type chooser */}
//         <section className="px-4 py-16">
//           <div className="container mx-auto">
//             <div className="mb-6">
//               <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-[#0a8f9c] hover:underline">
//                 <ArrowLeft size={15} /> Back to all categories
//               </Link>
//             </div>
//             <span className="section-kicker block mt-4">Choose rice type</span>
//             <h2 className="mt-3 mb-10">Select a type to see all varieties</h2>

//             <div className="grid gap-6 md:grid-cols-2">
//               {riceTypes.map((rt, i) => {
//                 const totalVarieties =
//                   rt.varieties?.length ??
//                   rt.subGroups?.reduce((acc, sg) => acc + sg.varieties.length, 0) ?? 0;

//                 return (
//                   <Link
//                     key={rt.slug}
//                     to={`/products/rice/${rt.slug}`}
//                     className="trade-card group bg-white animate-reveal-up overflow-hidden"
//                     style={{ animationDelay: `${i * 100}ms` }}
//                   >
//                     <div className="relative h-64 overflow-hidden">
//                       <img
//                         src={rt.coverImage}
//                         alt={rt.name}
//                         className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                         loading="lazy"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-[#121826]/85 via-[#121826]/20 to-transparent" />
//                       <span className="absolute left-4 top-4 bg-white px-3 py-1 text-xs font-bold text-[#121826]" style={{ borderRadius: "0.5rem" }}>
//                         {totalVarieties} varieties
//                       </span>
//                       <div className="absolute bottom-5 left-5 right-5">
//                         <h3 className="text-3xl text-white">{rt.name}</h3>
//                       </div>
//                     </div>
//                     <div className="p-6">
//                       <p className="text-sm leading-7 text-[#273244]/72">{rt.description}</p>
//                       {/* Show sub-group names as chips for Non-Basmati */}
//                       {rt.subGroups && (
//                         <div className="mt-4 flex flex-wrap gap-2">
//                           {rt.subGroups.map((sg) => (
//                             <span key={sg.slug} className="border border-[#121826]/10 bg-[#f5f8fb] px-3 py-1 text-xs font-bold text-[#273244]" style={{ borderRadius: "0.5rem" }}>
//                               {sg.name}
//                             </span>
//                           ))}
//                         </div>
//                       )}
//                       {/* Show first 4 variety names for Basmati */}
//                       {rt.varieties && (
//                         <div className="mt-4 flex flex-wrap gap-2">
//                           {rt.varieties.slice(0, 4).map((v) => (
//                             <span key={v.slug} className="border border-[#121826]/10 bg-[#f5f8fb] px-3 py-1 text-xs font-bold text-[#273244]" style={{ borderRadius: "0.5rem" }}>
//                               {v.name}
//                             </span>
//                           ))}
//                           <span className="border border-[#0a8f9c]/20 bg-[#0a8f9c]/5 px-3 py-1 text-xs font-bold text-[#0a8f9c]" style={{ borderRadius: "0.5rem" }}>
//                             +{rt.varieties.length - 4} more
//                           </span>
//                         </div>
//                       )}
//                       <div className="mt-5 font-bold text-[#0a8f9c]">
//                         View {rt.name} →
//                       </div>
//                     </div>
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default RicePage;