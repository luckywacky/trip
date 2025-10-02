import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EarningsSlider from "@/components/EarningsSlider";
import Introduction from "@/components/Introduction";
import Benefits from "@/components/Benefits";
import Protection from "@/components/Protection";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <EarningsSlider />
        <Introduction />
        <Benefits />
        <Protection />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
