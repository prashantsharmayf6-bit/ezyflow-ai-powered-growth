import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Academy from "./pages/Academy";
import Verify from "./pages/Verify";
import Contact from "./pages/Contact";
import AiCourse from "./pages/AiCourse";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground text-sm py-1 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            🎉 WE ARE NOW MSME REGISTERED &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🎉 WE ARE NOW MSME REGISTERED &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🎉 WE ARE NOW MSME REGISTERED &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🎉 WE ARE NOW MSME REGISTERED &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🎉 WE ARE NOW MSME REGISTERED
          </div>
        </div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ai-course" element={<AiCourse />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
