import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Monitor, 
  Printer, 
  ShieldCheck, 
  Phone, 
  FileText, 
  Server,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Monitor,
      title: "Postes et serveurs",
      subtitle: "Reconditionnés et garantis",
      description: "Ordinateurs portables, fixes et serveurs haute performance, reconditionnés et testés",
      features: ["Garantie 1 à 3 ans", "Performance certifiée", "Économies jusqu'à 70%"],
      highlight: "Bestseller",
      highlightColor: "bg-success"
    },
    {
      icon: Printer,
      title: "Toners et imprimantes",
      subtitle: "Consommables remanufacturés",
      description: "Cartouches d'encre et toners remanufacturés, qualité équivalente au neuf",
      features: ["Qualité garantie", "Compatible toutes marques", "Livraison express"],
      highlight: "Éco +",
      highlightColor: "bg-primary"
    },
    {
      icon: FileText,
      title: "Licences logicielles",
      subtitle: "Utilisation garantie",
      description: "Suite bureautique Microsoft, licences Windows, solutions open source",
      features: ["Licences authentiques", "Support inclus", "Migration assistée"],
      highlight: "Sécurisé",
      highlightColor: "bg-accent-blue"
    },
    {
      icon: ShieldCheck,
      title: "Sécurité PfSense",
      subtitle: "Très performant",
      description: "Pare-feu professionnel open source, protection maximale de votre réseau",
      features: ["Open source", "Très sécurisé", "Configuration sur mesure"],
      highlight: "Pro",
      highlightColor: "bg-destructive"
    },
    {
      icon: Phone,
      title: "Téléphonie IP 3CX",
      subtitle: "Intégrateur certifié",
      description: "Système téléphonique moderne, intégration complète voix et données",
      features: ["Installation clé en main", "Formation incluse", "Maintenance assurée"],
      highlight: "Nouveau",
      highlightColor: "bg-primary"
    },
    {
      icon: Server,
      title: "ERP français",
      subtitle: "Licence pleine",
      description: "Solution complète de gestion d'entreprise, éditeur 100% français",
      features: ["Souveraineté numérique", "Support français", "Personnalisation"],
      highlight: "Français",
      highlightColor: "bg-accent-blue"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Méthode ARIS - Nos solutions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Optimisez votre infrastructure IT avec des solutions 
            <span className="text-primary"> fiables</span>,
            <span className="text-success"> économiques</span> et
            <span className="text-accent-blue"> durables</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La méthode ARIS combine reconditionné premium, logiciels open source et souveraineté numérique 
            pour des économies garanties sans compromis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-strong transition-all duration-300 border-primary/10 hover:border-primary/30 relative overflow-hidden">
              {/* Highlight badge */}
              <div className={`absolute top-4 right-4 ${service.highlightColor} text-white text-xs px-2 py-1 rounded-full font-semibold`}>
                {service.highlight}
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-foreground">
                      {service.title}
                    </CardTitle>
                    <p className="text-sm text-primary font-medium">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 text-sm">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Demander un devis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Prêt à réduire vos coûts informatiques de 60% ?
          </h3>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Nos experts analysent vos besoins et vous proposent la configuration idéale : 
            matériel reconditionné performant, logiciels libres et services personnalisés.
          </p>
          <Button variant="secondary" size="lg" className="font-semibold">
            Obtenez votre plan d'équipement économique et écologique en 48h
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}