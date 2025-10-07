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
            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center min-h-[500px] lg:min-h-[600px]">
              <div className="flex-1 flex flex-col items-center justify-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Odbierz 500 zł na pierwszy wyjazd
                </h1>
                
                <p className="text-xl sm:text-2xl text-white/90 font-semibold mb-12">
                  Oferta kończy się wkrótce!
                </p>
              </div>

              <div className="pb-12">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                  <Button 
                    onClick={scrollToForm}
                    size="lg"
                    className="relative bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl px-16 py-8 h-auto shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm border-2 border-primary-foreground/10"
                  >
                    Odbieram Rabat
                  </Button>
                </div>
              </div>
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
