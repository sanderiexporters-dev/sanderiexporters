import { Quote, Star } from "lucide-react";

export interface TestimonialProps {
  name: string;
  title: string;
  company: string;
  image?: string;
  testimonial: string;
  rating: number;
}

const TestimonialCard = ({ name, title, company, image, testimonial, rating }: TestimonialProps) => {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="card-premium group h-full p-7 md:p-8">
      <div className="absolute right-6 top-6 border border-[#121826]/10 bg-[#f5f8fb] p-3 text-[#0a8f9c] shadow-sm" style={{ borderRadius: "0.5rem" }}>
        <Quote size={18} />
      </div>

      <div className="flex items-center gap-1.5">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={index < rating ? "fill-[#f59e0b] text-[#f59e0b]" : "text-[#d4dde7]"}
          />
        ))}
      </div>

      <p className="mt-6 text-base leading-8 text-[#273244]/86">
        "{testimonial}"
      </p>

      <div className="mt-8 flex items-center gap-4 border-t border-[#121826]/10 pt-6">
        <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden border border-[#121826]/10 bg-[#0a8f9c]/10 text-sm font-semibold text-[#0a8f9c] shadow-sm" style={{ borderRadius: "0.5rem" }}>
          {image ? <img src={image} alt={name} className="h-full w-full object-cover" /> : initials}
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase text-[#121826]">
            {name}
          </h3>
          <p className="text-sm text-[#273244]/72">{title}</p>
          <p className="mt-1 text-[0.76rem] font-semibold uppercase text-[#0a8f9c]">
            {company}
          </p>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
