import { ArrowRight, Boxes, Globe2, Search, Ship } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductSlider from "@/components/ProductSlider";
import SEOMetadata from "@/components/SEOMetadata";
import SocialSidebar from "@/components/SocialSidebar";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import heroBg from "@/assets/hero-bg.jpg";
import { productCategories } from "@/data/productCatalog";
import { company, siteUrl } from "@/data/siteMetadata";

const Products = () => {
  const productsUrl = `${siteUrl}/products`;

  return (
    <div className="min-h-screen bg-[#f5f8fb]">
      <SEOMetadata
        title="Export Product Categories from India"
        description="Explore export-ready rice, spices, peanuts, sesame seeds, pulses and fresh produce from Sanderi Exporters in Ahmedabad, India for worldwide importers and wholesale buyers."
        keywords="export product categories India, rice exporter India, spices exporter India, peanut exporter India, sesame seeds exporter, pulses exporter India, fresh produce exporter Ahmedabad"
        url={productsUrl}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": `${productsUrl}#webpage`,
            name: "Export Product Categories from India",
            description:
              "Export-ready agricultural product categories supplied by Sanderi Exporters for worldwide importers.",
            url: productsUrl,
            isPartOf: { "@id": `${siteUrl}/#website` },
            publisher: { "@id": `${siteUrl}/#organization` },
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Sanderi Exporters Product Categories",
            itemListElement: productCategories.map((category, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `${siteUrl}/products/${category.slug}`,
              name: `${category.name} Export`,
              description: category.description,
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
              { "@type": "ListItem", position: 2, name: "Products", item: productsUrl },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "ContactPoint",
            telephone: company.phone,
            contactType: "sales",
            areaServed: "Worldwide",
          },
        ]}
      />

      <Navbar />
      <SocialSidebar />
      <WhatsAppFloating />

      <main>
        <section className="relative min-h-[74vh] overflow-hidden px-4 pb-16 pt-32 text-white md:pt-40">
          <div className="absolute inset-0">
            <img src={heroBg} alt="Worldwide import export product categories" className="h-full w-full object-cover" />
            <div className="hero-overlay absolute inset-0" />
            <div className="route-grid absolute inset-0" />
          </div>
          <span className="route-line left-[10%] top-[34%] w-56 rotate-6" />
          <span className="route-line left-[54%] top-[60%] w-48 -rotate-12" style={{ animationDelay: "700ms" }} />

          <div className="container relative mx-auto">
            <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-end">
              <div className="animate-reveal-up">
                <span className="badge-premium">Product categories</span>
                <h1 className="mt-6 max-w-4xl text-5xl text-white md:text-7xl">
                  Moving export desk for global buyers.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
                  Choose a category to go deeper into exact product names, export specifications, packaging options, and direct WhatsApp enquiries. Built for worldwide importers, wholesalers, distributors, private label buyers, and bulk trade partners.
                </p>
              </div>

              <div className="grid gap-3 md:justify-end">
                {[
                  { icon: <Search size={18} />, title: "Category to variety", text: "Rice opens basmati, IR64, parboiled and more" },
                  { icon: <Boxes size={18} />, title: "Packaging details", text: "Bulk bags, cartons, retail and private label" },
                  { icon: <Ship size={18} />, title: "Export support", text: "MOQ, documentation and shipment planning" },
                ].map((item) => (
                  <div key={item.title} className="flex max-w-md items-start gap-3 border border-white/14 bg-white/8 p-4 backdrop-blur-md" style={{ borderRadius: "0.5rem" }}>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#f59e0b] text-[#121826]" style={{ borderRadius: "0.5rem" }}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-white/62">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ProductSlider compact />

        <section className="px-4 py-20">
          <div className="container mx-auto">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="section-kicker">Explore product categories</span>
                <h2 className="mt-3">Click category, then choose exact product name</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-[#273244]/70">
                Every product category has its own page. For example, Rice opens Basmati Rice, Non-Basmati Rice, Sona Masoori, IR64, Parboiled Rice and Broken Rice. Spices opens Turmeric, Cumin, Red Chilli and more.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {productCategories.map((category, index) => (
                <Link
                  key={category.slug}
                  to={`/products/${category.slug}`}
                  className="trade-card group bg-white animate-reveal-up"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={category.image}
                      alt={`${category.name} export category`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121826]/88 via-[#121826]/18 to-transparent" />
                    <span
                      className="absolute left-4 top-4 bg-white px-3 py-1 text-xs font-bold text-[#121826]"
                      style={{ borderRadius: "0.5rem" }}
                    >
                      {category.varieties.length} names
                    </span>
                    <div className="absolute bottom-5 left-5 right-5">
                      <h3 className="text-3xl text-white">{category.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/72">{category.kicker}</p>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-sm leading-7 text-[#273244]/72">{category.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {category.varieties.slice(0, 4).map((variety) => (
                        <span
                          key={variety.slug}
                          className="border border-[#121826]/10 bg-[#f5f8fb] px-3 py-1.5 text-xs font-bold text-[#273244]"
                          style={{ borderRadius: "0.5rem" }}
                        >
                          {variety.name}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 inline-flex items-center gap-2 font-bold text-[#0a8f9c]">
                      Open {category.name} page <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#121826]/10 bg-white px-4 py-16">
          <div className="container mx-auto grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <span className="section-kicker">SEO worldwide content</span>
              <h2 className="mt-3">Export products for importers across global markets</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Rice, spices, oil seeds, pulses and fresh produce sourced from India",
                "Wholesale supply for distributors, food processors and retail packers",
                "Private label packaging, buyer brand labels and bulk shipment support",
                "Import export documentation, container planning and responsive trade communication",
              ].map((item) => (
                <div key={item} className="border-l-4 border-[#0a8f9c] bg-[#f5f8fb] p-4 text-sm font-semibold text-[#273244]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#121826] px-4 py-16 text-white">
          <div className="container mx-auto grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="section-kicker text-white/78">Need a formal quote?</span>
              <h2 className="mt-3 text-white">Send product, quantity, destination and packaging requirement.</h2>
            </div>
            <Link to="/contact" className="btn-accent">
              Contact Sales <Globe2 size={17} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
