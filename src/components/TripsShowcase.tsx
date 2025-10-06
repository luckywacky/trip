import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const trips = [
  {
    title: "Digital Detox Retreat w Górach",
    description: "Odłącz się od ekranów i ciesz się naturą, medytacją i jogą.",
    price: "2 500 zł",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
  },
  {
    title: "Weekend Jogi i Wellness nad Jeziorem",
    description: "Odpręż się podczas codziennych zajęć jogi, zdrowych posiłków i prowadzonych medytacji.",
    price: "1 800 zł",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop"
  },
  {
    title: "Fotograficzna Przygoda na Wsi",
    description: "Uchwyć zapierające dech w piersiach krajobrazy i ucz się fotografii od ekspertów.",
    price: "2 200 zł",
    image: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=800&h=600&fit=crop"
  },
  {
    title: "Retreat Pisarski w Historycznym Mieście",
    description: "Rozwijaj swoją kreatywność podczas warsztatów w inspirującej lokalizacji.",
    price: "2 000 zł",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop"
  },
  {
    title: "Doświadczenie Kulinarne i Pobyt na Farmie",
    description: "Ucz się lokalnych przepisów, gotuj ze świeżych składników i delektuj się autentycznymi posiłkami.",
    price: "1 900 zł",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop"
  },
  {
    title: "Rejs i Mindfulness",
    description: "Połącz naukę żeglarstwa z ćwiczeniami uważności i widokami na ocean.",
    price: "3 200 zł",
    image: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&h=600&fit=crop"
  }
];

const TripsShowcase = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {trips.map((trip, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${trip.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {trip.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {trip.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {trip.price}
                  </span>
                </div>
                <Link to="/reservation">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    Zarezerwuj wycieczkę
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TripsShowcase;
