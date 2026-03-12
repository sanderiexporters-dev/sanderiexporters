import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Products", path: "/products" },
  { name: "WhyChooseUs", path: "/WhyChooseUs" },
  { name: "Feedback", path: "/feedback" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: isScrolled ? "rgba(255,248,240,0.96)" : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          boxShadow: isScrolled ? "0 2px 20px rgba(75,46,43,0.10)" : "none",
          padding: isScrolled ? "0.5rem 0" : "1rem 0",
          borderBottom: isScrolled ? "1px solid rgba(212,186,160,0.35)" : "none",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/">
              <Logo variant={isScrolled ? "dark" : "light"} />
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm font-medium transition-colors relative nav-link"
                    style={{
                      color: isActive
                        ? "#C08552"
                        : isScrolled
                        ? "#4B2E2B"
                        : "rgba(255,248,240,0.90)",
                      textDecoration: "none",
                    }}
                    data-active={isActive ? "true" : "false"}
                    data-scrolled={isScrolled ? "true" : "false"}
                  >
                    {link.name}
                    {/* Active underline */}
                    {isActive && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: -4,
                          left: 0,
                          right: 0,
                          height: 1.5,
                          background: "linear-gradient(90deg, #C08552, #D4A06A)",
                          borderRadius: 2,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              style={{ background: "transparent", border: "none", cursor: "pointer" }}
            >
              {isOpen ? (
                <X style={{ color: isScrolled ? "#4B2E2B" : "#FFF8F0" }} size={22} />
              ) : (
                <Menu style={{ color: isScrolled ? "#4B2E2B" : "#FFF8F0" }} size={22} />
              )}
            </button>
          </div>

          {/* Mobile dropdown */}
          {isOpen && (
            <div
              className="lg:hidden absolute top-full left-0 right-0 animate-slide-up"
              style={{
                background: "#FFF8F0",
                borderTop: "1px solid rgba(212,186,160,0.4)",
                boxShadow: "0 8px 24px rgba(75,46,43,0.10)",
              }}
            >
              <div className="flex flex-col py-4">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 text-sm font-medium transition-colors"
                      style={{
                        color: isActive ? "#C08552" : "#4B2E2B",
                        background: isActive ? "rgba(192,133,82,0.06)" : "transparent",
                        borderLeft: isActive ? "3px solid #C08552" : "3px solid transparent",
                        textDecoration: "none",
                      }}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hover styles for desktop links */}
      <style>{`
        .nav-link:hover {
          color: #C08552 !important;
        }
      `}</style>
    </>
  );
};

export default Navbar;