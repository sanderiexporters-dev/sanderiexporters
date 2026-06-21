import { FC } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppFloating: FC = () => {
  const phoneNumber = "917990343575";
  const message = encodeURIComponent(
    "Hello! I am interested in your import/export services. Please share more details about your products and pricing."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sanderi Exporters on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 md:bottom-8 md:right-8 md:h-16 md:w-16 animate-float-soft"
      style={{
        background: "linear-gradient(135deg, #25d366, #0a8f9c)",
        boxShadow: "0 22px 48px rgba(18, 140, 126, 0.28)",
      }}
    >
      <span className="absolute inset-0 rounded-full border border-white/18 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <MessageCircle size={28} fill="currentColor" className="relative z-10" />

      <span
        className="pointer-events-none absolute right-20 hidden rounded-full border px-4 py-2 text-xs font-semibold uppercase opacity-0 transition-all duration-300 group-hover:opacity-100 md:block"
        style={{
          background: "rgba(255, 255, 255, 0.96)",
          color: "#121826",
          borderColor: "rgba(10, 143, 156, 0.18)",
          boxShadow: "0 14px 30px rgba(18, 24, 38, 0.12)",
        }}
      >
        Chat on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppFloating;
