import { useState } from "react";
import { Send, MessageSquare, Mail, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import WhatsAppFloating from "@/components/WhatsAppFloating";

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
 const apiUrl = import.meta.env.VITE_GOOGLE_SHEET_WEB_API;

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch(
      apiUrl,
      {
        method: "POST",
        body: JSON.stringify(formData), // NO headers
      }
    );

    if (!response.ok) throw new Error("Failed");

    toast({
      title: "Message Sent!",
      description: "Your message has been saved successfully.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    toast({
      title: "Error",
      description: "Could not send message.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};



  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent rounded-full translate-y-1/2" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up">
            Feedback & <span className="text-accent">Inquiry</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            We value your feedback and are here to answer any questions about our services
          </p>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <SectionHeading
                title="Get In Touch"
                subtitle="Have a question or want to discuss your import-export requirements? We'd love to hear from you."
                centered={false}
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Quick Response</h4>
                    <p className="text-muted-foreground text-sm">
                      We respond to all inquiries within 24 business hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email Us Directly</h4>
                    <p className="text-muted-foreground text-sm">
                      info@sanderiexporters.com
                    </p>
                  </div>
                </div>

                <div className="bg-primary rounded-xl p-6 mt-8">
                  <h4 className="font-heading font-semibold text-xl text-primary-foreground mb-4">
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
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Subject *
                  </label>
                  <Input
                    name="subject"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Your Message *
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your requirements or share your feedback..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </Button>

                <p className="text-muted-foreground text-xs text-center">
                  By submitting this form, you agree to our privacy policy. Your information will be kept confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about our services"
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What products do you export?",
                a: "We export a wide range of products including agricultural goods, spices, textiles, FMCG products, and industrial materials. Contact us for specific product inquiries.",
              },
              {
                q: "What is your minimum order quantity?",
                a: "Minimum order quantities vary by product category. We work with both small and large orders. Please reach out for specific MOQ details.",
              },
              {
                q: "Do you handle customs documentation?",
                a: "Yes, we provide complete documentation support including customs clearance, certificates of origin, phytosanitary certificates, and other required trade documents.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept various payment methods including Letter of Credit (L/C), Telegraphic Transfer (T/T), and other internationally accepted payment modes.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloating/>
    </div>
  );
};

export default Feedback;
