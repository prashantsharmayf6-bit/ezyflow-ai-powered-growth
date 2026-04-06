import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/ezyflow-logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "AI Academy", path: "/academy" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-[28px] left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Ezyflow" className="h-9 w-9 object-contain" />
          <span className="text-xl font-bold">
            <span className="gradient-text">Ezy</span>flow
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === l.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a href="https://calendly.com/ezyflow-info/30min" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="sm">Get a Free Consultation</Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="text-foreground md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t bg-background md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-6">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <a href="https://calendly.com/ezyflow-info/30min" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              <Button variant="hero" className="w-full">Get a Free Consultation</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
