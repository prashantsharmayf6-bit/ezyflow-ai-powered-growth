import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { Code, Bot, GraduationCap, CheckCircle, Star, ArrowRight, Zap, Shield, Users, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    desc: "Tailored web apps, dashboards, and internal tools built to your exact business requirements.",
  },
  {
    icon: Bot,
    title: "AI Automation Solutions",
    desc: "WhatsApp automation, workflow optimization, and intelligent lead generation systems.",
  },
  {
    icon: GraduationCap,
    title: "AI Training & Certification",
    desc: "Practical, real-world AI training programs through the Ezyflow AI Academy.",
  },
];

const whyChoose = [
  { icon: Zap, title: "Tailored Solutions", desc: "Not generic SaaS — built specifically for your business needs." },
  { icon: Shield, title: "End-to-End Support", desc: "From concept to deployment and beyond, we're with you." },
  { icon: Users, title: "Business-First AI", desc: "AI implementation focused on real business outcomes." },
  { icon: TrendingUp, title: "Scalable Systems", desc: "Architecture that grows with your business." },
];

const Index = () => (
  <div>
    {/* Hero - Light */}
    <section className="relative overflow-hidden bg-background pt-[92px]">
      <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(ellipse at 30% 50%, hsl(217 91% 60% / 0.08), transparent 60%), radial-gradient(ellipse at 70% 50%, hsl(172 66% 50% / 0.06), transparent 60%)" }} />
      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-muted-foreground">
            <Zap className="h-4 w-4 text-primary" /> AI-Powered Solutions
          </div>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Build. Automate.{" "}
            <span className="gradient-text">Scale with AI.</span>
          </h1>
          <p className="mb-10 text-lg text-muted-foreground md:text-xl">
            Custom software, AI automation, and real-world AI training programs designed for modern businesses.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="https://calendly.com/ezyflow-info/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-base">
                Get a Free Consultation <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
            <Link to="/academy">
              <Button variant="outline" size="lg" className="text-base">
                Explore AI Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Services Overview */}
    <SectionWrapper className="bg-secondary/50">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">What We Do</h2>
        <p className="text-muted-foreground">End-to-end technology solutions powered by artificial intelligence.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="group rounded-2xl border bg-background p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
            <div className="mb-5 inline-flex rounded-xl gradient-bg p-3">
              <s.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">{s.title}</h3>
            <p className="mb-5 text-sm text-muted-foreground">{s.desc}</p>
            <Link to="/services" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              Learn More <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        ))}
      </div>
    </SectionWrapper>

    {/* About */}
    <SectionWrapper dark>
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-3xl font-bold text-[hsl(0,0%,95%)] md:text-4xl">
            About <span className="gradient-text">Ezyflow</span>
          </h2>
          <p className="mb-6 hero-muted">
            We build requirement-based solutions tailored to your business, not one-size-fits-all software. Our white-label deployment model means you own everything — with a transparent, one-time cost structure.
          </p>
          <ul className="space-y-3">
            {["Requirement-based custom solutions", "White-label deployment — your brand, your product", "One-time cost model — no hidden fees", "Business-focused flexibility"].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm hero-muted">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass-card rounded-2xl p-8">
          <div className="mb-4 text-5xl font-extrabold gradient-text">100+</div>
          <p className="mb-6 hero-muted">Projects delivered across industries</p>
          <div className="grid grid-cols-2 gap-6">
            {[{ n: "50+", l: "Happy Clients" }, { n: "3+", l: "Years Experience" }, { n: "24/7", l: "Support" }, { n: "99%", l: "Satisfaction" }].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-bold text-[hsl(0,0%,95%)]">{s.n}</div>
                <div className="text-xs hero-muted">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>

    {/* Why Choose */}
    <SectionWrapper>
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Choose Ezyflow</h2>
        <p className="text-muted-foreground">We deliver outcomes, not just code.</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {whyChoose.map((w) => (
          <div key={w.title} className="text-center">
            <div className="mx-auto mb-4 inline-flex rounded-xl gradient-bg p-3">
              <w.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{w.title}</h3>
            <p className="text-sm text-muted-foreground">{w.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>

    {/* Testimonials */}
    <SectionWrapper className="bg-secondary/50">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Our Clients Say</h2>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {[
          { name: "Rahul S.", role: "Startup Founder", text: "Ezyflow transformed our manual processes into a fully automated system. Incredible work!" },
          { name: "Priya M.", role: "Business Owner", text: "The AI Academy gave my team practical skills they use every day. Highly recommend." },
          { name: "Amit K.", role: "CTO, Fintech", text: "Their custom SaaS solution saved us 6 months of development time. Outstanding team." },
        ].map((t) => (
          <div key={t.name} className="rounded-2xl border bg-background p-8">
            <div className="mb-4 flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
            </div>
            <p className="mb-6 text-sm text-muted-foreground">"{t.text}"</p>
            <div>
              <div className="font-semibold">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>

    {/* CTA */}
    <SectionWrapper className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-5" />
      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Let's Build Your Next AI-Powered Solution</h2>
        <p className="mb-8 text-muted-foreground">Tell us about your project and get a free consultation within 24 hours.</p>
        <a href="https://calendly.com/ezyflow-info/30min" target="_blank" rel="noopener noreferrer">
          <Button variant="hero" size="lg" className="text-base">
            Get Started <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </a>
      </div>
    </SectionWrapper>
  </div>
);

export default Index;
