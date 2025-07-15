import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Leaf, Phone } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Nos engagements", href: "#engagements" },
    { label: "Nos produits", href: "#produits" },
    { label: "Nos clients", href: "#clients" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center bg-gradient-primary rounded-xl px-3 py-2">
              <Leaf className="h-5 w-5 text-white mr-2" />
              <div className="text-white">
                <div className="font-bold text-sm leading-tight">EcoPack</div>
                <div className="text-xs opacity-90 leading-tight">by ARIS Informatique</div>
              </div>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Phone className="h-4 w-4 mr-1" />
              <span>Appel gratuit</span>
            </div>
            <Button variant="hero" size="sm">
              Demander un devis
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button variant="hero" size="sm" className="w-full">
                  Demander un devis
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

    </header>
  );
}