const petalsContainer = document.querySelector(".petals-container");
const florContainer = document.querySelector("#flor");
const florImg = document.querySelector("#flor img");
const hazClick = document.querySelector("#flor h1");
import {mensajeAmoroso ,tituloAmoroso} from "./mensaje.js";
console.log(mensajeAmoroso);
function moverIzquierda(){
    florImg.classList.remove("hover");
    florImg.style.height = "100vh";
    hazClick.style.display = "none";
    florImg.animate(
        [
            {transform: "translateX(0px) tanslateY(0px)"},
            {transform: `translateX(-${window.innerWidth/2}px) translateY(30px)`},
        ],
        {
            duration: 500,
            iterations: 1,
            easing: "ease",
            fill: "forwards"
        });
    
}
let i = 0;
let j = 0;
function escribir(elemento,texto,cont){
    if (cont < texto.length) {
        elemento.textContent += texto.charAt(cont);
        cont++;
        setTimeout(()=>escribir(elemento,texto,cont), 50);
    }
}


function mostrarMensaje(){
    const contenedorMensaje = document.createElement("div");
    contenedorMensaje.classList.add("contenedor-mensaje");
    const titulo = document.createElement("h2");
    const mensaje = document.createElement("p");
    contenedorMensaje.appendChild(titulo);
    contenedorMensaje.appendChild(mensaje);
    document.querySelector("body").appendChild(contenedorMensaje);
    escribir(titulo,tituloAmoroso,i);
    escribir(mensaje,mensajeAmoroso,j);
}

function createPetal(){
    const petal = document.createElement("div");
    const durationAnimation = (Math.random() * 2000) + 2000;
    petal.classList.add("petal");
    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.width = Math.random() * 20 + 20 + "px";
    petalsContainer.appendChild(petal);
    petal.animate(
        [
            { transform: "translateY(-20px) rotate(0deg)"},
            { transform: "translateY(100vh) rotate(360deg)"}
        ],
        {
            duration: durationAnimation,
            iterations: 1,
            easing: "linear",
        }
    );
    
    setTimeout(()=>{
        petal.remove()
    },8000);
}

flor.addEventListener("click",()=>{
    setInterval(createPetal,100)
    moverIzquierda();
    florImg.style.transform = "translateY(-40px)";
    mostrarMensaje();
});