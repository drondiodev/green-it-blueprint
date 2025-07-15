import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Euro, Recycle, TrendingUp, Shield, Leaf, Award } from "lucide-react";
import benefitsImage from "@/assets/benefits-icons.jpg";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Euro,
      title: "Économisez jusqu'à 60%",
      description: "Réduction drastique de vos coûts IT sans compromis sur la performance",
      highlight: "60%",
      color: "text-success"
    },
    {
      icon: Recycle,
      title: "Recyclez gratuitement",
      description: "Nous récupérons et recyclons votre ancien matériel sans frais",
      highlight: "0€",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Performance optimale",
      description: "Équipements reconditionnés testés et garantis haute performance",
      highlight: "100%",
      color: "text-accent-blue"
    },
    {
      icon: Shield,
      title: "Vous restez maître de vos données",
      description: "Solutions souveraines qui protègent votre indépendance numérique",
      highlight: "Sécurisé",
      color: "text-primary"
    },
    {
      icon: Leaf,
      title: "Impact environnemental réduit",
      description: "Contribuez à l'économie circulaire et réduisez votre empreinte carbone",
      highlight: "-80%",
      color: "text-success"
    },
    {
      icon: Award,
      title: "Garantie constructeur",
      description: "Tous nos équipements reconditionnés sont garantis 1 à 3 ans",
      highlight: "3 ans",
      color: "text-accent-blue"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Bénéfices clés
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
            Les avantages d'ARIS EcoPack
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Avec EcoPack, bénéficiez d'une prestation informatique complète et qualitative qui allie{" "}
            <strong className="text-primary">performance</strong>,{" "}
            <strong className="text-success">économies</strong> et{" "}
            <strong className="text-accent-blue">respect de l'environnement</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-strong transition-all duration-300 border-primary/10 hover:border-primary/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 ${benefit.color} bg-current/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {benefit.title}
                      </h3>
                      <Badge variant="secondary" className={`${benefit.color} bg-current/10 font-bold`}>
                        {benefit.highlight}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modern performance highlight card */}
        <div className="relative bg-gradient-primary rounded-2xl p-8 shadow-strong">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <TrendingUp className="h-8 w-8" />
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Performance + Économies + Écologie
            </h3>
            <p className="text-xl opacity-90 mb-6">
              La triple promesse ARIS EcoPack
            </p>
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">60%</div>
                <div className="text-sm opacity-80">Économies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">100%</div>
                <div className="text-sm opacity-80">Performance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">-80%</div>
                <div className="text-sm opacity-80">Impact CO₂</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}