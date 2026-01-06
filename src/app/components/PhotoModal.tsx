import { X, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  day: number;
  date: string;
  title: string;
  imageUrl: string;
  description: string;
  passwordLetter: string;
}

export function PhotoModal({ isOpen, onClose, day, date, title, imageUrl, description, passwordLetter }: PhotoModalProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setImageLoaded(false);
      
      // Precargar la imagen
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => setImageLoaded(true);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, imageUrl]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
            </button>

            {/* Contenedor responsive */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
              {!imageLoaded ? (
                /* Estado de carga */
                <div className="flex items-center justify-center min-h-[50vh] p-8">
                  <div className="text-center">
                    <Loader2 className="w-12 h-12 text-rose-500 animate-spin mx-auto mb-4" />
                    <p className="text-gray-600 text-sm">Cargando recuerdo...</p>
                  </div>
                </div>
              ) : (
                /* Contenido completo */
                <div className="flex flex-col lg:flex-row">
                  {/* Imagen */}
                  <div className="lg:w-1/2 bg-gray-100 flex items-center justify-center p-3 sm:p-4 overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={`Día ${day}`}
                      className="w-full h-[40vh] sm:h-[50vh] lg:h-[80vh] object-cover rounded-lg"
                    />
                  </div>

                  {/* Carta */}
                  <div className="lg:w-1/2 p-4 sm:p-6 lg:p-10 overflow-y-auto max-h-[45vh] lg:max-h-[80vh]">
                    <div className="mb-3 sm:mb-4">
                      <span className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm">
                        Día {day}
                      </span>
                    </div>
                    
                    <h2 className="text-xl sm:text-2xl lg:text-3xl mb-2 text-gray-800">
                      {title}
                    </h2>
                    
                    <p className="text-gray-500 text-sm mb-4 sm:mb-6">{date}</p>
                    
                    <div className="prose prose-sm sm:prose-base max-w-none">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                        {description}
                      </p>
                    </div>

                    <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                      <p className="text-gray-500 italic text-xs sm:text-sm">
                        Te amo muchoo 💕
                      </p>
                      <p className="text-gray-400 text-xs mt-4 text-right font-mono">
                        {passwordLetter}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}