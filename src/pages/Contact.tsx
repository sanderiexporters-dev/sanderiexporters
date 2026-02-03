import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Globe, Linkedin, Facebook, Twitter, Send, User, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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

      toast({
        title: "Message Sent!",
        description: "Your message has been saved successfully.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
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
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-primary overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent rounded-full -translate-x-1/2" />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Contact <span className="text-accent">Us</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Ready to trade? Reach out to our team of experts for inquiries or collaborations.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          
          {/* Main Grid: Find Us (Map) & Send Us a Message (Form) */}
          <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-20">
            
            {/* Find Us (Map) */}
            <div className="flex flex-col">
              <SectionHeading
                title="Find Us"
                subtitle="Visit our Ahmedabad corporate office for business discussions."
                centered={false}
              />
              <div className="bg-secondary rounded-2xl overflow-hidden shadow-lg flex-grow min-h-[450px] relative border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d458.8216527612936!2d72.525731!3d23.076103!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e834be10ce16d%3A0x892fd700c2cd04c6!2sSatyamev%20Complex%20-%202!5e0!3m2!1sen!2sus!4v1767794581631!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border flex flex-col justify-center">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <MessageSquare className="text-accent" /> Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required className="pl-10" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject *</label>
                  <Input name="subject" placeholder="Inquiry about Rice exports" value={formData.subject} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Message *</label>
                  <Textarea name="message" placeholder="Details about your requirements..." value={formData.message} onChange={handleChange} required rows={5} />
                </div>
                <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : <><Send className="mr-2" size={18} /> Send Message</>}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact With Us & Office Details */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Social Media */}
            <div>
              <SectionHeading
                title="Connect With Us"
                subtitle="Stay updated with our latest offerings on social media."
                centered={false}
              />
              <div className="flex gap-4 mt-6">
                {[
                  { icon: <Facebook size={24} />, name: "Facebook" },
                  { icon: <Twitter size={24} />, name: "Twitter" },
                  { icon: <Linkedin size={24} />, name: "LinkedIn" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Office Info Card */}
            <div className="bg-primary rounded-2xl p-8 shadow-xl">
              <h4 className="font-heading font-semibold text-xl text-primary-foreground mb-6">Corporate Office</h4>
              <div className="space-y-5 text-primary-foreground/90">
                <div className="flex items-start gap-4">
                  <MapPin className="text-accent mt-1 flex-shrink-0" size={22} />
                  <p className="text-sm leading-relaxed">
                    Ff 19 satymev 2 opp Kargil petrol pump, sg Highway sola,<br /> 
                    Ahmedabad, Gujarat 380060, India
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-accent flex-shrink-0" size={22} />
                  <p className="text-sm">+917990343575</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-accent flex-shrink-0" size={22} />
                  <p className="text-sm">info@sanderiexporters.com</p>
                </div>
                <div className="flex items-center gap-4 border-t border-primary-foreground/10 pt-4">
                  <Clock className="text-accent flex-shrink-0" size={22} />
                  <p className="text-xs">Mon - Fri: 9:00 AM - 6:00 PM | Sat: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloating />
    </div>
  );
};

export default Contact;