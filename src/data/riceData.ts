// src/data/riceData.ts

// ─── Basmati Rice images ──────────────────────────────────────────────────────
import Basmati_1121_GS from "@/assets/Rice/Basmati Rice/1121_GS.jpg";
import Basmati_1121_WS from "@/assets/Rice/Basmati Rice/1121_WS.jpg";
import Basmati_1401_GS from "@/assets/Rice/Basmati Rice/1401_GS.jpg";
import Basmati_1401_WS from "@/assets/Rice/Basmati Rice/1401_WS.png";
import Basmati_1509_GS from "@/assets/Rice/Basmati Rice/1509_GS.jpg";
import Basmati_1509_WS from "@/assets/Rice/Basmati Rice/1509_WS.png";
import Basmati_1718_GS from "@/assets/Rice/Basmati Rice/1718_GS.jpg";
import Basmati_1718_WS from "@/assets/Rice/Basmati Rice/1718_WS.png";
import Basmati_Brown_11 from "@/assets/Rice/Basmati Rice/Brown_11.jpg";
import Basmati_Pusa_GS from "@/assets/Rice/Basmati Rice/Pusa_GS.jpg";
import Basmati_Pusa_WS from "@/assets/Rice/Basmati Rice/Pusa_WS.jpg";
import Basmati_Sharbati_GS from "@/assets/Rice/Basmati Rice/Sharbati_GS.jpg";
import Basmati_Sharbati_WS from "@/assets/Rice/Basmati Rice/Sharbati_WS.png";

// ─── Non-Basmati / Non Parboiled images ──────────────────────────────────────
import NP_100Broken from "@/assets/Rice/Non Basmati Rice/Non Parboiled/100_Broken.jpg";
import NP_IR_8 from "@/assets/Rice/Non Basmati Rice/Non Parboiled/IR_8.jpg";
import NP_IR_36 from "@/assets/Rice/Non Basmati Rice/Non Parboiled/IR_36.jpg";
import NP_IR_64 from "@/assets/Rice/Non Basmati Rice/Non Parboiled/IR_64.jpg";
import NP_Ponni from "@/assets/Rice/Non Basmati Rice/Non Parboiled/Ponni.jpg";
import NP_PR_11 from "@/assets/Rice/Non Basmati Rice/Non Parboiled/PR_11.jpg";
import NP_PR_14 from "@/assets/Rice/Non Basmati Rice/Non Parboiled/PR_14.jpeg";
import NP_PR_106 from "@/assets/Rice/Non Basmati Rice/Non Parboiled/PR_106.jpg";
import NP_Sona_Masoori from "@/assets/Rice/Non Basmati Rice/Non Parboiled/Sona_Masoori.jpg";
import NP_Swarna from "@/assets/Rice/Non Basmati Rice/Non Parboiled/Swarna.jpg";

// ─── Non-Basmati / Parboiled images ──────────────────────────────────────────
import PB_100Broken from "@/assets/Rice/Non Basmati Rice/Parboiled/100_Broken.jpg";
import PB_IR_8 from "@/assets/Rice/Non Basmati Rice/Parboiled/IR_8.jpg";
import PB_IR_36 from "@/assets/Rice/Non Basmati Rice/Parboiled/IR_36.jpeg";
import PB_IR_64 from "@/assets/Rice/Non Basmati Rice/Parboiled/IR_64.png";
import PB_Ponni from "@/assets/Rice/Non Basmati Rice/Parboiled/Ponni.jpg";
import PB_PR_11 from "@/assets/Rice/Non Basmati Rice/Parboiled/PR_11.jpg";
import PB_PR_14 from "@/assets/Rice/Non Basmati Rice/Parboiled/PR_14.png";
import PB_PR_106 from "@/assets/Rice/Non Basmati Rice/Parboiled/PR_106.jpg";
import PB_Sona_Masoori from "@/assets/Rice/Non Basmati Rice/Parboiled/Sona_Masoori.jpg";
import PB_Swarna from "@/assets/Rice/Non Basmati Rice/Parboiled/Swarna.jpeg";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface RiceVariety {
  slug: string;
  name: string;
  description: string;
  image: string;
  varietySlugs?: string[]; // ◄ Added optional varietySlugs property here inside variety items
}

export interface RiceSubGroup {
  slug: string;
  name: string;
  description: string;
  coverImage: string;
  varieties: RiceVariety[];
}

