//1
window.addEventListener("scroll", () => {
  const logoPrincipal = document.getElementById("logo");
  const logoFlotante = document.getElementById("logo-flotante");

  if (window.scrollY > 100) {
    logoPrincipal.classList.add("logo-oculto");
    logoFlotante.classList.add("logo-visible");
  } else {
    logoPrincipal.classList.remove("logo-oculto");
    logoFlotante.classList.remove("logo-visible");
  }
});

//2
const vinilo = document.getElementById("vinilo-disco");
const mensaje = document.getElementById("mensaje-bienvenida");

vinilo.addEventListener("click", () => {
  mensaje.classList.remove("oculto");
});

//3
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  vinilo.style.transform = `rotate(${y}deg)`;
});

//4
const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modalPersonaje");
const modalTitulo = document.getElementById("modal-titulo");
const modalImagen = document.getElementById("modal-imagen");
const modalInfo = document.getElementById("modal-info");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    modalTitulo.textContent = card.dataset.nombre;
    modalImagen.src = card.dataset.img;
    modalInfo.textContent = card.dataset.info;
    modal.style.display = "flex";
  });
});

function cerrarModal() {
  modal.style.display = "none";
}

//5
const formulario = document.getElementById("formulario-contacto");
const mensajeConfirmacion = document.getElementById("mensaje-confirmacion");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  mensajeConfirmacion.textContent = `¡Gracias ${nombre} por tu mensaje! Te responderemos pronto.`;
  formulario.reset();
});


const menuBtn = document.createElement("button");
menuBtn.id = "menu-btn";
menuBtn.innerHTML = "☰";
document.querySelector("header").insertBefore(menuBtn, document.querySelector("nav"));

menuBtn.addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("activo");
});

