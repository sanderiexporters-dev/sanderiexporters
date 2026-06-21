import { useRef, useState } from "react";
import { ArrowRight, HelpCircle, Mail, MessageCircle, MessageSquare, Phone, Send, ShieldCheck, Star, User, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOMetadata from "@/components/SEOMetadata";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import SocialSidebar from "@/components/SocialSidebar";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { testimonials } from "@/data/testimonials";
import feedbackHeroImg from "@/assets/agriculture.jpg";
import packagingImg from "@/assets/packaging desk.jpg";
import { siteUrl } from "@/data/siteMetadata";

const supportTopics = [
  "Product inquiry and pricing",
  "Bulk order and MOQ discussion",
  "Private label packaging",
  "Export documents and shipment planning",
  "Partnership and repeat supply",
  "Feedback on an existing conversation",
];

const faqs = [
  {
    question: "What products do you export?",
    answer: "We support rice, spices, peanuts, sesame seeds, pulses, fresh produce and private label packaging for worldwide buyers.",
  },
  {
    question: "What details should I send for a quote?",
    answer: "Share product name, quantity, destination country or port, packaging preference, quality expectations and timeline.",
  },
  {
    question: "Do you support custom packaging?",
    answer: "Yes. We coordinate bulk packaging, retail packs, buyer-brand labels and private label packaging based on product suitability.",
  },
  {
    question: "Can you help with export documents?",
    answer: "We coordinate practical export documentation details such as commercial invoice, packing list information and shipment communication.",
  },
];

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

const EMPTY_FORM = { name: "", email: "", phone: "", country: "", subject: "", message: "" };

const Feedback = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const apiUrl = import.meta.env.VITE_GOOGLE_SHEET_WEB_API;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!apiUrl) {
      toast({
        title: "Form not connected",
        description: "Please email info@sanderiexporters.com or WhatsApp us.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // ── CORS FIX: use no-cors mode ──
      // Google Apps Script blocks normal fetch. no-cors sends the request
      // without reading the response — that is fine, data still lands in sheet.
      await fetch(apiUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          ...formData,
          source: "Feedback Page",
          timestamp: new Date().toISOString(),
        }),
      });

      // Show success — we can't read the response in no-cors but data is sent
      setSubmitted(true);
      // DO NOT call setFormData here — it causes the scroll jump
      // Reset form after a short delay so React doesn't re-render mid-submit
      setTimeout(() => {
        setFormData(EMPTY_FORM);
        setSubmitted(false);
      }, 3000);

    } catch {
      toast({
        title: "Could not send message",
        description: "Please try WhatsApp or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f8fb]">
      <SEOMetadata
        title="Feedback and Export Inquiry Support"
        description="Contact Sanderi Exporters (Ahmedabad) for product inquiries, quotes and export support."
        keywords="Ahmedabad exporters contact, export inquiry India, rice export inquiry, spices export inquiry, agricultural export support Ahmedabad, contact Sanderi Exporters"
        url={`${siteUrl}/feedback`}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${siteUrl}/feedback#webpage`,
          name: "Feedback and Export Inquiry Support",
          description: "Feedback and inquiry page for Sanderi Exporters.",
          url: `${siteUrl}/feedback`,
          isPartOf: { "@id": `${siteUrl}/#website` },
          publisher: { "@id": `${siteUrl}/#organization` },
        }}
      />

      <Navbar />
      <SocialSidebar />
      <WhatsAppFloating />

      <main>
        {/* Hero */}
        <section className="relative min-h-[72vh] overflow-hidden px-4 pb-16 pt-32 text-white md:pt-40">
          <div className="absolute inset-0">
            <img src={feedbackHeroImg} alt="Feedback and import export inquiry support" className="h-full w-full object-cover" fetchpriority="high" />
            <div className="hero-overlay absolute inset-0" />
            <div className="route-grid absolute inset-0" />
            <span className="route-line left-[10%] top-[36%] w-56 rotate-6" />
            <span className="route-line left-[52%] top-[60%] w-48 -rotate-12" style={{ animationDelay: "800ms" }} />
          </div>
          <div className="container relative mx-auto">
            <div className="max-w-4xl animate-reveal-up">
              <span className="badge-premium">Feedback and inquiry</span>
              <h1 className="mt-6 text-5xl text-white md:text-7xl">Tell us what you need from India.</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
                Send sourcing questions, quote requests, packaging details or feedback.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="https://wa.me/917990343575" target="_blank" rel="noopener noreferrer" className="btn-accent">
                  Message on WhatsApp <MessageCircle size={17} />
                </a>
                <Link to="/products" className="btn-outline">
                  Browse Products <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Form section */}
        <section className="px-4 py-20">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">

            {/* Left */}
            <div>
              <span className="section-kicker">Buyer support</span>
              <h2 className="mt-3">What can we help with?</h2>
              <p className="mt-5 text-base leading-8 text-[#273244]/72">
                Use this page for questions before buying, feedback after a conversation, or details for a formal export quote.
              </p>
              <div className="mt-8 grid gap-3">
                {supportTopics.map((topic) => (
                  <div key={topic} className="flex items-center gap-3 border border-[#121826]/10 bg-white p-4" style={{ borderRadius: "0.5rem" }}>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#f59e0b] text-[#121826]" style={{ borderRadius: "0.5rem" }}>
                      <ShieldCheck size={18} />
                    </div>
                    <span className="text-sm font-bold text-[#273244]">{topic}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 overflow-hidden border border-[#121826]/10 bg-white" style={{ borderRadius: "0.5rem" }}>
                <img src={packagingImg} alt="Private label packaging support" className="h-64 w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="text-2xl">Packaging and buyer-brand support</h3>
                  <p className="mt-2 text-sm leading-7 text-[#273244]/70">
                    Mention bulk, retail or private label needs in your message so the team can guide suitable packing options.
                  </p>
                </div>
              </div>
            </div>

            {/* Right — form card. NO animate class to prevent scroll jump on re-render */}
            <div ref={formRef} className="trade-card bg-white p-6 md:p-8">
              <div className="mb-7">
                <span className="section-kicker">Send message</span>
                <h2 className="mt-3 text-3xl">Feedback or inquiry form</h2>
              </div>

              {/* Success state */}
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a8f9c]/10">
                    <Send size={28} className="text-[#0a8f9c]" />
                  </div>
                  <h3 className="text-2xl text-[#121826]">Message sent!</h3>
                  <p className="text-sm leading-7 text-[#273244]/70">
                    Thank you. Our team will review your message and get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Email */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="fb-name" className="text-sm font-bold text-[#273244]">Name *</label>
                      <div className="relative">
                        <User size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0a8f9c]" />
                        <Input id="fb-name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required className="input-premium pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="fb-email" className="text-sm font-bold text-[#273244]">Email *</label>
                      <div className="relative">
                        <Mail size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0a8f9c]" />
                        <Input id="fb-email" name="email" type="email" placeholder="you@company.com" value={formData.email} onChange={handleChange} required className="input-premium pl-10" />
                      </div>
                    </div>
                  </div>

                  {/* Phone + Country */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="fb-phone" className="text-sm font-bold text-[#273244]">Phone</label>
                      <div className="relative">
                        <Phone size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0a8f9c]" />
                        <Input id="fb-phone" name="phone" type="tel" placeholder="+1 000 000 0000" value={formData.phone} onChange={handleChange} className="input-premium pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="fb-country" className="text-sm font-bold text-[#273244]">Country *</label>
                      <div className="relative">
                        <Globe size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0a8f9c] pointer-events-none z-10" />
                        <select
                          id="fb-country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                          className="input-premium pl-10 w-full appearance-none bg-white cursor-pointer"
                          style={{ borderRadius: "0.5rem" }}
                        >
                          <option value="">Select country</option>
                          {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="fb-subject" className="text-sm font-bold text-[#273244]">Subject *</label>
                    <div className="relative">
                      <MessageSquare size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0a8f9c]" />
                      <Input id="fb-subject" name="subject" placeholder="Pulses inquiry or feedback" value={formData.subject} onChange={handleChange} required className="input-premium pl-10" />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="fb-message" className="text-sm font-bold text-[#273244]">Message *</label>
                    <Textarea id="fb-message" name="message" placeholder="Write your product requirement, question, or feedback..." value={formData.message} onChange={handleChange} required rows={7} className="input-premium resize-y" />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
                    {isSubmitting ? "Sending..." : "Send Message"} <Send size={17} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white px-4 py-20">
          <div className="container mx-auto">
            <div className="mb-10 text-center">
              <span className="section-kicker justify-center">Common questions</span>
              <h2 className="mx-auto mt-3 max-w-3xl">Quick answers before you message us</h2>
            </div>
            <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
              {faqs.map((faq) => (
                <div key={faq.question} className="border border-[#121826]/10 bg-[#f5f8fb] p-6" style={{ borderRadius: "0.5rem" }}>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center bg-[#0a8f9c] text-white" style={{ borderRadius: "0.5rem" }}>
                    <HelpCircle size={20} />
                  </div>
                  <h3 className="text-xl">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#273244]/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-4 py-20">
          <div className="container mx-auto">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="section-kicker">Client trust</span>
                <h2 className="mt-3">What buyers say about the export desk</h2>
              </div>
              <div className="inline-flex items-center gap-2 text-sm font-bold text-[#273244]">
                <Star size={18} className="fill-[#f59e0b] text-[#f59e0b]" />
                Responsive sourcing, packaging and communication
              </div>
            </div>
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Feedback;

// import { useState } from "react";
// import { ArrowRight, HelpCircle, Mail, MessageCircle, MessageSquare, Send, ShieldCheck, Star, User } from "lucide-react";
// import { Link } from "react-router-dom";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import SEOMetadata from "@/components/SEOMetadata";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";
// import WhatsAppFloating from "@/components/WhatsAppFloating";
// import SocialSidebar from "@/components/SocialSidebar";
// import TestimonialsCarousel from "@/components/TestimonialsCarousel";
// import { testimonials } from "@/data/testimonials";
// import feedbackHeroImg from "@/assets/agriculture.jpg";
// import packagingImg from "@/assets/custom-packaging.jpg";
// import { siteUrl } from "@/data/siteMetadata";
// //
// const supportTopics = [
//   "Product inquiry and pricing",
//   "Bulk order and MOQ discussion",
//   "Private label packaging",
//   "Export documents and shipment planning",
//   "Partnership and repeat supply",
//   "Feedback on an existing conversation",
// ];

// const faqs = [
//   {
//     question: "What products do you export?",
//     answer: "We support rice, spices, peanuts, sesame seeds, pulses, fresh produce and private label packaging for worldwide buyers.",
//   },
//   {
//     question: "What details should I send for a quote?",
//     answer: "Share product name, quantity, destination country or port, packaging preference, quality expectations and timeline.",
//   },
//   {
//     question: "Do you support custom packaging?",
//     answer: "Yes. We coordinate bulk packaging, retail packs, buyer-brand labels and private label packaging based on product suitability.",
//   },
//   {
//     question: "Can you help with export documents?",
//     answer: "We coordinate practical export documentation details such as commercial invoice, packing list information and shipment communication.",
//   },
// ];

// const Feedback = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   const apiUrl = import.meta.env.VITE_GOOGLE_SHEET_WEB_API;

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();

//     if (!apiUrl) {
//       toast({
//         title: "Feedback form is not connected yet",
//         description: "Please email info@sanderiexporters.com or message us on WhatsApp for now.",
//       });
//       return;
//     }

//     setIsSubmitting(true);
//     try {
//       const response = await fetch(apiUrl, {
//         method: "POST",
//         body: JSON.stringify(formData),
//       });
//       if (!response.ok) throw new Error("Failed");
//       toast({ title: "Message sent", description: "Thank you. Our team will review it soon." });
//       setFormData({ name: "", email: "", subject: "", message: "" });
//     } catch {
//       toast({ title: "Could not send message", description: "Please try WhatsApp or email us directly.", variant: "destructive" });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f5f8fb]">
//       <SEOMetadata
//         title="Feedback and Export Inquiry Support"
//         description="Contact Sanderi Exporters (Ahmedabad) for product inquiries, quotes and export support. We handle rice, spices, peanuts, sesame and fresh produce inquiries with export packaging and documentation for global buyers."
//         keywords="Ahmedabad exporters contact, export inquiry India, rice export inquiry, spices export inquiry, agricultural export support Ahmedabad, contact Sanderi Exporters"
//         url={`${siteUrl}/feedback`}
//         schema={{
//           "@context": "https://schema.org",
//           "@type": "WebPage",
//           "@id": `${siteUrl}/feedback#webpage`,
//           name: "Feedback and Export Inquiry Support",
//           description:
//             "Feedback and inquiry page for Sanderi Exporters product quotes, packaging questions and export support.",
//           url: `${siteUrl}/feedback`,
//           isPartOf: { "@id": `${siteUrl}/#website` },
//           publisher: { "@id": `${siteUrl}/#organization` },
//         }}
//       />

//       <Navbar />
//       <SocialSidebar />
//       <WhatsAppFloating />

//       <main>
//         <section className="relative min-h-[72vh] overflow-hidden px-4 pb-16 pt-32 text-white md:pt-40">
//           <div className="absolute inset-0">
//             <img src={feedbackHeroImg} alt="Feedback and import export inquiry support" className="h-full w-full object-cover" />
//             <div className="hero-overlay absolute inset-0" />
//             <div className="route-grid absolute inset-0" />
//             <span className="route-line left-[10%] top-[36%] w-56 rotate-6" />
//             <span className="route-line left-[52%] top-[60%] w-48 -rotate-12" style={{ animationDelay: "800ms" }} />
//           </div>

//           <div className="container relative mx-auto">
//             <div className="max-w-4xl animate-reveal-up">
//               <span className="badge-premium">Feedback and inquiry</span>
//               <h1 className="mt-6 text-5xl text-white md:text-7xl">Tell us what you need from India.</h1>
//               <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
//                 Send sourcing questions, quote requests, packaging details or feedback. The export desk will use your message to guide the next best step.
//               </p>
//               <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//                 <a href="https://wa.me/917990343575" target="_blank" rel="noopener noreferrer" className="btn-accent">
//                   Message on WhatsApp <MessageCircle size={17} />
//                 </a>
//                 <Link to="/products" className="btn-outline">
//                   Browse Products <ArrowRight size={17} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="px-4 py-20">
//           <div className="container mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
//             <div>
//               <span className="section-kicker">Buyer support</span>
//               <h2 className="mt-3">What can we help with?</h2>
//               <p className="mt-5 text-base leading-8 text-[#273244]/72">
//                 Use this page for questions before buying, feedback after a conversation, or details for a formal export quote.
//               </p>

//               <div className="mt-8 grid gap-3">
//                 {supportTopics.map((topic, index) => (
//                   <div key={topic} className="flex items-center gap-3 border border-[#121826]/10 bg-white p-4 animate-reveal-up" style={{ borderRadius: "0.5rem", animationDelay: `${index * 60}ms` }}>
//                     <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#f59e0b] text-[#121826]" style={{ borderRadius: "0.5rem" }}>
//                       <ShieldCheck size={18} />
//                     </div>
//                     <span className="text-sm font-bold text-[#273244]">{topic}</span>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-8 overflow-hidden border border-[#121826]/10 bg-white" style={{ borderRadius: "0.5rem" }}>
//                 <img src={packagingImg} alt="Private label packaging support" className="h-64 w-full object-cover" />
//                 <div className="p-5">
//                   <h3 className="text-2xl">Packaging and buyer-brand support</h3>
//                   <p className="mt-2 text-sm leading-7 text-[#273244]/70">
//                     Mention bulk, retail or private label needs in your message so the team can guide suitable packing options.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="trade-card bg-white p-6 md:p-8">
//               <div className="mb-7">
//                 <span className="section-kicker">Send message</span>
//                 <h2 className="mt-3 text-3xl">Feedback or inquiry form</h2>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div className="grid gap-4 sm:grid-cols-2">
//                   <div className="space-y-2">
//                     <label className="text-sm font-bold text-[#273244]">Name *</label>
//                     <div className="relative">
//                       <User size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0a8f9c]" />
//                       <Input name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required className="input-premium pl-10" />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <label className="text-sm font-bold text-[#273244]">Email *</label>
//                     <div className="relative">
//                       <Mail size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0a8f9c]" />
//                       <Input name="email" type="email" placeholder="you@company.com" value={formData.email} onChange={handleChange} required className="input-premium pl-10" />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-bold text-[#273244]">Subject *</label>
//                   <div className="relative">
//                     <MessageSquare size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0a8f9c]" />
//                     <Input name="subject" placeholder="Pulses inquiry or feedback" value={formData.subject} onChange={handleChange} required className="input-premium pl-10" />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-bold text-[#273244]">Message *</label>
//                   <Textarea
//                     name="message"
//                     placeholder="Write your product requirement, question, or feedback..."
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={7}
//                     className="input-premium resize-y"
//                   />
//                 </div>

//                 <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
//                   {isSubmitting ? "Sending..." : "Send Message"} <Send size={17} />
//                 </button>
//               </form>
//             </div>
//           </div>
//         </section>

//         <section className="bg-white px-4 py-20">
//           <div className="container mx-auto">
//             <div className="mb-10 text-center">
//               <span className="section-kicker justify-center">Common questions</span>
//               <h2 className="mx-auto mt-3 max-w-3xl">Quick answers before you message us</h2>
//             </div>

//             <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
//               {faqs.map((faq) => (
//                 <div key={faq.question} className="border border-[#121826]/10 bg-[#f5f8fb] p-6" style={{ borderRadius: "0.5rem" }}>
//                   <div className="mb-4 flex h-11 w-11 items-center justify-center bg-[#0a8f9c] text-white" style={{ borderRadius: "0.5rem" }}>
//                     <HelpCircle size={20} />
//                   </div>
//                   <h3 className="text-xl">{faq.question}</h3>
//                   <p className="mt-3 text-sm leading-7 text-[#273244]/70">{faq.answer}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section className="px-4 py-20">
//           <div className="container mx-auto">
//             <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
//               <div>
//                 <span className="section-kicker">Client trust</span>
//                 <h2 className="mt-3">What buyers say about the export desk</h2>
//               </div>
//               <div className="inline-flex items-center gap-2 text-sm font-bold text-[#273244]">
//                 <Star size={18} className="fill-[#f59e0b] text-[#f59e0b]" />
//                 Responsive sourcing, packaging and communication
//               </div>
//             </div>

//             <TestimonialsCarousel testimonials={testimonials} />
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Feedback;
