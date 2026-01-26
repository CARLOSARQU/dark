# 🌐 Portal Web — EP Ingeniería de Sistemas

> **Documentación Técnica Oficial**  
> Modernización del portal institucional de la Escuela Profesional de Ingeniería de Sistemas

---

## 📌 Visión General del Proyecto

Este proyecto consiste en la **modernización y rediseño del portal web institucional** de la EP de Ingeniería de Sistemas.  
El objetivo es ofrecer una plataforma:

- ⚡ **Rápida**
- ♿ **Accesible**
- 🎨 **Visualmente moderna**
- 🧩 **Fácil de administrar**

Todo ello resolviendo los problemas de **obsolescencia tecnológica** y **mala experiencia de usuario (UX)** del sitio anterior.

---

## 🎯 Objetivos Clave

- **Rendimiento**  
  Optimización SEO y métricas **Core Web Vitals** (carga casi instantánea).

- **Gestión de Contenido**  
  CMS *Headless* con **Keystatic**, pensado para usuarios no técnicos.

- **Búsqueda Avanzada**  
  Búsqueda completa e instantánea **sin servidores externos**.

- **Escalabilidad**  
  Arquitectura basada en **componentes reutilizables**.

- **Experiencia de Usuario (UX)**  
  Navegación fluida con **View Transitions** y enfoque **Mobile First**.

---

## 🧰 Stack Tecnológico

Arquitectura basada en estándares modernos **Jamstack**:

| Categoría | Tecnología |
|---------|-----------|
| ⚙️ Framework | **Astro v5** (Islands Architecture) |
| 🎨 Estilos | **Tailwind CSS** |
| 🧠 Lenguaje | **TypeScript** |
| ⚛️ UI Interactiva | **React** (Islas específicas) |
| 🔍 Búsqueda | **Pagefind** |
| 🧩 Iconos | **Lucide React** |
| 📝 CMS | **Keystatic** (Git-based) |
| ✅ Validación | **Zod** |

---

## 🏗️ Arquitectura del Proyecto

Estructura estándar de Astro optimizada para mantenibilidad:

```txt
/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── content/         # Base de datos basada en archivos
│   │   ├── config.ts
│   │   ├── noticias/
│   │   ├── eventos/
│   │   └── docentes/
│   ├── layouts/         # Layouts globales
│   ├── pages/           # Rutas del sitio
│   ├── styles/          # Estilos globales
│   └── consts.ts        # Constantes globales
├── keystatic.config.ts  # Configuración CMS
└── astro.config.mjs     # Configuración Astro
````

---

## 🗂️ Modelo de Datos (Content Collections)

El proyecto **no usa base de datos SQL**.
Los datos viven en el repositorio → **versionados, seguros y auditables**.

### 📰 Noticias (`type: content`)

* `titulo`
* `fecha`
* `extracto`
* `portada`
* `contenido` (Markdown)

### 📅 Eventos (`type: content`)

* `nombre`
* `fechaHora`
* `lugar`
* `tipo` (Enum)
* `afiche`

🧠 **Lógica automática** para separar eventos pasados y futuros usando `new Date()`.

### 👨‍🏫 Docentes (`type: data`)

* `nombre`
* `grado` (Ing, Mg, Dr)
* `cargo`
* `foto`
* `linkedin`

---

## ⚙️ Características de Ingeniería

### 🔁 Navegación SPA

Uso de `ClientRouter` de Astro:

* Navegación sin recargas completas
* Intercambio dinámico del `<body>`

✨ **Resultado:** experiencia tipo aplicación nativa.

---

### 🧭 Navbar Reactivo y Optimizado

Implementación avanzada en `Navbar.astro`:

* Estado controlado con atributos `data-*`
* Menos JS, más rendimiento
* Re-inicialización correcta tras transiciones con:

```js
document.addEventListener('astro:page-load', () => {
  // lógica del navbar
});
```

---

### 🔍 Buscador Estático (Pagefind)

* Indexación en **build time**
* Ejecución **100% client-side**
* Sin APIs, sin backend

🎹 Atajos:

* `ESC` → cerrar
* `CTRL / CMD + K` → abrir

---

### 🧩 Sistema de Iconos

* **Lucide React**
* SVG renderizados en servidor (SSR)
* Alta nitidez y bajo peso

---

### 🧱 Rutas Dinámicas y Generación Estática

* Uso de `[...slug].astro`
* HTML generado en build
* ❌ Sin latencia de base de datos

---

## 🧑‍💻 Guía de Administración (CMS)

Panel administrativo disponible en:

```txt
/keystatic
```

### 👥 Roles

* **Desarrollador:** Código y arquitectura
* **Editor:** Gestión de contenido visual

### 🔄 Flujo del Editor

1. Accede al panel Keystatic
2. Selecciona una colección
3. Crea o edita contenido
4. El sistema guarda archivos `.md` / `.yaml` automáticamente

---

## 🚀 Instalación y Despliegue

### Requisitos

* Node.js **v18+**
* npm / pnpm / yarn

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

📍 [http://localhost:4321](http://localhost:4321)

---

### 🔎 Nota sobre el Buscador

Pagefind solo funciona tras generar el sitio:

```bash
npm run build
npm run preview
```

---

## ✅ Conclusiones

Esta arquitectura:

* 🧠 Sigue principios **SOLID**
* ⚡ Ofrece **UX superior**
* 🔍 Incorpora búsqueda instantánea
* 🛠️ Garantiza **mantenibilidad a largo plazo**

🎓 El portal posiciona a la EP de Ingeniería de Sistemas como **referente tecnológico institucional**.
