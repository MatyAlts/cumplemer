import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { PhotoCard } from './components/PhotoCard';
import { PhotoModal } from './components/PhotoModal';
import { VideoPlayer } from './components/VideoPlayer';
import { Heart } from 'lucide-react';
import { Toaster } from 'sonner';

// Datos de las photocards (reemplaza con tus propias fotos)
// La contraseña completa es: B1r7hD4y!!
const photocardsData = [
  {
    day: 1,
    date: '6 de Julio, 2025',
    title: 'Primer Fotito Juntos ♥️',
    imageUrl: '/pics/1.jpg',
    description: `Esta fue nuestra primer fotito juntos. Estaba tan feliz y no tenía ni idea de todo lo que nos esperaba 🥺💕`,
    passwordLetter: 'B'
  },
  {
    day: 2,
    date: '15 de Julio, 2025',
    title: 'Parquecitoo ♥️',
    imageUrl: '/pics/2.jpg',
    description: `Nuestra primera cita oficial. Estábamos tan nerviosos pero felices. Caminamos por horas hablando de todo y nada a la vez. Ese día confirmé que quería pasar más tiempo contigo.`,
    passwordLetter: '1'
  },
  {
    day: 3,
    date: '15 de Julio, 2025',
    title: 'Parquesitoo 2 ♥️',
    imageUrl: '/pics/3.jpg',
    description: `Vimos el atardecer juntos por primera vez. Los colores del cielo no se comparaban con la belleza del momento que compartíamos. Me tomaste de la mano y supe que era donde quería estar.`,
    passwordLetter: 'r'
  },
  {
    day: 4,
    date: '19 de Julio, 2025',
    title: 'Casa Chilee ♥️',
    imageUrl: '/pics/4.jpg',
    description: `Nuestra aventura en la naturaleza. Escapamos de la ciudad y disfrutamos de la tranquilidad del campo. Reímos, jugamos y nos olvidamos del mundo. Solo existíamos tú y yo.`,
    passwordLetter: '7'
  },
  {
    day: 5,
    date: '26 de Octubre, 2025',
    title: 'Selfie random de IG ♥️',
    imageUrl: '/pics/5.webp',
    description: `El día en la playa. El sonido de las olas, la arena en nuestros pies y tu sonrisa iluminando todo. Construimos castillos de arena y sueños juntos. Fue un día perfecto.`,
    passwordLetter: 'h'
  },
  {
    day: 6,
    date: '20 de Noviembre, 2025',
    title: 'Casa Yayitaa ♥️',
    imageUrl: '/pics/6.jpg',
    description: `Ese día especial donde todo fluyó perfectamente. Tus risas llenaban el aire y yo no podía dejar de admirarte. Cada momento contigo se siente como un regalo.`,
    passwordLetter: 'D'
  },
  {
    day: 7,
    date: '23 de Noviembre, 2025',
    title: 'Juancito Fest ♥️',
    imageUrl: '/pics/7.jpg',
    description: `Nuestra selfie favorita. Capturamos la esencia de nuestra relación en una foto: autenticidad, amor y diversión. Cada vez que la veo, sonrío recordando ese momento.`,
    passwordLetter: '4'
  },
  {
    day: 8,
    date: '18 de Diciembre, 2025',
    title: 'Cena Sofi ♥️',
    imageUrl: '/pics/8.jpg',
    description: `Nuestra cita nocturna bajo las estrellas. Las luces de la ciudad nos rodeaban pero solo tenía ojos para ti. Hablamos sobre nuestros sueños y el futuro que queremos construir juntos.`,
    passwordLetter: 'y'
  },
  {
    day: 9,
    date: '24 de Diciembre, 2025',
    title: 'Nuestra primer navidad ♥️',
    imageUrl: '/pics/9.JPG',
    description: `Celebrando nuestro amor. Cada día contigo es una celebración, pero este fue especialmente memorable. Brindamos por nosotros, por lo que hemos construido y por todo lo que viene.`,
    passwordLetter: '!'
  },
  {
    day: 10,
    date: '31 de Diciembre, 2025',
    title: 'Nuestro primer año nuevo ♥️',
    imageUrl: '/pics/10.JPG',
    description: `¡Hoy es tu día especial! Hemos recorrido este viaje de 10 días juntos, reviviendo nuestros momentos más preciados. Cada foto cuenta una historia, cada recuerdo nos hace más fuertes. Espero que este regalo digital te haga sonreír tanto como tú me haces sonreír cada día. ¡Feliz cumpleaños mi amor! Que este nuevo año de vida esté lleno de amor, risas y nuevos recuerdos juntos.`,
    passwordLetter: '!'
  }
];

// URL del video de YouTube (reemplaza con tu URL)
const YOUTUBE_VIDEO_URL = 'https://www.youtube.com/watch?v=hDvm5fwMBos';

