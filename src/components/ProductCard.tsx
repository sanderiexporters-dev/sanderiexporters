import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  details?: string;
}

const ProductCard = ({ title, description, image, category, details }: ProductCardProps) => {
  const handleEnquiry = () => {
    const phoneNumber = "917990343575";
    const message = encodeURIComponent(
      `Hello! I am interested in ${title}. Please tell us more about it.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div
      className="group flex flex-col h-full overflow-hidden"
      style={{
        background: "#F5EDE3",
        border: "1px solid rgba(212,186,160,0.6)",
        borderRadius: "8px",
        boxShadow: "0 4px 16px rgba(75,46,43,0.08)",
        transition: "transform 0.35s cubic-bezier(.22,.68,0,1.2), box-shadow 0.35s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 40px rgba(75,46,43,0.14)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(75,46,43,0.08)";
      }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "linear-gradient(to top, rgba(75,46,43,0.55), transparent)" }}
        />
        {/* Category badge */}
        <span
          style={{
            position: "absolute", top: 12, left: 12,
            fontFamily: "'Cinzel', serif",
            fontSize: "0.6rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#FFF8F0",
            background: "linear-gradient(135deg, #C08552, #D4A06A)",
            padding: "3px 10px",
            borderRadius: "100px",
          }}
        >
          {category}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Corner ornament */}
        <div className="relative mb-3">
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.25rem",
              fontWeight: 500,
              color: "#4B2E2B",
              lineHeight: 1.2,
              transition: "color 0.2s ease",
            }}
            className="group-hover:text-[#C08552]"
          >
            {title}
          </h3>
          <div
            style={{
              height: "1px",
              width: "2rem",
              background: "linear-gradient(90deg, #C08552, transparent)",
              marginTop: "6px",
            }}
          />
        </div>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.82rem",
            fontWeight: 300,
            color: "rgba(75,46,43,0.72)",
            lineHeight: 1.7,
            marginBottom: "0.75rem",
          }}
        >
          {description}
        </p>

        {details && (
          <div
            className="mt-auto mb-4"
            style={{
              padding: "6px 10px",
              background: "rgba(192,133,82,0.08)",
              border: "1px solid rgba(192,133,82,0.2)",
              borderRadius: "4px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.68rem",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#8C5A3C",
            }}
          >
            {details}
          </div>
        )}

        <button
          onClick={handleEnquiry}
          className="flex items-center gap-2 mt-auto group/btn"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#C08552",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            width: "fit-content",
          }}
        >
          Enquire Now
          <ArrowRight
            size={14}
            style={{ transition: "transform 0.2s ease" }}
            className="group-hover/btn:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;