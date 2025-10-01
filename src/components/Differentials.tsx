import { Stethoscope, HeartHandshake, GraduationCap, Clock } from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      icon: Stethoscope,
      title: "Atendimento Personalizado",
      description: "Cada pet é único e merece um atendimento individualizado, com foco no bem-estar animal e orientação completa aos tutores."
    },
    {
      icon: HeartHandshake,
      title: "Compromisso com Qualidade",
      description: "Nunca comprometemos a qualidade do atendimento por questões comerciais ou pressa. Seu pet merece o melhor."
    },
    {
      icon: GraduationCap,
      title: "Experiência Comprovada",
      description: "Anos de experiência, casos de sucesso em tratamentos e depoimentos de tutores satisfeitos que confiam em nosso trabalho."
    },
    {
      icon: Clock,
      title: "Cuidado Integral",
      description: "Acompanhamento preventivo contínuo, orientação personalizada e produtos selecionados para a saúde do seu pet."
    }
  ];

  return (
    <section id="differentials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
            Por Que Escolher a Doguinhu
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossos Diferenciais
            <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Que Fazem a Diferença
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Atendimento personalizado com foco no bem-estar animal e orientação aos tutores, 
            baseado em anos de experiência e compromisso com a excelência.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differentials.map((differential, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up border border-border hover:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex w-16 h-16 bg-gradient-primary rounded-xl items-center justify-center shadow-primary group-hover:scale-110 transition-transform duration-300">
                  <differential.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {differential.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {differential.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative bg-gradient-primary rounded-2xl p-8 sm:p-12 text-center overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Nossa Missão
              </h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Transformar a relação entre tutores e pets através de cuidados veterinários de excelência
              </p>
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

export default Differentials;
