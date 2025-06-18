# 🍌 American Farmers - Sitio Web Corporativo

Un sitio web moderno, profesional y mobile-first para **American Farmers**, una empresa colombiana exportadora de frutas frescas premium.

## 🌐 Demo

El sitio web está disponible en: [http://localhost:4321](http://localhost:4321) (en desarrollo)

## ✨ Características

- **🎨 Diseño Mobile-First**: Completamente responsivo y optimizado para dispositivos móviles
- **⚡ Rendimiento Superior**: Construido con Astro para máxima velocidad de carga
- **🎯 Funcionalidad WhatsApp**: Integración directa con WhatsApp para cotizaciones
- **🌈 Paleta de Colores Colombiana**: Diseño inspirado en los colores de la bandera colombiana
- **📱 UX Moderna**: Interfaz intuitiva con animaciones suaves y microinteracciones
- **🔍 SEO Optimizado**: Metadatos completos y estructura semántica

## 🛠️ Tecnologías Utilizadas

- **[Astro](https://astro.build/)** - Framework para sitios web estáticos ultrarrápidos
- **[React](https://react.dev/)** - Componentes interactivos
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de CSS utilitario
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático para JavaScript

## 📋 Estructura del Proyecto

```
american-farmers/
├── src/
│   ├── components/          # Componentes React reutilizables
│   │   ├── Navbar.tsx      # Navegación principal
│   │   ├── Footer.tsx      # Pie de página
│   │   ├── Hero.tsx        # Sección hero de la página principal
│   │   └── ProductCard.tsx # Tarjeta de producto
│   ├── layouts/            # Layouts de Astro
│   │   └── Layout.astro    # Layout principal
│   ├── pages/              # Páginas del sitio
│   │   ├── index.astro     # Página principal
│   │   ├── about.astro     # Página "Nosotros"
│   │   └── products.astro  # Página de productos
│   └── styles/             # Estilos globales
│       └── global.css      # Configuración de Tailwind y estilos personalizados
├── public/                 # Archivos estáticos
├── package.json           # Dependencias y scripts
└── astro.config.mjs       # Configuración de Astro
```

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- Node.js 18+ instalado
- npm o yarn como gestor de paquetes

### Pasos de Instalación

1. **Clonar o descargar el proyecto**
   ```bash
   # Si usas git
   git clone [URL_DEL_PROYECTO]
   cd american-farmers
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   - Visita: [http://localhost:4321](http://localhost:4321)

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el sitio para producción
- `npm run preview` - Previsualiza la versión construida
- `npm run astro` - Ejecuta comandos de Astro CLI

## 📄 Páginas del Sitio

### 1. **Página Principal** (`/`)
- Sección Hero con llamada a la acción
- Introducción de la empresa
- Productos destacados
- Estadísticas y valores

### 2. **Nosotros** (`/about`)
- Historia de la empresa
- Misión y visión
- Valores corporativos
- Llamada a la acción

### 3. **Productos** (`/products`)
- Catálogo completo de frutas
- Información detallada de cada producto
- Proceso de calidad
- Botones de cotización WhatsApp

## 🍎 Productos Destacados

- **Banano Premium Cavendish** - Sabor dulce y textura cremosa
- **Piña Dorada MD2** - Dulzura excepcional con brix superior a 12
- **Plátano Hartón** - Versátil para usos culinarios
- **Lima Tahití** - Sabor cítrico característico
- **Aguacate Hass** - Calidad superior para exportación
- **Mango Tommy Atkins** - Resistente al transporte
- **Papaya Maradol** - Gran tamaño y dulzor natural
- **Granadilla** - Fruta exótica con pulpa aromática

## 📱 Funcionalidades Especiales

### Integración WhatsApp
Todos los botones de contacto y cotización abren WhatsApp con:
- **Número**: +573226256101
- **Mensaje predefinido**: "I am interested in Colombian fruit."

### Diseño Responsivo
- **Mobile**: Diseño optimizado para pantallas pequeñas
- **Tablet**: Adaptación para dispositivos medianos
- **Desktop**: Experiencia completa para pantallas grandes

## 🎨 Paleta de Colores

```css
/* Colores principales inspirados en Colombia */
--primary-red: #dc2626     /* Rojo vibrante */
--primary-yellow: #fbbf24  /* Amarillo dorado */
--primary-green: #16a34a   /* Verde esmeralda */
--secondary-green: #059669 /* Verde secundario */
--light-green: #84cc16     /* Verde claro */
```

## 🔧 Personalización

### Modificar Información de Contacto
Edita las siguientes variables en los componentes:
- **Email**: `Americanfarmers2015@Gmail.com`
- **WhatsApp**: `+573226256101`

### Agregar Nuevos Productos
En `src/pages/products.astro`, modifica el array `products` para agregar nuevas frutas.

### Cambiar Colores
Modifica las variables CSS en `src/styles/global.css` para personalizar la paleta de colores.

## 📊 Optimizaciones Implementadas

- **Lazy Loading** de imágenes
- **Fuentes optimizadas** de Google Fonts
- **Minificación** automática de CSS y JS
- **Compresión** de imágenes automática
- **SEO** con metadatos completos
- **Accesibilidad** con etiquetas semánticas

## 🌍 Despliegue

### Para Producción

1. **Construir el sitio**
   ```bash
   npm run build
   ```

2. **Los archivos estáticos se generan en** `dist/`

3. **Desplegar en cualquier hosting estático**:
   - Netlify
   - Vercel
   - GitHub Pages
   - Cloudflare Pages

## 📞 Información de Contacto

- **Empresa**: American Farmers
- **Email**: Americanfarmers2015@Gmail.com
- **WhatsApp**: +57 322 625 6101
- **Origen**: Colombia 🇨🇴

## 🤝 Contribución

Este proyecto fue desarrollado para American Farmers. Para modificaciones o mejoras:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está desarrollado específicamente para American Farmers.

---

**Desarrollado con ❤️ para American Farmers - Conectando Colombia con el mundo**
