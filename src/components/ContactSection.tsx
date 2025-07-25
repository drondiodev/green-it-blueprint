import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product: "",
    message: "",
    acceptPolicy: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      product: value
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      acceptPolicy: checked
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4 text-base font-bold px-6 py-3 bg-gradient-primary text-white shadow-glow">
            Contact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Commençons votre transformation numérique
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Échangeons sur vos besoins et découvrons ensemble comment optimiser votre informatique
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-strong border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Demandez votre audit gratuit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Entreprise *</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Nom de votre entreprise"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="01 23 45 67 89"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product">Type de produit recherché *</Label>
                  <Select onValueChange={handleSelectChange} required>
                    <SelectTrigger className="border-border focus:border-primary">
                      <SelectValue placeholder="Sélectionnez un type de produit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="postes-serveurs">Postes et serveurs</SelectItem>
                      <SelectItem value="toners-imprimantes">Toners et imprimantes</SelectItem>
                      <SelectItem value="reseaux-securite">Réseaux et sécurité</SelectItem>
                      <SelectItem value="logiciels-licences">Logiciels et licences</SelectItem>
                      <SelectItem value="maintenance-support">Maintenance et support</SelectItem>
                      <SelectItem value="audit-conseil">Audit et conseil</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Décrivez vos besoins informatiques actuels..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-border focus:border-primary resize-none"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="acceptPolicy" 
                    checked={formData.acceptPolicy}
                    onCheckedChange={handleCheckboxChange}
                    required
                  />
                  <Label htmlFor="acceptPolicy" className="text-sm">
                    J'accepte la <a href="#" className="text-primary underline">politique de confidentialité</a> et le traitement de mes données personnelles *
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary text-white hover:shadow-glow transition-all duration-300"
                  size="lg"
                  disabled={!formData.acceptPolicy}
                >
                  <Send className="mr-2 h-5 w-5" />
                  Envoyer ma demande
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Une entreprise qui vous connait</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Un accompagnement à visage humain</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Un service sur mesure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Des choix technologiques guidés par l'économie et l'éthique</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0 space-y-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Nos coordonnées</h3>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">contact@ecopack.fr</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">01 23 45 67 89</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Paris, France</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}