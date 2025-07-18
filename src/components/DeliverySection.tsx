import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Settings, Recycle, ArrowRight } from "lucide-react";

export default function DeliverySection() {
  const services = [
    {
      icon: Truck,
      title: "Livraison",
      description: "Préparation en atelier et livraison chez vous"
    },
    {
      icon: Settings,
      title: "Installation", 
      description: "Accompagnement de proximité et support réactif"
    },
    {
      icon: Recycle,
      title: "Recyclage",
      description: "Récupération de votre ancien matériel"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Service complet
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Pas de jargon. Juste vos objectifs.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="text-center border-border bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-success rounded-full px-6 py-3 shadow-soft border border-success/20 mb-8">
            <span className="text-white font-semibold">Zéro déchet, zéro friction.</span>
          </div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Contrairement aux offres cloud complexes ou aux reconditionnés grand public : 
            <strong className="text-primary"> EcoPack®</strong> est 100 % pensé pour les pros : compatible, sécurisé, durable.
          </p>
          
          <div className="space-y-3">
            <Button size="lg" className="text-lg px-8 py-4 bg-gradient-primary text-white hover:shadow-glow transition-all duration-300">
              Découvrir mon plan personnalisé EcoPack®
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-muted-foreground">
              Recevez votre simulation sous 48h – sans engagement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}