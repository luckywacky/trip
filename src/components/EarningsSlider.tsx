import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Coins, Mountain, Waves } from "lucide-react";

const EarningsSlider = () => {
  const [participants, setParticipants] = useState([15]);
  
  const calculateEarnings = (value: number) => {
    // Linear calculation: 10 = 5000, 15 = 10000, 20 = 15000
    return ((value - 10) * 1000) + 5000;
  };

  const earnings = calculateEarnings(participants[0]);
  const formattedEarnings = earnings.toLocaleString('pl-PL');
  
  // Calculate number of icons to show (1-3 based on participants)
  const iconCount = Math.min(3, Math.ceil((participants[0] - 10) / 4) + 1);

  return (
    <section className="py-16 sm:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
            Twój zysk z pasji – zobacz, ile możesz zarobić na wyjazdach!
          </h2>
          
          <div className="bg-card rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 mt-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
              {/* Slider Section */}
              <div className="flex-1 mb-8 lg:mb-0">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-muted-foreground mb-3">
                    Liczba uczestników
                  </label>
                  <Slider
                    value={participants}
                    onValueChange={setParticipants}
                    min={10}
                    max={20}
                    step={1}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>10</span>
                    <span className="font-semibold text-foreground">{participants[0]} osób</span>
                    <span>20</span>
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <p className="text-sm text-muted-foreground mb-2">Szacowany zysk</p>
                  <p className="text-4xl sm:text-5xl font-bold text-primary mb-4">
                    {formattedEarnings} zł
                  </p>
                  <p className="text-base text-foreground">
                    Zorganizuj retreat dla <span className="font-semibold text-primary">{participants[0]} osób</span> i zarób <span className="font-semibold text-primary">{formattedEarnings} zł</span> – my zajmiemy się resztą!
                  </p>
                </div>
              </div>

              {/* Icons Section */}
              <div className="flex lg:flex-col justify-center items-center gap-4 lg:gap-6">
                {Array.from({ length: iconCount }).map((_, index) => (
                  <div
                    key={index}
                    className="animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {index === 0 && (
                      <Coins className="w-12 h-12 sm:w-16 sm:h-16 text-primary opacity-80" />
                    )}
                    {index === 1 && (
                      <Mountain className="w-12 h-12 sm:w-16 sm:h-16 text-primary opacity-80" />
                    )}
                    {index === 2 && (
                      <Waves className="w-12 h-12 sm:w-16 sm:h-16 text-primary opacity-80" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            * Przykładowe wyliczenie na podstawie średnich kosztów organizacji wyjazdów tematycznych
          </p>
        </div>
      </div>
    </section>
  );
};

export default EarningsSlider;
