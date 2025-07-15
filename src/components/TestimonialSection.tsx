import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import testimonialImage from "@/assets/testimonial-julie.jpg";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Julie Moreau",
      role: "Directrice",
      company: "Cabinet comptable Moreau & Associés",
      size: "TPE, 6 personnes",
      image: testimonialImage,
      quote: "Grâce à EcoPack, nous avons réduit nos dépenses IT de 52% en un trimestre.",
      details: "Nous avons remplacé tout notre parc informatique par du matériel reconditionné ARIS. La qualité est au rendez-vous et les économies sont réelles.",
      savings: "52%",
      rating: 5
    }
  ];

  const partners = [
    "Microsoft Partner",
    "Écosystème IT Français", 
    "AFNOR Certifié",
    "ECOSYSTEM Agréé"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Preuves sociales & Effet Halo
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment nos clients ont transformé leur informatique
          </p>
        </div>

        {/* Main testimonial */}
        <Card className="mb-16 max-w-4xl mx-auto shadow-strong border-primary/20">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 h-8 w-8 text-primary/30" />
                <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-6">
                  "{testimonials[0].quote}"
                </blockquote>
                <p className="text-muted-foreground mb-6">
                  {testimonials[0].details}
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    {[...Array(testimonials[0].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Badge variant="success" className="bg-success/10 text-success font-bold">
                    -{testimonials[0].savings} de coûts
                  </Badge>
                </div>
                
                <div className="mt-6">
                  <div className="font-semibold text-foreground">
                    {testimonials[0].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[0].role}, {testimonials[0].company}
                  </div>
                  <div className="text-sm text-primary">
                    {testimonials[0].size}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={testimonials[0].image}
                  alt={testimonials[0].name}
                  className="w-full h-80 object-cover rounded-2xl shadow-soft"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold text-success">-52%</div>
                  <div className="text-sm text-muted-foreground">économisés</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Track record */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="text-center p-8 bg-gradient-success">
            <CardContent className="p-0">
              <div className="text-4xl font-bold text-white mb-2">+200</div>
              <div className="text-white/90">entreprises accompagnées</div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-8 bg-gradient-primary">
            <CardContent className="p-0">
              <div className="text-4xl font-bold text-white mb-2">8 500€</div>
              <div className="text-white/90">économisés/an en moyenne</div>
            </CardContent>
          </Card>
        </div>

        {/* Partners */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-8">
            Nos partenaires et certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((partner, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                {partner}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}