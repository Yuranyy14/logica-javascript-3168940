//1.Selelccionar los elemntoscon los que va a interactuar o los que responden a interaccion 

const pantalla = document.querySelector(".pantalla")
const btnMenos = document.querySelector(".btn-menos")
const btnMas = document.querySelector(".btn-mas")
const body = document.querySelector(".body")
let counter = 0

//2.Crear funcion
function incrementar (){
    counter++
    if(counter===10){
        pantalla.style.color = "purple"
    }
    pantalla.textContent = counter
    if(counter===10){
        body.style.backgroundColor = "pink"
    } 
}

function decrementar (){
    counter--
    if(counter<10){
        pantalla.style.color = "black"
    }
    pantalla.textContent = counter
    if(counter<=10){
        body.style.backgroundColor = "white"
    }
}

//3. Crear el evento 
btnMas.addEventListener("click", incrementar)
btnMenos.addEventListener("click", decrementar)
