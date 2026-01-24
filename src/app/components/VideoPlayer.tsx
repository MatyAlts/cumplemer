import { motion } from 'motion/react';
import { Video, X } from 'lucide-react';
import { useState } from 'react';

interface VideoPlayerProps {
  videoUrl: string;
}

export function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  // Extraer el ID del video de YouTube
  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const getDriveId = (url: string) => {
    const regExp = /drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?id=)([^/?#&]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const getYoutubeEmbedUrl = (url: string) => {
    const id = getYoutubeId(url);
    return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : null;
  };

  const getDriveEmbedUrl = (url: string) => {
    const id = getDriveId(url);
    return id ? `https://drive.google.com/file/d/${id}/preview` : null;
  };

  const videoEmbedUrl = getYoutubeEmbedUrl(videoUrl) ?? getDriveEmbedUrl(videoUrl);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'B1r7hD4y!!') {
      setIsUnlocked(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
      setPassword('');
      // Vibración si está disponible
      if ('vibrate' in navigator) {
        navigator.vibrate(200);
      }
    }
  };

  const handleOpenVideo = () => {
    setIsOpen(true);
    setPassword('');
    setPasswordError(false);
    setIsUnlocked(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 mb-8"
      >
        <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 rounded-3xl p-1 shadow-xl">
          <div className="bg-white rounded-3xl p-6 sm:p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
                ¡Llegó el día! 🎉
              </h2>
              <p className="text-gray-600">
                Te preparé algo bonito 🥰
              </p>
            </div>

            <button
              onClick={handleOpenVideo}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 px-6 rounded-2xl hover:from-pink-600 hover:to-rose-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Video className="w-6 h-6" />
              <span className="text-lg">Ver el video</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Modal del video */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>

            {!isUnlocked ? (
              /* Pantalla de contraseña */
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <div className="text-center mb-6">
                  <Video className="w-16 h-16 text-rose-500 mx-auto mb-4" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                    Pero primero la contraseña 🔐
                  </h2>
                  <p className="text-gray-600">
                    Buscá bien y la vas a encontrar...
                  </p>
                </div>

                <form onSubmit={handlePasswordSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordError(false);
                      }}
                      placeholder="Ingresa la contraseña"
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all outline-none text-center font-mono text-lg ${
                        passwordError
                          ? 'border-red-500 bg-red-50 shake'
                          : 'border-gray-200 focus:border-rose-500'
                      }`}
                      autoFocus
                    />
                    {passwordError && (
                      <p className="text-red-500 text-sm mt-2 text-center">
                        Contraseña incorrecta. Sigue buscando...
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all active:scale-95"
                  >
                    Desbloquear Video
                  </button>
                </form>
              </div>
            ) : (
              /* Video desbloqueado */
              <>
                <div className="relative bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 rounded-3xl p-2 shadow-2xl">
                  <div className="bg-black rounded-2xl overflow-hidden">
                    <div className="aspect-[9/16]">
                      {videoEmbedUrl ? (
                        <iframe
                          width="100%"
                          height="100%"
                          src={videoEmbedUrl}
                          title="Video dedicatoria"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-white">
                          <p>URL de video inválida</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-white text-sm sm:text-base">
                    Hecho con todo mi amor para vos 💕
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
