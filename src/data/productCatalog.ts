import riceImg from "@/assets/rice.jpg";
import peanutsImg from "@/assets/peanuts.jpg";
import sesameImg from "@/assets/sesame.jpg";
import spicesImg from "@/assets/spices.jpg";
import pulsesImg from "@/assets/pulses.jpg";
import freshProduceImg from "@/assets/fresh-produce.jpg";
import TurmericImg from "@/assets/Turmeric.jpg";
import AjwainImg from "@/assets/Ajwain.jpg";
import BlackPepperImg from "@/assets/Black Pepper.jpg";
import BayLeafImg from "@/assets/Bay Leaf.jpg";
import CardamomBlackImg from "@/assets/Cardamom Black.png";
import CardamomImg from "@/assets/Cardamom.png";
import CinnamonImg from "@/assets/Cinnamon.jpg";
import ClovesImg from "@/assets/Cloves.jpg";
import CuminImg from "@/assets/Cumin.jpg";
import CorianderPowderImg from "@/assets/Coriander Powder and Seeds.jpg";
import GingerpowderImg from "@/assets/Ginger Powder.jpg";
import StarAniseImg from "@/assets/Star Anise.jpg";
import RedChilliImg from "@/assets/Red Chilli.jpg";
import RedChillieFalkesImg from "@/assets/Red Chilli Flakes.png";
import NutemegImg from "@/assets/Nutmeg.jpg";
import NigellaSeedsImg from "@/assets/Nigella Seeds (kalonji).jpg";
import MustardSeedsImg from "@/assets/Mustard Seeds.jpg";
import FunnelSeedsImg from "@/assets/Fennel Seeds.jpg";
import SaffronImg from "@/assets/Saffron.jpg";
import MaceImg from "@/assets/Mace (Javitri).jpg";
import AsafoetidaImg from "@/assets/Asafoetida (Hing).jpg";
import BlanchedImg from "@/assets/peanuts/Blanched Peanuts.jpg";
import BoldImg from "@/assets/peanuts/Bold (Runner) Peanuts.jpg";
import GroundnutImg from "@/assets/peanuts/Groundnut in Shell.jpg";
import JavaImg from "@/assets/peanuts/Java (Spanish) Peanuts.jpg";
import RedNatalImg from "@/assets/peanuts/Red Natal Peanuts.jpg";
import ArharWholeDalPigeonPeasImg from "@/assets/pulses/Arhar Whole Dal Pigeon Peas.jpg";
import BlackEyedPeasImg from "@/assets/pulses/Black eyed Peas (Lobia).jpg";
import BlackGramImg from "@/assets/pulses/Black Gram (Urad Dal).jpg";
import HorseGramImg from "@/assets/pulses/Horse Gram Kulthi Dal.jpg";
import KidneyBeansImg from "@/assets/pulses/Kidney Beans.jpg";
import MasoorDalImg from "@/assets/pulses/Masoor Dal (Red Lentils).jpg";
import MungImg from "@/assets/pulses/Mung Beans.jpg";
import PigeonPeasImg from "@/assets/pulses/Pigeon Peas (Toor).jpg";
import ToorDalImg from "@/assets/pulses/Toor Dal.jpg";
import WhiteChanaChickpeasImg from "@/assets/pulses/White Chana Chickpeas.jpg";
import WhitePeasImg from "@/assets/pulses/White Peas (Matar).jpg";
import WholeBrownChickpeasdesichanaImg from "@/assets/pulses/whole brown chickpeas desi chana.jpg";
import MoongDalImg from "@/assets/pulses/Moong Dal (green gram).png";
import BananaImg from "@/assets/Fruits & Vegatables/Banana.jpeg";
import BitterGourdImg from "@/assets/Fruits & Vegatables/Bitter Gourd.jpg";
import BottleGourdImg from "@/assets/Fruits & Vegatables/Bottle Gourd.png";
import DrumstickImg from "@/assets/Fruits & Vegatables/Drumstick.jpg";
import FreshTurmericImg from "@/assets/Fruits & Vegatables/Fresh Turmeric.jpg";
import GarlicImg from "@/assets/Fruits & Vegatables/Garlic.jpg";
import GingerImg from "@/assets/Fruits & Vegatables/Ginger.png";
import GrapesImg from "@/assets/Fruits & Vegatables/Grapes.jpg";
import GreenChilliImg from "@/assets/Fruits & Vegatables/Green Chilli.jpg";
import GuavaImg from "@/assets/Fruits & Vegatables/guava.png";
import LemonImg from "@/assets/Fruits & Vegatables/Lemon.jpeg";
import MangoesImg from "@/assets/Fruits & Vegatables/Mangoes.jpg";
import OkraImg from "@/assets/Fruits & Vegatables/Okra (Lady Finger).jpg";
import OnionImg from "@/assets/Fruits & Vegatables/Onion.jpg";
import OrangesImg from "@/assets/Fruits & Vegatables/Oranges.png";
import PapayaImg from "@/assets/Fruits & Vegatables/Papaya.jpeg";
import PomegranateImg from "@/assets/Fruits & Vegatables/Pomegranate.png";
import PotatoImg from "@/assets/Fruits & Vegatables/Potato.jpg";
import SapotaImg from "@/assets/Fruits & Vegatables/Sapota.jpeg";
import CoconutImg from "@/assets/Fruits & Vegatables/Semi Husk Coconut.jpeg";
import SuranImg from "@/assets/Fruits & Vegatables/Suran (Elephant Yam).jpg";
import WatermelonImg from "@/assets/Fruits & Vegatables/Watermelon.jpeg";
import BlackSesameImg from "@/assets/Sesame & Oil Seeds/Black Sesame Seeds.png";
import BrownGoldenSesameImg from "@/assets/Sesame & Oil Seeds/Brown_Golden Sesame Seeds.jpeg";
import CastorSeedsImg from "@/assets/Sesame & Oil Seeds/Castor Seeds.jpg";
import HulledSesameImg from "@/assets/Sesame & Oil Seeds/Hulled Sesame Seeds.jpg";
import NaturalSesameImg from "@/assets/Sesame & Oil Seeds/Natural Sesame Seed.jpg";
import NigerSeedsImg from "@/assets/Sesame & Oil Seeds/Niger Seeds.jpg";
import PsylliumHuskImg from "@/assets/Sesame & Oil Seeds/Psyllium husk_seeds.jpg";
import SafflowerSeedsImg from "@/assets/Sesame & Oil Seeds/Safflower Seeds.jpg";
import SoyabeansImg from "@/assets/Sesame & Oil Seeds/Soyabeans Seeds.jpg";
import SunflowerSeedsImg from "@/assets/Sesame & Oil Seeds/Sunflower Seeds.jpg";
import SunflowerSeeds02Img from "@/assets/Sesame & Oil Seeds/Sunflower Seeds 02.jpg";

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface ProductVariety {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  image?: string;
  specs: string[];
  packaging: string;
}

export interface ProductCategory {
  slug: string;
  name: string;
  title: string;
  kicker: string;
  description: string;
  seoDescription: string;
  image: string;
  color: string;
  varieties: ProductVariety[];
}

export interface SubCategory {
  slug: string;
  name: string;
  description: string;
  varietySlugs: string[];
}

export interface SubCategoryGroup {
  categorySlug: string;
  subCategories: SubCategory[];
}

// ─── Constants ────────────────────────────────────────────────────────────────

export const phoneNumber = "917990343575";

// ─── Product Categories ───────────────────────────────────────────────────────

