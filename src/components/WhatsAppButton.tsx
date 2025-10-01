import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  message?: string;
  fixed?: boolean;
}

const WhatsAppButton = ({ 
  message = "Olá! Gostaria de saber mais sobre os serviços da Doguinhu.",
  fixed = false 
}: WhatsAppButtonProps) => {
  const phoneNumber = "5561981508486"; // (61) 98150-8486
  
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  if (fixed) {
    return (
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-secondary hover:bg-secondary-dark text-secondary-foreground rounded-full shadow-secondary flex items-center justify-center transition-all duration-300 hover:scale-110 animate-float"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    );
  }

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="bg-secondary hover:bg-secondary-dark text-secondary-foreground shadow-secondary group"
    >
      <MessageCircle className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
      Falar no WhatsApp
    </Button>
  );
};

export default WhatsAppButton;
