import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Czy muszę mieć biuro podróży, aby organizować wyjazdy?",
    answer: "Nie, wszystko zorganizujesz przez naszą platformę – licencje, ubezpieczenia i wsparcie prawne są po naszej stronie."
  },
  {
    question: "Ile mogę zarobić na jednym wyjeździe?",
    answer: "Zyski zależą od liczby uczestników i rodzaju wyjazdu – wielu organizatorów zarabia od kilku do kilkudziesięciu tysięcy złotych."
  },
  {
    question: "Jak rozpocząć przygodę z organizacją wyjazdów?",
    answer: "Po prostu zgłoś chęć organizacji wyjazdu, a my pomożemy Ci go w pełni zorganizować – od planowania, przez wsparcie uczestników, po promocję i widoczność Twojej oferty na naszej platformie."
  },
  {
    question: "Czy otrzymam wsparcie w promocji mojego wyjazdu?",
    answer: "Tak! Oferujemy narzędzia promocyjne, wsparcie opiekuna oraz wskazówki, jak dotrzeć do Twojej społeczności."
  },
  {
    question: "Czy potrzebuję specjalnych licencji lub ubezpieczenia?",
    answer: "Nie, nie musisz martwić się formalnościami – my zajmiemy się wszystkimi wymaganymi licencjami, ubezpieczeniami i kwestiami prawnymi, abyś mógł działać bezpiecznie."
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
