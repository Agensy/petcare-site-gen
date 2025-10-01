import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-white">D</span>
              </div>
              <span className="text-xl font-bold">Doguinhu</span>
            </div>
            <p className="text-background/80 text-sm">
              Cuidando do seu pet com carinho e profissionalismo desde sempre.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#home" className="hover:text-background transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-background transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-background transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>São Paulo SP</li>
              <li>(61) 98150-8486</li>
              <li>agensy4b@gmail.com</li>
              <li>Segunda a Sexta, 8h às 18h</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 text-center text-sm text-background/60">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Doguinhu. Feito com <Heart className="w-4 h-4 text-red-500 fill-red-500" /> para pets.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
