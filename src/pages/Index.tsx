import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Differentials from "@/components/Differentials";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Differentials />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton fixed message="Olá! Gostaria de saber mais sobre a Doguinhu e agendar uma consulta." />
    </div>
  );
};

export default Index;