export const productCategories: ProductCategory[] = [
  {
    slug: "rice",
    name: "Rice",
    title: "Export Quality Rice from India",
    kicker: "Basmati, non-basmati and bulk rice supply",
    description:
      "Premium rice varieties prepared for importers, distributors, wholesalers, and private label buyers looking for dependable Indian rice export support.",
    seoDescription:
      "Ahmedabad-based rice exporters offering basmati, non-basmati, parboiled, IR64 and Sona Masoori for global buyers (UAE, Middle East, Europe, Africa). Export rice from India with packing, quality checks and export documentation.",
    image: riceImg,
    color: "#0e7c86",
    varieties: [
      {
        slug: "basmati-rice",
        name: "Basmati Rice",
        subtitle: "Long grain aromatic rice",
        description: "Premium basmati rice for retail, wholesale, restaurant supply, and private label export programs.",
        specs: ["1121, 1509 and traditional options", "Aged and steam varieties available", "Sortex cleaned export finish"],
        packaging: "5kg, 10kg, 25kg and 50kg PP, jute or private label bags",
      },
      {
        slug: "non-basmati-rice",
        name: "Non-Basmati Rice",
        subtitle: "Daily use export rice",
        description: "Reliable non-basmati rice for bulk buyers who need consistent cooking quality and competitive pricing.",
        specs: ["White and parboiled options", "Multiple grain lengths", "Buyer specification matching"],
        packaging: "25kg and 50kg bags with custom marking",
      },
      {
        slug: "sona-masoori",
        name: "Sona Masoori",
        subtitle: "Lightweight medium grain rice",
        description: "Sona Masoori rice for distributors serving South Indian, retail, and food service markets.",
        specs: ["Raw and steam options", "Lightweight grains", "Cleaned and graded supply"],
        packaging: "5kg to 50kg bags based on buyer requirement",
      },
      {
        slug: "ir64-rice",
        name: "IR64 Rice",
        subtitle: "Popular long grain non-basmati rice",
        description: "IR64 rice for international bulk trade, food service buyers, and large volume import requirements.",
        specs: ["5 percent to 25 percent broken options", "Raw or parboiled options", "Bulk shipment ready"],
        packaging: "25kg and 50kg PP bags",
      },
      {
        slug: "parboiled-rice",
        name: "Parboiled Rice",
        subtitle: "Steam processed export rice",
        description: "Parboiled rice with better grain strength and cooking stability for commercial buyers.",
        specs: ["Golden and white parboiled options", "Lower breakage profile", "Container load supply"],
        packaging: "25kg and 50kg export bags",
      },
      {
        slug: "broken-rice",
        name: "Broken Rice",
        subtitle: "Economical bulk rice grade",
        description: "Broken rice for food processing, feed, brewing, and economical bulk trading applications.",
        specs: ["Different broken percentages", "Cleaned bulk grade", "Competitive volume pricing"],
        packaging: "50kg bags or bulk buyer specification",
      },
    ],
  },
  {
    slug: "spices",
    name: "Spices",
    title: "Indian Spices for Global Buyers",
    kicker: "Whole, powder and cleaned spice supply",
    description: "High-demand Indian spices sourced and processed for food brands, wholesale importers, and international distributors.",
    seoDescription: "Spices exporters in Ahmedabad - turmeric, cumin, coriander, red chilli, fennel and more for international spice buyers. Cleaned, graded and export-packed spices shipped to UAE, Europe and Africa.",
    image: spicesImg,
    color: "#df5f2d",
    varieties: [
      { slug: "turmeric", name: "Turmeric", subtitle: "Fingers and powder", image: TurmericImg, description: "Premium turmeric fingers and powder for export markets.", specs: ["High curcumin content", "Whole and powder", "Export grade"], packaging: "10kg, 25kg and custom packaging" },
      { slug: "ajwain", name: "Ajwain", subtitle: "Premium carom seeds", image: AjwainImg, description: "Export-quality ajwain seeds with strong aroma.", specs: ["Machine cleaned", "High purity", "Export quality"], packaging: "25kg bags" },
      { slug: "asafoetida", name: "Asafoetida (Hing)", subtitle: "Premium hing powder", image: AsafoetidaImg, description: "High-quality asafoetida (hing) sourced for food manufacturers, spice brands, wholesalers, and international buyers.", specs: ["Strong aroma", "Premium quality", "Food-grade processing"], packaging: "100g, 500g, 1kg and bulk packaging" },
      { slug: "cumin", name: "Cumin Seeds", subtitle: "Machine cleaned cumin", image: CuminImg, description: "Premium export-grade cumin seeds.", specs: ["Machine cleaned", "High purity", "Strong aroma"], packaging: "25kg bags" },
      { slug: "black-pepper", name: "Black Pepper", subtitle: "Premium whole pepper", image: BlackPepperImg, description: "High-quality black pepper for global buyers.", specs: ["Bold berries", "Strong aroma", "Export quality"], packaging: "25kg bags" },
      { slug: "bay-leaf", name: "Bay Leaf", subtitle: "Natural aromatic leaves", image: BayLeafImg, description: "Premium dried bay leaves for seasoning and food processing.", specs: ["Natural aroma", "Cleaned", "Export grade"], packaging: "10kg and 25kg bags" },
      { slug: "green-cardamom", name: "Green Cardamom", subtitle: "Premium spice grade", image: CardamomImg, description: "Hand-selected green cardamom pods.", specs: ["Rich aroma", "Premium pods", "Export quality"], packaging: "5kg and 10kg packs" },
      { slug: "black-cardamom", name: "Black Cardamom", subtitle: "Smoky aromatic spice", image: CardamomBlackImg, description: "Premium black cardamom for spice blends and food industries.", specs: ["Whole pods", "Strong flavor", "Export grade"], packaging: "5kg and 10kg packs" },
      { slug: "cinnamon", name: "Cinnamon", subtitle: "Premium cinnamon sticks", image: CinnamonImg, description: "High-quality cinnamon sticks with rich aroma.", specs: ["Natural bark", "Strong aroma", "Export quality"], packaging: "10kg and 25kg bags" },
      { slug: "cloves", name: "Cloves", subtitle: "Whole dried cloves", image: ClovesImg, description: "Premium cloves for spice and food industries.", specs: ["High oil content", "Strong aroma", "Export grade"], packaging: "10kg and 25kg bags" },
      { slug: "coriander", name: "Coriander Seeds & Powder", subtitle: "Whole and ground coriander", image: CorianderPowderImg, description: "Coriander seeds and powder for export buyers.", specs: ["Whole seeds", "Powder options", "Cleaned and graded"], packaging: "25kg bags" },
      { slug: "ginger-powder", name: "Ginger Powder", subtitle: "Fine ground ginger", image: GingerpowderImg, description: "Premium ginger powder for food processing industries.", specs: ["Fine mesh", "Strong flavor", "Export quality"], packaging: "10kg and 25kg bags" },
      { slug: "star-anise", name: "Star Anise", subtitle: "Premium whole spice", image: StarAniseImg, description: "Export-grade star anise with rich aroma.", specs: ["Whole star shape", "Strong flavor", "Premium quality"], packaging: "10kg and 25kg bags" },
      { slug: "red-chilli", name: "Red Chilli", subtitle: "Whole dried chilli", image: RedChilliImg, description: "Premium whole red chilli for export markets.", specs: ["Whole chilli", "Multiple heat levels", "Export quality"], packaging: "10kg and 25kg bags" },
      { slug: "red-chilli-flakes", name: "Red Chilli Flakes", subtitle: "Crushed chilli flakes", image: RedChillieFalkesImg, description: "High-quality chilli flakes for seasoning applications.", specs: ["Uniform flakes", "Strong flavor", "Food grade"], packaging: "10kg and 25kg bags" },
      { slug: "nutmeg", name: "Nutmeg", subtitle: "Whole nutmeg spice", image: NutemegImg, description: "Premium export-quality nutmeg.", specs: ["Whole spice", "Strong aroma", "High quality"], packaging: "10kg and 25kg bags" },
      { slug: "nigella-seeds", name: "Nigella Seeds (Kalonji)", subtitle: "Premium kalonji seeds", image: NigellaSeedsImg, description: "Export-grade nigella seeds for food and spice industries.", specs: ["Cleaned seeds", "High purity", "Export quality"], packaging: "25kg bags" },
      { slug: "mustard-seeds", name: "Mustard Seeds", subtitle: "Yellow and black varieties", image: MustardSeedsImg, description: "Premium mustard seeds for oil extraction and spices.", specs: ["Yellow & black", "Cleaned", "Bulk export"], packaging: "25kg and 50kg bags" },
      { slug: "fennel-seeds", name: "Fennel Seeds", subtitle: "Sweet aromatic fennel", image: FunnelSeedsImg, description: "Premium fennel seeds with natural sweetness.", specs: ["Green fennel", "Strong aroma", "Export quality"], packaging: "25kg bags" },
      { slug: "saffron", name: "Saffron", subtitle: "Premium saffron strands", image: SaffronImg, description: "High-grade saffron for culinary and food industries.", specs: ["Pure strands", "Rich color", "Premium quality"], packaging: "100g, 250g, 500g and custom packs" },
      { slug: "mace", name: "Mace (Javitri)", subtitle: "Premium spice grade", image: MaceImg, description: "Premium mace for spice blends and food processing.", specs: ["Natural color", "Strong aroma", "Export quality"], packaging: "5kg and 10kg packs" },
    ],
  },
  {
    slug: "peanuts",
    name: "Peanuts",
    title: "Peanuts and Groundnuts Export",
    kicker: "Bold, Java, raw, blanched and roasted options",
    description: "Groundnuts and peanut kernels supplied for food processing, edible oil markets, wholesalers, and snack manufacturers.",
    seoDescription: "Peanuts and groundnuts exporters from Ahmedabad, India - raw, shelled, blanched and roasted peanuts for food processors, oil mills and wholesalers. Export-ready packing and shipping to Dubai, UAE and global markets.",
    image: peanutsImg,
    color: "#c18835",
    varieties: [
      { slug: "bold-peanuts", name: "Bold (Runner) Peanuts", subtitle: "Large kernel export grade", image: BoldImg, description: "Premium bold peanuts with large kernel size, suitable for food processing and export markets.", specs: ["Large kernel size", "Machine cleaned", "Export quality"], packaging: "25kg and 50kg bags" },
      { slug: "java-peanuts", name: "Java (Spanish) Peanuts", subtitle: "Small kernel peanuts", image: JavaImg, description: "High-quality Java peanuts for snacks, confectionery, and food industries.", specs: ["Small kernel size", "Uniform grading", "Export ready"], packaging: "25kg and 50kg bags" },
      { slug: "blanched-peanuts", name: "Blanched Peanuts", subtitle: "Skinless peanut kernels", image: BlanchedImg, description: "Premium blanched peanuts processed for food manufacturers and snack producers.", specs: ["Skin removed", "Food grade quality", "Uniform kernels"], packaging: "10kg, 25kg and custom packaging" },
      { slug: "groundnut-shell", name: "Groundnut in Shell", subtitle: "Natural peanuts in shell", image: GroundnutImg, description: "Fresh groundnuts in shell for wholesale buyers and export markets.", specs: ["Natural shell", "Machine cleaned", "Export grade"], packaging: "25kg and 50kg bags" },
      { slug: "red-natal-peanuts", name: "Red Natal Peanuts", subtitle: "Premium red skin peanuts", image: RedNatalImg, description: "High-quality Red Natal peanuts with excellent taste and appearance.", specs: ["Red skin variety", "High purity", "Export quality"], packaging: "25kg and 50kg bags" },
    ],
  },
  {
    slug: "sesame",
    name: "Sesame",
    title: "Sesame Seeds and Oil Seeds",
    kicker: "White, black, hulled and oil seed categories",
    description: "High-purity sesame seeds and oil seeds prepared for bakeries, food processors, ingredient buyers, and wholesale importers.",
    seoDescription: "Sesame and oilseed exporters in Ahmedabad - white, black and hulled sesame plus sunflower and mustard seeds for international buyers. Export packaging and documentation for UAE, Europe and Africa.",
    image: sesameImg,
    color: "#6ca36f",
    varieties: [
      { slug: "natural-sesame", name: "Natural Sesame Seeds", subtitle: "Premium natural sesame", image: NaturalSesameImg, description: "Export-quality natural sesame seeds.", specs: ["Machine cleaned", "High purity", "Export grade"], packaging: "25kg and 50kg bags" },
      { slug: "hulled-sesame", name: "Hulled Sesame Seeds", subtitle: "Skin removed sesame", image: HulledSesameImg, description: "Premium hulled sesame seeds for food industries.", specs: ["Whitened", "High purity", "Export quality"], packaging: "25kg bags" },
      { slug: "black-sesame", name: "Black Sesame Seeds", subtitle: "Premium black sesame", image: BlackSesameImg, description: "High-quality black sesame seeds for global markets.", specs: ["Natural black seeds", "Rich flavor", "Export grade"], packaging: "25kg bags" },
      { slug: "brown-golden-sesame", name: "Brown & Golden Sesame Seeds", subtitle: "Premium sesame varieties", image: BrownGoldenSesameImg, description: "Brown and golden sesame seeds for food processing industries.", specs: ["Cleaned seeds", "Uniform quality", "Export ready"], packaging: "25kg bags" },
      { slug: "mustard-seeds", name: "Mustard Seeds", subtitle: "Yellow and black varieties", image: MustardSeedsImg, description: "Premium mustard seeds for spice and oil industries.", specs: ["Cleaned seeds", "High oil content", "Export quality"], packaging: "25kg and 50kg bags" },
      { slug: "castor-seeds", name: "Castor Seeds", subtitle: "Industrial oil seed", image: CastorSeedsImg, description: "High-quality castor seeds for industrial applications.", specs: ["Machine cleaned", "Export grade", "Bulk supply"], packaging: "25kg and 50kg bags" },
      { slug: "niger-seeds", name: "Niger Seeds", subtitle: "Premium oil seeds", image: NigerSeedsImg, description: "Export-quality niger seeds.", specs: ["Natural seeds", "High purity", "Export quality"], packaging: "25kg bags" },
      { slug: "safflower-seeds", name: "Safflower Seeds", subtitle: "Premium safflower", image: SafflowerSeedsImg, description: "Safflower seeds for oil extraction and feed industries.", specs: ["Cleaned seeds", "High oil content", "Export grade"], packaging: "25kg and 50kg bags" },
      { slug: "soyabeans", name: "Soyabeans", subtitle: "Premium soybean seeds", image: SoyabeansImg, description: "High-quality soybeans for food and feed industries.", specs: ["Uniform size", "Export quality", "Bulk supply"], packaging: "25kg and 50kg bags" },
      { slug: "sunflower-seeds", name: "Sunflower Seeds", subtitle: "Premium sunflower kernels", image: SunflowerSeedsImg, description: "Export-quality sunflower seeds.", specs: ["Cleaned seeds", "Food grade", "Export ready"], packaging: "25kg bags" },
      { slug: "sunflower-seeds-premium", name: "Sunflower Seeds Premium", subtitle: "Selected sunflower seeds", image: SunflowerSeeds02Img, description: "Premium selected sunflower seeds for international buyers.", specs: ["Selected grade", "Food quality", "Export standard"], packaging: "25kg bags" },
      { slug: "psyllium-husk", name: "Psyllium Husk Seeds", subtitle: "Isabgol seeds", image: PsylliumHuskImg, description: "Premium psyllium seeds for health and food industries.", specs: ["Natural seeds", "Export quality", "Bulk supply"], packaging: "25kg bags" },
    ],
  },
  {
    slug: "pulses",
    name: "Pulses",
    title: "Pulses and Lentils Export",
    kicker: "Chickpeas, moong, masoor, toor and urad dal",
    description: "Nutritious pulses and lentils sourced for international food distributors, wholesale traders, and retail packers.",
    seoDescription: "Pulses and lentils exporters (Ahmedabad, India) supplying chickpeas, moong, masoor, toor and urad dal to global markets. Bulk packing, private label and export-ready documentation for importers worldwide.",
    image: pulsesImg,
    color: "#7357d9",
    varieties: [
      { slug: "white-chana-chickpeas", name: "White Chana Chickpeas", subtitle: "Premium kabuli chickpeas", image: WhiteChanaChickpeasImg, description: "Export-quality white chickpeas for retail, wholesale, and food processing industries.", specs: ["Kabuli variety", "Size graded", "Export quality"], packaging: "25kg and 50kg bags" },
      { slug: "desi-chana", name: "Whole Brown Chickpeas (Desi Chana)", subtitle: "Traditional brown chickpeas", image: WholeBrownChickpeasdesichanaImg, description: "Premium desi chana for food processing and wholesale markets.", specs: ["Whole grain", "Cleaned and graded", "Export ready"], packaging: "25kg and 50kg bags" },
      { slug: "moong-dal", name: "Moong Dal", subtitle: "Green gram dal", image: MoongDalImg, description: "High-quality moong dal for retail and bulk buyers.", specs: ["Split green gram", "Uniform quality", "Export grade"], packaging: "25kg and 50kg bags" },
      { slug: "mung-beans", name: "Mung Beans", subtitle: "Whole green gram", image: MungImg, description: "Premium mung beans sourced for food manufacturers and wholesalers.", specs: ["Whole grain", "Machine cleaned", "Export quality"], packaging: "25kg and 50kg bags" },
      { slug: "masoor-dal", name: "Masoor Dal", subtitle: "Red lentils", image: MasoorDalImg, description: "Premium masoor dal with excellent cooking quality.", specs: ["Red lentils", "Cleaned and graded", "Export ready"], packaging: "25kg and 50kg bags" },
      { slug: "toor-dal", name: "Toor Dal", subtitle: "Split pigeon peas", image: ToorDalImg, description: "Premium toor dal for retail and food service markets.", specs: ["Split processed dal", "Uniform quality", "Export grade"], packaging: "25kg and 50kg bags" },
      { slug: "pigeon-peas", name: "Pigeon Peas (Toor)", subtitle: "Whole toor beans", image: PigeonPeasImg, description: "Whole pigeon peas for wholesale and food processing industries.", specs: ["Whole grain", "Cleaned and graded", "Export quality"], packaging: "25kg and 50kg bags" },
      { slug: "arhar-whole", name: "Arhar Whole Dal", subtitle: "Whole pigeon peas", image: ArharWholeDalPigeonPeasImg, description: "Premium whole arhar dal for international buyers.", specs: ["Whole grain", "Natural quality", "Export ready"], packaging: "25kg and 50kg bags" },
      { slug: "black-gram", name: "Black Gram (Urad Dal)", subtitle: "Premium urad dal", image: BlackGramImg, description: "High-quality black gram for food processing and wholesale markets.", specs: ["Cleaned grain", "Uniform size", "Export quality"], packaging: "25kg and 50kg bags" },
      { slug: "black-eyed-peas", name: "Black Eyed Peas (Lobia)", subtitle: "Premium lobia beans", image: BlackEyedPeasImg, description: "Export-grade black eyed peas for retail and bulk buyers.", specs: ["Cleaned beans", "High purity", "Export quality"], packaging: "25kg and 50kg bags" },
      { slug: "white-peas", name: "White Peas (Matar)", subtitle: "Dried white peas", image: WhitePeasImg, description: "Premium white peas for food processing and wholesale distribution.", specs: ["Uniform grading", "Machine cleaned", "Export ready"], packaging: "25kg and 50kg bags" },
      { slug: "kidney-beans", name: "Kidney Beans", subtitle: "Premium rajma beans", image: KidneyBeansImg, description: "High-quality kidney beans for supermarkets and food manufacturers.", specs: ["Premium grade", "Rich color", "Export quality"], packaging: "25kg and 50kg bags" },
      { slug: "horse-gram", name: "Horse Gram (Kulthi Dal)", subtitle: "Nutritious pulse variety", image: HorseGramImg, description: "Premium horse gram for food and health-conscious markets.", specs: ["Whole grain", "Natural quality", "Export ready"], packaging: "25kg and 50kg bags" },
    ],
  },
  {
    slug: "fresh-produce",
    name: "Fresh Produce",
    title: "Fresh Fruits and Vegetables Export",
    kicker: "Seasonal produce with export handling",
    description: "Seasonal fruits and vegetables supported by careful selection, packing coordination, and export documentation.",
    seoDescription: "Fresh produce exporters from Ahmedabad - seasonal mangoes, pomegranates, onions, garlic and ginger for international importers. Cold-chain packing and export coordination to UAE, Europe and other markets.",
    image: freshProduceImg,
    color: "#4a9b4f",
    varieties: [
      { slug: "banana", name: "Banana", subtitle: "Fresh export-quality bananas", image: BananaImg, description: "Premium bananas for international markets.", specs: ["Fresh produce", "Export grade", "Carefully packed"], packaging: "Cartons as per buyer requirement" },
      { slug: "mango", name: "Mangoes", subtitle: "Seasonal Indian mangoes", image: MangoesImg, description: "Premium export-quality mangoes.", specs: ["Fresh harvest", "Export quality", "Multiple varieties"], packaging: "Export cartons" },
      { slug: "pomegranate", name: "Pomegranate", subtitle: "Fresh export-grade fruit", image: PomegranateImg, description: "Premium pomegranates for global markets.", specs: ["Rich color", "Fresh produce", "Export grade"], packaging: "Carton packing" },
      { slug: "grapes", name: "Grapes", subtitle: "Fresh table grapes", image: GrapesImg, description: "High-quality grapes for export buyers.", specs: ["Fresh harvest", "Premium quality", "Export ready"], packaging: "Ventilated cartons" },
      { slug: "guava", name: "Guava", subtitle: "Fresh tropical fruit", image: GuavaImg, description: "Fresh guava sourced for export markets.", specs: ["Natural freshness", "Premium quality", "Export grade"], packaging: "Cartons" },
      { slug: "papaya", name: "Papaya", subtitle: "Fresh tropical papaya", image: PapayaImg, description: "Fresh papaya for international buyers.", specs: ["Export quality", "Fresh produce", "Carefully packed"], packaging: "Cartons" },
      { slug: "bitter-gourd", name: "Bitter Gourd", subtitle: "Fresh bitter melon", image: BitterGourdImg, description: "Fresh bitter gourd sourced for export markets.", specs: ["Fresh harvest", "Export grade", "Premium quality"], packaging: "Cartons" },
      { slug: "bottle-gourd", name: "Bottle Gourd", subtitle: "Fresh bottle gourd", image: BottleGourdImg, description: "Premium bottle gourd for wholesale and export buyers.", specs: ["Fresh produce", "Export quality", "Carefully packed"], packaging: "Cartons" },
      { slug: "drumstick", name: "Drumstick", subtitle: "Fresh moringa pods", image: DrumstickImg, description: "Fresh drumsticks for international markets.", specs: ["Tender pods", "Fresh harvest", "Export grade"], packaging: "Cartons" },
      { slug: "orange", name: "Orange", subtitle: "Fresh citrus oranges", image: OrangesImg, description: "Premium oranges with excellent freshness and taste.", specs: ["Juicy fruit", "Export quality", "Fresh harvest"], packaging: "Cartons" },
      { slug: "sapota", name: "Sapota (Chikoo)", subtitle: "Fresh tropical fruit", image: SapotaImg, description: "Fresh sapota sourced for export and wholesale buyers.", specs: ["Natural sweetness", "Fresh produce", "Export grade"], packaging: "Cartons" },
      { slug: "semi-husk-coconut", name: "Semi Husk Coconut", subtitle: "Export-quality coconuts", image: CoconutImg, description: "Premium semi-husk coconuts for international markets.", specs: ["Fresh coconuts", "Long shelf life", "Export quality"], packaging: "Mesh bags" },
      { slug: "suran", name: "Suran (Elephant Yam)", subtitle: "Fresh elephant yam", image: SuranImg, description: "High-quality elephant yam for food industries and export buyers.", specs: ["Fresh harvest", "Export grade", "Premium quality"], packaging: "Mesh bags and cartons" },
      { slug: "watermelon", name: "Watermelon", subtitle: "Fresh seasonal watermelon", image: WatermelonImg, description: "Premium watermelon for wholesale markets.", specs: ["Fresh harvest", "Large size", "Export grade"], packaging: "Bulk packing" },
      { slug: "onion", name: "Onion", subtitle: "Premium export onions", image: OnionImg, description: "High-quality onions for export markets.", specs: ["Red onion", "Long shelf life", "Export quality"], packaging: "Mesh bags" },
      { slug: "garlic", name: "Garlic", subtitle: "Fresh garlic bulbs", image: GarlicImg, description: "Fresh garlic for food processing and wholesale buyers.", specs: ["Fresh bulbs", "Export grade", "Carefully selected"], packaging: "Mesh bags and cartons" },
      { slug: "ginger", name: "Ginger", subtitle: "Fresh ginger roots", image: GingerImg, description: "Premium fresh ginger for export.", specs: ["Fresh cleaned ginger", "Export quality", "Natural flavor"], packaging: "Cartons or mesh bags" },
      { slug: "fresh-turmeric", name: "Fresh Turmeric", subtitle: "Natural turmeric roots", image: FreshTurmericImg, description: "Fresh turmeric roots for international buyers.", specs: ["Natural roots", "Fresh harvest", "Export quality"], packaging: "Cartons" },
      { slug: "green-chilli", name: "Green Chilli", subtitle: "Fresh green chillies", image: GreenChilliImg, description: "Premium green chillies for export markets.", specs: ["Fresh produce", "Export grade", "Carefully packed"], packaging: "Cartons" },
      { slug: "okra", name: "Okra (Lady Finger)", subtitle: "Fresh okra", image: OkraImg, description: "Fresh okra for international distribution.", specs: ["Tender pods", "Export quality", "Fresh harvest"], packaging: "Cartons" },
      { slug: "potato", name: "Potato", subtitle: "Fresh export potatoes", image: PotatoImg, description: "Premium potatoes for wholesale buyers.", specs: ["Uniform size", "Export quality", "Long shelf life"], packaging: "Mesh bags" },
      { slug: "lemon", name: "Lemon", subtitle: "Fresh citrus fruit", image: LemonImg, description: "Fresh lemons for global markets.", specs: ["Juicy fruit", "Export quality", "Fresh harvest"], packaging: "Cartons" },
    ],
  },
];

