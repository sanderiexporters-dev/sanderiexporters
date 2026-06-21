import { useEffect } from "react";
import { seoKeywordsString } from "@/data/seoKeywords";
import { company, defaultSeo, siteUrl } from "@/data/siteMetadata";

interface SEOMetadataProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  author?: string;
  type?: "website" | "article" | "product";
  twitterHandle?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  robots?: string;
}

const SEOMetadata = ({
  title = defaultSeo.title,
  description = defaultSeo.description,
  keywords = seoKeywordsString,
  image = company.logo,
  url = siteUrl,
  author = company.name,
  type = "website",
  twitterHandle = "@SanderiExporters",
  schema,
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
}: SEOMetadataProps) => {
  useEffect(() => {
    const fullTitle = `${title} | Sanderi Exporters`;
    document.documentElement.lang = "en";

    document.title = fullTitle;

    const metaTags = [
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "author", content: author },
      { name: "robots", content: robots },
      { name: "googlebot", content: robots },
      { property: "og:type", content: type },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:url", content: url },
      { property: "og:site_name", content: "Sanderi Exporters" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      { name: "twitter:site", content: twitterHandle },
      { name: "theme-color", content: "#0a8f9c" },
    ];

    metaTags.forEach((meta) => {
      let element = document.querySelector(
        meta.name
          ? `meta[name="${meta.name}"]`
          : `meta[property="${meta.property}"]`
      ) as HTMLMetaElement;

      if (!element) {
        element = document.createElement("meta");
        if (meta.name) element.setAttribute("name", meta.name);
        if (meta.property) element.setAttribute("property", meta.property);
        document.head.appendChild(element);
      }

      element.content = meta.content;
    });

    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    let structuredData = document.querySelector("#page-seo-schema") as HTMLScriptElement;
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.id = "page-seo-schema";
      structuredData.type = "application/ld+json";
      document.head.appendChild(structuredData);
    }

    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: company.name,
      legalName: company.legalName,
      url: siteUrl,
      logo: company.logo,
      image: company.logo,
      email: company.email,
      telephone: company.phone,
      sameAs: company.sameAs,
      address: {
        "@type": "PostalAddress",
        ...company.address,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: company.phone,
          contactType: "sales",
          areaServed: "Worldwide",
          availableLanguage: ["English", "Hindi", "Gujarati"],
        },
      ],
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: company.name,
      publisher: { "@id": `${siteUrl}/#organization` },
    };

    const pageSchema =
      schema ??
      (type === "article"
        ? {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description: description,
            image: image,
            author: { "@type": "Organization", name: author },
            publisher: { "@id": `${siteUrl}/#organization` },
          }
        : type === "product"
          ? {
              "@context": "https://schema.org",
              "@type": "Product",
              name: title,
              description: description,
              image: image,
              brand: { "@type": "Brand", name: "Sanderi Exporters" },
              manufacturer: { "@id": `${siteUrl}/#organization` },
            }
          : {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": `${url}#webpage`,
              name: title,
              description: description,
              url: url,
              isPartOf: { "@id": `${siteUrl}/#website` },
              publisher: { "@id": `${siteUrl}/#organization` },
              keywords: keywords,
            });

    const schemaGraph = Array.isArray(pageSchema)
      ? [orgSchema, websiteSchema, ...pageSchema]
      : [orgSchema, websiteSchema, pageSchema];

    structuredData.textContent = JSON.stringify(schemaGraph);

    window.scrollTo(0, 0);
  }, [title, description, keywords, image, url, author, type, twitterHandle, schema, robots]);

  return null;
};

export default SEOMetadata;
