# CLEAN//ONE Landing Page

Página profesional de ventas para el kit de limpieza tecnológica CLEAN//ONE.

## Estructura del Proyecto

```
clean-one-landing/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript (interacciones)
└── README.md           # Este archivo
```

## Características

- **Diseño Dark Mode** moderno y profesional
- **Mobile-first** responsive (71% del tráfico es mobile)
- **Secciones optimizadas** para conversión:
  - Hero con CTA claro
  - Problema → Solución
  - Características del producto
  - Productos con precios
  - Comparación vs. alternativas
  - Reseñas de clientes
  - FAQ (manejo de objeciones)
  - CTA final con garantía
- **Animaciones sutiles** que mejoran la experiencia
- **Navbar sticky** con efecto de scroll
- **FAQ accordion** interactivo
- **SEO optimizado** con meta tags

## Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --accent-primary: #00d4ff;      /* Color principal */
    --accent-secondary: #7c3aed;    /* Color secundario */
    --bg-primary: #0a0a0f;          /* Fondo principal */
    /* ... más variables */
}
```

### Cambiar Contenido
Edita el texto directamente en `index.html`:
- Títulos y subtítulos
- Descripciones de productos
- Precios
- Testimonios
- Preguntas frecuentes

### Agregar Imágenes
1. Coloca tus imágenes en una carpeta `images/`
2. Reemplaza los placeholders en `index.html`
3. Ejemplo:
```html
<!-- Antes (placeholder) -->
<div class="product-placeholder">...</div>

<!-- Después (con imagen) -->
<img src="images/product.png" alt="CLEAN//ONE Kit" class="product-image">
```

### Cambiar Precios
Busca los precios en `index.html` y reemplázalos:
```html
<span class="price-amount">67</span>  <!-- Essential -->
<span class="price-amount">99</span>  <!-- Pro -->
```

## Personalización Avanzada

### Agregar Formulario de Pago
Puedes integrar:
- Stripe
- PayPal
- MercadoPago (para Colombia)

### Agregar Analytics
Agrega Google Analytics o Facebook Pixel en `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_ID');
</script>
```

### Agregar Chat en Vivo
Integra servicios como:
- Intercom
- Drift
- Tawk.to

## Despliegue

### Opción 1: GitHub Pages (Gratis)
1. Crea un repositorio en GitHub
2. Sube los archivos
3. Ve a Settings → Pages
4. Selecciona la rama `main`
5. Tu página estará en `https://tuusuario.github.io/repo/`

### Opción 2: Netlify (Gratis)
1. Arrastra la carpeta a [netlify.com/drop](https://app.netlify.com/drop)
2. ¡Listo!

### Opción 3: Vercel (Gratis)
1. Instala Vercel CLI: `npm i -g vercel`
2. Ejecuta `vercel` en la carpeta
3. Sigue las instrucciones

### Opción 4: Tu propio servidor
Copia los archivos a tu servidor web (Apache, Nginx, etc.)

## Optimización para Conversión

La página está diseñada siguiendo las mejores prácticas de 2026:

1. **Un solo CTA** por sección
2. **Prueba social** antes del precio
3. **Manejo proactivo de objeciones** (FAQ)
4. **Garantía visible** para reducir riesgo
5. **Mobile-first** (71% del tráfico)
6. **Carga rápida** (<3 segundos)
7. **Títulares orientados a beneficios**
8. **Comparación visual** vs. alternativas

## Métricas a Seguir

- **Tasa de conversión** (objetivo: >3%)
- **Tiempo en página**
- **Tasa de rebote**
- **Scroll depth**
- **Click-through rate en CTAs**

## Soporte

Si necesitas ayuda con la personalización o despliegue, pregunta a Nexo.