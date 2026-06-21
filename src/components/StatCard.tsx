interface StatCardProps {
  number: string;
  label: string;
  icon: React.ReactNode;
}

const StatCard = ({ number, label, icon }: StatCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/8 p-6 text-left backdrop-blur-md transition-transform duration-500 hover:-translate-y-1">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12 text-accent shadow-[0_12px_24px_rgba(0,0,0,0.12)]">
        {icon}
      </div>
      <div className="font-heading text-3xl md:text-4xl font-semibold text-primary-foreground mb-2">
        {number}
      </div>
      <div className="font-display text-[0.72rem] uppercase tracking-[0.2em] text-primary-foreground/70">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
