interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const Logo = ({ variant = "dark", size = "md" }: LogoProps) => {
  const imageSizes = {
    sm: "h-6",
    md: "h-9",
    lg: "h-12",
  };

  return (
    <div className="flex items-center gap-2">
      {/* Logo Image */}
      <img
        src="/logo.png"
        alt="Sanderi Exporters Logo"
        className={`${imageSizes[size]} w-auto object-contain`}
      />

      {/* Text */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-heading font-bold ${
            size === "sm" ? "text-lg" : size === "md" ? "text-xl" : "text-2xl"
          } ${
            variant === "light"
              ? "text-primary-foreground"
              : "text-primary"
          }`}
        >
          Sanderi
        </span>
        <span
          className={`text-xs font-medium tracking-widest uppercase ${
            variant === "light"
              ? "text-primary-foreground/80"
              : "text-accent"
          }`}
        >
          Exporters
        </span>
      </div>
    </div>
  );
};

export default Logo;
