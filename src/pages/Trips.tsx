import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TripsShowcase from "@/components/TripsShowcase";
import TripsCTA from "@/components/TripsCTA";

const Trips = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Odkryj Nasze Wyjazdy
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Wybierz spośród unikalnych wyjazdów tematycznych, które łączą pasję, relaks i niezapomniane doświadczenia.
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
