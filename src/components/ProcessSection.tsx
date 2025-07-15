import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Clock, FileText } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Décrivez vos besoins",
      description: "Un formulaire simple de 2 minutes pour comprendre votre situation actuelle",
      timing: "2 min"
    },
    {
      icon: Clock,
      title: "On vous rappelle sous 24h",
      description: "Notre expert ARIS analyse votre cas et vous contacte rapidement",
      timing: "24h"
    },
    {
      icon: FileText,
      title: "Recevez votre devis personnalisé",
      description: "Plan d'équipement détaillé avec économies prévisionnelles",
      timing: "48h"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Parcours sans ambiguïté
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            3 étapes simples vers votre solution éco-responsable
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un processus transparent et rapide pour obtenir votre plan d'équipement personnalisé
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Animated connection lines */}
          <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-gradient-to-r from-success via-primary to-success opacity-40 z-0 animate-pulse"></div>
          <div className="hidden md:flex absolute top-[75px] left-1/3 transform -translate-x-1/2 w-6 h-6 bg-success rounded-full animate-ping opacity-30 z-0" style={{ animationDelay: "0s" }}></div>
          <div className="hidden md:flex absolute top-[75px] left-2/3 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full animate-ping opacity-30 z-0" style={{ animationDelay: "1s" }}></div>
          
          {steps.map((step, index) => (
            <Card key={index} className="relative z-10 hover:shadow-strong transition-all duration-300 border-success/20 bg-white hover:border-success/40">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-success to-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <Badge variant="secondary" className="absolute -top-2 -right-2 bg-success text-white border-success">
                    {step.timing}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}