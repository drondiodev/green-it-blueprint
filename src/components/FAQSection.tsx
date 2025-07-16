import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "Qu'est-ce que la Méthode ARIS ?",
      answer: "La Méthode ARIS est une approche unique qui combine matériel reconditionné, logiciels open source et souveraineté numérique pour offrir des solutions informatiques économiques et écologiques. Elle permet aux entreprises de réduire leurs coûts IT jusqu'à 60% tout en s'engageant dans une démarche écoresponsable."
    },
    {
      question: "Comment EcoPack fonctionne-t-il ?",
      answer: "EcoPack évalue vos besoins informatiques, propose des équipements reconditionnés de qualité professionnelle, installe des logiciels open source adaptés à votre activité, et assure la formation de vos équipes. Nous garantissons un service complet avec maintenance et support technique inclus."
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer: "Absolument. Notre approche privilégie la souveraineté numérique avec des solutions qui gardent vos données sous votre contrôle. Nous utilisons des logiciels open source audités et sécurisés, et proposons des solutions d'hébergement local ou souverain selon vos besoins."
    },
    {
      question: "Puis-je intégrer mes outils existants ?",
      answer: "Oui, nous analysons votre infrastructure actuelle et proposons des solutions de migration progressives. Nos experts s'assurent de la compatibilité avec vos outils essentiels et proposent des alternatives open source équivalentes quand c'est pertinent."
    },
    {
      question: "Y a-t-il un essai gratuit disponible ?",
      answer: "Nous proposons un audit gratuit de votre infrastructure actuelle avec une estimation personnalisée des économies possibles. Cet audit inclut une démonstration des solutions proposées et un plan de migration détaillé sans engagement."
    },
    {
      question: "Comment EcoPack me fait-il gagner du temps ?",
      answer: "EcoPack simplifie votre gestion IT en proposant des solutions intégrées, un support technique réactif, et une maintenance préventive. Plus besoin de gérer multiple fournisseurs : nous nous occupons de tout, de l'installation au support quotidien."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Réponses aux questions communes à propos d'EcoPack et de ses fonctionnalités. 
            Si vous avez d'autres questions, n'hésitez pas à nous contacter.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card shadow-soft hover:shadow-strong transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}