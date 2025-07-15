import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, CheckCircle, Star, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-sustainable-tech.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-primary">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Sustainable Technology" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-primary opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pre-headline */}
        <Badge variant="secondary" className="mb-6 text-sm font-medium px-4 py-2 animate-fade-in">
          👉 Pour TPE, PME et collectivités engagées dans une démarche écoresponsable
        </Badge>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-slide-up">
          Informatique{" "}
          <span className="text-primary-light">économique</span>{" "}
          et{" "}
          <span className="text-success-light">écolo</span>
        </h1>

        {/* Subheadline with benefits */}
        <div className="mb-8 space-y-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Avec la <strong className="text-primary-light">Méthode ARIS</strong> : 
            un mix unique de reconditionné, open source et souveraineté numérique
          </p>
          
          {/* Key benefits */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <CheckCircle className="text-success-light mr-2 h-5 w-5" />
              <span className="text-white font-semibold">Économisez jusqu'à 60%</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <CheckCircle className="text-success-light mr-2 h-5 w-5" />
              <span className="text-white font-semibold">Équipements durables</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <CheckCircle className="text-success-light mr-2 h-5 w-5" />
              <span className="text-white font-semibold">Recyclage gratuit</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <CheckCircle className="text-success-light mr-2 h-5 w-5" />
              <span className="text-white font-semibold">Performance optimale</span>
            </div>
          </div>
        </div>


        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button variant="hero" size="lg" className="text-lg px-8 py-4 mb-4">
            Je découvre ma solution personnalisée
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-gray-300 text-sm">
            Session de recommandation IT : votre stratégie 100% éco-responsable en 48h
          </p>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-300 animate-fade-in" style={{ animationDelay: "0.9s" }}>
          <div className="flex items-center">
            <Star className="text-yellow-400 h-5 w-5 mr-1" />
            <span className="text-sm">+200 entreprises accompagnées</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="text-success-light h-5 w-5 mr-1" />
            <span className="text-sm">Jusqu'à 8 500€ économisés/an</span>
          </div>
        </div>
      </div>
    </section>
  );
}