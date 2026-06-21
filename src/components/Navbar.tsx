import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Products", path: "/products" },
  { name: "Why Choose Us", path: "/why-choose-us" },
  { name: "Feedback", path: "/feedback" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isHeroRoute = location.pathname === "/";
  const transparent = isHeroRoute && !isScrolled && !isOpen;

  const isActivePath = (path: string) => {
    if (path === "/products") {
      return location.pathname === "/products" || location.pathname.startsWith("/products/");
    }

    if (path === "/why-choose-us") {
      return location.pathname === "/why-choose-us" || location.pathname === "/WhyChooseUs";
    }

    return location.pathname === path;
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className="container mx-auto border px-4 py-3 shadow-lg backdrop-blur-xl transition-all duration-300 md:px-5"
        style={{
          borderRadius: "0.5rem",
          background: transparent ? "rgba(18, 24, 38, 0.48)" : "rgba(255, 255, 255, 0.92)",
          borderColor: transparent ? "rgba(255, 255, 255, 0.14)" : "rgba(18, 24, 38, 0.12)",
        }}
      >
        <div className="flex items-center justify-between gap-4">
          <Link to="/" aria-label="Sanderi Exporters home">
            <Logo variant={transparent ? "light" : "dark"} />
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => {
              const active = isActivePath(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative text-sm font-bold transition-colors"
                  style={{
                    color: active ? "var(--solar)" : transparent ? "rgba(255,255,255,0.82)" : "rgba(18,24,38,0.78)",
                  }}
                >
                  {link.name}
                  <span
                    className="absolute -bottom-2 left-0 h-0.5 transition-all duration-300"
                    style={{
                      width: active ? "100%" : "0%",
                      background: active ? "var(--solar)" : "var(--teal)",
                    }}
                  />
                </Link>
              );
            })}
            <div className="ml-4 hidden items-center gap-2 text-sm text-[#273244]/70 lg:flex">
              <span className="font-semibold">Ahmedabad</span>
              <span>•</span>
              <span>India</span>
            </div>
          </div>

          <div className="hidden lg:flex">
            <Link to="/contact" className={transparent ? "btn-outline" : "btn-primary"}>
              Request Quote <ArrowRight size={16} />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center border transition-colors lg:hidden"
            style={{
              borderRadius: "0.5rem",
              borderColor: transparent ? "rgba(255,255,255,0.18)" : "rgba(18,24,38,0.12)",
              color: transparent ? "white" : "var(--ink)",
              background: transparent ? "rgba(255,255,255,0.08)" : "white",
            }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 border-t pt-4 lg:hidden" style={{ borderColor: "rgba(18,24,38,0.1)" }}>
            <div className="grid gap-2">
              {navLinks.map((link) => {
                const active = isActivePath(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="px-3 py-3 text-sm font-bold"
                    style={{
                      borderRadius: "0.5rem",
                      background: active ? "rgba(10,143,156,0.1)" : "transparent",
                      color: active ? "var(--teal-dark)" : "var(--ink)",
                    }}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <Link to="/contact" className="btn-primary mt-4 w-full">
              Request Quote <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
