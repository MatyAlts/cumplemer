import { Share2 } from 'lucide-react';
import { toast } from 'sonner';

export function ShareButton() {
  const handleShare = async () => {
    const shareData = {
      title: '10 Días de Amor',
      text: '¡Mira esta aplicación especial que hice para ti! 💕',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: copiar al portapapeles
        await navigator.clipboard.writeText(window.location.href);
        toast.success('¡Link copiado al portapapeles!');
      }
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        console.error('Error al compartir:', error);
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="fixed bottom-6 left-6 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow z-40 active:scale-95"
      aria-label="Compartir"
      title="Compartir aplicación"
    >
      <Share2 className="w-6 h-6 text-gray-600" />
    </button>
  );
}
