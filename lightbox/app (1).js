const flotante = document.querySelector("#flotante")
const cuadro = document.querySelector("#cuadro")
const equis = document.querySelector("#equis")
const sig = document.querySelector("#sig")
const ant = document.querySelector("#ant")
const imgprincipal = document.querySelector("#imgprincipal")
const fath = document.querySelector("#fath")

function mostrarLightbox () {
  flotante.style.top = "0px"
  //Cambiar top a 0px (cuando se haga click en alguna miniatura)
}
function ocultarLightbox () {
  flotante.style.top = "-100vh"
  //Cambiar top a -100vh (cuando se haga click en equis o cuadro)
}
function siguiente (){
  imgprincipal.src = "img2.jpg"
  //Cambia a imagen 2
}
function anterior (){
  imgprincipal.src = "img1.jpg"
  //Cambia a imagen 1
}
fath.addEventListener("click", mostrarLightbox)
equis.addEventListener("click", ocultarLightbox)
cuadro.addEventListener("click", ocultarLightbox)
sig.addEventListener("click", siguiente)
ant.addEventListener("click", anterior)
//Falta crear los eventos con addEventListener