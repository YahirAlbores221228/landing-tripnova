# TripNova ✈️

Landing page para una agencia de viajes que ofrece paquetes turísticos nacionales e internacionales, experiencias personalizadas y asesoría para viajeros.

## 🚀 Instalación y ejecución

### Requisitos previos
- Node.js 18 o superior
- node -v
- npm

### Pasos

1. Clona el repositorio
\```bash
git clone https://github.com/YahirAlbores221228/landing-tripnova.git
\```

2. Entra a la carpeta del proyecto
\```bash
cd landing-tripnova
\```

3. Instala las dependencias
\```bash
npm install
\```

4. Inicia el servidor de desarrollo
\```bash
npm run dev
\```

5. Abre tu navegador en
\```
http://localhost:5173
\```

## 🎨 Decisiones de diseño

### Nombre: TripNova

El nombre **TripNova** fue elegido con la intención de transmitir una experiencia de viaje moderna e innovadora.

- **Trip** representa el viaje, la exploración y el descubrimiento.
- **Nova** evoca innovación, algo nuevo y en constante evolución.

La combinación genera un nombre memorable, fácil de pronunciar y que transmite confianza, dinamismo y modernidad — valores clave para una agencia de viajes enfocada en experiencias personalizadas.

---

### Paleta de colores

La paleta fue seleccionada basándose en la **psicología del color**, investigando qué transmite cada color, qué marcas exitosas los utilizan y cómo impactan en la experiencia del usuario.

| Color | Hex | Uso | Significado |
|-------|-----|-----|-------------|
| **Azul marino** | `#0A2342` | Color principal | Confianza, seguridad y profesionalismo |
| **Gris azulado** | `#718096` | Color secundario | Neutralidad, equilibrio y elegancia |
| **Naranja** | `#FF6B35` | Acento / CTAs | Energía, motivación y llamada a la acción |
| **Blanco** | `#FFFFFF` | Fondos | Limpieza, claridad y facilidad de lectura |
| **Negro** | `#000000` | Textos | Legibilidad y contraste |

El objetivo fue lograr un balance entre **profesionalismo y dinamismo** — evitando que la interfaz se sienta fría o distante, y generando en el usuario una sensación de confianza y motivación para explorar.

---

### Tipografía

Se eligieron **Poppins** y **Lato** por ser tipografías modernas, limpias y optimizadas para web.

- **Poppins** — utilizada en títulos y encabezados. Aporta personalidad, modernidad y jerarquía visual.
- **Lato** — utilizada en textos y descripciones. Garantiza legibilidad, claridad y equilibrio en la lectura.

La combinación funciona porque Poppins da carácter visual a la marca mientras que Lato mantiene una experiencia de lectura cómoda en cualquier dispositivo o resolución.

---

### Estilo visual general

Se optó por un diseño **limpio, moderno y profesional** como base visual de TripNova. La decisión se fundamenta en los siguientes criterios:

**Diseño limpio y minimalista**
Se evitó un diseño recargado o con exceso de elementos visuales, ya que en una plataforma de viajes la claridad es clave para que el usuario identifique rápidamente la información y las acciones principales. El uso de espacios en blanco, una paleta equilibrada y una jerarquía visual clara permite que los elementos importantes como los CTAs y la información destacada tengan mayor protagonismo.

**Experiencia moderna y confiable**
Se buscó que al entrar a la landing el usuario percibiera TripNova como una plataforma tecnológica de viajes fácil de usar y visualmente atractiva. La combinación de una estética limpia con elementos dinámicos refleja innovación y aventura, generando una sensación de exploración desde el primer momento.

**Uso de imágenes grandes e impactantes**
En el mundo de los viajes, la imagen lo es todo. Las fotografías grandes y de alta calidad comunican de forma inmediata lo que las palabras no siempre logran — la emoción de descubrir un nuevo lugar. Esta decisión fue clave para conectar al usuario con la experiencia de viajar desde el primer instante.
 
 ----
 
### Estructura y orden de las secciones

El orden de las secciones fue diseñado pensando en el **flujo de atención y confianza del usuario**, guiándolo de forma progresiva desde el impacto visual inicial hasta la toma de decisión.

- **Hero** — genera impacto visual inmediato y comunica el mensaje principal de la agencia
- **Sobre nosotros** — responde la primera pregunta del usuario: ¿quién es esta empresa y puedo confiar en ella?
- **Paquetes** — una vez generada la confianza, se le muestra directamente lo que está buscando
- **Destinos** — complementa los paquetes con destinos destacados para inspirar al usuario
- **Cotizador** — permite al usuario calcular el costo estimado de su viaje en tiempo real, facilitando la toma de decisión sin necesidad de contactar a un asesor
- **Testimonios** — refuerza la confianza con experiencias reales de otros viajeros
- **FAQ** — resuelve dudas frecuentes antes de que el usuario abandone la página

El objetivo fue construir una navegación natural y fácil de escanear, priorizando primero atracción visual, luego información y confianza, y finalmente herramientas que faciliten la decisión del usuario.

