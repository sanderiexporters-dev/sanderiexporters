import { useEffect, useState, type ReactNode } from "react";
import { Facebook, Instagram, Linkedin, MessageCircle, Share2, X } from "lucide-react";

interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/sanderiexporters?igsh=MWw1bjVnd3Q5c3Zjdw==",
    icon: <Instagram size={20} />,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sanderi-exporters-017a743b1?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: <Linkedin size={20} />,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/917990343575",
    icon: <MessageCircle size={20} />,
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/share/1ECJCcdSn2/",
    icon: <Facebook size={20} />,
  },
];

function useIsDesktop(breakpoint = 768): boolean {
  const [isDesktop, setIsDesktop] = useState(() => (typeof window !== "undefined" ? window.innerWidth > breakpoint : true));

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoint + 1}px)`);
    const handleChange = (event: MediaQueryListEvent) => setIsDesktop(event.matches);
    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [breakpoint]);

  return isDesktop;
}

function DesktopSidebar() {
  return (
    <aside aria-label="Social media links" className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 md:flex">
      <div className="ml-6 h-12 w-px bg-gradient-to-b from-transparent to-[#0a8f9c]" aria-hidden="true" />
      {socialLinks.map((link, index) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit our ${link.label}`}
          className="group flex max-w-12 items-center gap-3 overflow-hidden border border-l-0 border-[#121826]/10 bg-white px-3 py-3 text-[#0a8f9c] shadow-lg transition-all duration-300 hover:max-w-40 hover:border-[#f59e0b] hover:bg-[#f59e0b] hover:text-[#121826]"
          style={{ borderRadius: "0 0.5rem 0.5rem 0", animation: `revealUp 0.45s ease ${index * 70}ms both` }}
        >
          <span className="flex shrink-0">{link.icon}</span>
          <span className="whitespace-nowrap text-xs font-bold uppercase opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            {link.label}
          </span>
        </a>
      ))}
      <div className="ml-6 h-12 w-px bg-gradient-to-b from-[#f59e0b] to-transparent" aria-hidden="true" />
    </aside>
  );
}

function MobileSidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div aria-label="Social media links" className="fixed left-4 top-1/2 z-40 flex -translate-y-1/2 flex-col items-start gap-2 md:hidden">
      <button
        type="button"
        onClick={() => setIsExpanded((expanded) => !expanded)}
        aria-label={isExpanded ? "Close social links" : "Open social links"}
        aria-expanded={isExpanded}
        className="flex h-11 w-11 items-center justify-center border border-white/18 bg-[#0a8f9c] text-white shadow-xl transition-all duration-300"
        style={{ borderRadius: "0.5rem" }}
      >
        {isExpanded ? <X size={20} /> : <Share2 size={20} />}
      </button>

      {socialLinks.map((link, index) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit our ${link.label}`}
          className="flex h-11 w-11 items-center justify-center border border-[#121826]/10 bg-white text-[#0a8f9c] shadow-lg transition-all duration-300"
          style={{
            borderRadius: "0.5rem",
            opacity: isExpanded ? 1 : 0,
            transform: isExpanded ? "scale(1) translateY(0)" : "scale(0.6) translateY(-8px)",
            pointerEvents: isExpanded ? "auto" : "none",
            transitionDelay: `${index * 45}ms`,
          }}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default function SocialSidebar() {
  const isDesktop = useIsDesktop(768);
  return isDesktop ? <DesktopSidebar /> : <MobileSidebar />;
}
