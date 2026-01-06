import { Settings, Calendar } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface DateSettingsProps {
  onResetDate: () => void;
}

export function DateSettings({ onResetDate }: DateSettingsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const vibrate = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
  };

  const handleReset = () => {
    vibrate();
    onResetDate();
    setShowConfirm(false);
    setIsOpen(false);
  };

  const handleOpenSettings = () => {
    vibrate();
    setIsOpen(true);
  };

  return (
    <>
      <button
        onClick={handleOpenSettings}
        className="fixed bottom-6 right-6 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow z-40 active:scale-95"
        aria-label="Configuración"
      >
        <Settings className="w-6 h-6 text-gray-600" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => !showConfirm && setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {!showConfirm ? (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-rose-500" />
                    <h3 className="text-xl text-gray-800">Configuración</h3>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-6">
                    La cuenta regresiva comenzó el día que abriste esta aplicación por primera vez.
                    Si deseas reiniciar la cuenta desde hoy, puedes hacerlo aquí.
                  </p>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setShowConfirm(true)}
                      className="flex-1 bg-rose-500 text-white py-3 px-4 rounded-xl hover:bg-rose-600 transition-colors"
                    >
                      Reiniciar cuenta
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-300 transition-colors"
                    >
                      Cancelar
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-xl text-gray-800 mb-4">
                    ¿Estás seguro?
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-6">
                    Esto reiniciará la cuenta regresiva desde hoy. Todas las photocards volverán a estar bloqueadas excepto la del día 1.
                  </p>

                  <div className="flex gap-3">
                    <button
                      onClick={handleReset}
                      className="flex-1 bg-red-500 text-white py-3 px-4 rounded-xl hover:bg-red-600 transition-colors"
                    >
                      Sí, reiniciar
                    </button>
                    <button
                      onClick={() => setShowConfirm(false)}
                      className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-300 transition-colors"
                    >
                      No, cancelar
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}