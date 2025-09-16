// Espera a que todo el contenido del DOM (la estructura HTML) se haya cargado completamente antes de ejecutar el código.
document.addEventListener("DOMContentLoaded", function () {
  // Llama a la función para crear la galería de imágenes.
  crearGaleria();
});

// Función encargada de crear y poblar la galería de imágenes en la página.
function crearGaleria() {
  // Define la cantidad de imágenes que se cargarán en la galería.
  const CANTIDAD_IMAGENES = 16;
  // Selecciona el elemento del DOM que funcionará como contenedor de la galería.
  const galeria = document.querySelector(".galeria-imagenes");

  // Itera desde 1 hasta la cantidad total de imágenes para crearlas dinámicamente.
  for (let i = 1; i <= CANTIDAD_IMAGENES; i++) {
    // Crea un nuevo elemento de imagen.
    const imagen = document.createElement("IMG");
    // Establece la ruta de la imagen, usando el número actual de la iteración.
    imagen.src = `src/img/gallery/full/${i}.jpg`;
    // Asigna un texto alternativo a la imagen para accesibilidad.
    imagen.alt = "Imagen Galeria";

    // Asigna un manejador de eventos 'onclick' a cada imagen.
    imagen.onclick = function () {
      // Llama a la función mostrarImagen, pasándole el número de la imagen actual.
      mostrarImagen(i);
    };

    // Añade la imagen recién creada al contenedor de la galería.
    galeria.appendChild(imagen);
  }
}

// Función para mostrar una imagen específica en un overlay (modal).
function mostrarImagen(i) {
  // Crea un nuevo elemento de imagen para mostrar en grande.
  const imagen = document.createElement("IMG");
  // Establece la ruta de la imagen que se va a mostrar.
  imagen.src = `src/img/gallery/full/${i}.jpg`;
  // Asigna un texto alternativo a la imagen.
  imagen.alt = "Imagen Galeria";

  // Crea un div que funcionará como el fondo del modal.
  const modal = document.createElement("DIV");
  modal.classList.add("modal");
  // Asigna la función cerrarModal al evento 'onclick' del modal para que se cierre al hacer clic fuera de la imagen.
  modal.onclick = cerrarModal;

  // Crea un botón para cerrar el modal.
  const cerrarModalBtn = document.createElement("BUTTON");
  cerrarModalBtn.textContent = 'X';
  cerrarModalBtn.classList.add('btn-cerrar');
  // Asigna la función cerrarModal al evento 'onclick' del botón.
  cerrarModalBtn.onclick = cerrarModal;

  // Agrega la imagen y el botón de cerrar al modal.
  modal.appendChild(imagen);
  modal.appendChild(cerrarModalBtn);

  // Agrega el modal al cuerpo (body) del documento HTML.
  const body = document.querySelector("body");
  // Añade una clase al body para evitar el scroll mientras el modal está abierto.
  body.classList.add("overflow-hidden");
  body.appendChild(modal);
}

// Función para cerrar el modal.
function cerrarModal() {
  // Selecciona el modal activo.
  const modal = document.querySelector(".modal");
  // Añade una clase para aplicar un efecto de transición (fade-out).
  modal.classList.add("fade-out");

  // Espera 500 milisegundos antes de eliminar el modal para que la animación se complete.
  setTimeout(() => {
    // Elimina el modal del DOM si aún existe.
    modal?.remove();
    // Selecciona el body.
    const body = document.querySelector("body");
    // Elimina la clase que previene el scroll.
    body.classList.remove("overflow-hidden");
  }, 500);
}