document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});

function iniciarApp() {
  crearGaleria();
  scrollNav();
  navegacionFija();
}

function navegacionFija() {
  const barra = document.querySelector(".header");
  const sobreFestival = document.querySelector(".sobre-festival");
  const body = document.querySelector('body');

  window.addEventListener("scroll", function () {
    if (sobreFestival.getBoundingClientRect().bottom < 0) {
      barra.classList.add("fijo");
      body.classList.add('body-scroll');
    } else {
      barra.classList.remove("fijo");
      body.classList.remove('body-scroll');
    }
  });
}

function scrollNav() {
  const enlances = document.querySelectorAll(".navegacion-principal a");
  enlances.forEach((enlace) => {
    enlace.addEventListener("click", function (e) {
      e.preventDefault();

      const seccionScroll = e.target.attributes.href.value;
      const seccion = document.querySelector(seccionScroll);

      seccion.scrollIntoView({ behavior: "smooth" });
    });
  });
}

function crearGaleria() {
  const galeria = document.querySelector(".galeria-imagenes");

  for (let i = 1; i <= 12; i++) {
    const imagen = document.createElement("picture");
    imagen.innerHTML = `
            <source srcset="build/img/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen galeria">
        `;
    imagen.onclick = function () {
      mostrarImagen(i);
    };

    imagen.onclick = function () {
      mostrarImagen(i);
    };

    galeria.appendChild(imagen);
  }
}

function mostrarImagen(index) {
  const imagen = document.createElement("picture");
  imagen.innerHTML = `
            <source srcset="build/img/grande/${index}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/grande/${index}.jpg" alt="imagen galeria">
        `;

  //   crear el overlay con la imagen
  const overlay = document.createElement("DIV");
  overlay.appendChild(imagen);
  overlay.classList.add("overlay");

  //   overlay.onclick

  // Boton para cerrar el Modal
  const cerrarModal = document.createElement("P");
  cerrarModal.textContent = "X";
  cerrarModal.classList.add("btn-cerrar");

  overlay.onclick = function () {
    overlay.remove();
    const body = document.querySelector("body");
    body.classList.remove("fijar-body");
  };

  overlay.appendChild(cerrarModal);

  // añadirlo al HTML
  const body = document.querySelector("body");
  body.appendChild(overlay);
  body.classList.add("fijar-body");
}
