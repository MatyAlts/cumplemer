# 💕 10 Días de Amor - Aplicación PWA de Cumpleaños

Una hermosa aplicación web progresiva (PWA) diseñada para celebrar el cumpleaños de alguien especial con una cuenta regresiva de 10 días. Cada día se desbloquea una nueva foto y una carta personalizada.

![Mobile First](https://img.shields.io/badge/Mobile-First-ec4899)
![PWA](https://img.shields.io/badge/PWA-Ready-ec4899)
![React](https://img.shields.io/badge/React-18.3.1-61dafb)
![Tailwind](https://img.shields.io/badge/Tailwind-4.1-38bdf8)

## ✨ Características

- 📱 **Mobile-First**: Diseñada específicamente para dispositivos móviles
- 🎯 **PWA**: Se instala como una app nativa en tu teléfono
- ⏱️ **Cuenta Regresiva**: 10 días de contenido que se desbloquea automáticamente
- 🖼️ **Photocards**: 10 fotos personalizables con diseño elegante
- 💌 **Cartas Personalizadas**: Una carta de amor para cada día
- 🎥 **Video Final**: Un video de YouTube enmarcado que se desbloquea el día 10
- 💾 **Persistencia Local**: Guarda el progreso en localStorage
- 🎨 **Animaciones Suaves**: Transiciones elegantes con Framer Motion
- 📴 **Funciona Offline**: Después de la primera carga

## 🚀 Inicio Rápido

### Instalación

```bash
# Clonar el repositorio
git clone [tu-repositorio]

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Compilar para Producción

```bash
npm run build
```

## 🎨 Personalización

### 1. Cambiar las Fotos

Edita `/src/app/App.tsx` y modifica el array `photocardsData`:

```javascript
const photocardsData = [
  {
    day: 1,
    imageUrl: 'URL_DE_TU_FOTO',
    letter: 'Tu carta personalizada aquí...'
  },
  // ... más días
];
```

### 2. Configurar el Video de YouTube

Cambia la URL del video en `/src/app/App.tsx`:

```javascript
const YOUTUBE_VIDEO_URL = 'https://www.youtube.com/watch?v=TU_VIDEO_ID';
```

### 3. Personalizar Textos

Puedes modificar los textos en los siguientes archivos:
- `/src/app/components/Navbar.tsx` - Título del navbar
- `/src/app/App.tsx` - Título principal y descripciones
- `/src/app/components/VideoPlayer.tsx` - Mensajes del video

## 📁 Estructura del Proyecto

```
/
├── public/
│   ├── manifest.json          # Configuración PWA
│   ├── service-worker.js      # Service worker para offline
│   └── icon.svg              # Icono de la app
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Navbar.tsx           # Barra superior con countdown
│   │   │   ├── PhotoCard.tsx        # Componente de photocard
│   │   │   ├── PhotoModal.tsx       # Modal de foto y carta
│   │   │   ├── VideoPlayer.tsx      # Reproductor de YouTube
│   │   │   ├── DateSettings.tsx     # Configuración de fecha
│   │   │   └── UnlockAnimation.tsx  # Animación de desbloqueo
│   │   └── App.tsx                  # Componente principal
│   ├── styles/
│   │   └── index.css         # Estilos globales
│   └── main.tsx              # Punto de entrada
├── index.html                # HTML principal
└── INSTRUCCIONES.md         # Guía de personalización detallada
```

## 🛠️ Tecnologías Utilizadas

- **React 18.3.1** - Framework principal
- **TypeScript** - Tipado estático
- **Tailwind CSS 4.1** - Estilos utility-first
- **Motion (Framer Motion)** - Animaciones fluidas
- **Lucide React** - Iconos modernos
- **Vite** - Build tool y dev server
- **PWA** - Service workers y manifest

## 📱 Instalar como PWA

### En Android/iOS:
1. Abre la app en Chrome o Safari
2. Toca el menú (⋮ o compartir 📤)
3. Selecciona "Agregar a pantalla de inicio"
4. ¡Listo! Ahora funciona como una app nativa

### En Desktop:
1. Abre la app en Chrome
2. Busca el icono de instalación en la barra de direcciones
3. Haz clic en "Instalar"

## 🎯 Cómo Funciona la Cuenta Regresiva

1. **Primer día**: Al abrir la app por primera vez, se guarda la fecha actual en localStorage
2. **Días siguientes**: Cada día se desbloquea automáticamente una nueva photocard
3. **Día 10**: Se desbloquea el video final de YouTube
4. **Reiniciar**: Usa el botón de configuración (⚙️) para reiniciar la cuenta desde hoy

## 🌐 Despliegue

### Vercel (Recomendado)
```bash
vercel deploy
```

### Netlify
```bash
npm run build
# Sube la carpeta 'dist' a Netlify
```

### GitHub Pages
```bash
npm run build
# Configura GitHub Pages para servir desde la rama gh-pages
```

## 💡 Consejos de Uso

1. **Prueba primero**: Usa el botón de configuración para probar diferentes días
2. **Fotos de alta calidad**: Usa imágenes de al menos 1080px de ancho
3. **Cartas personales**: Tómate tu tiempo escribiendo cada carta
4. **Video privado**: Si usas un video privado de YouTube, configúralo como "No listado"
5. **Comparte en el momento justo**: Envía el link el día que quieres que comience la cuenta

## 🔒 Privacidad

- Todos los datos se guardan localmente en el navegador (localStorage)
- No se envía información a ningún servidor externo
- Las fotos se cargan desde URLs que tú proporciones
- El video se reproduce directamente desde YouTube

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## ❤️ Hecho con Amor

Esta aplicación fue diseñada para crear momentos especiales y memorables. Disfruta personalizándola y compartiendo tu amor.

---

**¿Tienes preguntas?** Revisa el archivo `INSTRUCCIONES.md` para una guía más detallada.

¡Que disfruten estos 10 días de amor! 🎉💕