export interface RiceType {
  slug: string;
  name: string;
  description: string;
  coverImage: string;
  subGroups?: RiceSubGroup[];
  varieties?: RiceVariety[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const riceTypes: RiceType[] = [
  {
    slug: "basmati",
    name: "Basmati Rice",
    description: "Long grain aromatic basmati varieties for premium retail, food service and private label export.",
    coverImage: Basmati_1121_GS,
    varieties: [
      { 
        slug: "1121-gs", 
        name: "1121 GS", 
        description: "Premium extra-long slender grain basmati with excellent aroma and fluffiness.", 
        image: Basmati_1121_GS, 
        varietySlugs: ["1121-ws", "brown-11"] 
      },
      { 
        slug: "1121-ws", 
        name: "1121 WS", 
        description: "Polished and washed extra-long basmati grain ideal for biryani preparations.", 
        image: Basmati_1121_WS, 
        varietySlugs: ["1121-gs"] 
      },
      { 
        slug: "1401-gs", 
        name: "1401 GS", 
        description: "Improved aromatic basmati hybrid with superior grain elongation after cooking.", 
        image: Basmati_1401_GS, 
        varietySlugs: ["1401-ws"] 
      },
      { 
        slug: "1401-ws", 
        name: "1401 WS", 
        description: "Cleaned and processed 1401 variant optimized for high-volume commercial kitchens.", 
        image: Basmati_1401_WS, 
        varietySlugs: ["1401-gs"] 
      },
      { 
        slug: "1509-gs", 
        name: "1509 GS", 
        description: "Early maturing, cost-effective long grain basmati with standard aromatic qualities.", 
        image: Basmati_1509_GS, 
        varietySlugs: ["1509-ws"] 
      },
      { 
        slug: "1509-ws", 
        name: "1509 WS", 
        description: "Washed and graded 1509 variety perfect for affordable packaging and retail brands.", 
        image: Basmati_1509_WS, 
        varietySlugs: ["1509-gs"] 
      },
      { 
        slug: "1718-gs", 
        name: "1718 GS", 
        description: "Disease-resistant upgrade of the 1121 strain keeping the same elite grain length.", 
        image: Basmati_1718_GS, 
        varietySlugs: ["1718-ws"] 
      },
      { 
        slug: "1718-ws", 
        name: "1718 WS", 
        description: "Cleaned 1718 variant offering uniform grain texture and pristine appearance.", 
        image: Basmati_1718_WS, 
        varietySlugs: ["1718-gs"] 
      },
      { 
        slug: "brown-11", 
        name: "Brown 11", 
        description: "Nutrient-rich unpolished 1121 basmati retaining its healthy outer bran layer.", 
        image: Basmati_Brown_11, 
        varietySlugs: ["1121-gs"] 
      },
      { 
        slug: "pusa-gs", 
        name: "Pusa GS", 
        description: "Traditional semi-dwarf basmati variety favored for its distinct flavor profile.", 
        image: Basmati_Pusa_GS, 
        varietySlugs: ["pusa-ws"] 
      },
      { 
        slug: "pusa-ws", 
        name: "Pusa WS", 
        description: "Finely processed Pusa basmati with chalky traits removed for clean export grading.", 
        image: Basmati_Pusa_WS, 
        varietySlugs: ["pusa-gs"] 
      },
      { 
        slug: "sharbati-gs", 
        name: "Sharbati GS", 
        description: "Highly economical semi-basmati variety with mild aroma and good elongation.", 
        image: Basmati_Sharbati_GS, 
        varietySlugs: ["sharbati-ws"] 
      },
      { 
        slug: "sharbati-ws", 
        name: "Sharbati WS", 
        description: "Polished Sharbati selection used widely as a budget-friendly aromatic alternative.", 
        image: Basmati_Sharbati_WS, 
        varietySlugs: ["sharbati-gs"] 
      },
    ],
  },
  {
    slug: "non-basmati",
    name: "Non-Basmati Rice",
    description: "Sona Masoori, IR64, PR varieties and more for bulk importers and food processors worldwide.",
    coverImage: NP_IR_64,
    subGroups: [
      {
        slug: "non-parboiled",
        name: "Non Parboiled",
        description: "Raw non-parboiled non-basmati rice varieties for bulk trade, food processing and retail markets.",
        coverImage: NP_IR_64,
        varieties: [
          { 
            slug: "np-100-broken", 
            name: "100% Broken", 
            description: "Raw broken rice fragments widely used for brewing, pet food, and flour milling.", 
            image: NP_100Broken, 
            varietySlugs: ["100 percent broken options", "Cleaned bulk grade", "Competitive volume pricing"] 
          },
          { 
            slug: "np-ir-8", 
            name: "IR 8", 
            description: "High-yielding bold grain raw rice suitable for heavy-demand regional staples.", 
            image: NP_IR_8, 
            varietySlugs: ["Bold kernel size", "Machine cleaned", "Export quality"] 
          },
          { 
            slug: "np-ir-36", 
            name: "IR 36", 
            description: "Long-grain raw variety popular for its starch stability in processing factories.", 
            image: NP_IR_36, 
            varietySlugs: ["Long grain length", "High starch stability", "Bulk trading ready"] 
          },
          { 
            slug: "np-ir-64", 
            name: "IR 64", 
            description: "The global benchmark for long-grain raw white rice, preferred in mass catering.", 
            image: NP_IR_64, 
            varietySlugs: ["5 to 25 percent broken options", "Raw white profile", "Container load ready"] 
          },
          { 
            slug: "np-ponni", 
            name: "Ponni", 
            description: "Highly nutritious and easily digestible small-grain raw rice native to South India.", 
            image: NP_Ponni, 
            varietySlugs: ["Small grain length", "Nutritious raw profile", "Traditional south market grade"] 
          },
          { 
            slug: "np-pr-11", 
            name: "PR 11", 
            description: "Long slender raw non-basmati type offering great grain uniformity at low costs.", 
            image: NP_PR_11, 
            varietySlugs: ["Slender long grain", "Uniform cooking texture", "Budget friendly alternative"] 
          },
          { 
            slug: "np-pr-14", 
            name: "PR 14", 
            description: "Premium raw variant of PR series featuring non-sticky cooking characteristics.", 
            image: NP_PR_14, 
            varietySlugs: ["Non-sticky composition", "Premium raw milling", "High clarity finish"] 
          },
          { 
            slug: "np-pr-106", 
            name: "PR 106", 
            description: "Fine quality raw rice grain with great clarity, ideal for blending.", 
            image: NP_PR_106, 
            varietySlugs: ["Fine raw grain length", "Excellent blend foundation", "Sortex clean grading"] 
          },
          { 
            slug: "np-sona-masoori", 
            name: "Sona Masoori", 
            description: "Lightweight and aromatic medium-grain raw rice, widely used for daily meals.", 
            image: NP_Sona_Masoori, 
            varietySlugs: ["Raw medium grain options", "Lightweight texture", "Graded supply options"] 
          },
          { 
            slug: "np-swarna", 
            name: "Swarna", 
            description: "Short, thick short-grain raw rice widely exported for budget markets and staples.", 
            image: NP_Swarna, 
            varietySlugs: ["Short thick grain profiles", "Budget market target", "High volume availability"] 
          },
        ],
      },
      {
        slug: "parboiled",
        name: "Parboiled",
        description: "Steam-processed parboiled rice with better grain strength and cooking stability for commercial buyers.",
        coverImage: PB_IR_64,
        varieties: [
          { 
            slug: "pb-100-broken", 
            name: "100% Broken", 
            description: "Parboiled broken grains with higher nutritional retention, great for stews.", 
            image: PB_100Broken, 
            varietySlugs: ["Parboiled broken mix", "High nutrient stability", "Food processing application"] 
          },
          { 
            slug: "pb-ir-8", 
            name: "IR 8", 
            description: "Robust parboiled grains processed to resist breakage during extensive cooking.", 
            image: PB_IR_8, 
            varietySlugs: ["Breakage resistant processing", "Hydro-thermic treatment", "Heavy volume catering staple"] 
          },
          { 
            slug: "pb-ir-36", 
            name: "IR 36", 
            description: "Hardened parboiled variety built for long shelf-life and bulk community kitchens.", 
            image: PB_IR_36, 
            varietySlugs: ["Extended storage life", "Hardened cooking profile", "Bulk catering specs"] 
          },
          { 
            slug: "pb-ir-64", 
            name: "IR 64", 
            description: "Top-tier long grain parboiled rice, highly sought after in West Africa and UAE markets.", 
            image: PB_IR_64, 
            varietySlugs: ["Golden and white parboiled", "Lower breakage ratios", "Global trade benchmark"] 
          },
          { 
            slug: "pb-ponni", 
            name: "Ponni", 
            description: "Pre-steamed Ponni rice optimized to reduce starch stickiness while keeping softness.", 
            image: PB_Ponni, 
            varietySlugs: ["Pre-steamed processing", "Reduced starch stickiness", "Soft texture profile"] 
          },
          { 
            slug: "pb-pr-11", 
            name: "PR 11", 
            description: "Slender parboiled grain offering uniform cooking and excellent economic scaling.", 
            image: PB_PR_11, 
            varietySlugs: ["Slender parboiled metric", "Uniform thermal treatment", "Economic volume scaling"] 
          },
          { 
            slug: "pb-pr-14", 
            name: "PR 14", 
            description: "Cleaned and hydro-thermic treated long grain rice with minimized broken ratio.", 
            image: PB_PR_14, 
            varietySlugs: ["Minimized broken metrics", "Hydro-thermic processing", "Clean export separation"] 
          },
          { 
            slug: "pb-pr-106", 
            name: "PR 106", 
            description: "Firm parboiled selection popular for industrial food packing and wholesale distributions.", 
            image: PB_PR_106, 
            varietySlugs: ["Firm parboiled metric", "Industrial grading standard", "Wholesale ready packaging"] 
          },
          { 
            slug: "pb-sona-masoori", 
            name: "Sona Masoori", 
            description: "Parboiled medium grain that stays firm, fluffy, and separate when cooked.", 
            image: PB_Sona_Masoori, 
            varietySlugs: ["Steam and parboiled options", "Fluffy separate grains", "South market distribution ready"] 
          },
          { 
            slug: "pb-swarna", 
            name: "Swarna", 
            description: "Affordable parboiled short grain with excellent expansion metrics upon boiling.", 
            image: PB_Swarna, 
            varietySlugs: ["High volume expansion metrics", "Short grain parboiled variety", "Budget distribution ready"] 
          },
        ],
      },
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export const getRiceType = (typeSlug?: string) =>
  riceTypes.find((t) => t.slug === typeSlug);

export const getRiceSubGroup = (typeSlug: string, subSlug: string) =>
  getRiceType(typeSlug)?.subGroups?.find((s) => s.slug === subSlug);

// // src/data/riceData.ts

// // ─── Basmati Rice images ──────────────────────────────────────────────────────
// import Basmati_1121_GS from "@/assets/Rice/Basmati Rice/1121_GS.jpg";
// import Basmati_1121_WS from "@/assets/Rice/Basmati Rice/1121_WS.jpg";
// import Basmati_1401_GS from "@/assets/Rice/Basmati Rice/1401_GS.jpg";
// import Basmati_1401_WS from "@/assets/Rice/Basmati Rice/1401_WS.png";
// import Basmati_1509_GS from "@/assets/Rice/Basmati Rice/1509_GS.jpg";
// import Basmati_1509_WS from "@/assets/Rice/Basmati Rice/1509_WS.png";
// import Basmati_1718_GS from "@/assets/Rice/Basmati Rice/1718_GS.jpg";
// import Basmati_1718_WS from "@/assets/Rice/Basmati Rice/1718_WS.png";
// import Basmati_Brown_11 from "@/assets/Rice/Basmati Rice/Brown_11.jpg";
// import Basmati_Pusa_GS from "@/assets/Rice/Basmati Rice/Pusa_GS.jpg";
// import Basmati_Pusa_WS from "@/assets/Rice/Basmati Rice/Pusa_WS.jpg";
// import Basmati_Sharbati_GS from "@/assets/Rice/Basmati Rice/Sharbati_GS.jpg";
// import Basmati_Sharbati_WS from "@/assets/Rice/Basmati Rice/Sharbati_WS.png";

// // ─── Non-Basmati / Non Parboiled images ──────────────────────────────────────
// import NP_100Broken from "@/assets/Rice/Non Basmati Rice/Non Parboiled/100_Broken.jpg";
// import NP_IR_8 from "@/assets/Rice/Non Basmati Rice/Non Parboiled/IR_8.jpg";
// import NP_IR_36 from "@/assets/Rice/Non Basmati Rice/Non Parboiled/IR_36.jpg";
// import NP_IR_64 from "@/assets/Rice/Non Basmati Rice/Non Parboiled/IR_64.jpg";
// import NP_Ponni from "@/assets/Rice/Non Basmati Rice/Non Parboiled/Ponni.jpg";
// import NP_PR_11 from "@/assets/Rice/Non Basmati Rice/Non Parboiled/PR_11.jpg";
// import NP_PR_14 from "@/assets/Rice/Non Basmati Rice/Non Parboiled/PR_14.jpeg";
// import NP_PR_106 from "@/assets/Rice/Non Basmati Rice/Non Parboiled/PR_106.jpg";
// import NP_Sona_Masoori from "@/assets/Rice/Non Basmati Rice/Non Parboiled/Sona_Masoori.jpg";
// import NP_Swarna from "@/assets/Rice/Non Basmati Rice/Non Parboiled/Swarna.jpg";

// // ─── Non-Basmati / Parboiled images ──────────────────────────────────────────
// import PB_100Broken from "@/assets/Rice/Non Basmati Rice/Parboiled/100_Broken.jpg";
// import PB_IR_8 from "@/assets/Rice/Non Basmati Rice/Parboiled/IR_8.jpg";
// import PB_IR_36 from "@/assets/Rice/Non Basmati Rice/Parboiled/IR_36.jpeg";
// import PB_IR_64 from "@/assets/Rice/Non Basmati Rice/Parboiled/IR_64.png";
// import PB_Ponni from "@/assets/Rice/Non Basmati Rice/Parboiled/Ponni.jpg";
// import PB_PR_11 from "@/assets/Rice/Non Basmati Rice/Parboiled/PR_11.jpg";
// import PB_PR_14 from "@/assets/Rice/Non Basmati Rice/Parboiled/PR_14.png";
// import PB_PR_106 from "@/assets/Rice/Non Basmati Rice/Parboiled/PR_106.jpg";
// import PB_Sona_Masoori from "@/assets/Rice/Non Basmati Rice/Parboiled/Sona_Masoori.jpg";
// import PB_Swarna from "@/assets/Rice/Non Basmati Rice/Parboiled/Swarna.jpeg";

// // ─── Types ────────────────────────────────────────────────────────────────────

// export interface RiceVariety {
//   slug: string;
//   name: string;
//   description: string; // Added description field here
//   image: string;
// }

// export interface RiceSubGroup {
//   slug: string;
//   name: string;
//   description: string;
//   coverImage: string;
//   varieties: RiceVariety[];
// }

// export interface RiceType {
//   slug: string;
//   name: string;
//   description: string;
//   coverImage: string;
//   subGroups?: RiceSubGroup[];
//   varieties?: RiceVariety[];
// }

// // ─── Data ─────────────────────────────────────────────────────────────────────

// export const riceTypes: RiceType[] = [
//   {
//     slug: "basmati",
//     name: "Basmati Rice",
//     description: "Long grain aromatic basmati varieties for premium retail, food service and private label export.",
//     coverImage: Basmati_1121_GS,
//     varieties: [
//       { slug: "1121-gs", name: "1121 GS", description: "Premium extra-long slender grain basmati with excellent aroma and fluffiness.", image: Basmati_1121_GS },
//       { slug: "1121-ws", name: "1121 WS", description: "Polished and washed extra-long basmati grain ideal for biryani preparations.", image: Basmati_1121_WS },
//       { slug: "1401-gs", name: "1401 GS", description: "Improved aromatic basmati hybrid with superior grain elongation after cooking.", image: Basmati_1401_GS },
//       { slug: "1401-ws", name: "1401 WS", description: "Cleaned and processed 1401 variant optimized for high-volume commercial kitchens.", image: Basmati_1401_WS },
//       { slug: "1509-gs", name: "1509 GS", description: "Early maturing, cost-effective long grain basmati with standard aromatic qualities.", image: Basmati_1509_GS },
//       { slug: "1509-ws", name: "1509 WS", description: "Washed and graded 1509 variety perfect for affordable packaging and retail brands.", image: Basmati_1509_WS },
//       { slug: "1718-gs", name: "1718 GS", description: "Disease-resistant upgrade of the 1121 strain keeping the same elite grain length.", image: Basmati_1718_GS },
//       { slug: "1718-ws", name: "1718 WS", description: "Cleaned 1718 variant offering uniform grain texture and pristine appearance.", image: Basmati_1718_WS },
//       { slug: "brown-11", name: "Brown 11", description: "Nutrient-rich unpolished 1121 basmati retaining its healthy outer bran layer.", image: Basmati_Brown_11 },
//       { slug: "pusa-gs", name: "Pusa GS", description: "Traditional semi-dwarf basmati variety favored for its distinct flavor profile.", image: Basmati_Pusa_GS },
//       { slug: "pusa-ws", name: "Pusa WS", description: "Finely processed Pusa basmati with chalky traits removed for clean export grading.", image: Basmati_Pusa_WS },
//       { slug: "sharbati-gs", name: "Sharbati GS", description: "Highly economical semi-basmati variety with mild aroma and good elongation.", image: Basmati_Sharbati_GS },
//       { slug: "sharbati-ws", name: "Sharbati WS", description: "Polished Sharbati selection used widely as a budget-friendly aromatic alternative.", image: Basmati_Sharbati_WS },
//     ],
//   },
//   {
//     slug: "non-basmati",
//     name: "Non-Basmati Rice",
//     description: "Sona Masoori, IR64, PR varieties and more for bulk importers and food processors worldwide.",
//     coverImage: NP_IR_64,
//     subGroups: [
//       {
//         slug: "non-parboiled",
//         name: "Non Parboiled",
//         description: "Raw non-parboiled non-basmati rice varieties for bulk trade, food processing and retail markets.",
//         coverImage: NP_IR_64,
//         varieties: [
//           { slug: "np-100-broken", name: "100% Broken", description: "Raw broken rice fragments widely used for brewing, pet food, and flour milling.", image: NP_100Broken },
//           { slug: "np-ir-8", name: "IR 8", description: "High-yielding bold grain raw rice suitable for heavy-demand regional staples.", image: NP_IR_8 },
//           { slug: "np-ir-36", name: "IR 36", description: "Long-grain raw variety popular for its starch stability in processing factories.", image: NP_IR_36 },
//           { slug: "np-ir-64", name: "IR 64", description: "The global benchmark for long-grain raw white rice, preferred in mass catering.", image: NP_IR_64 },
//           { slug: "np-ponni", name: "Ponni", description: "Highly nutritious and easily digestible small-grain raw rice native to South India.", image: NP_Ponni },
//           { slug: "np-pr-11", name: "PR 11", description: "Long slender raw non-basmati type offering great grain uniformity at low costs.", image: NP_PR_11 },
//           { slug: "np-pr-14", name: "PR 14", description: "Premium raw variant of PR series featuring non-sticky cooking characteristics.", image: NP_PR_14 },
//           { slug: "np-pr-106", name: "PR 106", description: "Fine quality raw rice grain with great clarity, ideal for blending.", image: NP_PR_106 },
//           { slug: "np-sona-masoori", name: "Sona Masoori", description: "Lightweight and aromatic medium-grain raw rice, widely used for daily meals.", image: NP_Sona_Masoori },
//           { slug: "np-swarna", name: "Swarna", description: "Short, thick short-grain raw rice widely exported for budget markets and staples.", image: NP_Swarna },
//         ],
//       },
//       {
//         slug: "parboiled",
//         name: "Parboiled",
//         description: "Steam-processed parboiled rice with better grain strength and cooking stability for commercial buyers.",
//         coverImage: PB_IR_64,
//         varieties: [
//           { slug: "pb-100-broken", name: "100% Broken", description: "Parboiled broken grains with higher nutritional retention, great for stews.", image: PB_100Broken },
//           { slug: "pb-ir-8", name: "IR 8", description: "Robust parboiled grains processed to resist breakage during extensive cooking.", image: PB_IR_8 },
//           { slug: "pb-ir-36", name: "IR 36", description: "Hardened parboiled variety built for long shelf-life and bulk community kitchens.", image: PB_IR_36 },
//           { slug: "pb-ir-64", name: "IR 64", description: "Top-tier long grain parboiled rice, highly sought after in West Africa and UAE markets.", image: PB_IR_64 },
//           { slug: "pb-ponni", name: "Ponni", description: "Pre-steamed Ponni rice optimized to reduce starch stickiness while keeping softness.", image: PB_Ponni },
//           { slug: "pb-pr-11", name: "PR 11", description: "Slender parboiled grain offering uniform cooking and excellent economic scaling.", image: PB_PR_11 },
//           { slug: "pb-pr-14", name: "PR 14", description: "Cleaned and hydro-thermic treated long grain rice with minimized broken ratio.", image: PB_PR_14 },
//           { slug: "pb-pr-106", name: "PR 106", description: "Firm parboiled selection popular for industrial food packing and wholesale distributions.", image: PB_PR_106 },
//           { slug: "pb-sona-masoori", name: "Sona Masoori", description: "Parboiled medium grain that stays firm, fluffy, and separate when cooked.", image: PB_Sona_Masoori },
//           { slug: "pb-swarna", name: "Swarna", description: "Affordable parboiled short grain with excellent expansion metrics upon boiling.", image: PB_Swarna },
//         ],
//       },
//     ],
//   },
// ];

// // ─── Helpers ──────────────────────────────────────────────────────────────────

// export const getRiceType = (typeSlug?: string) =>
//   riceTypes.find((t) => t.slug === typeSlug);

// export const getRiceSubGroup = (typeSlug: string, subSlug: string) =>
//   getRiceType(typeSlug)?.subGroups?.find((s) => s.slug === subSlug);

// // src/data/riceData.ts

// // ─── Basmati Rice images ──────────────────────────────────────────────────────
// import Basmati_1121_GS from "@/assets/Rice/Basmati Rice/1121_GS.jpg";
// import Basmati_1121_WS from "@/assets/Rice/Basmati Rice/1121_WS.jpg";
// import Basmati_1401_GS from "@/assets/Rice/Basmati Rice/1401_GS.jpg";
// import Basmati_1401_WS from "@/assets/Rice/Basmati Rice/1401_WS.png";
// import Basmati_1509_GS from "@/assets/Rice/Basmati Rice/1509_GS.jpg";
// import Basmati_1509_WS from "@/assets/Rice/Basmati Rice/1509_WS.png";
// import Basmati_1718_GS from "@/assets/Rice/Basmati Rice/1718_GS.jpg";
// import Basmati_1718_WS from "@/assets/Rice/Basmati Rice/1718_WS.png";
// import Basmati_Brown_11 from "@/assets/Rice/Basmati Rice/Brown_11.jpg";
// import Basmati_Pusa_GS from "@/assets/Rice/Basmati Rice/Pusa_GS.jpg";
// import Basmati_Pusa_WS from "@/assets/Rice/Basmati Rice/Pusa_WS.jpg";
// import Basmati_Sharbati_GS from "@/assets/Rice/Basmati Rice/Sharbati_GS.jpg";
// import Basmati_Sharbati_WS from "@/assets/Rice/Basmati Rice/Sharbati_WS.png";

// // ─── Non-Basmati / Non Parboiled images ──────────────────────────────────────
// import NP_100Broken from "@/assets/Rice/Non Basmati Rice/Non Parboiled/100_Broken.jpg";
// import NP_IR_8 from "@/assets/Rice/Non Basmati Rice/Non Parboiled/IR_8.jpg";
// import NP_IR_36 from "@/assets/Rice/Non Basmati Rice/Non Parboiled/IR_36.jpg";
// import NP_IR_64 from "@/assets/Rice/Non Basmati Rice/Non Parboiled/IR_64.jpg";
// import NP_Ponni from "@/assets/Rice/Non Basmati Rice/Non Parboiled/Ponni.jpg";
// import NP_PR_11 from "@/assets/Rice/Non Basmati Rice/Non Parboiled/PR_11.jpg";
// import NP_PR_14 from "@/assets/Rice/Non Basmati Rice/Non Parboiled/PR_14.jpeg";
// import NP_PR_106 from "@/assets/Rice/Non Basmati Rice/Non Parboiled/PR_106.jpg";
// import NP_Sona_Masoori from "@/assets/Rice/Non Basmati Rice/Non Parboiled/Sona_Masoori.jpg";
// import NP_Swarna from "@/assets/Rice/Non Basmati Rice/Non Parboiled/Swarna.jpg";

// // ─── Non-Basmati / Parboiled images ──────────────────────────────────────────
// import PB_100Broken from "@/assets/Rice/Non Basmati Rice/Parboiled/100_Broken.jpg";
// import PB_IR_8 from "@/assets/Rice/Non Basmati Rice/Parboiled/IR_8.jpg";
// import PB_IR_36 from "@/assets/Rice/Non Basmati Rice/Parboiled/IR_36.jpeg";
// import PB_IR_64 from "@/assets/Rice/Non Basmati Rice/Parboiled/IR_64.png";
// import PB_Ponni from "@/assets/Rice/Non Basmati Rice/Parboiled/Ponni.jpg";
// import PB_PR_11 from "@/assets/Rice/Non Basmati Rice/Parboiled/PR_11.jpg";
// import PB_PR_14 from "@/assets/Rice/Non Basmati Rice/Parboiled/PR_14.png";
// import PB_PR_106 from "@/assets/Rice/Non Basmati Rice/Parboiled/PR_106.jpg";
// import PB_Sona_Masoori from "@/assets/Rice/Non Basmati Rice/Parboiled/Sona_Masoori.jpg";
// import PB_Swarna from "@/assets/Rice/Non Basmati Rice/Parboiled/Swarna.jpeg";

// // ─── Types ────────────────────────────────────────────────────────────────────

// export interface RiceVariety {
//   slug: string;
//   name: string;
//   image: string;
// }

// export interface RiceSubGroup {
//   slug: string;
//   name: string;
//   description: string;
//   coverImage: string;
//   varieties: RiceVariety[];
// }

// export interface RiceType {
//   slug: string;
//   name: string;
//   description: string;
//   coverImage: string;
//   subGroups?: RiceSubGroup[];
//   varieties?: RiceVariety[];
// }

// // ─── Data ─────────────────────────────────────────────────────────────────────

// export const riceTypes: RiceType[] = [
//   {
//     slug: "basmati",
//     name: "Basmati Rice",
//     description: "Long grain aromatic basmati varieties for premium retail, food service and private label export.",
//     coverImage: Basmati_1121_GS,
//     varieties: [
//       { slug: "1121-gs",      name: "1121 GS",      image: Basmati_1121_GS },
//       { slug: "1121-ws",      name: "1121 WS",      image: Basmati_1121_WS },
//       { slug: "1401-gs",      name: "1401 GS",      image: Basmati_1401_GS },
//       { slug: "1401-ws",      name: "1401 WS",      image: Basmati_1401_WS },
//       { slug: "1509-gs",      name: "1509 GS",      image: Basmati_1509_GS },
//       { slug: "1509-ws",      name: "1509 WS",      image: Basmati_1509_WS },
//       { slug: "1718-gs",      name: "1718 GS",      image: Basmati_1718_GS },
//       { slug: "1718-ws",      name: "1718 WS",      image: Basmati_1718_WS },
//       { slug: "brown-11",     name: "Brown 11",     image: Basmati_Brown_11 },
//       { slug: "pusa-gs",      name: "Pusa GS",      image: Basmati_Pusa_GS },
//       { slug: "pusa-ws",      name: "Pusa WS",      image: Basmati_Pusa_WS },
//       { slug: "sharbati-gs",  name: "Sharbati GS",  image: Basmati_Sharbati_GS },
//       { slug: "sharbati-ws",  name: "Sharbati WS",  image: Basmati_Sharbati_WS },
//     ],
//   },
//   {
//     slug: "non-basmati",
//     name: "Non-Basmati Rice",
//     description: "Sona Masoori, IR64, PR varieties and more for bulk importers and food processors worldwide.",
//     coverImage: NP_IR_64,
//     subGroups: [
//       {
//         slug: "non-parboiled",
//         name: "Non Parboiled",
//         description: "Raw non-parboiled non-basmati rice varieties for bulk trade, food processing and retail markets.",
//         coverImage: NP_IR_64,
//         varieties: [
//           { slug: "np-100-broken",   name: "100% Broken",  image: NP_100Broken },
//           { slug: "np-ir-8",         name: "IR 8",         image: NP_IR_8 },
//           { slug: "np-ir-36",        name: "IR 36",        image: NP_IR_36 },
//           { slug: "np-ir-64",        name: "IR 64",        image: NP_IR_64 },
//           { slug: "np-ponni",        name: "Ponni",        image: NP_Ponni },
//           { slug: "np-pr-11",        name: "PR 11",        image: NP_PR_11 },
//           { slug: "np-pr-14",        name: "PR 14",        image: NP_PR_14 },
//           { slug: "np-pr-106",       name: "PR 106",       image: NP_PR_106 },
//           { slug: "np-sona-masoori", name: "Sona Masoori", image: NP_Sona_Masoori },
//           { slug: "np-swarna",       name: "Swarna",       image: NP_Swarna },
//         ],
//       },
//       {
//         slug: "parboiled",
//         name: "Parboiled",
//         description: "Steam-processed parboiled rice with better grain strength and cooking stability for commercial buyers.",
//         coverImage: PB_IR_64,
//         varieties: [
//           { slug: "pb-100-broken",   name: "100% Broken",  image: PB_100Broken },
//           { slug: "pb-ir-8",         name: "IR 8",         image: PB_IR_8 },
//           { slug: "pb-ir-36",        name: "IR 36",        image: PB_IR_36 },
//           { slug: "pb-ir-64",        name: "IR 64",        image: PB_IR_64 },
//           { slug: "pb-ponni",        name: "Ponni",        image: PB_Ponni },
//           { slug: "pb-pr-11",        name: "PR 11",        image: PB_PR_11 },
//           { slug: "pb-pr-14",        name: "PR 14",        image: PB_PR_14 },
//           { slug: "pb-pr-106",       name: "PR 106",       image: PB_PR_106 },
//           { slug: "pb-sona-masoori", name: "Sona Masoori", image: PB_Sona_Masoori },
//           { slug: "pb-swarna",       name: "Swarna",       image: PB_Swarna },
//         ],
//       },
//     ],
//   },
// ];

// // ─── Helpers ──────────────────────────────────────────────────────────────────

// export const getRiceType = (typeSlug?: string) =>
//   riceTypes.find((t) => t.slug === typeSlug);

// export const getRiceSubGroup = (typeSlug: string, subSlug: string) =>
//   getRiceType(typeSlug)?.subGroups?.find((s) => s.slug === subSlug);