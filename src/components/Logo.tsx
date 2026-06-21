interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const Logo = ({ variant = "dark", size = "md" }: LogoProps) => {
  const imageSizes = {
    sm: "h-7",
    md: "h-11",
    lg: "h-12",
  };

  return (
    <div className="flex items-center gap-3">
      <img
        src="/logo.png"
        alt="Sanderi Exporters Logo"
        className={`${imageSizes[size]} w-auto object-contain`}
      />

      <div className="flex flex-col leading-none">
        <span
          className={`font-heading ${
            size === "sm" ? "text-lg" : size === "md" ? "text-[1.35rem]" : "text-[1.55rem]"
          } ${variant === "light" ? "text-primary-foreground" : "text-primary"}`}
          style={{ letterSpacing: 0 }}
        >
          Sanderi
        </span>
        <span
          className={`font-display text-[0.62rem] font-semibold uppercase ${
            variant === "light" ? "text-primary-foreground/75" : "text-accent"
          }`}
        >
          Exporters
        </span>
      </div>
    </div>
  );
};

export default Logo;
