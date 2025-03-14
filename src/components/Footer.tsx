
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-muted py-12 border-t border-border mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 font-playfair">Iftar Giving Tree</h3>
            <p className="text-muted-foreground">
              Providing warm meals and community to those in need during Ramadan and beyond.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-muted-foreground hover:text-primary transition">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-muted-foreground hover:text-primary transition">
                  Donate
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic">
              <p className="text-muted-foreground">Email: contact@iftargivingtree.org</p>
              <p className="text-muted-foreground">Phone: +1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Iftar Giving Tree. All rights reserved.</p>
          <p className="mt-1">
            <Link to="/privacy" className="hover:text-primary transition">
              Privacy Policy
            </Link>{" "}
            •{" "}
            <Link to="/terms" className="hover:text-primary transition">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
