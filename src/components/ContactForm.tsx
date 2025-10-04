import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.email) {
      toast({
        title: "Wypełnij wszystkie pola",
        description: "Proszę podać imię i adres email.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Nieprawidłowy email",
        description: "Proszę podać poprawny adres email.",
        variant: "destructive"
      });
      return;
    }

    // Success message
    toast({
      title: "Dziękujemy!",
      description: "Skontaktujemy się z Tobą wkrótce.",
    });

    // Reset form
    setFormData({ firstName: "", email: "" });
  };

  return (
    <section id="contact-form" className="py-20 bg-accent/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Zacznij zarabiać już dziś!
            </h2>
            <p className="text-lg text-muted-foreground">
              Zostaw kontakt, porozmawiajmy.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-lg space-y-6">
            <div>
              <Label htmlFor="firstName" className="text-foreground font-medium mb-2 block">
                Imię
              </Label>
              <Input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full"
                placeholder="Jan"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground font-medium mb-2 block">
                Adres email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full"
                placeholder="jan.kowalski@example.com"
              />
            </div>

            <Button 
              type="submit"
              className="w-full bg-black hover:bg-black/90 text-white font-semibold py-6 text-lg"
            >
              Wyślij kontakt
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
