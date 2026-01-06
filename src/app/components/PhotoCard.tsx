import { Lock, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface PhotoCardProps {
  day: number;
  isUnlocked: boolean;
  imageUrl: string;
  onClick: () => void;
}

export function PhotoCard({ day, isUnlocked, imageUrl, onClick }: PhotoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      {/* Marco exterior de la photocard */}
      <div className="bg-white rounded-3xl p-4 shadow-xl">
        <button
          onClick={onClick}
          disabled={!isUnlocked}
          className={`relative w-full aspect-[3/4] rounded-2xl overflow-hidden transition-all duration-300 ${
            isUnlocked
              ? 'cursor-pointer hover:scale-[1.02]'
              : 'cursor-not-allowed opacity-60'
          }`}
        >
          {/* Imagen de fondo */}
          <div className="absolute inset-0">
            {isUnlocked ? (
              <img
                src={imageUrl}
                alt={`Día ${day}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-pink-200 via-rose-200 to-red-200" />
            )}
          </div>

          {/* Overlay cuando está bloqueado */}
          {!isUnlocked && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
              <Lock className="w-10 h-10 text-white mb-2" />
              <span className="text-white text-sm">Bloqueado</span>
            </div>
          )}

          {/* Número del día */}
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-md">
            <span className="text-rose-600 font-bold">{day}</span>
          </div>

          {/* Indicador de disponible */}
          {isUnlocked && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-3 right-3 bg-rose-500 rounded-full p-2 shadow-md"
            >
              <Heart className="w-5 h-5 text-white fill-white" />
            </motion.div>
          )}
        </button>
        
        {/* Texto inferior del marco */}
        <div className="mt-3 text-center">
          <p className="text-gray-800 font-semibold text-sm">Día {day}</p>
          <p className="text-gray-500 text-xs mt-0.5">
            {isUnlocked ? '❤️ Desbloqueado' : '🔒 Bloqueado'}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
