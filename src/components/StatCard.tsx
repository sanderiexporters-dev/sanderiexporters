interface StatCardProps {
  number: string;
  label: string;
  icon: React.ReactNode;
}

const StatCard = ({ number, label, icon }: StatCardProps) => {
  return (
    <div className="text-center p-6 bg-primary-foreground/10 rounded-xl backdrop-blur-sm">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground mb-4">
        {icon}
      </div>
      <div className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
        {number}
      </div>
      <div className="text-primary-foreground/80 text-sm font-medium">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
