import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Linkedin, Facebook, Instagram, Send, User, MessageSquare, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import SocialSidebar from "@/components/SocialSidebar";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const apiUrl = import.meta.env.VITE_GOOGLE_SHEET_WEB_API;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed");
      toast({ title: "Message Sent!", description: "Your message has been saved successfully." });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast({ title: "Error", description: "Could not send message.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "#FFF8F0" }}>
      <Navbar />

      {/* ── Hero ── */}
      <section
        className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden text-center"
        style={{ background: "linear-gradient(145deg, #4B2E2B, #2D1A18)" }}
      >
        {/* Decorative glow blob */}
        <div
          className="absolute"
          style={{
            top: "15%", left: "-5%",
            width: 320, height: 320,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(192,133,82,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="relative container mx-auto px-4">
          <span
            className="block mb-5"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#C08552",
            }}
          >
            Get In Touch
          </span>
          <h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up"
            style={{ color: "#FFF8F0" }}
          >
            Contact{" "}
            <span style={{ color: "#C08552" }}>Us</span>
          </h1>
          <p style={{ color: "rgba(255,248,240,0.70)", maxWidth: 520, margin: "0 auto" }}>
            Ready to trade? Reach out to our team of experts for inquiries or collaborations.
          </p>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="py-20" style={{ background: "#FFF8F0" }}>
        <div className="container mx-auto px-4">

          {/* Map + Form */}
          <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-20">

            {/* Map */}
            <div className="flex flex-col">
              <SectionHeading
                title="Find Us"
                subtitle="Visit our Ahmedabad corporate office for business discussions."
                centered={false}
              />
              <div
                className="flex-grow overflow-hidden"
                style={{
                  minHeight: 420,
                  borderRadius: 8,
                  border: "1px solid rgba(212,186,160,0.55)",
                  boxShadow: "0 8px 24px rgba(75,46,43,0.10)",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29368.708781924244!2d72.49247589913487!3d23.05721321553524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83e767c69de3%3A0xe9972d2c9fcbafc2!2sSANDERI%20EXPORTERS!5e0!3m2!1sen!2sin!4v1773298816558!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block", minHeight: 420 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form */}
            <div
              className="flex flex-col justify-center"
              style={{
                background: "#F5EDE3",
                border: "1px solid rgba(212,186,160,0.6)",
                borderRadius: 8,
                padding: "2.5rem",
                boxShadow: "0 8px 24px rgba(75,46,43,0.08)",
              }}
            >
              <h3
                className="font-heading text-2xl font-bold mb-6 flex items-center gap-2"
                style={{ color: "#4B2E2B" }}
              >
                <MessageSquare size={22} style={{ color: "#C08552" }} />
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium"
                      style={{ color: "#8C5A3C", fontSize: "0.72rem", letterSpacing: "0.07em", textTransform: "uppercase" }}
                    >
                      Your Name *
                    </label>
                    <div className="relative">
                      <User
                        className="absolute left-3 top-1/2 -translate-y-1/2"
                        size={16}
                        style={{ color: "#8C5A3C" }}
                      />
                      <Input
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="pl-10 warm-input"
                        style={{
                          background: "#FFF8F0",
                          border: "1.5px solid rgba(212,186,160,0.7)",
                          color: "#4B2E2B",
                          borderRadius: 4,
                        }}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium"
                      style={{ color: "#8C5A3C", fontSize: "0.72rem", letterSpacing: "0.07em", textTransform: "uppercase" }}
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail
                        className="absolute left-3 top-1/2 -translate-y-1/2"
                        size={16}
                        style={{ color: "#8C5A3C" }}
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="pl-10 warm-input"
                        style={{
                          background: "#FFF8F0",
                          border: "1.5px solid rgba(212,186,160,0.7)",
                          color: "#4B2E2B",
                          borderRadius: 4,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium"
                    style={{ color: "#8C5A3C", fontSize: "0.72rem", letterSpacing: "0.07em", textTransform: "uppercase" }}
                  >
                    Subject *
                  </label>
                  <Input
                    name="subject"
                    placeholder="Inquiry about Rice exports"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="warm-input"
                    style={{
                      background: "#FFF8F0",
                      border: "1.5px solid rgba(212,186,160,0.7)",
                      color: "#4B2E2B",
                      borderRadius: 4,
                    }}
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium"
                    style={{ color: "#8C5A3C", fontSize: "0.72rem", letterSpacing: "0.07em", textTransform: "uppercase" }}
                  >
                    Your Message *
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Details about your requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="warm-input"
                    style={{
                      background: "#FFF8F0",
                      border: "1.5px solid rgba(212,186,160,0.7)",
                      color: "#4B2E2B",
                      borderRadius: 4,
                      resize: "vertical",
                    }}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2"
                  style={{
                    padding: "0.85rem",
                    background: isSubmitting
                      ? "rgba(192,133,82,0.45)"
                      : "linear-gradient(135deg, #4B2E2B, #8C5A3C)",
                    color: "#FFF8F0",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    border: "none",
                    borderRadius: 4,
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    boxShadow: "0 6px 20px rgba(75,46,43,0.25)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    !isSubmitting &&
                    ((e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)")
                  }
                >
                  {isSubmitting ? "Sending…" : <><Send size={16} /> Send Message</>}
                </button>
              </form>
            </div>
          </div>

          {/* Social + Office */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Social */}
            <div>
              <SectionHeading
                title="Connect With Us"
                subtitle="Stay updated with our latest offerings on social media."
                centered={false}
              />
              <div className="flex gap-4 mt-6 flex-wrap">
                {[
                  { icon: <Facebook size={22} />,     name: "Facebook",  href: "https://www.facebook.com/share/1ECJCcdSn2/" },
                  { icon: <Instagram size={22} />,    name: "Instagram", href: "https://www.instagram.com/sanderiexporters" },
                  { icon: <Linkedin size={22} />,     name: "LinkedIn",  href: "https://www.linkedin.com/in/sanderi-exporters-017a743b1" },
                  { icon: <MessageCircle size={22} />,name: "WhatsApp",  href: "https://wa.me/917990343575" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex items-center justify-center transition-all duration-300"
                    style={{
                      width: 52, height: 52,
                      background: "#F5EDE3",
                      border: "1px solid rgba(212,186,160,0.6)",
                      borderRadius: 8,
                      color: "#4B2E2B",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "linear-gradient(135deg, #4B2E2B, #8C5A3C)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "#FFF8F0";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "#4B2E2B";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "#F5EDE3";
                      (e.currentTarget as HTMLAnchorElement).style.color = "#4B2E2B";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        "rgba(212,186,160,0.6)";
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Office card */}
            <div
              style={{
                background: "linear-gradient(145deg, #4B2E2B, #2D1A18)",
                borderRadius: 8,
                padding: "2.5rem",
                boxShadow: "0 12px 32px rgba(75,46,43,0.20)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glow */}
              <div
                style={{
                  position: "absolute", top: -30, right: -30,
                  width: 130, height: 130, borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(192,133,82,0.15) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              {/* Corner ornament */}
              <div style={{
                position: "absolute", top: 12, right: 12,
                width: 22, height: 22,
                borderTop: "1.5px solid rgba(192,133,82,0.4)",
                borderRight: "1.5px solid rgba(192,133,82,0.4)",
              }} />

              <h4
                className="font-heading font-semibold mb-6"
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#C08552",
                }}
              >
                Corporate Office
              </h4>

              <div className="space-y-5">
                {[
                  {
                    icon: <MapPin size={20} style={{ color: "#C08552", flexShrink: 0, marginTop: 2 }} />,
                    text: "Ff 19 satymev 2 opp Kargil petrol pump, sg Highway sola, Ahmedabad, Gujarat 380060, India",
                  },
                  {
                    icon: <Phone size={20} style={{ color: "#C08552", flexShrink: 0 }} />,
                    text: "+91 7990343575",
                  },
                  {
                    icon: <Mail size={20} style={{ color: "#C08552", flexShrink: 0 }} />,
                    text: "info@sanderiexporters.com",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    {item.icon}
                    <p style={{ fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.75, color: "rgba(255,248,240,0.82)" }}>
                      {item.text}
                    </p>
                  </div>
                ))}

                <div
                  className="flex items-center gap-4 pt-4"
                  style={{ borderTop: "1px solid rgba(255,248,240,0.08)" }}
                >
                  <Clock size={20} style={{ color: "#C08552", flexShrink: 0 }} />
                  <p style={{ fontSize: "0.78rem", fontWeight: 300, color: "rgba(255,248,240,0.60)" }}>
                    Mon – Fri: 9:00 AM – 6:00 PM &nbsp;|&nbsp; Sat: 9:00 AM – 1:00 PM
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloating />
      <SocialSidebar />

      {/* Caramel focus ring for all inputs/textareas on this page */}
      <style>{`
        .warm-input:focus {
          border-color: #C08552 !important;
          box-shadow: 0 0 0 3px rgba(192,133,82,0.15) !important;
          outline: none !important;
        }
        .warm-input::placeholder {
          color: rgba(75,46,43,0.38);
        }
      `}</style>
    </div>
  );
};

export default Contact;