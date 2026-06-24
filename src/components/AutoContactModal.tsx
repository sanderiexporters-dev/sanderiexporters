import { useEffect, useState } from "react";
import { Globe, Mail, MessageCircle, MessageSquare, Phone, Send, User, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const countries = [
  "Afghanistan","Albania","Algeria","Angola","Argentina","Armenia","Australia","Austria",
  "Azerbaijan","Bahrain","Bangladesh","Belarus","Belgium","Bolivia","Bosnia","Brazil",
  "Bulgaria","Cambodia","Cameroon","Canada","Chile","China","Colombia","Congo","Croatia",
  "Cuba","Czech Republic","Denmark","Dominican Republic","Ecuador","Egypt","Ethiopia",
  "Finland","France","Georgia","Germany","Ghana","Greece","Guatemala","Honduras","Hungary",
  "India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Ivory Coast","Jamaica",
  "Japan","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyzstan","Lebanon","Libya","Malaysia",
  "Mali","Mexico","Moldova","Morocco","Mozambique","Myanmar","Nepal","Netherlands",
  "New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Panama","Paraguay",
  "Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Saudi Arabia",
  "Senegal","Serbia","Singapore","Somalia","South Africa","South Korea","Spain","Sri Lanka",
  "Sudan","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Tunisia",
  "Turkey","Turkmenistan","Uganda","Ukraine","United Arab Emirates","United Kingdom",
  "United States","Uruguay","Uzbekistan","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe",
];

const EMPTY = { name: "", email: "", phone: "", country: "", message: "" };

const AutoContactModal = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(EMPTY);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedToday");
    if (hasVisited) return;
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("hasVisitedToday", "true");
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const apiUrl = import.meta.env.VITE_GOOGLE_SHEET_WEB_API;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Missing details", description: "Please fill name, email and message.", variant: "destructive" });
      return;
    }

    if (!apiUrl) {
      toast({ title: "Not connected", description: "Please WhatsApp or email us directly." });
      setIsOpen(false);
      return;
    }

    setIsSubmitting(true);
    try {
      await fetch(apiUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          ...formData,
          source: "Auto Modal",
          timestamp: new Date().toISOString(),
        }),
      });

      setSubmitted(true);
      setTimeout(() => {
        setFormData(EMPTY);
        setSubmitted(false);
        setIsOpen(false);
      }, 2500);

    } catch {
      toast({ title: "Could not send inquiry", description: "Please try WhatsApp or email us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop — z-40 so navbar (z-60) always sits above it */}
      <button
        type="button"
        className="fixed inset-0 z-40 bg-[#121826]/62 backdrop-blur-sm"
        aria-label="Close"
        onClick={() => setIsOpen(false)}
      />

      {/*
        z-50: above backdrop, below navbar (z-60)
        Mobile/tablet: items-start + pt-[88px] pushes card below the navbar
        Desktop (lg+): items-center + pt-0 = truly centered
      */}
      <div
        className="
          fixed inset-0 z-50 flex justify-center px-4
          items-start pt-[88px] pb-4
          lg:items-center lg:pt-0 lg:pb-0
        "
      >
        <div
          className="
            w-full max-w-lg border border-white/18 bg-white shadow-2xl
            overflow-hidden overflow-y-auto
            max-h-[calc(100dvh-96px)]
            lg:max-h-[calc(100vh-4rem)]
          "
          style={{ borderRadius: "0.5rem" }}
        >
          {/* Sticky header so it stays visible while scrolling on mobile */}
          <div className="sticky top-0 z-10 bg-[#121826] p-5 sm:p-6 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase text-[#f59e0b]">
                  <MessageCircle size={15} /> Quick export inquiry
                </span>
                <h2 className="mt-2 text-xl sm:text-2xl text-white">Need product pricing?</h2>
                <p className="mt-1 text-sm leading-6 text-white/68">
                  Share your product, quantity and destination.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/14 text-white hover:bg-white/10"
                style={{ borderRadius: "0.5rem" }}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Success state */}
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-3 py-14 text-center px-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0a8f9c]/10">
                <Send size={24} className="text-[#0a8f9c]" />
              </div>
              <h3 className="text-xl text-[#121826]">Inquiry received!</h3>
              <p className="text-sm text-[#273244]/70">Our team will contact you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 p-5 sm:p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#273244]">Name *</label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0a8f9c]" />
                    <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="input-premium pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#273244]">Email *</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0a8f9c]" />
                    <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" className="input-premium pl-10" />
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#273244]">Phone</label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0a8f9c]" />
                    <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 000 000 0000" className="input-premium pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#273244]">Country</label>
                  <div className="relative">
                    <Globe size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0a8f9c] pointer-events-none z-10" />
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="input-premium pl-10 w-full appearance-none bg-white cursor-pointer"
                      style={{ borderRadius: "0.5rem" }}
                    >
                      <option value="">Select country</option>
                      {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#273244]">Message *</label>
                <div className="relative">
                  <MessageSquare size={16} className="absolute left-3 top-3 text-[#0a8f9c]" />
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Product, quantity, destination and packaging..."
                    rows={4}
                    className="input-premium resize-none pl-10"
                  />
                </div>
              </div>

              <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
                {isSubmitting ? "Sending..." : "Send Inquiry"} <Send size={17} />
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default AutoContactModal;