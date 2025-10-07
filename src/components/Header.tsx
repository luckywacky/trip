import { Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    const reservationSection = document.getElementById('reservation-form');
    const targetSection = contactSection || reservationSection;
    targetSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Plane className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-foreground">TravelFreelance</span>
          </div>
          
          <Button 
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Odbieram kod!
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
