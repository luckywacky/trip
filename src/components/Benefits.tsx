import { DollarSign, Sparkles, Shield, Headphones } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Zarabiaj na pasji",
    description: "Twórz oferty wyjazdów i generuj dodatkowe przychody w wysokości tysięcy złotych – z łatwością, podobnie jak udostępnianie nieruchomości na Airbnb."
  },
  {
    icon: Sparkles,
    title: "Prostota organizacji",
    description: "Utwórz ofertę w kilku krokach, wprowadzaj zmiany w dowolnym momencie, bez barier technicznych."
  },
  {
    icon: Shield,
    title: "Legalność i ochrona",
    description: "Zapewniamy pełną ochronę prawną, licencje oraz ubezpieczenia – działaj bezpiecznie, z kompleksowym wsparciem."
  },
  {
    icon: Headphones,
    title: "Pomoc i wsparcie",
    description: "Indywidualna asysta od doświadczonych freelancerów, całodobowa linia pomocy oraz zaawansowane narzędzia promocyjne."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-foreground">
          Publikowanie oferty jest niezwykle proste
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
