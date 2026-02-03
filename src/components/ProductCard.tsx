import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  details?: string;
}

const ProductCard = ({ title, description, image, category, details }: ProductCardProps) => {
  // WhatsApp Logic
  const handleEnquiry = () => {
    const phoneNumber = "917990343575";
    const message = encodeURIComponent(
      `Hello! I am interested in ${title}. Please tell us what you want to know.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-md card-hover flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
          {category}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {description}
        </p>
        
        {details && (
          <div className="mb-4 mt-auto p-2 bg-secondary rounded text-[11px] font-semibold text-primary uppercase tracking-wider">
            {details}
          </div>
        )}
        
        <button 
          onClick={handleEnquiry}
          className="flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all mt-auto w-fit"
        >
          Enquire Now <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;