import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import japanImage from "@/assets/trip-japan-cherry-blossom.jpg";

const trips = [
  {
    title: "Narty w Szwajcarii",
    description: "Zimowy wyjazd na narty w Alpach szwajcarskich, dla każdego poziomu zaawansowania.",
    price: "4 500 zł",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop"
  },
  {
    title: "Tajlandia Muay Thai",
    description: "Intensywne treningi Muay Thai połączone z egzotycznym wypoczynkiem.",
    price: "3 800 zł",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&h=600&fit=crop"
  },
  {
    title: "Pilates Bali",
    description: "Relaks i trening pilates w tropikalnym otoczeniu.",
    price: "3 200 zł",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop"
  },
  {
    title: "Sylwester w Dubaju",
    description: "Niezapomniana zabawa sylwestrowa z luksusowymi atrakcjami.",
    price: "5 500 zł",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop"
  },
  {
    title: "Japonia w Sezonie Sakury",
    description: "Wiosenny wyjazd do Japonii w okresie kwitnienia wiśni, pełen kultury i niezapomnianych widoków.",
    price: "5 200 zł",
    image: japanImage
  },
  {
    title: "Halloween w Nowym Jorku",
    description: "Wyjątkowe doświadczenie Halloween w sercu NYC, parady i wydarzenia tematyczne.",
    price: "4 800 zł",
    image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=800&h=600&fit=crop"
  }
];

const TripsShowcase = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('reservation-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {trips.map((trip, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              <div 
                className="h-48 bg-cover bg-center flex-shrink-0"
                style={{ backgroundImage: `url(${trip.image})` }}
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {trip.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                  {trip.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {trip.price}
                  </span>
                </div>
                <Button 
                  onClick={scrollToForm}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-auto"
                >
                  Pobierz kod na 500 zł
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TripsShowcase;
