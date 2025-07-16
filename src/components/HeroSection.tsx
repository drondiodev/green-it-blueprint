import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, CheckCircle, Star, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-sustainable-tech.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Sustainable Technology" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-background/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pre-headline */}
        <div className="flex justify-center gap-4 mb-8 animate-fade-in">
          <Badge variant="default" className="text-base font-bold px-6 py-3 bg-gradient-primary text-white shadow-glow">
            Parcours sans ambiguïté
          </Badge>
          <Badge variant="success" className="text-base font-bold px-6 py-3 bg-gradient-success text-white shadow-glow">
            Méthode ARIS
          </Badge>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight animate-slide-up">
          Informatique{" "}
          <span className="text-primary">économique</span>{" "}
          et{" "}
          <span className="text-success">écolo</span>
        </h1>

        {/* Subheadline with benefits */}
        <div className="mb-8 space-y-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Avec la <strong className="text-primary">Méthode ARIS</strong> : 
            un mix unique de reconditionné, open source et souveraineté numérique
          </p>
          
          {/* Key benefits */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center bg-card border border-border rounded-full px-4 py-2 shadow-soft">
              <CheckCircle className="text-success mr-2 h-5 w-5" />
              <span className="text-foreground font-semibold">Économisez jusqu'à 60%</span>
            </div>
            <div className="flex items-center bg-card border border-border rounded-full px-4 py-2 shadow-soft">
              <CheckCircle className="text-success mr-2 h-5 w-5" />
              <span className="text-foreground font-semibold">Équipements durables</span>
            </div>
            <div className="flex items-center bg-card border border-border rounded-full px-4 py-2 shadow-soft">
              <CheckCircle className="text-success mr-2 h-5 w-5" />
              <span className="text-foreground font-semibold">Recyclage gratuit</span>
            </div>
            <div className="flex items-center bg-card border border-border rounded-full px-4 py-2 shadow-soft">
              <CheckCircle className="text-success mr-2 h-5 w-5" />
              <span className="text-foreground font-semibold">Performance optimale</span>
            </div>
          </div>
        </div>


        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button size="lg" className="text-lg px-8 py-4 bg-gradient-primary text-white hover:shadow-glow transition-all duration-300">
            Je découvre ma solution personnalisée
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}