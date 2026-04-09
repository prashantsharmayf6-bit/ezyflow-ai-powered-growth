import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { Code, Bot, Layers, ArrowRight, CheckCircle, Monitor, MessageSquare, BarChart3, Smartphone } from "lucide-react";
import useSEO from "@/hooks/useSEO";

const serviceDetails = [
  {
    icon: Code,
    title: "Custom Software Development",
    desc: "We build tailored web applications, admin dashboards, and internal tools that perfectly match your business processes.",
    features: ["Custom Web Applications", "Admin Dashboards & Portals", "Internal Business Tools", "API Development & Integration", "Database Design & Optimization"],
    image: Monitor,
  },
  {
    icon: Bot,
    title: "AI Automation Solutions",
    desc: "Automate repetitive tasks, streamline workflows, and generate leads with intelligent AI-powered systems.",
    features: ["WhatsApp Business Automation", "Workflow Automation", "Lead Generation Systems", "Chatbot Development", "Data Processing Pipelines"],
    image: MessageSquare,
  },
  {
    icon: Layers,
    title: "SaaS Development",
    desc: "Build and deploy white-label SaaS products with multi-tenant architecture, ready for market.",
    features: ["White-Label SaaS Products", "Multi-Tenant Architecture", "Subscription & Billing Systems", "User Management & Roles", "Analytics & Reporting Dashboards"],
    image: BarChart3,
  },
  {
    icon: Smartphone,
    title: "Mobile Apps Development",
    desc: "Native and cross-platform mobile applications for iOS and Android, designed for performance and great user experience.",
    features: ["iOS & Android Apps", "Cross-Platform (React Native / Flutter)", "UI/UX Design for Mobile", "App Store Deployment", "Push Notifications & Analytics"],
    image: Smartphone,
  },
];

const Services = () => (
  <div>
    {/* Hero */}
    <section className="relative overflow-hidden bg-background pt-20">
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 50% 50%, hsl(217 91% 60% / 0.08), transparent 60%)" }} />
      <div className="container relative mx-auto px-4 py-6 md:py-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-extrabold md:text-5xl">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            End-to-end technology solutions designed to transform your business with AI and custom software.
          </p>
        </div>
      </div>
    </section>

    {/* Service Details */}
    {serviceDetails.map((s, i) => (
      <SectionWrapper key={s.title} dark={i % 2 !== 0} className={i % 2 === 0 ? "bg-secondary/50" : undefined}>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className={i % 2 !== 0 ? "md:order-2" : ""}>
            <div className="mb-5 inline-flex rounded-xl gradient-bg p-3">
              <s.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h2 className={`mb-4 text-3xl font-bold ${i % 2 !== 0 ? "text-[hsl(0,0%,95%)]" : ""}`}>{s.title}</h2>
            <p className={`mb-6 ${i % 2 !== 0 ? "hero-muted" : "text-muted-foreground"}`}>{s.desc}</p>
            <ul className="mb-8 space-y-3">
              {s.features.map((f) => (
                <li key={f} className={`flex items-center gap-3 text-sm ${i % 2 !== 0 ? "hero-muted" : "text-muted-foreground"}`}>
                  <CheckCircle className="h-4 w-4 shrink-0 text-accent" /> {f}
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <Button variant="hero">
                Request Proposal <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className={`flex items-center justify-center ${i % 2 !== 0 ? "md:order-1" : ""}`}>
            <div className={`rounded-2xl p-16 ${i % 2 !== 0 ? "glass-card" : "border bg-background"}`}>
              <s.image className="h-24 w-24 text-primary" />
            </div>
          </div>
        </div>
      </SectionWrapper>
    ))}

    {/* CTA */}
    <SectionWrapper className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-5" />
      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
        <p className="mb-8 text-muted-foreground">Book a free consultation and let's discuss how we can help your business.</p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="https://calendly.com/ezyflow-info/30min" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg">Book Consultation</Button>
          </a>
          <Link to="/contact">
            <Button variant="outline" size="lg">Request Proposal</Button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  </div>
);

export default Services;
