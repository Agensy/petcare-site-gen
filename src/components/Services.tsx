import { Syringe, Scissors, Pill, Package, Activity, Bone } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "./WhatsAppButton";

const Services = () => {
  const services = [
    {
      icon: Syringe,
      title: "Consultas Veterinárias",
      description: "Atendimento clínico geral com acompanhamento preventivo e orientação personalizada aos tutores.",
      features: ["Exames clínicos", "Diagnósticos", "Orientação preventiva"]
    },
    {
      icon: Activity,
      title: "Exames Laboratoriais",
      description: "Exames completos para diagnóstico preciso e acompanhamento da saúde do seu pet.",
      features: ["Análises clínicas", "Exames de imagem", "Resultados rápidos"]
    },
    {
      icon: Pill,
      title: "Vacinação e Vermifugação",
      description: "Protocolos completos de imunização e controle parasitário para manter seu pet saudável.",
      features: ["Vacinas essenciais", "Controle de parasitas", "Carteira de vacinação"]
    },
    {
      icon: Scissors,
      title: "Banho e Tosa",
      description: "Serviços de higiene e estética com produtos de qualidade e profissionais capacitados.",
      features: ["Banho especializado", "Tosa higiênica", "Tosa estética"]
    },
    {
      icon: Package,
      title: "Pet Shop",
      description: "Produtos selecionados para a saúde, nutrição e bem-estar do seu animal de estimação.",
      features: ["Rações premium", "Acessórios", "Medicamentos"]
    },
    {
      icon: Bone,
      title: "Nutrição Animal",
      description: "Orientação nutricional personalizada para cada fase da vida do seu pet.",
      features: ["Dietas balanceadas", "Suplementação", "Acompanhamento"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Nossos Serviços
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Cuidado Completo
            <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Para Seu Pet
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            A Doguinhu é uma clínica veterinária completa com consultas presenciais, 
            acompanhamento preventivo e produtos selecionados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up border border-border hover:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex w-14 h-14 bg-gradient-primary rounded-xl items-center justify-center shadow-primary group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-primary rounded-2xl p-8 sm:p-12 text-center overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Pronto para Cuidar do Seu Pet?
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Entre em contato via WhatsApp e agende uma consulta. Nossa equipe está pronta para atender você e seu pet com todo o carinho e profissionalismo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <WhatsAppButton message="Olá! Gostaria de saber mais sobre os serviços da Doguinhu e agendar uma consulta." />
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                    }
                  }}
                >
                  Ver Contatos
                </Button>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
