import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const TripsCTA = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.email) {
      toast({
        title: "Błąd",
        description: "Proszę wypełnić wszystkie pola",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Błąd",
        description: "Proszę podać prawidłowy adres email",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Dziękujemy!",
      description: "Wkrótce się z Tobą skontaktujemy.",
    });

    setFormData({ firstName: "", email: "" });
  };

  return (
    <section id="reservation-form" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-foreground">
            Zarezerwuj Swoją Zniżkę
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-xl shadow-sm">
            <div>
              <Label htmlFor="firstName" className="text-foreground">Imię</Label>
              <Input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="mt-2"
                placeholder="Twoje imię"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="text-foreground">Adres email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-2"
                placeholder="twoj@email.com"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg"
            >
              Zarezerwuj Swoją Zniżkę!
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TripsCTA;
