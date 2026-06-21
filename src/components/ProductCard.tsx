import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { getWhatsAppEnquiryUrl } from "@/data/productCatalog";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  details?: string;
  linkTo?: string;
  actionLabel?: string;
  whatsappProductName?: string;
}

const ProductCard = ({
  title,
  description,
  image,
  category,
  details,
  linkTo,
  actionLabel = "View Details",
  whatsappProductName,
}: ProductCardProps) => {
  const content = (
    <article className="trade-card group flex h-full flex-col bg-white">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121826]/88 via-[#121826]/12 to-transparent" />
        <span
          className="absolute left-4 top-4 bg-white px-3 py-1 text-xs font-bold text-[#121826]"
          style={{ borderRadius: "0.5rem" }}
        >
          {category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-2xl text-[#121826]">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-[#273244]/75">{description}</p>

        {details && (
          <div
            className="mt-5 border border-dashed border-[#0a8f9c]/35 bg-[#0a8f9c]/7 px-3 py-3 text-xs font-bold text-[#075c68]"
            style={{ borderRadius: "0.5rem" }}
          >
            {details}
          </div>
        )}

        <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0a8f9c]">
          {linkTo ? (
            <>
              {actionLabel} <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </>
          ) : (
            <>
              WhatsApp Enquiry <MessageCircle size={16} />
            </>
          )}
        </div>
      </div>
    </article>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="block h-full">
        {content}
      </Link>
    );
  }

  return (
    <a
      href={getWhatsAppEnquiryUrl(category, whatsappProductName ?? title)}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
      aria-label={`Send WhatsApp enquiry for ${title}`}
    >
      {content}
    </a>
  );
};

export default ProductCard;