## 🛠️ Decisiones técnicas

### Vite + React

Se eligió **Vite + React** por ofrecer un entorno de desarrollo moderno, rápido y escalable para aplicaciones frontend.

React facilita la construcción de interfaces mediante componentes reutilizables, mejorando la organización, mantenibilidad y escalabilidad del proyecto. Permite desarrollar interfaces dinámicas con una mejor experiencia de usuario.

Vite fue seleccionado por su rapidez en el entorno de desarrollo y su optimización en el proceso de compilación. Gracias a su **Hot Module Replacement (HMR)**, los cambios se reflejan casi instantáneamente, agilizando el flujo de trabajo y mejorando la productividad durante el desarrollo.

---

### Tailwind CSS

Se eligió **Tailwind CSS** por su enfoque *utility-first*, que permite desarrollar interfaces de manera rápida, consistente y escalable.

En lugar de escribir grandes archivos CSS personalizados, Tailwind proporciona clases reutilizables que agilizan el desarrollo y mantienen una estructura visual uniforme en toda la aplicación. Facilita la creación de diseños responsive, reduce la duplicación de estilos y hace más sencillo modificar componentes a futuro.

Fue especialmente útil en este proyecto por la velocidad de desarrollo que ofrece, permitiendo iterar rápidamente sobre el diseño y mantener consistencia visual entre secciones y componentes.

---

### Framer Motion

Se eligió **Framer Motion** por permitir crear animaciones modernas y fluidas de manera sencilla dentro de React, mejorando la experiencia visual e interacción del usuario con la interfaz.

En TripNova las animaciones ayudan a que la navegación se sienta más dinámica y atractiva, guiando la atención del usuario hacia elementos importantes como secciones, imágenes y llamadas a la acción. Su integración basada en componentes facilita mantener el código organizado y reutilizable, con mejor rendimiento que implementar animaciones manualmente con CSS o JavaScript puro.

Las animaciones fueron implementadas de forma sutil con el objetivo de mejorar la percepción de modernidad sin afectar la velocidad ni saturar visualmente la interfaz.

---

### Lucide React

Se eligió **Lucide React** por ofrecer una colección de íconos modernos, minimalistas y consistentes que se integran fácilmente con React.

Los íconos funcionan como componentes React personalizables, permitiendo modificar tamaño, color y estilos mediante props o clases de Tailwind CSS. Su estética limpia y uniforme encaja con el estilo visual de TripNova, reforzando la coherencia de la interfaz sin sobrecargar el diseño.

Además es una librería ligera que permite importar únicamente los íconos necesarios, evitando cargar recursos innecesarios en la aplicación.

---

### Organización de carpetas

La estructura del proyecto fue diseñada considerando **mantenibilidad, escalabilidad y separación de responsabilidades**.

Se optó por una organización donde cada carpeta tiene un rol claro y definido:

- **`sections/`** — contiene las secciones principales de la landing, cada una en su propio archivo
- **`components/`** — contiene los componentes reutilizables que son utilizados por las secciones
  - **`ui/`** — componentes genéricos de interfaz como `Button`, `Selector`, `Checkbox` y `RangeSlider`, reutilizables en cualquier parte del proyecto
- **`data/`** — centraliza los datos estáticos en archivos separados, desacoplando la información de la UI
- **`assets/`** — agrupa los recursos estáticos como imágenes y fuentes

Esta estructura facilita entender rápidamente dónde vive cada parte del código, reduce el acoplamiento entre módulos y hace el proyecto más fácil de escalar y mantener a futuro.

---

### Cotizador dinámico

Se implementó un **cotizador dinámico** como valor agregado para mejorar la experiencia del usuario dentro de la landing.

La decisión de incluirlo se basó en que hoy en día el usuario busca facilidad y rapidez al momento de planear un viaje. Contar con una herramienta que le permita visualizar el costo estimado de su viaje en tiempo real, sin necesidad de contactar a un asesor, mejora significativamente la experiencia y genera mayor confianza hacia la agencia.

**¿Cómo funciona?**

El cotizador opera con una **lógica de cálculo matemático local**, sin necesidad de un backend o API externa. Los precios, destinos y paquetes están definidos en archivos de datos estáticos y mediante operaciones matemáticas se simula un presupuesto estimado del viaje.

El usuario puede seleccionar:
- **Destino o paquete** — determina el precio base del viaje
- **Número de personas** — multiplica el costo por pasajero
- **Duración del viaje** — ajusta el costo según los días seleccionados
- **Tipo de viaje** — Básico, Estándar o Premium, cada uno con un multiplicador de precio
- **Servicios adicionales** — opcionales que se suman al total

El resultado se actualiza en **tiempo real** conforme el usuario realiza sus selecciones, mostrando un resumen detallado del presupuesto estimado sin necesidad de realizar ninguna operación manual.

---

### Optimización de imágenes

Las imágenes del proyecto fueron convertidas al formato **WebP** tras investigar sus ventajas frente a formatos tradicionales como JPG o PNG.

