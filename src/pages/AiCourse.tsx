import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { ArrowRight, CheckCircle, XCircle, Star, Clock, Users, Zap } from "lucide-react";

const painPoints = [
  "No practical AI skills despite watching tutorials",
  "No clear direction to monetize AI knowledge",
  "Outdated learning that doesn't apply to real jobs",
];

const benefits = [
  "Automate tasks and save hours every week",
  "Build AI-powered products and services",
  "Complete real-world projects for your portfolio",
  "Earn with AI freelancing and consulting",
];

const modules = [
  { title: "Module 1: AI Foundations", desc: "Understanding generative AI, LLMs, and how they work." },
  { title: "Module 2: Prompt Engineering", desc: "Master the art of writing effective prompts for any AI tool." },
  { title: "Module 3: Content Creation", desc: "Generate text, images, and video content using AI." },
  { title: "Module 4: Business Automation", desc: "Automate workflows, emails, and lead generation." },
  { title: "Module 5: Real-World Projects", desc: "Build 3+ production-ready AI projects." },
  { title: "Module 6: Career & Freelancing", desc: "Monetize your AI skills and land clients." },
];

const AiCourse = () => (
  <div>
    {/* Hero */}
    <section className="relative overflow-hidden bg-background pt-16">
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 30% 50%, hsl(217 91% 60% / 0.1), transparent 60%), radial-gradient(ellipse at 70% 50%, hsl(172 66% 50% / 0.08), transparent 60%)" }} />
      <div className="container relative mx-auto px-4 py-24 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-sm text-accent">
            <Clock className="h-4 w-4" /> Limited Seats Available
          </div>
          <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">
            Learn AI That Actually{" "}
            <span className="gradient-text">Makes You Money</span>
          </h1>
          <p className="mb-10 text-lg text-muted-foreground">
            Stop watching tutorials. Start building real AI projects, automating workflows, and earning with practical skills.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg" className="text-base">
              Join Now <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Users className="h-4 w-4 text-accent" /> 500+ Enrolled</span>
            <span className="flex items-center gap-1"><Star className="h-4 w-4 text-accent" /> 4.9/5 Rating</span>
          </div>
        </div>
      </div>
    </section>

    {/* Pain Points & Benefits */}
    <SectionWrapper className="bg-secondary/50">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-2xl font-bold">Sound Familiar?</h2>
          <ul className="space-y-4">
            {painPoints.map((p) => (
              <li key={p} className="flex items-start gap-3 text-muted-foreground">
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" /> {p}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-2xl font-bold">What You'll Achieve</h2>
          <ul className="space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" /> {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>

    {/* Course Breakdown */}
    <SectionWrapper dark>
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-[hsl(0,0%,95%)]">Course Breakdown</h2>
      </div>
      <div className="mx-auto grid max-w-3xl gap-4">
        {modules.map((m) => (
          <div key={m.title} className="glass-card flex items-start gap-4 rounded-xl p-6">
            <Zap className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <h3 className="font-semibold text-[hsl(0,0%,95%)]">{m.title}</h3>
              <p className="text-sm hero-muted">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>

    {/* Testimonials */}
    <SectionWrapper>
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold">What Students Say</h2>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {[
          { name: "Neha R.", text: "This course helped me land my first AI freelancing gig within 2 weeks!" },
          { name: "Vikram S.", text: "Finally, a practical course. I automated my entire content pipeline." },
          { name: "Sanya P.", text: "The certification added real value to my resume. Got promoted within a month!" },
        ].map((t) => (
          <div key={t.name} className="rounded-2xl border bg-card p-8">
            <div className="mb-3 flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}</div>
            <p className="mb-4 text-sm text-muted-foreground">"{t.text}"</p>
            <div className="font-semibold">{t.name}</div>
          </div>
        ))}
      </div>
    </SectionWrapper>

    {/* Pricing */}
    <SectionWrapper dark>
      <div className="mx-auto max-w-lg text-center">
        <h2 className="mb-4 text-3xl font-bold text-[hsl(0,0%,95%)]">Invest in Your Future</h2>
        <div className="glass-card rounded-2xl p-10">
          <div className="mb-2 text-sm hero-muted line-through">₹9,999</div>
          <div className="mb-2 text-5xl font-extrabold gradient-text">₹4,999</div>
          <div className="mb-6 text-sm text-accent">Early Bird Offer — Limited Time</div>
          <ul className="mb-8 space-y-3 text-left">
            {["Full course access", "Real-world projects", "Ezyflow Certification", "Lifetime access to materials", "Community access"].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm hero-muted">
                <CheckCircle className="h-4 w-4 shrink-0 text-accent" /> {f}
              </li>
            ))}
          </ul>
          <Link to="/contact">
            <Button variant="hero" size="lg" className="w-full text-base">
              Join Now <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  </div>
);

export default AiCourse;
