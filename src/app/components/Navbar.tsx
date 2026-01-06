import { CalendarHeart } from 'lucide-react';

interface NavbarProps {
  timeRemaining: {
    days: number;
    hours: number;
    minutes: number;
  };
}

export function Navbar({ timeRemaining }: NavbarProps) {
  const { days, hours, minutes } = timeRemaining;
  const hasTimeLeft = days > 0 || hours > 0 || minutes > 0;
  
  // Si los días son negativos, significa que ya pasó la fecha
  const daysPassed = days < 0 ? Math.abs(days) : 0;
  const isPastDate = days < 0;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <CalendarHeart className="w-6 h-6 text-white" />
            <h1 className="text-white text-xl sm:text-2xl">¡Feliz Cumpleaños!</h1>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
            <span className="text-white text-sm sm:text-base font-mono">
              {isPastDate ? (
                <>
                  hace <span className="font-bold">{daysPassed}</span> {daysPassed === 1 ? 'día' : 'días'}
                </>
              ) : hasTimeLeft ? (
                <>
                  <span className="font-bold">{days}</span>d{' '}
                  <span className="font-bold">{hours}</span>h{' '}
                  <span className="font-bold">{minutes}</span>m
                </>
              ) : (
                <span className="font-bold">¡Hoy es el día!</span>
              )}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