// ─── Sub-Category Groups ──────────────────────────────────────────────────────

export const subCategoryGroups: SubCategoryGroup[] = [
  {
    categorySlug: "rice",
    subCategories: [
      {
        slug: "basmati",
        name: "Basmati Rice",
        description: "Long grain aromatic basmati varieties for premium retail, food service and private label export.",
        varietySlugs: ["basmati-rice"],
      },
      {
        slug: "non-basmati",
        name: "Non-Basmati Rice",
        description: "Sona Masoori, IR64, parboiled and broken rice for bulk importers and food processors.",
        varietySlugs: ["non-basmati-rice", "sona-masoori", "ir64-rice", "parboiled-rice", "broken-rice"],
      },
    ],
  },
  {
    categorySlug: "spices",
    subCategories: [
      {
        slug: "whole-spices",
        name: "Whole Spices",
        description: "Cleaned and graded whole spices for food manufacturers, traders and spice blenders.",
        varietySlugs: ["ajwain", "black-pepper", "bay-leaf", "green-cardamom", "black-cardamom", "cinnamon", "cloves", "star-anise", "red-chilli", "nutmeg", "nigella-seeds", "mustard-seeds", "fennel-seeds", "saffron", "mace", "asafoetida"],
      },
      {
        slug: "powder-spices",
        name: "Ground & Powder Spices",
        description: "Finely ground spice powders and blends for food brands, retail packers and industrial buyers.",
        varietySlugs: ["turmeric", "coriander", "ginger-powder", "red-chilli-flakes"],
      },
    ],
  },
  {
    categorySlug: "peanuts",
    subCategories: [
      {
        slug: "raw-shell",
        name: "Raw & Shell Peanuts",
        description: "Natural groundnuts in shell and raw kernels for oil mills and wholesale buyers.",
        varietySlugs: ["groundnut-shell", "bold-peanuts", "java-peanuts", "red-natal-peanuts"],
      },
      {
        slug: "processed-peanuts",
        name: "Processed Peanuts",
        description: "Blanched and skinless peanut kernels for snack manufacturers and food processors.",
        varietySlugs: ["blanched-peanuts"],
      },
    ],
  },
  {
    categorySlug: "sesame",
    subCategories: [
      {
        slug: "sesame-seeds",
        name: "Sesame Seeds",
        description: "Natural, hulled, black and golden sesame seeds for bakeries, food brands and ingredient buyers.",
        varietySlugs: ["natural-sesame", "hulled-sesame", "black-sesame", "brown-golden-sesame"],
      },
      {
        slug: "oil-seeds",
        name: "Oil Seeds",
        description: "Mustard, castor, niger, safflower, soyabean, sunflower and psyllium seeds for oil extraction and processing.",
        varietySlugs: ["mustard-seeds", "castor-seeds", "niger-seeds", "safflower-seeds", "soyabeans", "sunflower-seeds", "sunflower-seeds-premium", "psyllium-husk"],
      },
    ],
  },
  {
    categorySlug: "pulses",
    subCategories: [
      {
        slug: "whole-pulses",
        name: "Whole Pulses",
        description: "Whole chickpeas, mung beans, kidney beans and lobia for wholesale and retail markets.",
        varietySlugs: ["white-chana-chickpeas", "desi-chana", "mung-beans", "pigeon-peas", "arhar-whole", "black-eyed-peas", "white-peas", "kidney-beans", "horse-gram"],
      },
      {
        slug: "split-dal",
        name: "Split Dal & Lentils",
        description: "Moong dal, masoor dal, toor dal and urad dal processed and export-packed for international distributors.",
        varietySlugs: ["moong-dal", "masoor-dal", "toor-dal", "black-gram"],
      },
    ],
  },
  {
    categorySlug: "fresh-produce",
    subCategories: [
      {
        slug: "fruits",
        name: "Fresh Fruits",
        description: "Seasonal Indian fruits including mangoes, pomegranates, grapes, bananas and more for export buyers.",
        varietySlugs: ["banana", "mango", "pomegranate", "grapes", "guava", "papaya", "orange", "sapota", "watermelon", "lemon"],
      },
      {
        slug: "vegetables",
        name: "Fresh Vegetables",
        description: "Export-quality onion, garlic, ginger, okra, potato, chilli and more for importers worldwide.",
        varietySlugs: ["onion", "garlic", "ginger", "fresh-turmeric", "green-chilli", "okra", "potato", "bitter-gourd", "bottle-gourd", "drumstick", "semi-husk-coconut", "suran"],
      },
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export const getProductCategory = (slug?: string) =>
  productCategories.find((c) => c.slug === slug);

export const getSubCategories = (categorySlug: string) =>
  subCategoryGroups.find((g) => g.categorySlug === categorySlug)?.subCategories ?? [];

export const getSubCategory = (categorySlug: string, subSlug: string) =>
  getSubCategories(categorySlug).find((s) => s.slug === subSlug);

export const getSubCategoryVarieties = (categorySlug: string, subSlug: string) => {
  const category = getProductCategory(categorySlug);
  const sub = getSubCategory(categorySlug, subSlug);
  if (!category || !sub) return [];
  return category.varieties.filter((v) => sub.varietySlugs.includes(v.slug));
};

export const getWhatsAppEnquiryUrl = (categoryName: string, varietyName?: string) => {
  const productText = varietyName ? `${varietyName} from ${categoryName}` : categoryName;
  const message = encodeURIComponent(
    `Hello Sanderi Exporters, I am interested in ${productText}. Please share price, MOQ, packaging options, and export details.`
  );
  return `https://wa.me/${phoneNumber}?text=${message}`;
};

// import riceImg from "@/assets/rice.jpg";
// import peanutsImg from "@/assets/peanuts.jpg";
// import sesameImg from "@/assets/sesame.jpg";
// import spicesImg from "@/assets/spices.jpg";
// import pulsesImg from "@/assets/pulses.jpg";
// import freshProduceImg from "@/assets/fresh-produce.jpg";
// import TurmericImg from "@/assets/Turmeric.jpg";
// import AjwainImg from "@/assets/Ajwain.jpg";
// import BlackPepperImg from "@/assets/Black Pepper.jpg";
// import BayLeafImg from "@/assets/Bay Leaf.jpg";
// import CardamomBlackImg from "@/assets/Cardamom Black.png";
// import CardamomImg from "@/assets/Cardamom.png";
// import CinnamonImg from "@/assets/Cinnamon.jpg";
// import ClovesImg from "@/assets/Cloves.jpg";
// import CuminImg from "@/assets/Cumin.jpg";
// import CorianderPowderImg from "@/assets/Coriander Powder and Seeds.jpg";
// import GingerpowderImg from "@/assets/Ginger Powder.jpg";
// import StarAniseImg from "@/assets/Star Anise.jpg";
// import RedChilliImg from "@/assets/Red Chilli.jpg";
// import RedChillieFalkesImg from "@/assets/Red Chilli Flakes.png";
// import NutemegImg from "@/assets/Nutmeg.jpg";
// import NigellaSeedsImg from "@/assets/Nigella Seeds (kalonji).jpg";
// import MustardSeedsImg from "@/assets/Mustard Seeds.jpg";
// import FunnelSeedsImg from "@/assets/Fennel Seeds.jpg";
// import SaffronImg from "@/assets/Saffron.jpg";
// import MaceImg from "@/assets/Mace (Javitri).jpg";
// import AsafoetidaImg from "@/assets/Asafoetida (Hing).jpg";
// import BlanchedImg from "@/assets/peanuts/Blanched Peanuts.jpg";
// import BoldImg from "@/assets/peanuts/Bold (Runner) Peanuts.jpg";
// import GroundnutImg from "@/assets/peanuts/Groundnut in Shell.jpg";
// import JavaImg from "@/assets/peanuts/Java (Spanish) Peanuts.jpg";
// import RedNatalImg from "@/assets/peanuts/Red Natal Peanuts.jpg";
// import ArharWholeDalPigeonPeasImg from "@/assets/pulses/Arhar Whole Dal Pigeon Peas.jpg";
// import BlackEyedPeasImg from "@/assets/pulses/Black eyed Peas (Lobia).jpg";
// import BlackGramImg from "@/assets/pulses/Black Gram (Urad Dal).jpg";
// import HorseGramImg from "@/assets/pulses/Horse Gram Kulthi Dal.jpg";
// import KidneyBeansImg from "@/assets/pulses/Kidney Beans.jpg";
// import MasoorDalImg from "@/assets/pulses/Masoor Dal (Red Lentils).jpg";
// import MungImg from "@/assets/pulses/Mung Beans.jpg";
// import PigeonPeasImg from "@/assets/pulses/Pigeon Peas (Toor).jpg";
// import ToorDalImg from "@/assets/pulses/Toor Dal.jpg";
// import WhiteChanaChickpeasImg from "@/assets/pulses/White Chana Chickpeas.jpg";
// import WhitePeasImg from "@/assets/pulses/White Peas (Matar).jpg";
// import WholeBrownChickpeasdesichanaImg from "@/assets/pulses/whole brown chickpeas desi chana.jpg";
// import MoongDalImg from "@/assets/pulses/Moong Dal (green gram).png";

// import BananaImg from "@/assets/Fruits & Vegatables/Banana.jpeg";
// import BitterGourdImg from "@/assets/Fruits & Vegatables/Bitter Gourd.jpg";
// import BottleGourdImg from "@/assets/Fruits & Vegatables/Bottle Gourd.png";
// import DrumstickImg from "@/assets/Fruits & Vegatables/Drumstick.jpg";
// import FreshTurmericImg from "@/assets/Fruits & Vegatables/Fresh Turmeric.jpg";
// import GarlicImg from "@/assets/Fruits & Vegatables/Garlic.jpg";
// import GingerImg from "@/assets/Fruits & Vegatables/Ginger.png";
// import GrapesImg from "@/assets/Fruits & Vegatables/Grapes.jpg";
// import GreenChilliImg from "@/assets/Fruits & Vegatables/Green Chilli.jpg";
// import GuavaImg from "@/assets/Fruits & Vegatables/guava.png";
// import LemonImg from "@/assets/Fruits & Vegatables/Lemon.jpeg";
// import MangoesImg from "@/assets/Fruits & Vegatables/Mangoes.jpg";
// import OkraImg from "@/assets/Fruits & Vegatables/Okra (Lady Finger).jpg";
// import OnionImg from "@/assets/Fruits & Vegatables/Onion.jpg";
// import OrangesImg from "@/assets/Fruits & Vegatables/Oranges.png";
// import PapayaImg from "@/assets/Fruits & Vegatables/Papaya.jpeg";
// import PomegranateImg from "@/assets/Fruits & Vegatables/Pomegranate.png";
// import PotatoImg from "@/assets/Fruits & Vegatables/Potato.jpg";
// import SapotaImg from "@/assets/Fruits & Vegatables/Sapota.jpeg";
// import CoconutImg from "@/assets/Fruits & Vegatables/Semi Husk Coconut.jpeg";
// import SuranImg from "@/assets/Fruits & Vegatables/Suran (Elephant Yam).jpg";
// import WatermelonImg from "@/assets/Fruits & Vegatables/Watermelon.jpeg";


// import BlackSesameImg from "@/assets/Sesame & Oil Seeds/Black Sesame Seeds.png";
// import BrownGoldenSesameImg from "@/assets/Sesame & Oil Seeds/Brown_Golden Sesame Seeds.jpeg";
// import CastorSeedsImg from "@/assets/Sesame & Oil Seeds/Castor Seeds.jpg";
// import HulledSesameImg from "@/assets/Sesame & Oil Seeds/Hulled Sesame Seeds.jpg";
// import NaturalSesameImg from "@/assets/Sesame & Oil Seeds/Natural Sesame Seed.jpg";
// import NigerSeedsImg from "@/assets/Sesame & Oil Seeds/Niger Seeds.jpg";
// import PsylliumHuskImg from "@/assets/Sesame & Oil Seeds/Psyllium husk_seeds.jpg";
// import SafflowerSeedsImg from "@/assets/Sesame & Oil Seeds/Safflower Seeds.jpg";
// import SoyabeansImg from "@/assets/Sesame & Oil Seeds/Soyabeans Seeds.jpg";
// import SunflowerSeedsImg from "@/assets/Sesame & Oil Seeds/Sunflower Seeds.jpg";
// import SunflowerSeeds02Img from "@/assets/Sesame & Oil Seeds/Sunflower Seeds 02.jpg";


// export interface ProductVariety {
//   slug: string;
//   name: string;
//   subtitle: string;
//   description: string;
//   image?: string;
//   specs: string[];
//   packaging: string;
// }

// export interface ProductCategory {
//   slug: string;
//   name: string;
//   title: string;
//   kicker: string;
//   description: string;
//   seoDescription: string;
//   image: string;
//   color: string;
//   varieties: ProductVariety[];
// }

// export const phoneNumber = "917990343575";

// export const productCategories: ProductCategory[] = [
//   {
//     slug: "rice",
//     name: "Rice",
//     title: "Export Quality Rice from India",
//     kicker: "Basmati, non-basmati and bulk rice supply",
//     description:
//       "Premium rice varieties prepared for importers, distributors, wholesalers, and private label buyers looking for dependable Indian rice export support.",
//     seoDescription:
//       "Ahmedabad-based rice exporters offering basmati, non-basmati, parboiled, IR64 and Sona Masoori for global buyers (UAE, Middle East, Europe, Africa). Export rice from India with packing, quality checks and export documentation.",
//     image: riceImg,
//     color: "#0e7c86",
//     varieties: [
//       {
//         slug: "basmati-rice",
//         name: "Basmati Rice",
//         subtitle: "Long grain aromatic rice",
//         description:
//           "Premium basmati rice for retail, wholesale, restaurant supply, and private label export programs.",
//         specs: ["1121, 1509 and traditional options", "Aged and steam varieties available", "Sortex cleaned export finish"],
//         packaging: "5kg, 10kg, 25kg and 50kg PP, jute or private label bags",
//       },
//       {
//         slug: "non-basmati-rice",
//         name: "Non-Basmati Rice",
//         subtitle: "Daily use export rice",
//         description:
//           "Reliable non-basmati rice for bulk buyers who need consistent cooking quality and competitive pricing.",
//         specs: ["White and parboiled options", "Multiple grain lengths", "Buyer specification matching"],
//         packaging: "25kg and 50kg bags with custom marking",
//       },
//       {
//         slug: "sona-masoori",
//         name: "Sona Masoori",
//         subtitle: "Lightweight medium grain rice",
//         description:
//           "Sona Masoori rice for distributors serving South Indian, retail, and food service markets.",
//         specs: ["Raw and steam options", "Lightweight grains", "Cleaned and graded supply"],
//         packaging: "5kg to 50kg bags based on buyer requirement",
//       },
//       {
//         slug: "ir64-rice",
//         name: "IR64 Rice",
//         subtitle: "Popular long grain non-basmati rice",
//         description:
//           "IR64 rice for international bulk trade, food service buyers, and large volume import requirements.",
//         specs: ["5 percent to 25 percent broken options", "Raw or parboiled options", "Bulk shipment ready"],
//         packaging: "25kg and 50kg PP bags",
//       },
//       {
//         slug: "parboiled-rice",
//         name: "Parboiled Rice",
//         subtitle: "Steam processed export rice",
//         description:
//           "Parboiled rice with better grain strength and cooking stability for commercial buyers.",
//         specs: ["Golden and white parboiled options", "Lower breakage profile", "Container load supply"],
//         packaging: "25kg and 50kg export bags",
//       },
//       {
//         slug: "broken-rice",
//         name: "Broken Rice",
//         subtitle: "Economical bulk rice grade",
//         description:
//           "Broken rice for food processing, feed, brewing, and economical bulk trading applications.",
//         specs: ["Different broken percentages", "Cleaned bulk grade", "Competitive volume pricing"],
//         packaging: "50kg bags or bulk buyer specification",
//       },
//     ],
//   },
//   {
//     slug: "spices",
//     name: "Spices",
//     title: "Indian Spices for Global Buyers",
//     kicker: "Whole, powder and cleaned spice supply",
//     description:
//       "High-demand Indian spices sourced and processed for food brands, wholesale importers, and international distributors.",
//     seoDescription:
//       "Spices exporters in Ahmedabad - turmeric, cumin, coriander, red chilli, fennel and more for international spice buyers. Cleaned, graded and export-packed spices shipped to UAE, Europe and Africa.",
//     image: spicesImg,
//     color: "#df5f2d",
//     varieties: [
//   {
//     slug: "turmeric",
//     name: "Turmeric",
//     subtitle: "Fingers and powder",
//     image: TurmericImg,
//     description: "Premium turmeric fingers and powder for export markets.",
//     specs: ["High curcumin content", "Whole and powder", "Export grade"],
//     packaging: "10kg, 25kg and custom packaging",
//   },
//   {
//     slug: "ajwain",
//     name: "Ajwain",
//     subtitle: "Premium carom seeds",
//     image: AjwainImg,
//     description: "Export-quality ajwain seeds with strong aroma.",
//     specs: ["Machine cleaned", "High purity", "Export quality"],
//     packaging: "25kg bags",
//   },
//   {
//   slug: "asafoetida",
//   name: "Asafoetida (Hing)",
//   subtitle: "Premium hing powder",
//   image: AsafoetidaImg,
//   description:
//     "High-quality asafoetida (hing) sourced for food manufacturers, spice brands, wholesalers, and international buyers.",
//   specs: [
//     "Strong aroma",
//     "Premium quality",
//     "Food-grade processing"
//   ],
//   packaging: "100g, 500g, 1kg and bulk packaging",
// },
//   {
//     slug: "cumin",
//     name: "Cumin Seeds",
//     subtitle: "Machine cleaned cumin",
//     image: CuminImg,
//     description: "Premium export-grade cumin seeds.",
//     specs: ["Machine cleaned", "High purity", "Strong aroma"],
//     packaging: "25kg bags",
//   },
//   {
//     slug: "black-pepper",
//     name: "Black Pepper",
//     subtitle: "Premium whole pepper",
//     image: BlackPepperImg,
//     description: "High-quality black pepper for global buyers.",
//     specs: ["Bold berries", "Strong aroma", "Export quality"],
//     packaging: "25kg bags",
//   },
//   {
//     slug: "bay-leaf",
//     name: "Bay Leaf",
//     subtitle: "Natural aromatic leaves",
//     image: BayLeafImg,
//     description: "Premium dried bay leaves for seasoning and food processing.",
//     specs: ["Natural aroma", "Cleaned", "Export grade"],
//     packaging: "10kg and 25kg bags",
//   },
//   {
//     slug: "green-cardamom",
//     name: "Green Cardamom",
//     subtitle: "Premium spice grade",
//     image: CardamomImg,
//     description: "Hand-selected green cardamom pods.",
//     specs: ["Rich aroma", "Premium pods", "Export quality"],
//     packaging: "5kg and 10kg packs",
//   },
//   {
//     slug: "black-cardamom",
//     name: "Black Cardamom",
//     subtitle: "Smoky aromatic spice",
//     image: CardamomBlackImg,
//     description: "Premium black cardamom for spice blends and food industries.",
//     specs: ["Whole pods", "Strong flavor", "Export grade"],
//     packaging: "5kg and 10kg packs",
//   },
//   {
//     slug: "cinnamon",
//     name: "Cinnamon",
//     subtitle: "Premium cinnamon sticks",
//     image: CinnamonImg,
//     description: "High-quality cinnamon sticks with rich aroma.",
//     specs: ["Natural bark", "Strong aroma", "Export quality"],
//     packaging: "10kg and 25kg bags",
//   },
//   {
//     slug: "cloves",
//     name: "Cloves",
//     subtitle: "Whole dried cloves",
//     image: ClovesImg,
//     description: "Premium cloves for spice and food industries.",
//     specs: ["High oil content", "Strong aroma", "Export grade"],
//     packaging: "10kg and 25kg bags",
//   },
//   {
//     slug: "coriander",
//     name: "Coriander Seeds & Powder",
//     subtitle: "Whole and ground coriander",
//     image: CorianderPowderImg,
//     description: "Coriander seeds and powder for export buyers.",
//     specs: ["Whole seeds", "Powder options", "Cleaned and graded"],
//     packaging: "25kg bags",
//   },
//   {
//     slug: "ginger-powder",
//     name: "Ginger Powder",
//     subtitle: "Fine ground ginger",
//     image: GingerpowderImg,
//     description: "Premium ginger powder for food processing industries.",
//     specs: ["Fine mesh", "Strong flavor", "Export quality"],
//     packaging: "10kg and 25kg bags",
//   },
//   {
//     slug: "star-anise",
//     name: "Star Anise",
//     subtitle: "Premium whole spice",
//     image: StarAniseImg,
//     description: "Export-grade star anise with rich aroma.",
//     specs: ["Whole star shape", "Strong flavor", "Premium quality"],
//     packaging: "10kg and 25kg bags",
//   },
//   {
//     slug: "red-chilli",
//     name: "Red Chilli",
//     subtitle: "Whole dried chilli",
//     image: RedChilliImg,
//     description: "Premium whole red chilli for export markets.",
//     specs: ["Whole chilli", "Multiple heat levels", "Export quality"],
//     packaging: "10kg and 25kg bags",
//   },
//   {
//     slug: "red-chilli-flakes",
//     name: "Red Chilli Flakes",
//     subtitle: "Crushed chilli flakes",
//     image: RedChillieFalkesImg,
//     description: "High-quality chilli flakes for seasoning applications.",
//     specs: ["Uniform flakes", "Strong flavor", "Food grade"],
//     packaging: "10kg and 25kg bags",
//   },
//   {
//     slug: "nutmeg",
//     name: "Nutmeg",
//     subtitle: "Whole nutmeg spice",
//     image: NutemegImg,
//     description: "Premium export-quality nutmeg.",
//     specs: ["Whole spice", "Strong aroma", "High quality"],
//     packaging: "10kg and 25kg bags",
//   },
//   {
//     slug: "nigella-seeds",
//     name: "Nigella Seeds (Kalonji)",
//     subtitle: "Premium kalonji seeds",
//     image: NigellaSeedsImg,
//     description: "Export-grade nigella seeds for food and spice industries.",
//     specs: ["Cleaned seeds", "High purity", "Export quality"],
//     packaging: "25kg bags",
//   },
//   {
//     slug: "mustard-seeds",
//     name: "Mustard Seeds",
//     subtitle: "Yellow and black varieties",
//     image: MustardSeedsImg,
//     description: "Premium mustard seeds for oil extraction and spices.",
//     specs: ["Yellow & black", "Cleaned", "Bulk export"],
//     packaging: "25kg and 50kg bags",
//   },
//   {
//     slug: "fennel-seeds",
//     name: "Fennel Seeds",
//     subtitle: "Sweet aromatic fennel",
//     image: FunnelSeedsImg,
//     description: "Premium fennel seeds with natural sweetness.",
//     specs: ["Green fennel", "Strong aroma", "Export quality"],
//     packaging: "25kg bags",
//   },
//   {
//     slug: "saffron",
//     name: "Saffron",
//     subtitle: "Premium saffron strands",
//     image: SaffronImg,
//     description: "High-grade saffron for culinary and food industries.",
//     specs: ["Pure strands", "Rich color", "Premium quality"],
//     packaging: "100g, 250g, 500g and custom packs",
//   },
//   {
//     slug: "mace",
//     name: "Mace (Javitri)",
//     subtitle: "Premium spice grade",
//     image: MaceImg,
//     description: "Premium mace for spice blends and food processing.",
//     specs: ["Natural color", "Strong aroma", "Export quality"],
//     packaging: "5kg and 10kg packs",
//   },
// ]
//     ,
//   },
//   {
//     slug: "peanuts",
//     name: "Peanuts",
//     title: "Peanuts and Groundnuts Export",
//     kicker: "Bold, Java, raw, blanched and roasted options",
//     description:
//       "Groundnuts and peanut kernels supplied for food processing, edible oil markets, wholesalers, and snack manufacturers.",
//     seoDescription:
//       "Peanuts and groundnuts exporters from Ahmedabad, India - raw, shelled, blanched and roasted peanuts for food processors, oil mills and wholesalers. Export-ready packing and shipping to Dubai, UAE and global markets.",
//     image: peanutsImg,
//     color: "#c18835",
//    varieties: [
//   {
//     slug: "bold-peanuts",
//     name: "Bold (Runner) Peanuts",
//     subtitle: "Large kernel export grade",
//     image: BoldImg,
//     description: "Premium bold peanuts with large kernel size, suitable for food processing and export markets.",
//     specs: [
//       "Large kernel size",
//       "Machine cleaned",
//       "Export quality"
//     ],
//     packaging: "25kg and 50kg bags",
//   },
//   {
//     slug: "java-peanuts",
//     name: "Java (Spanish) Peanuts",
//     subtitle: "Small kernel peanuts",
//     image: JavaImg,
//     description: "High-quality Java peanuts for snacks, confectionery, and food industries.",
//     specs: [
//       "Small kernel size",
//       "Uniform grading",
//       "Export ready"
//     ],
//     packaging: "25kg and 50kg bags",
//   },
//   {
//     slug: "blanched-peanuts",
//     name: "Blanched Peanuts",
//     subtitle: "Skinless peanut kernels",
//     image: BlanchedImg,
//     description: "Premium blanched peanuts processed for food manufacturers and snack producers.",
//     specs: [
//       "Skin removed",
//       "Food grade quality",
//       "Uniform kernels"
//     ],
//     packaging: "10kg, 25kg and custom packaging",
//   },
//   {
//     slug: "groundnut-shell",
//     name: "Groundnut in Shell",
//     subtitle: "Natural peanuts in shell",
//     image: GroundnutImg,
//     description: "Fresh groundnuts in shell for wholesale buyers and export markets.",
//     specs: [
//       "Natural shell",
//       "Machine cleaned",
//       "Export grade"
//     ],
//     packaging: "25kg and 50kg bags",
//   },
//   {
//     slug: "red-natal-peanuts",
//     name: "Red Natal Peanuts",
//     subtitle: "Premium red skin peanuts",
//     image: RedNatalImg,
//     description: "High-quality Red Natal peanuts with excellent taste and appearance.",
//     specs: [
//       "Red skin variety",
//       "High purity",
//       "Export quality"
//     ],
//     packaging: "25kg and 50kg bags",
//   },
// ],
//   },
//   {
//     slug: "sesame",
//     name: "Sesame",
//     title: "Sesame Seeds and Oil Seeds",
//     kicker: "White, black, hulled and oil seed categories",
//     description:
//       "High-purity sesame seeds and oil seeds prepared for bakeries, food processors, ingredient buyers, and wholesale importers.",
//     seoDescription:
//       "Sesame and oilseed exporters in Ahmedabad - white, black and hulled sesame plus sunflower and mustard seeds for international buyers. Export packaging and documentation for UAE, Europe and Africa.",
//     image: sesameImg,
//     color: "#6ca36f",
//    varieties: [
//   {
//     slug: "natural-sesame",
//     name: "Natural Sesame Seeds",
//     subtitle: "Premium natural sesame",
//     image: NaturalSesameImg,
//     description: "Export-quality natural sesame seeds.",
//     specs: ["Machine cleaned", "High purity", "Export grade"],
//     packaging: "25kg and 50kg bags",
//   },
//   {
//     slug: "hulled-sesame",
//     name: "Hulled Sesame Seeds",
//     subtitle: "Skin removed sesame",
//     image: HulledSesameImg,
//     description: "Premium hulled sesame seeds for food industries.",
//     specs: ["Whitened", "High purity", "Export quality"],
//     packaging: "25kg bags",
//   },
//   {
//     slug: "black-sesame",
//     name: "Black Sesame Seeds",
//     subtitle: "Premium black sesame",
//     image: BlackSesameImg,
//     description: "High-quality black sesame seeds for global markets.",
//     specs: ["Natural black seeds", "Rich flavor", "Export grade"],
//     packaging: "25kg bags",
//   },
//   {
//     slug: "brown-golden-sesame",
//     name: "Brown & Golden Sesame Seeds",
//     subtitle: "Premium sesame varieties",
//     image: BrownGoldenSesameImg,
//     description: "Brown and golden sesame seeds for food processing industries.",
//     specs: ["Cleaned seeds", "Uniform quality", "Export ready"],
//     packaging: "25kg bags",
//   },
//   {
//     slug: "mustard-seeds",
//     name: "Mustard Seeds",
//     subtitle: "Yellow and black varieties",
//     image: MustardSeedsImg,
//     description: "Premium mustard seeds for spice and oil industries.",
//     specs: ["Cleaned seeds", "High oil content", "Export quality"],
//     packaging: "25kg and 50kg bags",
//   },
//   {
//     slug: "castor-seeds",
//     name: "Castor Seeds",
//     subtitle: "Industrial oil seed",
//     image: CastorSeedsImg,
//     description: "High-quality castor seeds for industrial applications.",
//     specs: ["Machine cleaned", "Export grade", "Bulk supply"],
//     packaging: "25kg and 50kg bags",
//   },
//   {
//     slug: "niger-seeds",
//     name: "Niger Seeds",
//     subtitle: "Premium oil seeds",
//     image: NigerSeedsImg,
//     description: "Export-quality niger seeds.",
//     specs: ["Natural seeds", "High purity", "Export quality"],
//     packaging: "25kg bags",
//   },
//   {
//     slug: "safflower-seeds",
//     name: "Safflower Seeds",
//     subtitle: "Premium safflower",
//     image: SafflowerSeedsImg,
//     description: "Safflower seeds for oil extraction and feed industries.",
//     specs: ["Cleaned seeds", "High oil content", "Export grade"],
//     packaging: "25kg and 50kg bags",
//   },
//   {
//     slug: "soyabeans",
//     name: "Soyabeans",
//     subtitle: "Premium soybean seeds",
//     image: SoyabeansImg,
//     description: "High-quality soybeans for food and feed industries.",
//     specs: ["Uniform size", "Export quality", "Bulk supply"],
//     packaging: "25kg and 50kg bags",
//   },
//   {
//     slug: "sunflower-seeds",
//     name: "Sunflower Seeds",
//     subtitle: "Premium sunflower kernels",
//     image: SunflowerSeedsImg,
//     description: "Export-quality sunflower seeds.",
//     specs: ["Cleaned seeds", "Food grade", "Export ready"],
//     packaging: "25kg bags",
//   },
//   {
//     slug: "sunflower-seeds-premium",
//     name: "Sunflower Seeds Premium",
//     subtitle: "Selected sunflower seeds",
//     image: SunflowerSeeds02Img,
//     description: "Premium selected sunflower seeds for international buyers.",
//     specs: ["Selected grade", "Food quality", "Export standard"],
//     packaging: "25kg bags",
//   },
//   {
//     slug: "psyllium-husk",
//     name: "Psyllium Husk Seeds",
//     subtitle: "Isabgol seeds",
//     image: PsylliumHuskImg,
//     description: "Premium psyllium seeds for health and food industries.",
//     specs: ["Natural seeds", "Export quality", "Bulk supply"],
//     packaging: "25kg bags",
//   },
// ],
//   },
//   {
//     slug: "pulses",
//     name: "Pulses",
//     title: "Pulses and Lentils Export",
//     kicker: "Chickpeas, moong, masoor, toor and urad dal",
//     description:
//       "Nutritious pulses and lentils sourced for international food distributors, wholesale traders, and retail packers.",
//     seoDescription:
//       "Pulses and lentils exporters (Ahmedabad, India) supplying chickpeas, moong, masoor, toor and urad dal to global markets. Bulk packing, private label and export-ready documentation for importers worldwide.",
//     image: pulsesImg,
//     color: "#7357d9",
//     varieties: [
//   {
//     slug: "white-chana-chickpeas",
//     name: "White Chana Chickpeas",
//     subtitle: "Premium kabuli chickpeas",
//     image: WhiteChanaChickpeasImg,
//     description: "Export-quality white chickpeas for retail, wholesale, and food processing industries.",
//     specs: ["Kabuli variety", "Size graded", "Export quality"],
//     packaging: "25kg and 50kg bags",
//   },
//   {
//     slug: "desi-chana",
//     name: "Whole Brown Chickpeas (Desi Chana)",
//     subtitle: "Traditional brown chickpeas",
//     image: WholeBrownChickpeasdesichanaImg,
//     description: "Premium desi chana for food processing and wholesale markets.",
//     specs: ["Whole grain", "Cleaned and graded", "Export ready"],
//     packaging: "25kg and 50kg bags",
//   },
//   {
//     slug: "moong-dal",
//     name: "Moong Dal",
//     subtitle: "Green gram dal",
//     image: MoongDalImg,
//     description: "High-quality moong dal for retail and bulk buyers.",
//     specs: ["Split green gram", "Uniform quality", "Export grade"],
//     packaging: "25kg and 50kg bags",
//   },
//   {
//     slug: "mung-beans",
//     name: "Mung Beans",
//     subtitle: "Whole green gram",
//     image: MungImg,
//     description: "Premium mung beans sourced for food manufacturers and wholesalers.",
//     specs: ["Whole grain", "Machine cleaned", "Export quality"],
//     packaging: "25kg and 50kg bags",
//   },
//   {
//     slug: "masoor-dal",
//     name: "Masoor Dal",
//     subtitle: "Red lentils",
//     image: MasoorDalImg,
//     description: "Premium masoor dal with excellent cooking quality.",
//     specs: ["Red lentils", "Cleaned and graded", "Export ready"],
//     packaging: "25kg and 50kg bags",
//   },
//   {
//     slug: "toor-dal",
//     name: "Toor Dal",
//     subtitle: "Split pigeon peas",
//     image: ToorDalImg,
//     description: "Premium toor dal for retail and food service markets.",
//     specs: ["Split processed dal", "Uniform quality", "Export grade"],
//     packaging: "25kg and 50kg bags",
//   },
//   {
//     slug: "pigeon-peas",
//     name: "Pigeon Peas (Toor)",
//     subtitle: "Whole toor beans",
//     image: PigeonPeasImg,
//     description: "Whole pigeon peas for wholesale and food processing industries.",
//     specs: ["Whole grain", "Cleaned and graded", "Export quality"],
//     packaging: "25kg and 50kg bags",
//   },
//   {
//     slug: "arhar-whole",
//     name: "Arhar Whole Dal",
//     subtitle: "Whole pigeon peas",
//     image: ArharWholeDalPigeonPeasImg,
//     description: "Premium whole arhar dal for international buyers.",
//     specs: ["Whole grain", "Natural quality", "Export ready"],
//     packaging: "25kg and 50kg bags",
//   },
//   {
//     slug: "black-gram",
//     name: "Black Gram (Urad Dal)",
//     subtitle: "Premium urad dal",
//     image: BlackGramImg,
//     description: "High-quality black gram for food processing and wholesale markets.",
//     specs: ["Cleaned grain", "Uniform size", "Export quality"],
//     packaging: "25kg and 50kg bags",
//   },
//   {
//     slug: "black-eyed-peas",
//     name: "Black Eyed Peas (Lobia)",
//     subtitle: "Premium lobia beans",
//     image: BlackEyedPeasImg,
//     description: "Export-grade black eyed peas for retail and bulk buyers.",
//     specs: ["Cleaned beans", "High purity", "Export quality"],
//     packaging: "25kg and 50kg bags",
//   },
//   {
//     slug: "white-peas",
//     name: "White Peas (Matar)",
//     subtitle: "Dried white peas",
//     image: WhitePeasImg,
//     description: "Premium white peas for food processing and wholesale distribution.",
//     specs: ["Uniform grading", "Machine cleaned", "Export ready"],
//     packaging: "25kg and 50kg bags",
//   },
//   {
//     slug: "kidney-beans",
//     name: "Kidney Beans",
//     subtitle: "Premium rajma beans",
//     image: KidneyBeansImg,
//     description: "High-quality kidney beans for supermarkets and food manufacturers.",
//     specs: ["Premium grade", "Rich color", "Export quality"],
//     packaging: "25kg and 50kg bags",
//   },
//   {
//     slug: "horse-gram",
//     name: "Horse Gram (Kulthi Dal)",
//     subtitle: "Nutritious pulse variety",
//     image: HorseGramImg,
//     description: "Premium horse gram for food and health-conscious markets.",
//     specs: ["Whole grain", "Natural quality", "Export ready"],
//     packaging: "25kg and 50kg bags",
//   },
// ],
//   },
//   {
//     slug: "fresh-produce",
//     name: "Fresh Produce",
//     title: "Fresh Fruits and Vegetables Export",
//     kicker: "Seasonal produce with export handling",
//     description:
//       "Seasonal fruits and vegetables supported by careful selection, packing coordination, and export documentation.",
//     seoDescription:
//       "Fresh produce exporters from Ahmedabad - seasonal mangoes, pomegranates, onions, garlic and ginger for international importers. Cold-chain packing and export coordination to UAE, Europe and other markets.",
//     image: freshProduceImg,
//     color: "#4a9b4f",
//     varieties: [
//   {
//     slug: "banana",
//     name: "Banana",
//     subtitle: "Fresh export-quality bananas",
//     image: BananaImg,
//     description: "Premium bananas for international markets.",
//     specs: ["Fresh produce", "Export grade", "Carefully packed"],
//     packaging: "Cartons as per buyer requirement",
//   },
//   {
//     slug: "mango",
//     name: "Mangoes",
//     subtitle: "Seasonal Indian mangoes",
//     image: MangoesImg,
//     description: "Premium export-quality mangoes.",
//     specs: ["Fresh harvest", "Export quality", "Multiple varieties"],
//     packaging: "Export cartons",
//   },
//   {
//     slug: "pomegranate",
//     name: "Pomegranate",
//     subtitle: "Fresh export-grade fruit",
//     image: PomegranateImg,
//     description: "Premium pomegranates for global markets.",
//     specs: ["Rich color", "Fresh produce", "Export grade"],
//     packaging: "Carton packing",
//   },
//   {
//     slug: "grapes",
//     name: "Grapes",
//     subtitle: "Fresh table grapes",
//     image: GrapesImg,
//     description: "High-quality grapes for export buyers.",
//     specs: ["Fresh harvest", "Premium quality", "Export ready"],
//     packaging: "Ventilated cartons",
//   },
//   {
//     slug: "guava",
//     name: "Guava",
//     subtitle: "Fresh tropical fruit",
//     image: GuavaImg,
//     description: "Fresh guava sourced for export markets.",
//     specs: ["Natural freshness", "Premium quality", "Export grade"],
//     packaging: "Cartons",
//   },
//   {
//     slug: "papaya",
//     name: "Papaya",
//     subtitle: "Fresh tropical papaya",
//     image: PapayaImg,
//     description: "Fresh papaya for international buyers.",
//     specs: ["Export quality", "Fresh produce", "Carefully packed"],
//     packaging: "Cartons",
//   },{
//   slug: "bitter-gourd",
//   name: "Bitter Gourd",
//   subtitle: "Fresh bitter melon",
//   image: BitterGourdImg,
//   description: "Fresh bitter gourd sourced for export markets.",
//   specs: ["Fresh harvest", "Export grade", "Premium quality"],
//   packaging: "Cartons",
// },
// {
//   slug: "bottle-gourd",
//   name: "Bottle Gourd",
//   subtitle: "Fresh bottle gourd",
//   image: BottleGourdImg,
//   description: "Premium bottle gourd for wholesale and export buyers.",
//   specs: ["Fresh produce", "Export quality", "Carefully packed"],
//   packaging: "Cartons",
// },
// {
//   slug: "drumstick",
//   name: "Drumstick",
//   subtitle: "Fresh moringa pods",
//   image: DrumstickImg,
//   description: "Fresh drumsticks for international markets.",
//   specs: ["Tender pods", "Fresh harvest", "Export grade"],
//   packaging: "Cartons",
// },
// {
//   slug: "orange",
//   name: "Orange",
//   subtitle: "Fresh citrus oranges",
//   image: OrangesImg,
//   description: "Premium oranges with excellent freshness and taste.",
//   specs: ["Juicy fruit", "Export quality", "Fresh harvest"],
//   packaging: "Cartons",
// },
// {
//   slug: "sapota",
//   name: "Sapota (Chikoo)",
//   subtitle: "Fresh tropical fruit",
//   image: SapotaImg,
//   description: "Fresh sapota sourced for export and wholesale buyers.",
//   specs: ["Natural sweetness", "Fresh produce", "Export grade"],
//   packaging: "Cartons",
// },
// {
//   slug: "semi-husk-coconut",
//   name: "Semi Husk Coconut",
//   subtitle: "Export-quality coconuts",
//   image: CoconutImg,
//   description: "Premium semi-husk coconuts for international markets.",
//   specs: ["Fresh coconuts", "Long shelf life", "Export quality"],
//   packaging: "Mesh bags",
// },
// {
//   slug: "suran",
//   name: "Suran (Elephant Yam)",
//   subtitle: "Fresh elephant yam",
//   image: SuranImg,
//   description: "High-quality elephant yam for food industries and export buyers.",
//   specs: ["Fresh harvest", "Export grade", "Premium quality"],
//   packaging: "Mesh bags and cartons",
// },
//   {
//     slug: "watermelon",
//     name: "Watermelon",
//     subtitle: "Fresh seasonal watermelon",
//     image: WatermelonImg,
//     description: "Premium watermelon for wholesale markets.",
//     specs: ["Fresh harvest", "Large size", "Export grade"],
//     packaging: "Bulk packing",
//   },
//   {
//     slug: "onion",
//     name: "Onion",
//     subtitle: "Premium export onions",
//     image: OnionImg,
//     description: "High-quality onions for export markets.",
//     specs: ["Red onion", "Long shelf life", "Export quality"],
//     packaging: "Mesh bags",
//   },
//   {
//     slug: "garlic",
//     name: "Garlic",
//     subtitle: "Fresh garlic bulbs",
//     image: GarlicImg,
//     description: "Fresh garlic for food processing and wholesale buyers.",
//     specs: ["Fresh bulbs", "Export grade", "Carefully selected"],
//     packaging: "Mesh bags and cartons",
//   },
//   {
//     slug: "ginger",
//     name: "Ginger",
//     subtitle: "Fresh ginger roots",
//     image: GingerImg,
//     description: "Premium fresh ginger for export.",
//     specs: ["Fresh cleaned ginger", "Export quality", "Natural flavor"],
//     packaging: "Cartons or mesh bags",
//   },
//   {
//     slug: "fresh-turmeric",
//     name: "Fresh Turmeric",
//     subtitle: "Natural turmeric roots",
//     image: FreshTurmericImg,
//     description: "Fresh turmeric roots for international buyers.",
//     specs: ["Natural roots", "Fresh harvest", "Export quality"],
//     packaging: "Cartons",
//   },
//   {
//     slug: "green-chilli",
//     name: "Green Chilli",
//     subtitle: "Fresh green chillies",
//     image: GreenChilliImg,
//     description: "Premium green chillies for export markets.",
//     specs: ["Fresh produce", "Export grade", "Carefully packed"],
//     packaging: "Cartons",
//   },
//   {
//     slug: "okra",
//     name: "Okra (Lady Finger)",
//     subtitle: "Fresh okra",
//     image: OkraImg,
//     description: "Fresh okra for international distribution.",
//     specs: ["Tender pods", "Export quality", "Fresh harvest"],
//     packaging: "Cartons",
//   },
//   {
//     slug: "potato",
//     name: "Potato",
//     subtitle: "Fresh export potatoes",
//     image: PotatoImg,
//     description: "Premium potatoes for wholesale buyers.",
//     specs: ["Uniform size", "Export quality", "Long shelf life"],
//     packaging: "Mesh bags",
//   },
//   {
//     slug: "lemon",
//     name: "Lemon",
//     subtitle: "Fresh citrus fruit",
//     image: LemonImg,
//     description: "Fresh lemons for global markets.",
//     specs: ["Juicy fruit", "Export quality", "Fresh harvest"],
//     packaging: "Cartons",
//   },
// ],
//   },
// ];

// export const getProductCategory = (slug?: string) =>
//   productCategories.find((category) => category.slug === slug);

// export const getWhatsAppEnquiryUrl = (categoryName: string, varietyName?: string) => {
//   const productText = varietyName ? `${varietyName} from ${categoryName}` : categoryName;
//   const message = encodeURIComponent(
//     `Hello Sanderi Exporters, I am interested in ${productText}. Please share price, MOQ, packaging options, and export details.`
//   );

//   return `https://wa.me/${phoneNumber}?text=${message}`;
// };