function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0 });
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  // Fecha límite: 25 de enero 2026 a las 00:00 hora de Buenos Aires (UTC-3)
  const DEADLINE = new Date('2026-01-06T00:00:00-03:00');

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'm3rc3app') {
      setIsAuthenticated(true);
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

  const initializeStartDate = () => {
    // Obtener o establecer la fecha de inicio
    const storedStartDate = localStorage.getItem('birthdayCountdownStart');
    let start: Date;

    if (storedStartDate) {
      start = new Date(storedStartDate);
    } else {
      // Primera vez: guardar la fecha de hoy como inicio
      start = new Date();
      localStorage.setItem('birthdayCountdownStart', start.toISOString());
    }

    setStartDate(start);
    return start;
  };

  useEffect(() => {
    const start = initializeStartDate();

    // Calcular tiempo restante hasta la fecha límite
    const calculateTimeRemaining = () => {
      const now = new Date();
      const diffTime = DEADLINE.getTime() - now.getTime();
      
      // Si ya pasó la fecha, calcular días transcurridos (negativos)
      if (diffTime <= 0) {
        const daysPassed = Math.floor(Math.abs(diffTime) / (1000 * 60 * 60 * 24));
        setTimeRemaining({ days: -daysPassed, hours: 0, minutes: 0 });
        return;
      }

      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
      
      setTimeRemaining({ days, hours, minutes });
    };

    calculateTimeRemaining();

    // Actualizar cada segundo para precisión en tiempo real
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, []);

  // Determinar qué photocards están desbloqueadas
  // La lógica es: si faltan X días, se desbloquean (10 - X) fotos
  // Ejemplo: si faltan 8 días, se desbloquean 2 fotos (10 - 8 = 2)
  // La foto 1 se desbloquea cuando falten 10 días o menos
  const getUnlockedDays = () => {
    const now = new Date();
    const diffTime = DEADLINE.getTime() - now.getTime();
    
    // Si ya pasó la fecha límite, desbloquear todas
    if (diffTime <= 0) {
      return 10;
    }
    
    // Calcular días restantes redondeando hacia arriba
    // Esto asegura que mientras quede algo de tiempo en el día, cuenta como día completo
    const daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Si faltan más de 10 días, no desbloquear nada
    if (daysRemaining > 10) {
      return 0;
    }
    
    // Calcular fotos desbloqueadas: 11 - días restantes
    // Esto permite que con 10 días restantes, se desbloquee 1 foto (11-10=1)
    // Máximo 9 (la 10 solo cuando termine el contador)
    const unlockedPhotos = Math.min(11 - daysRemaining, 9);
    
    return unlockedPhotos;
  };

  const unlockedDays = getUnlockedDays();
  // El video y la foto 10 solo se desbloquean cuando el contador llegue a 0
  const now = new Date();
  const diffTime = DEADLINE.getTime() - now.getTime();
  const isDay10 = diffTime <= 0;

  // Si no está autenticado, mostrar pantalla de contraseña
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="text-center mb-6">
              <div className="inline-block bg-rose-100 rounded-full p-4 mb-4">
                <Heart className="w-12 h-12 text-rose-500" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                ¿De verdad pensaste que podías verlo?
              </h1>
              <p className="text-gray-600 text-sm">
                Ingresa la contraseña para continuar
              </p>
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError(false);
                  }}
                  placeholder="Contraseña"
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all outline-none ${
                    passwordError
                      ? 'border-red-500 bg-red-50 shake'
                      : 'border-gray-200 focus:border-rose-500'
                  }`}
                  autoFocus
                />
                {passwordError && (
                  <p className="text-red-500 text-sm mt-2 text-center">
                    Contraseña incorrecta, intenta de nuevo
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all active:scale-95"
              >
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      <Navbar timeRemaining={timeRemaining} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md mb-4">
            <Heart className="w-5 h-5 text-rose-500" />
            <span className="text-sm text-gray-600">
              {unlockedDays} de 10 momentos desbloqueados
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-red-600">
            Cuenta Regresiva
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Cada día una foto y un mensajito se desbloquean para vos
          </p>
        </div>

        {/* Grid de photocards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-8">
          {photocardsData.map((photo) => (
            <PhotoCard
              key={photo.day}
              day={photo.day}
              isUnlocked={photo.day <= unlockedDays}
              imageUrl={photo.imageUrl}
              onClick={() => {
                if (photo.day <= unlockedDays) {
                  setSelectedPhoto(photo.day);
                }
              }}
            />
          ))}
        </div>

        {/* Video del día 10 */}
        {isDay10 && (
          <VideoPlayer youtubeUrl={YOUTUBE_VIDEO_URL} />
        )}

        {/* Mensaje motivacional */}
        {!isDay10 && (
          <div className="text-center mt-8 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-md">
            <p className="text-gray-600 text-sm sm:text-base">
              {timeRemaining.days > 0 || timeRemaining.hours > 0 || timeRemaining.minutes > 0 ? (
                <>
                  Tiempo restante hasta el 25 de enero:
                  <br />
                  <span className="font-bold text-rose-600 text-lg sm:text-2xl block mt-2">
                    {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m
                  </span>
                  <br />
                  <span className="text-xs sm:text-sm text-gray-500 mt-2 block">
                    ¡Espera con amor! ❤️
                  </span>
                </>
              ) : (
                <>
                  ¡Todos los momentos están desbloqueados! 🎉
                  <br />
                  <span className="text-xs sm:text-sm text-gray-500 mt-2 block">
                    Revisa cada uno y disfruta el video final
                  </span>
                </>
              )}
            </p>
          </div>
        )}
      </main>

      {/* Modal de foto */}
      {selectedPhoto && (
        <PhotoModal
          isOpen={selectedPhoto !== null}
          onClose={() => setSelectedPhoto(null)}
          day={selectedPhoto}
          date={photocardsData[selectedPhoto - 1].date}
          title={photocardsData[selectedPhoto - 1].title}
          imageUrl={photocardsData[selectedPhoto - 1].imageUrl}
          description={photocardsData[selectedPhoto - 1].description}
          passwordLetter={photocardsData[selectedPhoto - 1].passwordLetter}
        />
      )}

      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: 'white',
            color: '#374151',
            border: '1px solid #fecdd3',
          },
        }}
      />
    </div>
  );
}

export default App;