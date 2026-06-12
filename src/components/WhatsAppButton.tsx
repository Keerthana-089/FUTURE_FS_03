import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919845012345?text=Namaste%20Bean%20%26%20Bloom%2C%20I%27d%20like%20to%20book%20a%20table"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[var(--shadow-warm)] flex items-center justify-center hover:scale-110 transition-transform animate-float"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" aria-hidden />
      <MessageCircle className="h-6 w-6 relative" />
    </a>
  );
}
