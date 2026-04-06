import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { GraduationCap, CheckCircle, ArrowRight, Award, BookOpen, Users, Briefcase, Monitor, Video, Presentation, Building } from "lucide-react";

const curriculum = [
  "Generative AI Fundamentals",
  "Prompt Engineering Mastery",
  "AI-Powered Content Creation",
  "Business Automation with AI",
  "Real-World AI Projects",
  "Tools: ChatGPT, DALL·E, Midjourney & More",
];

const audiences = [
  { icon: GraduationCap, label: "Students" },
  { icon: Briefcase, label: "Business Owners" },
  { icon: Users, label: "Freelancers" },
  { icon: Building, label: "Professionals" },
];

const formats = [
  { icon: Video, title: "Live Classes", desc: "Interactive sessions with instructors" },
  { icon: Monitor, title: "Recorded Programs", desc: "Learn at your own pace" },
  { icon: Presentation, title: "Workshops", desc: "Hands-on intensive sessions" },
  { icon: Building, title: "Corporate Training", desc: "Custom programs for teams" },
];

const Academy = () => (
  <div>
    {/* Hero */}
    <section className="hero-dark pt-16">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-1.5 text-sm text-hero-muted">
            <Award className="h-4 w-4 text-accent" /> Ezyflow AI Academy
          </div>
          <h1 className="mb-6 text-4xl font-extrabold text-hero-foreground md:text-5xl">
            Get Certified in{" "}
            <span className="gradient-text">Generative AI & Business Automation</span>
          </h1>
          <p className="mb-10 text-lg text-hero-muted">
            Practical AI training using the latest tools. Learn, build, and get certified with real-world projects.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/ai-course">
              <Button variant="hero" size="lg">
                Enroll Now <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="hero-outline" size="lg">Download Syllabus</Button>
          </div>
        </div>
      </div>
    </section>

    {/* About the Program */}
    <SectionWrapper>
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-bold">About the Program</h2>
          <p className="mb-4 text-muted-foreground">
            The Ezyflow AI Academy offers practical, hands-on AI training using tools like ChatGPT, DALL·E, and more. Our programs focus on real-world use cases — not just theory.
          </p>
          <p className="text-muted-foreground">
            Whether you're a student, business owner, or professional, our courses are designed to help you leverage AI for practical outcomes and career growth.
          </p>
        </div>
        <div className="rounded-2xl border bg-card p-8">
          <BookOpen className="mb-4 h-12 w-12 text-primary" />
          <h3 className="mb-3 text-xl font-semibold">What You Will Learn</h3>
          <ul className="space-y-3">
            {curriculum.map((c) => (
              <li key={c} className="flex items-center gap-3 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 shrink-0 text-accent" /> {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>

    {/* Certification */}
    <SectionWrapper dark>
      <div className="mx-auto max-w-3xl text-center">
        <Award className="mx-auto mb-6 h-16 w-16 text-accent" />
        <h2 className="mb-4 text-3xl font-bold text-hero-foreground">Ezyflow AI Academy Certification</h2>
        <p className="mb-8 text-hero-muted">
          Upon completion, receive an official Ezyflow certificate with a unique Certificate ID, signed by Ezyflow.
        </p>
        <div className="grid gap-6 text-left sm:grid-cols-2">
          {["Certificate of Completion", "Unique Certificate ID", "Signed by Ezyflow", "Industry-focused Training"].map((item) => (
            <div key={item} className="glass-card flex items-center gap-3 rounded-xl p-4">
              <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm text-hero-foreground">{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-hero-muted">
          This is a private certification focused on practical skills and real-world application.
        </p>
        <div className="mt-6">
          <Link to="/verify">
            <Button variant="hero-outline">Verify a Certificate</Button>
          </Link>
        </div>
      </div>
    </SectionWrapper>

    {/* Target Audience */}
    <SectionWrapper>
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold">Who Is This For?</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map((a) => (
          <div key={a.label} className="rounded-2xl border bg-card p-8 text-center">
            <a.icon className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h3 className="font-semibold">{a.label}</h3>
          </div>
        ))}
      </div>
    </SectionWrapper>

    {/* Course Formats */}
    <SectionWrapper dark>
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-hero-foreground">Course Formats</h2>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {formats.map((f) => (
          <div key={f.title} className="glass-card rounded-2xl p-8 text-center">
            <f.icon className="mx-auto mb-4 h-10 w-10 text-accent" />
            <h3 className="mb-2 font-semibold text-hero-foreground">{f.title}</h3>
            <p className="text-sm text-hero-muted">{f.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>

    {/* CTA */}
    <SectionWrapper>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold">Ready to Start Your AI Journey?</h2>
        <p className="mb-8 text-muted-foreground">Join hundreds of students and professionals who've upgraded their skills with Ezyflow AI Academy.</p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link to="/ai-course">
            <Button variant="hero" size="lg">Enroll Now</Button>
          </Link>
          <Button variant="outline" size="lg">Download Syllabus</Button>
        </div>
      </div>
    </SectionWrapper>
  </div>
);

export default Academy;
