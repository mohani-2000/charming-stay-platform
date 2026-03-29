import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phone = "255123456789";
  const message = "Hello! I'd like to learn more about Amani Collection.";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-whatsapp text-background px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="font-body text-sm font-medium hidden sm:inline">
        How can I help you?
      </span>
    </a>
  );
};

export default WhatsAppButton;
