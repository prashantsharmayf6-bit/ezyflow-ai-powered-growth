import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionWrapper from "@/components/SectionWrapper";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", requirement: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.requirement.trim()) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    const message = `Hi Ezyflow,%0A%0A*Name:* ${encodeURIComponent(form.name.trim())}%0A*Email:* ${encodeURIComponent(form.email.trim())}%0A*Phone:* ${encodeURIComponent(form.phone.trim() || "N/A")}%0A*Requirement:* ${encodeURIComponent(form.requirement.trim())}`;
    window.open(`https://wa.me/916381798761?text=${message}`, "_blank");
    setForm({ name: "", email: "", phone: "", requirement: "" });
  };

  return (
    <div>
      <section className="hero-dark pt-16">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-4 text-4xl font-extrabold text-hero-foreground md:text-5xl">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-hero-muted">
              Have a project in mind? Let's discuss how we can help.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">Name *</label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="h-12" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Email *</label>
              <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" className="h-12" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Phone *</label>
              <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 9999999999" className="h-12" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Your Requirement *</label>
              <Textarea value={form.requirement} onChange={(e) => setForm({ ...form, requirement: e.target.value })} placeholder="Tell us about your project..." rows={5} />
            </div>
            <Button variant="hero" size="lg" type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </form>

          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl gradient-bg p-3"><Mail className="h-5 w-5 text-primary-foreground" /></div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium">info@ezyflow.in</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-xl gradient-bg p-3"><Phone className="h-5 w-5 text-primary-foreground" /></div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="font-medium">+91 6381798761</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-xl gradient-bg p-3"><MessageCircle className="h-5 w-5 text-primary-foreground" /></div>
                  <div>
                    <div className="text-sm text-muted-foreground">WhatsApp</div>
                    <a href="https://wa.me/916381798761" className="font-medium text-primary hover:underline">Chat with us</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border bg-card p-8">
              <h4 className="mb-3 font-semibold">Quick Response Guarantee</h4>
              <p className="text-sm text-muted-foreground">We respond to all inquiries within 24 hours. For urgent requirements, reach out via WhatsApp.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Contact;
