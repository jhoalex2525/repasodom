console.log("Hola mundo");

let boton = document.getElementById("boton");
let foto1 = document.getElementById("foto1");
let titulo1 = document.getElementById("titulo1");
let audio1 = document.getElementById("audio1");
boton.addEventListener("click",perroGurdian);

function perroGurdian (){
    titulo1.textContent = "Europes Skies";
    foto1.src = "img/foto2.jpg";
    audio1.src = "audio/Alexander Rybak 13 horses.mp3";
}