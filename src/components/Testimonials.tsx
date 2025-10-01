import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      pet: "Tutora do Thor",
      rating: 5,
      text: "A Doguinhu salvou a vida do meu Thor! Atendimento excepcional, equipe atenciosa e profissionais que realmente amam o que fazem. Recomendo de olhos fechados!"
    },
    {
      name: "João Santos",
      pet: "Tutor da Luna",
      rating: 5,
      text: "Melhor clínica veterinária de São Paulo! A Luna adora ir lá e os veterinários sempre explicam tudo com muita paciência. Preços justos e serviço de qualidade."
    },
    {
      name: "Ana Paula Costa",
      pet: "Tutora do Bob e da Mel",
      rating: 5,
      text: "Acompanho meus pets na Doguinhu há anos e não troco por nada! Equipe dedicada, instalações limpas e um cuidado especial com cada animal. Muito obrigada por tudo!"
    },
    {
      name: "Carlos Eduardo",
      pet: "Tutor do Rex",
      rating: 5,
      text: "Profissionalismo e carinho em um só lugar! O Rex teve uma emergência e fomos muito bem atendidos. A equipe é preparada e o tratamento foi excelente."
    },
    {
      name: "Fernanda Oliveira",
      pet: "Tutora da Nina",
      rating: 5,
      text: "A Nina é tratada como princesa na Doguinhu! Além dos cuidados veterinários impecáveis, os serviços de banho e tosa são maravilhosos. Super indico!"
    },
    {
      name: "Ricardo Almeida",
      pet: "Tutor do Max",
      rating: 5,
      text: "Encontrei na Doguinhu a confiança que eu procurava. Os profissionais são super qualificados e sempre disponíveis para tirar dúvidas. O Max está muito bem cuidado!"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            Depoimentos
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O Que Dizem
            <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Nossos Clientes
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Histórias reais de tutores satisfeitos que confiam na Doguinhu para cuidar de seus pets com carinho e profissionalismo.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative p-8 bg-card hover:shadow-xl transition-all duration-300 animate-fade-in-up border border-border hover:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.pet}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Tutores Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">5000+</div>
            <div className="text-muted-foreground">Pets Atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">10+</div>
            <div className="text-muted-foreground">Anos de Experiência</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