El formato WebP ofrece una compresión superior manteniendo buena calidad visual, lo que se traduce en imágenes más ligeras y tiempos de carga más rápidos. En una landing page donde las imágenes son un elemento visual clave, optimizar su peso fue una decisión importante para mejorar el rendimiento general del sitio y la experiencia del usuario.

---

### Diseño Responsive — Mobile First

El diseño responsive fue implementado siguiendo el enfoque **Mobile First**, es decir, se comenzó diseñando para pantallas pequeñas y progresivamente se adaptó para tablets y desktop.

Este enfoque permite mayor precisión al definir los estilos base en pantallas pequeñas y escalar de forma natural hacia dispositivos más grandes. Tailwind CSS facilita este proceso mediante sus breakpoints (`sm`, `md`, `lg`, `xl`) que permiten aplicar estilos progresivos de forma clara y ordenada.

---

### Componentes reutilizables

Se priorizó la construcción de **componentes reutilizables** con el objetivo de evitar duplicación de código y mejorar la mantenibilidad del proyecto.

Se organizaron en dos niveles:

- **Componentes de sección** — `PackagesCard`, `FeatureCard`, `DestinationCard`, `Tabs` y `Carousel`, utilizados dentro de las secciones principales de la landing
- **Componentes UI** — `Button`, `Selector`, `Checkbox` y `RangeSlider`, componentes genéricos reutilizables utilizados principalmente en el cotizador

Al crear un componente una sola vez y reutilizarlo con diferentes datos mediante props, se reduce el tiempo de desarrollo, se mantiene consistencia visual y se simplifica el mantenimiento — cualquier cambio en el componente se refleja automáticamente en todos los lugares donde se utiliza.

---

## 📦 Librerías utilizadas

| Librería | Motivo de uso |
|----------|---------------|
| **React** | Permite construir interfaces mediante componentes reutilizables, facilitando la organización, mantenibilidad y escalabilidad del proyecto |
| **Vite** | Ofrece un entorno de desarrollo ultrarrápido con HMR instantáneo y compilación optimizada |
| **Tailwind CSS** | Agiliza el desarrollo de interfaces responsive mediante clases utilitarias, manteniendo consistencia visual en todo el proyecto |
| **Framer Motion** | Permite crear animaciones modernas y fluidas integradas directamente en los componentes React |
| **Lucide React** | Proporciona íconos modernos y minimalistas como componentes React, personalizables con props y clases de Tailwind |
| **React Icons** | Complementa a Lucide React con una colección más amplia de íconos de diferentes librerías en un solo paquete |

---

## 🔧 ¿Qué mejoraría con más tiempo?

- **Cotizador dinámico** — optimizar la lógica de cálculo para hacerla más precisa, con precios mejor definidos y una estructura de datos más robusta que refleje costos reales por destino, temporada y tipo de servicio.

- **Carousel** — hacerlo más flexible y dinámico, agregando soporte para **arrastre con mouse y touch**, navegación en **loop continuo** para que el usuario pueda seguir avanzando sin necesidad de regresar al inicio, y ajustes más precisos de responsive.

- **Animaciones** — profundizar en el uso de Framer Motion para agregar transiciones más elaboradas entre secciones y microinteracciones en elementos clave como botones, cards y el cotizador.

- **Formulario de contacto** — integrar un formulario funcional que permita al usuario enviar consultas directamente desde la landing, idealmente conectado a un servicio de email como EmailJS o similar.

- **Contenido e información** — refinar y enriquecer el contenido de cada sección para que refleje mejor la propuesta de valor de TripNova y genere mayor confianza en el usuario.
  
---

## 🚀 Propuesta para siguiente fase

TripNova en su estado actual representa una base sólida como landing page. Sin embargo, con el objetivo de convertirla en una plataforma completa de agencia de viajes, estas serían las mejoras que consideraría implementar en una siguiente fase:

- **Sistema de reservas** — desarrollaría un flujo completo de reserva donde el usuario pueda seleccionar su paquete, elegir fechas disponibles y confirmar su viaje directamente desde la plataforma, reduciendo la necesidad de intermediación manual y mejorando la conversión.

- **Autenticación de usuarios** — implementaría un sistema de registro e inicio de sesión que permita a cada usuario gestionar su perfil personal, guardar cotizaciones, consultar el historial de reservas y recibir recomendaciones personalizadas basadas en sus preferencias.

- **Métodos de pago** — integraría una pasarela de pagos segura que permita al usuario completar la compra de su viaje directamente en la plataforma, eliminando fricciones en el proceso de conversión y brindando mayor confianza al cliente.

- **Integración con APIs de proveedores** — conectaría APIs de aerolíneas y proveedores hoteleros para mostrar disponibilidad y precios en tiempo real, haciendo la experiencia más transparente, confiable y alineada con la oferta real del mercado.

- **Simulación visual de ruta del viaje** — agregaría una visualización interactiva del itinerario de cada paquete, mostrando destinos, paradas, actividades y tiempos estimados de forma clara y atractiva, para que el usuario tenga una visión completa de su experiencia antes de reservar.
