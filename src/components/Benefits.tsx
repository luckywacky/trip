import { DollarSign, Shield, MessageCircle } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Zarabiaj na pasji",
    description: "Organizuj wyjazdy tematyczne i retreaty. Zyskaj dodatkowe tysiące złotych, dzieląc się tym, co kochasz."
  },
  {
    icon: Shield,
    title: "Pełna ochrona",
    description: "Prawo, licencje i ubezpieczenia zapewniamy my. Ty skupiasz się na pasji, a my dbamy o bezpieczeństwo Twoje i uczestników."
  },
  {
    icon: MessageCircle,
    title: "Wsparcie 24/7",
    description: "Masz pełne zaplecze. Opiekun, całodobowa pomoc i skuteczne narzędzia promocji wspierają Cię na każdym etapie."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-foreground">
          Organizacja wyjazdów bez komplikacji
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
