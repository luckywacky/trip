import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Czy potrzebuję biura podróży, aby organizować wyjazdy?",
    answer: "Nie, nasza platforma zapewnia pełną zgodność z prawem turystycznym, licencje i ubezpieczenia. Skup się na pasji, a my zajmiemy się formalnościami."
  },
  {
    question: "Ile mogę zarobić na jednym wyjeździe?",
    answer: "Zysk zależy od liczby uczestników – od 5 000 zł przy 10 osobach do 15 000 zł przy 20 osobach. Sprawdź suwak zarobkowy na górze!"
  },
  {
    question: "Jakie wsparcie otrzymam przy organizacji?",
    answer: "Oferujemy indywidualną asystę, narzędzia do planowania i całodobową infolinię. Od stworzenia oferty po promocję – wszystko w jednym miejscu."
  },
  {
    question: "Czy platforma jest łatwa w obsłudze dla początkujących?",
    answer: "Tak, interfejs jest intuicyjny – możesz stworzyć ofertę w kilka minut, nawet bez doświadczenia technicznego."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            Najczęściej zadawane pytania
          </h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg border border-border px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
