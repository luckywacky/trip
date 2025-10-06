import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TripsShowcase from "@/components/TripsShowcase";
import TripsCTA from "@/components/TripsCTA";
import heroImage from "@/assets/hero-mountains-group.jpg";

const Trips = () => {
  const [spotsLeft] = useState(12); // Dynamic counter for remaining spots

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
                Zarezerwuj 500 zł zniżki na pierwszy wyjazd
              </h1>
              
              {/* Limited Spots Counter */}
              <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-lg px-8 py-4 mb-6">
                <p className="text-white text-lg sm:text-xl mb-2">
                  🔥 Oferta limitowana dla pierwszych 50 uczestników
                </p>
                <p className="text-white text-2xl sm:text-3xl font-bold">
                  Zostało tylko <span className="text-primary">{spotsLeft}</span> miejsc!
                </p>
              </div>

              <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl">
                Wybierz spośród unikalnych wyjazdów, które łączą pasję, relaks i niezapomniane doświadczenia.
              </p>
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
