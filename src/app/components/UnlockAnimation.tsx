import { motion, AnimatePresence } from 'motion/react';
import { Gift, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

interface UnlockAnimationProps {
  day: number;
  onComplete: () => void;
}

export function UnlockAnimation({ day, onComplete }: UnlockAnimationProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 300);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.5, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: 'spring', damping: 15 }}
            className="relative"
          >
            {/* Partículas brillantes */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: Math.cos((i * Math.PI * 2) / 8) * 100,
                  y: Math.sin((i * Math.PI * 2) / 8) * 100,
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
                className="absolute top-1/2 left-1/2"
              >
                <Sparkles className="w-6 h-6 text-yellow-300" />
              </motion.div>
            ))}

            {/* Tarjeta central */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center">
              <motion.div
                animate={{
                  rotate: [0, -10, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <Gift className="w-20 h-20 sm:w-24 sm:h-24 text-rose-500 mx-auto mb-4" />
              </motion.div>

              <h2 className="text-2xl sm:text-3xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
                ¡Nuevo recuerdo desbloqueado!
              </h2>

              <div className="text-5xl sm:text-6xl my-4">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.5 }}
                  className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mx-auto"
                >
                  {day}
                </motion.span>
              </div>

              <p className="text-gray-600 text-sm sm:text-base">
                Toca para ver tu nueva foto y carta
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
