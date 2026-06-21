import { useState } from "react";
import { Clock, Facebook, Globe2, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Send, Ship, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOMetadata from "@/components/SEOMetadata";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import SocialSidebar from "@/components/SocialSidebar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import contactHeroImg from "@/assets/about-hero.jpg";
import { company, siteUrl } from "@/data/siteMetadata";

const contactDetails = [
  {
    icon: <MapPin size={20} />,
    title: "Ahmedabad office",
    text: "FF 19 Satyamev 2, Opp. Kargil Petrol Pump, SG Highway, Sola, Ahmedabad, Gujarat 380060",
  },
  {
    icon: <Phone size={20} />,
    title: "Call or WhatsApp",
    text: "+91 79903 43575",
    href: "tel:+917990343575",
  },
  {
    icon: <Mail size={20} />,
    title: "Email",
    text: "info@sanderiexporters.com",
    href: "mailto:info@sanderiexporters.com",
  },
  {
    icon: <Clock size={20} />,
    title: "Business hours",
    text: "Monday to Saturday, 9:00 AM to 6:00 PM IST",
  },
];

const socialLinks = [
  { icon: <Facebook size={20} />, name: "Facebook", href: "https://www.facebook.com/share/1ECJCcdSn2/" },
  { icon: <Instagram size={20} />, name: "Instagram", href: "https://www.instagram.com/sanderiexporters" },
  { icon: <Linkedin size={20} />, name: "LinkedIn", href: "https://www.linkedin.com/in/sanderi-exporters-017a743b1" },
  { icon: <MessageCircle size={20} />, name: "WhatsApp", href: "https://wa.me/917990343575" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const apiUrl = import.meta.env.VITE_GOOGLE_SHEET_WEB_API;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!apiUrl) {
      toast({
        title: "Contact form is not connected yet",
        description: "Please email info@sanderiexporters.com or message us on WhatsApp for now.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed");
      toast({ title: "Message sent", description: "Thank you. Our export team will contact you soon." });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast({ title: "Could not send message", description: "Please try WhatsApp or email us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f8fb]">
      <SEOMetadata
        title="Contact Sanderi Exporters for Export Quotes"
        description="Contact Sanderi Exporters in Ahmedabad, India for rice, spices, peanuts, sesame seeds, pulses, fresh produce, packaging, MOQ, pricing and export documentation inquiries."
        keywords="contact Sanderi Exporters, export quote India, agricultural product quote, import export contact Ahmedabad, rice export inquiry, spices export inquiry"
        url={`${siteUrl}/contact`}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": `${siteUrl}/contact#webpage`,
            name: "Contact Sanderi Exporters",
            description:
              "Contact Sanderi Exporters for agricultural export product inquiries, pricing, packaging and documentation support.",
            url: `${siteUrl}/contact`,
            isPartOf: { "@id": `${siteUrl}/#website` },
            publisher: { "@id": `${siteUrl}/#organization` },
          },
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": `${siteUrl}/#localbusiness`,
            name: company.name,
            image: company.logo,
            url: siteUrl,
            telephone: company.phone,
            email: company.email,
            address: {
              "@type": "PostalAddress",
              ...company.address,
            },
            areaServed: "Worldwide",
            sameAs: company.sameAs,
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
              { "@type": "ListItem", position: 2, name: "Contact", item: `${siteUrl}/contact` },
            ],
          },
        ]}
      />

      <Navbar />
      <SocialSidebar />
      <WhatsAppFloating />

      <main>
        <section className="relative min-h-[72vh] overflow-hidden px-4 pb-16 pt-32 text-white md:pt-40">
          <div className="absolute inset-0">
            <img src={contactHeroImg} alt="Contact Sanderi Exporters trade office" className="h-full w-full object-cover" />
            <div className="hero-overlay absolute inset-0" />
            <div className="route-grid absolute inset-0" />
            <span className="route-line left-[14%] top-[38%] w-52 rotate-6" />
            <span className="route-line left-[50%] top-[62%] w-48 -rotate-12" style={{ animationDelay: "800ms" }} />
          </div>

          <div className="container relative mx-auto">
            <div className="max-w-4xl animate-reveal-up">
              <span className="badge-premium">Contact export team</span>
              <h1 className="mt-6 text-5xl text-white md:text-7xl">Request a quote for import export products.</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
                Share product name, quantity, destination country and packaging requirement. We will guide MOQ, availability, packing and next steps.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/917990343575?text=Hello%20Sanderi%20Exporters%2C%20I%20want%20to%20request%20an%20export%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent"
                >
                  WhatsApp Now <MessageCircle size={17} />
                </a>
                <a href="mailto:info@sanderiexporters.com" className="btn-outline">
                  Email Export Desk <Mail size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <span className="section-kicker">Direct contact</span>
              <h2 className="mt-3">Fast ways to reach Sanderi Exporters</h2>
              <p className="mt-5 text-base leading-8 text-[#273244]/72">
                For the fastest response, include product name, expected quantity, destination port or country, and preferred packaging.
              </p>

              <div className="mt-8 grid gap-4">
                {contactDetails.map((detail) => (
                  <div key={detail.title} className="flex items-start gap-4 border border-[#121826]/10 bg-white p-5" style={{ borderRadius: "0.5rem" }}>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#0a8f9c] text-white" style={{ borderRadius: "0.5rem" }}>
                      {detail.icon}
                    </div>
                    <div>
                      <h3 className="text-xl">{detail.title}</h3>
                      {detail.href ? (
                        <a href={detail.href} className="mt-2 block text-sm leading-7 text-[#273244]/72 transition-colors hover:text-[#0a8f9c]">
                          {detail.text}
                        </a>
                      ) : (
                        <p className="mt-2 text-sm leading-7 text-[#273244]/72">{detail.text}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="inline-flex h-12 w-12 items-center justify-center border border-[#121826]/10 bg-white text-[#0a8f9c] transition-all duration-300 hover:-translate-y-1 hover:border-[#f59e0b] hover:bg-[#f59e0b] hover:text-[#121826]"
                    style={{ borderRadius: "0.5rem" }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="trade-card bg-white p-6 md:p-8">
              <div className="mb-7">
                <span className="section-kicker">Quote form</span>
                <h2 className="mt-3 text-3xl">Send your requirement</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#273244]">Name *</label>
                    <div className="relative">
                      <User size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0a8f9c]" />
                      <Input name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required className="input-premium pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#273244]">Email *</label>
                    <div className="relative">
                      <Mail size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0a8f9c]" />
                      <Input name="email" type="email" placeholder="you@company.com" value={formData.email} onChange={handleChange} required className="input-premium pl-10" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#273244]">Subject *</label>
                  <Input name="subject" placeholder="Rice export quote for Dubai" value={formData.subject} onChange={handleChange} required className="input-premium" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#273244]">Message *</label>
                  <Textarea
                    name="message"
                    placeholder="Product, quantity, destination, packaging and timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="input-premium resize-y"
                  />
                </div>

                <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
                  {isSubmitting ? "Sending..." : "Send Requirement"} <Send size={17} />
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="section-kicker">Office location</span>
              <h2 className="mt-3">Visit our Ahmedabad trade office</h2>
              <p className="mt-5 text-base leading-8 text-[#273244]/72">
                We coordinate sourcing, product details, packaging and export communication from Ahmedabad, Gujarat.
              </p>
              <div className="mt-8 inline-flex items-center gap-3 border border-[#121826]/10 bg-[#f5f8fb] px-4 py-3 text-sm font-bold text-[#273244]" style={{ borderRadius: "0.5rem" }}>
                <Globe2 size={18} className="text-[#0a8f9c]" />
                Worldwide import export support
              </div>
            </div>

            <div className="h-[26rem] overflow-hidden border border-[#121826]/10 shadow-lg" style={{ borderRadius: "0.5rem" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29368.708781924244!2d72.49247589913487!3d23.05721321553524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83e767c69de3%3A0xe9972d2c9fcbafc2!2sSANDERI%20EXPORTERS!5e0!3m2!1sen!2sin!4v1773298816558!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sanderi Exporters location map"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
