import { FC } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppFloating: FC = () => {
  const phoneNumber: string = "917990343575";
  const message: string = encodeURIComponent(
    "Hello! I am interested in your export services."
  );
  const whatsappUrl: string = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip */}
      <span className="absolute right-16 bg-white text-black text-xs font-medium px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
        Chat with us!
      </span>

      <MessageCircle size={32} fill="currentColor" />
    </a>
  );
};

export default WhatsAppFloating;