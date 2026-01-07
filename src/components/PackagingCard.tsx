import { Check } from "lucide-react";

interface PackagingCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
}

const PackagingCard = ({ title, description, image, features }: PackagingCardProps) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-md card-hover">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
        <h3 className="absolute bottom-4 left-4 right-4 font-heading font-semibold text-xl text-primary-foreground">
          {title}
        </h3>
      </div>
      <div className="p-6">
        <p className="text-muted-foreground text-sm mb-4">
          {description}
        </p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-foreground">
              <Check size={16} className="text-accent flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PackagingCard;
