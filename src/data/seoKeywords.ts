import { productCategories } from "./productCatalog";

const markets = [
  "UAE",
  "Dubai",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
  "Saudi Arabia",
  "Gulf",
  "Middle East",
  "Africa",
  "India",
];

const descriptors = [
  "export",
  "exporter",
  "supplier",
  "wholesale",
  "bulk",
  "private label",
  "packaging",
  "quality",
  "certified",
  "organic",
  "premium",
  "best price",
  "shipping",
  "FOB",
  "CIF",
  "MOQ",
];

const extras = [
  "for restaurants",
  "for supermarkets",
  "for distributors",
  "for importers",
  "for processors",
  "food grade",
  "sorted",
  "cleaned",
  "graded",
  "export ready",
];

const keywordSet = new Set<string>();

// Seed with base company and category phrases
keywordSet.add("Sanderi Exporters");
keywordSet.add("Ahmedabad exporters");
keywordSet.add("India agricultural exporters");

productCategories.forEach((cat) => {
  // basic category keywords
  keywordSet.add(`${cat.name} exporter`);
  keywordSet.add(`${cat.name} export from India`);
  keywordSet.add(`${cat.name} suppliers in India`);
  keywordSet.add(`${cat.name} wholesale`);

  // varieties
  cat.varieties.forEach((v) => {
    keywordSet.add(`${v.name} exporter`);
    keywordSet.add(`${v.name} export from India`);
    keywordSet.add(`${v.name} wholesale supplier`);

    markets.forEach((m) => {
      keywordSet.add(`${v.name} exporter ${m}`);
      keywordSet.add(`${v.name} supplier ${m}`);
      keywordSet.add(`${cat.name} to ${m}`);
    });

    descriptors.forEach((d) => {
      keywordSet.add(`${v.name} ${d}`);
      extras.forEach((ex) => keywordSet.add(`${v.name} ${d} ${ex}`));
    });
  });

  // combine category with descriptors and markets
  descriptors.forEach((d) => {
    keywordSet.add(`${cat.name} ${d}`);
    markets.forEach((m) => keywordSet.add(`${cat.name} ${d} ${m}`));
    extras.forEach((ex) => keywordSet.add(`${cat.name} ${d} ${ex}`));
  });
});

// additional permutations using packaging and common queries
const packaging = ["5kg", "10kg", "25kg", "50kg", "PP bags", "jute bags", "private label"];
productCategories.forEach((cat) => {
  packaging.forEach((p) => keywordSet.add(`${cat.name} ${p}`));
  cat.varieties.forEach((v) => {
    packaging.forEach((p) => keywordSet.add(`${v.name} ${p}`));
  });
});

// common buyer queries
["buy", "price", "price list", "catalog", "samples", "MOQ", "contact"].forEach((q) => {
  productCategories.forEach((cat) => keywordSet.add(`${q} ${cat.name} from India`));
  productCategories.forEach((cat) => cat.varieties.forEach((v) => keywordSet.add(`${q} ${v.name} from India`)));
});

// Expand with market-focused long tail
const regions = ["Gulf countries", "Middle East", "North Africa", "East Africa", "West Africa"];
productCategories.forEach((cat) => {
  regions.forEach((r) => {
    keywordSet.add(`${cat.name} exporters to ${r}`);
    cat.varieties.forEach((v) => keywordSet.add(`${v.name} suppliers to ${r}`));
  });
});

// If set size < 1000, create additional combinatory phrases programmatically
const baseWords = ["best", "top", "leading", "reliable", "trusted", "affordable", "quality", "fresh"];
const marketsSmall = ["UAE", "India", "Kenya", "Nigeria", "Egypt", "Saudi Arabia"];

let i = 0;
const catNames = productCategories.map((c) => c.name);
while (keywordSet.size < 1000 && i < 10000) {
  const cat = catNames[i % catNames.length];
  const word = baseWords[i % baseWords.length];
  const m = marketsSmall[i % marketsSmall.length];
  keywordSet.add(`${word} ${cat} supplier ${m}`);
  i++;
}

export const seoKeywords = Array.from(keywordSet).slice(0, 1000);
export const seoKeywordsString = seoKeywords.join(", ");

export default seoKeywords;
