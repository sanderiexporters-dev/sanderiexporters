import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { productCategories } from "@/data/productCatalog";

interface ProductSliderProps {
  compact?: boolean;
}

const ProductSlider = ({ compact = false }: ProductSliderProps) => {
  const loopItems = [...productCategories, ...productCategories];

  return (
    <section className={`${compact ? "py-8" : "py-14"} overflow-hidden bg-[#121826] text-white`}>
      <div className="container mx-auto px-4">
        <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-kicker text-white/80">Product categories</span>
            <h2 className="mt-3 text-2xl text-white md:text-4xl">Moving export desk</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/66">
            Tap any category to explore exact product names, export specifications, packaging options, and direct WhatsApp enquiry.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="marquee-track flex gap-5 px-4">
          {loopItems.map((category, index) => (
            <Link
              key={`${category.slug}-${index}`}
              to={`/products/${category.slug}`}
              className="category-card"
              aria-label={`View ${category.name} export category`}
            >
              <img src={category.image} alt={`${category.name} export category`} />
              <div className="category-card-content">
                <div
                  className="mb-3 inline-flex h-9 w-9 items-center justify-center bg-white text-[#121826]"
                  style={{ borderRadius: "0.5rem" }}
                >
                  <ArrowUpRight size={18} />
                </div>
                <h3 className="text-2xl text-white">{category.name}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-white/78">{category.kicker}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
