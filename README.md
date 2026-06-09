# Internxt Drive Demo

Interfaz web que simula un pequeño gestor de archivos inspirado en Internxt Drive.

El objetivo del proyecto es construir un dashboard limpio, responsive y con buena experiencia de usuario usando únicamente frontend.

## Demo

Pendiente de despliegue en Netlify.

## Tecnologías utilizadas

* React
* Vite
* TypeScript
* CSS
* Estado local con `useState`

## Funcionalidades implementadas

* Dashboard principal con sidebar, topbar y área de archivos.
* Sidebar con navegación:

  * Inicio
  * Mi Drive
  * Compartidos
  * Papelera
  * Configuración
* Barra superior con:

  * Buscador
  * Botón para subir archivos
  * Avatar de usuario con menú desplegable
  * Botón para cambiar entre modo claro y oscuro
* Vista de archivos en modo grid.
* Vista de archivos en modo lista.
* Cambio entre vista grid y vista lista.
* Subida simulada de archivos mediante input file.
* Soporte para seleccionar varios archivos a la vez.
* Archivos iniciales cargados desde un array local.
* Visualización de:

  * Nombre del archivo
  * Tamaño formateado
  * Fecha de subida
  * Icono según tipo de archivo
* Búsqueda en tiempo real por nombre.
* Eliminación de archivos con modal de confirmación.
* Ordenación en la vista lista por:

  * Nombre
  * Tamaño
  * Fecha
* Sidebar responsive:

  * En escritorio se muestra fija.
  * En móvil se oculta y se abre mediante botón hamburguesa.
* Modo claro y oscuro mediante variables CSS.
* Diseño responsive y mobile-first.

## Cómo ejecutar el proyecto

Primero instala las dependencias:

```bash
npm install
```

Después inicia el servidor de desarrollo:

```bash
npm run dev
```

La aplicación se abrirá normalmente en:

```bash
http://localhost:5173
```

Para generar una versión de producción:

```bash
npm run build
```

## Estructura principal del proyecto

```txt
src/
├── assets/
│   └── icons/
├── components/
│   ├── files/
│   │   ├── FileCard.tsx
│   │   ├── FileGrid.tsx
│   │   ├── FileIcon.tsx
│   │   ├── FileList.tsx
│   │   └── FileRow.tsx
│   ├── layout/
│   │   ├── Layout.tsx
│   │   ├── Sidebar.tsx
│   │   └── Topbar.tsx
│   └── ui/
│       ├── ConfirmModal.tsx
│       └── ThemeToggle.tsx
├── data/
│   └── initialFiles.ts
├── styles/
│   ├── files.css
│   └── normalize.css
├── types/
│   └── file.ts
├── utils/
│   ├── formatFileSize.ts
│   └── getFileIconType.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Decisiones técnicas

### React + Vite

He elegido React porque permite dividir la interfaz en componentes reutilizables y fáciles de mantener.

Vite se ha usado como herramienta de desarrollo porque es rápido, sencillo de configurar y adecuado para una prueba frontend.

### TypeScript

El proyecto usa TypeScript para definir mejor la estructura de los datos, especialmente el modelo de archivo utilizado en la aplicación.

Esto ayuda a evitar errores y hace que el código sea más claro y mantenible.

### Estado local

No se ha utilizado backend porque la prueba pide una simulación frontend.

Los archivos se gestionan mediante estado local con `useState`.

El estado principal incluye:

* Lista de archivos.
* Texto de búsqueda.
* Vista actual: grid o lista.
* Modo claro u oscuro.
* Estado de apertura de la sidebar móvil.
* Archivo seleccionado para eliminar.

### Subida simulada de archivos

La subida de archivos se realiza mediante un input de tipo `file` oculto.

Al seleccionar archivos, se transforman en objetos internos con nombre, tamaño, tipo y fecha de subida. Después se añaden al estado local y aparecen inmediatamente en la interfaz.

### Búsqueda en tiempo real

La búsqueda filtra los archivos por nombre mientras el usuario escribe.

No se necesita botón de búsqueda porque el filtrado se realiza directamente sobre el estado actual.

### Ordenación en vista lista

La ordenación se ha implementado en la vista lista, usando los propios encabezados de la tabla como controles.

El usuario puede ordenar por nombre, tamaño o fecha. Al volver a pulsar sobre el mismo campo, se cambia entre orden ascendente y descendente.

Esta funcionalidad se ha dejado solo en la vista lista porque encaja mejor con el comportamiento habitual de una tabla de archivos.

### Modo oscuro

El modo oscuro se gestiona con variables CSS.

La clase `app-layout--dark` cambia los valores de color principales, y los componentes consumen esas variables. Esto evita duplicar estilos y mantiene el diseño más limpio.

### Responsive

La interfaz se ha planteado siguiendo un enfoque mobile-first.

En móvil la sidebar está oculta por defecto y se abre mediante un botón hamburguesa. En escritorio la sidebar permanece visible.

## Mejoras futuras

Si tuviera más tiempo, añadiría:

* Drag & Drop para subir archivos.
* Preview de imágenes al hacer clic.
* Paginación o scroll infinito para listas grandes.
* Tests unitarios con React Testing Library.

## Autor

Manel Navarro Torrijos

Proyecto desarrollado como prueba técnica frontend para Internxt.
