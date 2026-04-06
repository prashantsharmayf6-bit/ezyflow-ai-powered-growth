import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="hero-dark border-t border-primary/10">
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-12 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-bold text-hero-foreground">
            <span className="gradient-text">Ezy</span>flow
          </h3>
          <p className="mt-3 text-sm text-hero-muted">
            Build. Automate. Scale with AI. Custom software, automation, and AI training for modern businesses.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold text-hero-foreground">Services</h4>
          <ul className="space-y-2 text-sm text-hero-muted">
            <li><Link to="/services" className="hover:text-primary">Custom Software</Link></li>
            <li><Link to="/services" className="hover:text-primary">AI Automation</Link></li>
            <li><Link to="/services" className="hover:text-primary">SaaS Development</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold text-hero-foreground">Academy</h4>
          <ul className="space-y-2 text-sm text-hero-muted">
            <li><Link to="/academy" className="hover:text-primary">AI Courses</Link></li>
            <li><Link to="/verify" className="hover:text-primary">Verify Certificate</Link></li>
            <li><Link to="/ai-course" className="hover:text-primary">Enroll Now</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold text-hero-foreground">Contact</h4>
          <ul className="space-y-2 text-sm text-hero-muted">
            <li>hello@ezyflow.com</li>
            <li><Link to="/contact" className="hover:text-primary">Get in Touch</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 border-t border-primary/10 pt-8 text-center text-sm text-hero-muted">
        © {new Date().getFullYear()} Ezyflow. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
