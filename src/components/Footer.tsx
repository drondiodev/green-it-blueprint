import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Leaf, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-light rounded-lg flex items-center justify-center">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">EcoPack®</div>
                <div className="text-xs text-white/70">by ARIS Informatique</div>
              </div>
            </div>
            <p className="text-white/70 text-sm">
              Solutions informatiques économiques et écoresponsables pour TPE, PME et collectivités.
              La méthode ARIS : reconditionné + open source + souveraineté numérique.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Postes reconditionnés</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Serveurs professionnels</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Licences logicielles</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sécurité PfSense</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Téléphonie IP 3CX</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ERP français</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@aris-ecopack.fr</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Paris, Île-de-France</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Lun-Ven 9h-18h</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-semibold mb-4">Commencer maintenant</h3>
            <p className="text-white/70 text-sm mb-4">
              Découvrez vos économies potentielles en 2 minutes
            </p>
            <Button variant="secondary" className="w-full mb-4">
              Simulation gratuite
            </Button>
            <p className="text-xs text-white/50">
              Session de recommandation IT en 48h
            </p>
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Bottom footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
          <div className="mb-4 md:mb-0">
            © 2024 ARIS Informatique. Tous droits réservés.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}