import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TripsShowcase from "@/components/TripsShowcase";
import TripsCTA from "@/components/TripsCTA";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mountains-group.jpg";

const Trips = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('reservation-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Odbierz 500 zł na pierwszy wyjazd
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/90 font-semibold mb-8">
                Oferta kończy się wkrótce!
              </p>

              <Button 
                onClick={scrollToForm}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-12 py-6 h-auto"
              >
                Odbieram Rabat
              </Button>
            </div>
          </div>
        </section>

        <TripsShowcase />
        <TripsCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Trips;
