# Internxt Drive Demo

Interfaz web que simula un pequeño gestor de archivos inspirado en Internxt Drive.

El objetivo del proyecto es construir un dashboard limpio, responsive y con buena experiencia de usuario usando únicamente frontend.

## Demo

https://internxt-drive-demo-manel.netlify.app

## Tecnologías utilizadas

* React
* Vite
* TypeScript
* CSS
* Git y GitHub
* Netlify

Se ha elegido un stack tecnológico basado en React, TypeScript y Vite con el objetivo de trabajar con una base moderna de frontend, cercana al tipo de tecnologías utilizadas habitualmente en proyectos web actuales y alineada con el enfoque técnico de la prueba.

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
* Topbar fija mediante `position: sticky`, para mantener visibles el buscador y las acciones principales al hacer scroll.
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
* Despliegue en Netlify.

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

La ordenación se ha implementado en la vista lista usando los propios encabezados de la tabla como controles.

El usuario puede ordenar por nombre, tamaño o fecha. Al volver a pulsar sobre el mismo campo, se cambia entre orden ascendente y descendente.

Esta funcionalidad se ha dejado solo en la vista lista porque encaja mejor con el comportamiento habitual de una tabla de archivos.

### Topbar fija

La topbar se ha configurado con `position: sticky` para que permanezca visible al hacer scroll.

Esto mejora la experiencia de usuario en vistas con muchos archivos, ya que permite mantener accesibles en todo momento el buscador, el botón de subida, el cambio de tema y el menú de usuario.

### Modo oscuro

El modo oscuro se gestiona con variables CSS.

La clase `app-layout--dark` cambia los valores de color principales, y los componentes consumen esas variables. Esto evita duplicar estilos y mantiene el diseño más limpio.

### Responsive

La interfaz se ha planteado siguiendo un enfoque mobile-first.

En móvil la sidebar está oculta por defecto y se abre mediante un botón hamburguesa. En escritorio la sidebar permanece visible.

### Normalize.css

Se ha incluido `normalize.css` para unificar los estilos base entre navegadores.

Los navegadores aplican estilos por defecto diferentes a elementos como botones, inputs, listas o márgenes del documento. Usar una normalización CSS ayuda a partir de una base más consistente y evita diferencias visuales inesperadas entre navegadores.

A partir de esa base se han definido los estilos propios del proyecto mediante CSS personalizado y variables CSS.

### Control de versiones

Durante el desarrollo se ha utilizado Git para dividir el trabajo en commits pequeños y progresivos.

Esto ha permitido organizar mejor el avance del proyecto, mantener un historial claro de cambios y facilitar la revisión del proceso de desarrollo.

## Proceso de desarrollo

El proyecto se ha desarrollado en aproximadamente 12 horas.

Aunque el plazo de entrega permitía disponer de más tiempo, durante estos días también he tenido que avanzar con la memoria de mi TFG, por lo que he intentado organizar el desarrollo priorizando las funcionalidades obligatorias, el diseño responsive, el modo oscuro, la ordenación y el despliegue.

Durante el proceso se ha trabajado por fases:

1. Creación del proyecto con Vite, React y TypeScript.
2. Maquetación inicial del dashboard.
3. Creación de componentes reutilizables.
4. Implementación de datos iniciales.
5. Vista grid y vista lista.
6. Búsqueda en tiempo real.
7. Subida simulada de archivos.
8. Eliminación con confirmación.
9. Responsive y modo oscuro.
10. Ordenación en vista lista.
11. Pulido visual.
12. Topbar fija.
13. Despliegue en Netlify.

Al tratarse de tecnologías en las que todavía estoy ganando experiencia, utilicé herramientas de IA como apoyo durante el proceso para resolver dudas, revisar errores y entender mejor algunas decisiones de implementación. El código final fue revisado, probado y ajustado manualmente.

## Mejoras futuras

Si tuviera más tiempo, añadiría:

* Drag & Drop para subir archivos.
* Preview de imágenes al hacer clic.
* Persistencia con `localStorage`.
* Paginación o scroll infinito para listas grandes.
* Tests unitarios con React Testing Library.
* Mejoras de accesibilidad en navegación por teclado.
* Conexión con una API real para persistir archivos.

## Nota final

Espero que el resultado sea de vuestro agrado.

La prueba me ha parecido una buena oportunidad para seguir aprendiendo y poner en práctica tecnologías frontend modernas. Además, me interesa mucho la oferta de prácticas y la posibilidad de formar parte de un entorno donde pueda seguir mejorando, aprender de un equipo real y aportar todo lo posible desde el primer día.

## Autor

Proyecto desarrollado como prueba técnica frontend para Internxt.
