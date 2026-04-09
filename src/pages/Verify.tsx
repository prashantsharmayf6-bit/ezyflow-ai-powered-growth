import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionWrapper from "@/components/SectionWrapper";
import { Search, CheckCircle, XCircle, Award } from "lucide-react";
import useSEO from "@/hooks/useSEO";

const certificates: Record<string, { name: string; course: string; date: string; status: string }> = {
  "EZY-2024-001": { name: "Rahul Sharma", course: "Generative AI Fundamentals", date: "March 15, 2024", status: "Valid" },
  "EZY-2024-002": { name: "Priya Mehta", course: "Business Automation with AI", date: "April 2, 2024", status: "Valid" },
  "EZY-2024-003": { name: "Amit Kumar", course: "Prompt Engineering Mastery", date: "May 10, 2024", status: "Valid" },
};

const Verify = () => {
  useSEO({
    title: "Verify Certificate — Ezyflow AI Academy",
    description: "Verify your Ezyflow AI Academy certificate using your unique Certificate ID. Confirm authenticity of your Generative AI certification.",
    canonical: "https://ezyflow.in/verify",
    keywords: "Verify AI Certificate, Ezyflow Certificate Verification, AI Academy Certification Check",
  });
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState<null | { found: boolean; data?: typeof certificates[string] }>(null);

  const handleVerify = () => {
    const id = certId.trim().toUpperCase();
    if (!id) return;
    const data = certificates[id];
    setResult(data ? { found: true, data } : { found: false });
  };

  return (
    <div>
      <section className="relative overflow-hidden bg-background pt-20">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 50% 50%, hsl(217 91% 60% / 0.08), transparent 60%)" }} />
        <div className="container relative mx-auto px-4 py-6 md:py-10">
          <div className="mx-auto max-w-2xl text-center">
            <Award className="mx-auto mb-6 h-16 w-16 text-accent" />
            <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
              Verify <span className="gradient-text">Certificate</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Enter a Certificate ID to verify its authenticity.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="mx-auto max-w-lg">
          <div className="flex gap-3">
            <Input
              placeholder="Enter Certificate ID (e.g., EZY-2024-001)"
              value={certId}
              onChange={(e) => setCertId(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleVerify()}
              className="h-12"
            />
            <Button variant="hero" className="h-12 px-6" onClick={handleVerify}>
              <Search className="mr-2 h-4 w-4" /> Verify
            </Button>
          </div>

          {result && (
            <div className={`mt-8 rounded-2xl border p-8 ${result.found ? "border-accent/30 bg-accent/5" : "border-destructive/30 bg-destructive/5"}`}>
              {result.found && result.data ? (
                <div>
                  <div className="mb-4 flex items-center gap-2 text-accent">
                    <CheckCircle className="h-6 w-6" />
                    <span className="text-lg font-semibold">Certificate Verified</span>
                  </div>
                  <div className="space-y-3">
                    <div><span className="text-sm text-muted-foreground">Student Name:</span><p className="font-medium">{result.data.name}</p></div>
                    <div><span className="text-sm text-muted-foreground">Course:</span><p className="font-medium">{result.data.course}</p></div>
                    <div><span className="text-sm text-muted-foreground">Completion Date:</span><p className="font-medium">{result.data.date}</p></div>
                    <div><span className="text-sm text-muted-foreground">Status:</span><p className="font-medium text-accent">{result.data.status}</p></div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-destructive">
                  <XCircle className="h-6 w-6" />
                  <span className="text-lg font-semibold">Certificate Not Found</span>
                </div>
              )}
            </div>
          )}

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Try: EZY-2024-001, EZY-2024-002, or EZY-2024-003
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Verify;
