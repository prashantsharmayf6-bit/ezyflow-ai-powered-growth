import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/10 bg-hero/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="text-xl font-bold text-hero-foreground">
          <span className="gradient-text">Ezy</span>flow
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === l.path ? "text-primary" : "text-hero-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact">
            <Button variant="hero" size="sm">Get a Free Consultation</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="text-hero-foreground md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="hero-dark border-t border-primary/10 md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-6">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-hero-muted hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)}>
              <Button variant="hero" className="w-full">Get a Free Consultation</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
