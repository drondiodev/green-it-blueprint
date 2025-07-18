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
          <Badge variant="outline" className="mb-4 bg-gradient-to-r from-primary/10 to-success/10 text-primary border-primary/30 hover:border-primary/50 px-4 py-2">
            Parcours sans ambiguïté
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            3 étapes simples vers votre solution éco-responsable
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un processus transparent et rapide pour obtenir votre plan d'équipement personnalisé
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {steps.map((step, index) => (
            <Card key={index} className="relative z-10 hover:shadow-strong transition-all duration-300 border-success/20 bg-white hover:border-success/40">
              <CardContent className="p-8 text-center">
                <Badge variant="outline" className="absolute top-4 left-4 bg-primary text-white border-primary">
                  Étape {index + 1}
                </Badge>
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