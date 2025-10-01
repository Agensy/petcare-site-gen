import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "./WhatsAppButton";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone / WhatsApp",
      value: "(61) 98150-8486",
      action: () => window.open("https://wa.me/5561981508486", "_blank")
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "agensy4b@gmail.com",
      action: () => window.location.href = "mailto:agensy4b@gmail.com"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo SP",
      action: null
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      value: "Segunda a Sexta, 8h às 18h",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
            Entre em Contato
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Vamos Cuidar do
            <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Seu Melhor Amigo?
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Entre em contato com a Doguinhu! Nossa equipe está pronta para atender você e seu pet com todo o carinho e profissionalismo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            <div className="bg-card rounded-2xl p-8 shadow-md border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-4 ${
                      info.action ? "cursor-pointer group" : ""
                    }`}
                    onClick={info.action || undefined}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-primary group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {info.title}
                      </div>
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-card rounded-2xl p-8 shadow-md border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Redes Sociais
              </h3>
              <p className="text-muted-foreground mb-6">
                Acompanhe nosso trabalho e fique por dentro das novidades!
              </p>
              <Button
                variant="outline"
                className="w-full group"
                onClick={() => window.open("https://instagram.com", "_blank")}
              >
                <Instagram className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Seguir no Instagram
              </Button>
            </div>
          </div>

          {/* CTA Side */}
          <div className="animate-fade-in-up">
            <div className="relative bg-gradient-primary rounded-2xl p-8 sm:p-12 overflow-hidden h-full flex flex-col justify-center">
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Agende Sua Consulta Agora!
                </h3>
                <p className="text-lg text-white/90 mb-8">
                  Clique no WhatsApp e vamos conversar agora mesmo! Nossa equipe está pronta para atender você e seu pet com todo o cuidado que merecem.
                </p>

                {/* Benefits List */}
                <ul className="space-y-3 mb-8">
                  {[
                    "Atendimento imediato via WhatsApp",
                    "Profissionais experientes e dedicados",
                    "Horários flexíveis para sua comodidade",
                    "Cuidado personalizado para cada pet"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center text-white/90">
                      <div className="w-2 h-2 bg-white rounded-full mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <WhatsAppButton message="Olá! Gostaria de agendar uma consulta na Doguinhu. Pode me ajudar?" />
                
                {/* Trust Badge */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="flex items-center justify-center gap-8 text-white/90">
                    <div className="text-center">
                      <div className="text-2xl font-bold">10+</div>
                      <div className="text-sm">Anos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">5000+</div>
                      <div className="text-sm">Pets</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">98%</div>
                      <div className="text-sm">Satisfação</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
