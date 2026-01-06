# 🚀 Guía Rápida de Personalización

## ⚡ En 5 Pasos

### 1️⃣ Reemplaza las Fotos y Cartas
Abre `/src/app/App.tsx` y busca la línea 10 donde comienza `photocardsData`:

```javascript
const photocardsData = [
  {
    day: 1,
    imageUrl: 'REEMPLAZA_CON_TU_URL_DE_FOTO',
    letter: `Escribe tu carta aquí.
    
Puedes usar múltiples párrafos.

Y añadir todo el texto que quieras.`
  },
  // Repite para los 10 días
];
```

### 2️⃣ Cambia el Video de YouTube
En el mismo archivo, línea 89, cambia:

```javascript
const YOUTUBE_VIDEO_URL = 'https://www.youtube.com/watch?v=TU_VIDEO_ID';
```

### 3️⃣ Personaliza los Títulos (Opcional)

**Navbar** - `/src/app/components/Navbar.tsx` línea 13:
```javascript
<h1 className="text-white text-xl sm:text-2xl">¡Feliz Cumpleaños!</h1>
```

**Título Principal** - `/src/app/App.tsx` línea 134:
```javascript
<h2>10 Días de Amor</h2>
```

### 4️⃣ Sube tus Fotos

**Opción A - Hosting Online:**
1. Sube tus fotos a [Imgur](https://imgur.com) o [Cloudinary](https://cloudinary.com)
2. Copia las URLs y pégalas en `imageUrl`

**Opción B - En el Proyecto:**
1. Coloca tus fotos en `/public/fotos/`
2. Usa rutas relativas: `imageUrl: '/fotos/dia1.jpg'`

### 5️⃣ Despliega tu App

**Método más fácil - Vercel:**
1. Crea una cuenta en [Vercel](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Haz clic en "Deploy"
4. ¡Listo! Comparte el link con tu novia

---

## 💡 Tips Importantes

### ✅ Usar Fotos de Alta Calidad
- Mínimo 1080px de ancho
- Formatos: JPG, PNG, WEBP

### ✅ Escribir Cartas con Amor
- Usa `\n\n` para separar párrafos
- Puedes usar emojis ❤️ 💕 🎉
- No hay límite de caracteres

### ✅ Video de YouTube
- Puede ser público o "No listado"
- Copia la URL completa del navegador

### ✅ Probar Antes de Compartir
1. Abre la app en tu móvil
2. Usa el botón de configuración (⚙️) para probar diferentes días
3. Verifica que todo se vea bien

---

## 🎯 Ejemplo Completo de un Día

```javascript
{
  day: 1,
  imageUrl: 'https://i.imgur.com/TuFoto1.jpg',
  letter: `Mi amor,

Hoy comienza una cuenta regresiva muy especial para ti. Cada día durante los próximos 10 días, se desbloqueará un nuevo recuerdo de nuestros mejores momentos juntos.

Este primer día quiero recordarte lo feliz que me haces cada vez que sonríes. Tu risa es mi sonido favorito en todo el mundo.

¡Que comience esta aventura de 10 días!

Con todo mi amor,
Tu novio/a ❤️`
}
```

---

## 🐛 Problemas Comunes

**Las fotos no se ven:**
- Verifica que las URLs sean públicas
- Asegúrate de usar HTTPS (no HTTP)

**El video no reproduce:**
- Verifica que la URL sea de YouTube
- El video debe ser público o "No listado"

**La cuenta regresiva no funciona:**
- Usa el botón de configuración para reiniciarla
- Borra el localStorage del navegador

---

## 📱 Instalación como App

1. Abre la app en el móvil
2. En Chrome: Menú → "Agregar a pantalla de inicio"
3. En Safari: Compartir → "Añadir a pantalla de inicio"

---

**¿Necesitas más ayuda?** Lee el archivo completo `INSTRUCCIONES.md` 📖
