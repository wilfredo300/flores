const petalsContainer = document.querySelector(".petals-container");
const florContainer = document.querySelector("#flor");
const florImg = document.querySelector("#flor img");
const hazClick = document.querySelector("#flor h1");
import {mensajeAmoroso ,tituloAmoroso} from "./mensaje.js";
function moverIzquierda(){
    florImg.classList.remove("hover");
    florImg.style.height = "100vh";
    hazClick.style.display = "none";
    florImg.animate(
        [
            {transform: "translateX(0px) translateY(0px)"},
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
function escribir(elemento,texto,cont,callback){
    if (cont < texto.length) {
        elemento.textContent += texto.charAt(cont);
        cont++;
        setTimeout(()=>escribir(elemento,texto,cont,callback), 50);
    }else if (callback) {
        callback(); // Ejecuta la siguiente acción cuando termina de escribir
    }
    if(i==1) console.log(callback)
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
    escribir(mensaje, mensajeAmoroso, j, () => {
        aparecerBotonContinuar();
    });
}
function aparecerBotonContinuar() {
    const btn = document.createElement("button");
    btn.textContent = "Haz clic para continuar";
    btn.classList.add("btn-continuar");
    document.querySelector(".contenedor-mensaje").appendChild(btn);

    btn.addEventListener("click", () => {
        btn.remove(); // Quitamos el botón
        iniciarCarrusel();
    }, { once: true });
}

// Lógica del Carrusel
const misImagenes = [
    {src:"./img/img1.jpg", descripcion:"Nuestro matrimoio"},
    {src:"./img/img2.jpg", descripcion:"Yo todo galán (como siempre)"},
    {src:"./img/img3.jpeg", descripcion:"Me gusto esta foto jeje"},
    {src:"./img/img4.jpeg", descripcion:"Con los vasitos"},
    {src:"./img/img5.jpeg", descripcion:"No me acuerdo de esto :V"},
    {src:"./img/img6.jpeg", descripcion:"Ya nos querían sacar hijos jsjs"},
    {src:"./img/img7.jpeg", descripcion:"Muy bonito HP (Happy Pirthday"},
    {src:"./img/img8.jpeg", descripcion:"Me salio rica la torta no?"},
    {src:"./img/img9.jpeg", descripcion:"La unica que encontre de nuestro aniversario :'v"},
    {src:"./img/img10.jpeg", descripcion:"Mi miss sirenita, tan linda ella"},
    {src:"./img/img11.jpeg", descripcion:"De la manito ..."},
    {src:"./img/img12.jpeg", descripcion:"Eres hermosa, no lo olvides"},
    
]; // Pon tus rutas reales
let indiceImagen = 0;

function iniciarCarrusel() {
    const contenedor = document.querySelector(".contenedor-mensaje");
    contenedor.style.margin = 0;
    // Limpiamos el texto para dejar espacio al carrusel
    contenedor.innerHTML = ""; 
    
    const imgCarrusel = document.createElement("img");
    imgCarrusel.classList.add("img-carrusel");
    contenedor.appendChild(imgCarrusel);
    const descripcion = document.createElement("p");
    contenedor.appendChild(descripcion);

    function mostrarSiguiente() {
        if (indiceImagen < misImagenes.length) {
            imgCarrusel.src = misImagenes[indiceImagen].src;
            imgCarrusel.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1000 });
            descripcion.textContent = misImagenes[indiceImagen].descripcion;          
            indiceImagen++;
            // Espera 3 segundos y muestra la siguiente
            setTimeout(mostrarSiguiente, 5000);
        } else {
            descripcion.textContent = "¡Te Amo! ❤️";
        }
    }
    
    mostrarSiguiente();
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