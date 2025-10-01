import { Heart, Award, Users, Shield } from "lucide-react";
import teamImage from "@/assets/team-vet.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Cuidado com Amor",
      description: "Cada animal merece cuidados de excelência"
    },
    {
      icon: Award,
      title: "Excelência Técnica",
      description: "Profissionais qualificados e experientes"
    },
    {
      icon: Users,
      title: "Tutores Orientados",
      description: "Orientação faz diferença na saúde dos pets"
    },
    {
      icon: Shield,
      title: "Qualidade Garantida",
      description: "Nunca comprometemos a qualidade"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={teamImage}
                alt="Equipe veterinária Doguinhu"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-primary mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Anos de</div>
              <div className="text-sm text-muted-foreground">Experiência</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Sobre a Doguinhu
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Cuidando do Seu Pet com
              <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Carinho e Profissionalismo
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              A <strong>Doguinhu</strong> é uma clínica veterinária completa localizada em São Paulo SP, 
              dedicada ao cuidado integral de animais de estimação.
            </p>

            <p className="text-muted-foreground mb-8">
              Nossa história é marcada por <strong>anos de experiência</strong>, casos de sucesso em tratamentos 
              e depoimentos de tutores satisfeitos. Trabalhamos com base na crença de que cada animal merece 
              cuidados de excelência e que tutores bem orientados fazem a diferença na saúde dos pets.
            </p>

            {/* Mission Statement */}
            <div className="bg-gradient-primary rounded-xl p-6 mb-8 text-white">
              <h3 className="font-semibold mb-2 text-lg">Nossa Missão</h3>
              <p className="text-white/90">
                Transformar a relação entre tutores e pets através de cuidados veterinários de excelência.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-background hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
