# 🎉 10 Días de Amor - Aplicación PWA de Cumpleaños

## 📝 Cómo Personalizar la Aplicación

### 1. Reemplazar las Fotos

Abre el archivo `/src/app/App.tsx` y busca la constante `photocardsData`. Ahí encontrarás 10 objetos, uno por cada día.

Reemplaza las URLs de las imágenes con tus propias fotos:

```javascript
const photocardsData = [
  {
    day: 1,
    imageUrl: 'TU_URL_DE_FOTO_AQUI', // ← Reemplaza esto
    letter: `Tu carta aquí...`
  },
  // ... más días
];
```

**Opciones para las fotos:**
- Sube tus fotos a un servicio de hosting de imágenes (Imgur, Cloudinary, etc.)
- Coloca las fotos en la carpeta `/public` y usa URLs relativas: `/mi-foto.jpg`

### 2. Escribir tus Cartas

En el mismo array `photocardsData`, reemplaza el texto de cada `letter` con tus propias cartas:

```javascript
{
  day: 1,
  imageUrl: '...',
  letter: `Mi amor,

Hoy comienza una cuenta regresiva especial para ti...

Con todo mi corazón,
[Tu nombre]`
}
```

**Consejos:**
- Usa saltos de línea (`\n\n`) para separar párrafos
- Puedes usar emojis ❤️ 💕 🎉
- Cada carta puede tener la longitud que desees

### 3. Cambiar el Video de YouTube

En el archivo `/src/app/App.tsx`, busca la constante `YOUTUBE_VIDEO_URL` y reemplázala con la URL de tu video:

```javascript
const YOUTUBE_VIDEO_URL = 'https://www.youtube.com/watch?v=TU_VIDEO_ID';
```

### 4. Personalizar Textos y Títulos

Puedes cambiar los textos en varios componentes:

**Navbar** (`/src/app/components/Navbar.tsx`):
- Título: "¡Feliz Cumpleaños!"

**App** (`/src/app/App.tsx`):
- Título principal: "10 Días de Amor"
- Descripción: "Cada día una nueva foto y una carta especial se desbloquearán para ti"

**VideoPlayer** (`/src/app/components/VideoPlayer.tsx`):
- Título del botón: "Ver mi dedicatoria"
- Mensaje: "Hecho con todo mi amor para ti 💕"

### 5. Configurar la Cuenta Regresiva

Por defecto, la cuenta regresiva comienza el día que abres la aplicación por primera vez.

**Para cambiar esto:**
1. Abre las herramientas de desarrollo de tu navegador (F12)
2. Ve a la pestaña "Application" > "Local Storage"
3. Busca la clave `birthdayCountdownStart`
4. Cambia la fecha manualmente o elimínala para que comience desde hoy

**Desde la app:**
- Toca el botón de configuración (⚙️) en la esquina inferior derecha
- Selecciona "Reiniciar cuenta" para comenzar desde hoy

### 6. Instalar como PWA

**En móvil:**
1. Abre la aplicación en Chrome o Safari
2. Toca el menú (⋮ o compartir)
3. Selecciona "Agregar a pantalla de inicio"
4. La app se instalará como una aplicación nativa

**En desktop:**
1. Abre la aplicación en Chrome
2. Busca el icono de instalación (⊕) en la barra de direcciones
3. Haz clic en "Instalar"

## 🎨 Personalización de Colores

Si deseas cambiar los colores principales de la aplicación, busca las clases de Tailwind en los componentes:

- **Rosa/Rojo:** `from-pink-500`, `via-rose-500`, `to-red-500`
- **Fondos:** `bg-gradient-to-br from-pink-50 via-rose-50 to-red-50`

## 📱 Características de la PWA

- ✅ Funciona sin conexión (después de la primera carga)
- ✅ Se instala como app nativa
- ✅ Optimizada para móviles
- ✅ Guarda el progreso en localStorage
- ✅ Diseño responsive (mobile-first)

## 🚀 Despliegue

Puedes desplegar esta aplicación en:
- **Vercel:** Conecta tu repositorio y despliega automáticamente
- **Netlify:** Arrastra la carpeta `dist` después de ejecutar `npm run build`
- **GitHub Pages:** Configura el repositorio para servir desde la rama `gh-pages`

## 💡 Consejos

1. **Prueba la cuenta regresiva:** Usa el botón de configuración para probar diferentes días
2. **Revisa en móvil:** La app está optimizada para teléfonos
3. **Comparte el link:** Envíale el link a tu novia el día que quieras que comience la cuenta
4. **Privacidad:** Considera usar un hosting privado si las fotos son muy personales

## ❤️ Mensaje Final

Esta aplicación fue diseñada con amor para crear un momento especial. Tómate tu tiempo personalizando cada carta y eligiendo las fotos perfectas.

¡Que disfruten este viaje de 10 días juntos! 🎉
