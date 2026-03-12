import { useState } from "react";
import { Send, MessageSquare, Mail, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import SocialSidebar from "@/components/SocialSidebar";

const Feedback = () => {
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
        className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
        style={{ background: "linear-gradient(145deg, #4B2E2B, #2D1A18)" }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute"
          style={{
            top: "-20%", left: "20%",
            width: 320, height: 320,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(192,133,82,0.10) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: "-20%", right: "20%",
            width: 240, height: 240,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(192,133,82,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="relative container mx-auto px-4 text-center">
          {/* Eyebrow */}
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
            Your Voice Matters
          </span>

          <h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up"
            style={{ color: "#FFF8F0" }}
          >
            Feedback &{" "}
            <span style={{ color: "#C08552" }}>Inquiry</span>
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.1s", color: "rgba(255,248,240,0.70)" }}
          >
            We value your feedback and are here to answer any questions about our services
          </p>
        </div>
      </section>

      {/* ── Form Section ── */}
      <section className="py-20" style={{ background: "#FFF8F0" }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left info column */}
            <div>
              <SectionHeading
                title="Get In Touch"
                subtitle="Have a question or want to discuss your import-export requirements? We'd love to hear from you."
                centered={false}
              />

              <div className="space-y-4 mt-8">
                {/* Info cards */}
                {[
                  {
                    icon: <MessageSquare size={22} style={{ color: "#C08552" }} />,
                    title: "Quick Response",
                    desc: "We respond to all inquiries within 24 business hours",
                  },
                  {
                    icon: <Mail size={22} style={{ color: "#C08552" }} />,
                    title: "Email Us Directly",
                    desc: "info@sanderiexporters.com",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-lg"
                    style={{
                      background: "#F5EDE3",
                      border: "1px solid rgba(212,186,160,0.5)",
                    }}
                  >
                    <div
                      className="flex items-center justify-center flex-shrink-0 rounded-lg"
                      style={{
                        width: 44, height: 44,
                        background: "rgba(192,133,82,0.10)",
                        border: "1px solid rgba(192,133,82,0.22)",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4
                        className="font-semibold mb-1"
                        style={{ color: "#4B2E2B" }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-sm" style={{ color: "rgba(75,46,43,0.68)" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Help topics card */}
                <div
                  className="rounded-xl p-6 mt-4"
                  style={{
                    background: "linear-gradient(145deg, #4B2E2B, #2D1A18)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Glow */}
                  <div style={{
                    position: "absolute", top: -20, right: -20,
                    width: 110, height: 110, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(192,133,82,0.15) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }} />
                  {/* Corner ornament */}
                  <div style={{
                    position: "absolute", top: 10, right: 10,
                    width: 20, height: 20,
                    borderTop: "1.5px solid rgba(192,133,82,0.4)",
                    borderRight: "1.5px solid rgba(192,133,82,0.4)",
                  }} />

                  <h4
                    className="font-heading font-semibold text-xl mb-4"
                    style={{ color: "#FFF8F0" }}
                  >
                    What can we help you with?
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Product inquiries and pricing",
                      "Import/Export documentation",
                      "Custom packaging solutions",
                      "Bulk order requirements",
                      "Partnership opportunities",
                      "General feedback",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm"
                        style={{ color: "rgba(255,248,240,0.75)" }}
                      >
                        <div
                          style={{
                            width: 6, height: 6,
                            borderRadius: "50%",
                            background: "#C08552",
                            flexShrink: 0,
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Form card */}
            <div
              className="rounded-2xl p-8 shadow-lg"
              style={{
                background: "#F5EDE3",
                border: "1px solid rgba(212,186,160,0.6)",
              }}
            >
              <h3
                className="font-heading text-2xl font-bold mb-6"
                style={{ color: "#4B2E2B" }}
              >
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium"
                      style={{
                        color: "#8C5A3C",
                        fontSize: "0.72rem",
                        letterSpacing: "0.07em",
                        textTransform: "uppercase",
                        display: "block",
                      }}
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
                      style={{
                        color: "#8C5A3C",
                        fontSize: "0.72rem",
                        letterSpacing: "0.07em",
                        textTransform: "uppercase",
                        display: "block",
                      }}
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
                    style={{
                      color: "#8C5A3C",
                      fontSize: "0.72rem",
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                      display: "block",
                    }}
                  >
                    Subject *
                  </label>
                  <Input
                    name="subject"
                    placeholder="What is this regarding?"
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
                    style={{
                      color: "#8C5A3C",
                      fontSize: "0.72rem",
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                      display: "block",
                    }}
                  >
                    Your Message *
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your requirements or share your feedback..."
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

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2"
                  style={{
                    padding: "0.85rem",
                    background: isSubmitting
                      ? "rgba(192,133,82,0.45)"
                      : "linear-gradient(135deg, #C08552, #D4A06A)",
                    color: "#FFF8F0",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    border: "none",
                    borderRadius: 4,
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    boxShadow: "0 6px 20px rgba(192,133,82,0.28)",
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

                <p
                  className="text-xs text-center"
                  style={{ color: "rgba(75,46,43,0.42)", lineHeight: 1.6 }}
                >
                  By submitting this form, you agree to our privacy policy. Your information will be kept confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-20" style={{ background: "#F5EDE3" }}>
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about our services"
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "What products do you export?", a: "We export a wide range of products including agricultural goods, spices, textiles, FMCG products, and industrial materials. Contact us for specific product inquiries." },
              { q: "What is your minimum order quantity?", a: "Minimum order quantities vary by product category. We work with both small and large orders. Please reach out for specific MOQ details." },
              { q: "Do you handle customs documentation?", a: "Yes, we provide complete documentation support including customs clearance, certificates of origin, phytosanitary certificates, and other required trade documents." },
              { q: "What payment methods do you accept?", a: "We accept various payment methods including Letter of Credit (L/C), Telegraphic Transfer (T/T), and other internationally accepted payment modes." },
            ].map((faq, i) => (
              <div
                key={i}
                className="rounded-xl p-6 shadow-sm"
                style={{
                  background: "#FFF8F0",
                  border: "1px solid rgba(212,186,160,0.5)",
                  borderLeft: "3px solid #C08552",
                }}
              >
                <h4
                  className="font-semibold mb-2"
                  style={{ color: "#4B2E2B" }}
                >
                  {faq.q}
                </h4>
                <p className="text-sm" style={{ color: "rgba(75,46,43,0.68)", lineHeight: 1.75 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloating />
      <SocialSidebar />

      {/* Caramel focus ring for inputs */}
      <style>{`
        .warm-input:focus {
          border-color: #C08552 !important;
          box-shadow: 0 0 0 3px rgba(192,133,82,0.15) !important;
          outline: none !important;
        }
        .warm-input::placeholder {
          color: rgba(75,46,43,0.36);
        }
      `}</style>
    </div>
  );
};

export default Feedback;