import { ShieldCheck, FileCheck, Phone } from "lucide-react";

const protectionFeatures = [
  {
    icon: FileCheck,
    text: "Ochrona prawna i licencje turystyczne"
  },
  {
    icon: ShieldCheck,
    text: "Ubezpieczenia dla Ciebie i uczestników"
  },
  {
    icon: Phone,
    text: "Całodobowa pomoc w razie problemów"
  }
];

const Protection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <ShieldCheck className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Niezależnie od sposobu organizacji wyjazdów, masz zapewnioną ochronę
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-8">
            {protectionFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-lg mb-4">
                  <feature.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <p className="text-foreground font-medium">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protection;
