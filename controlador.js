console.log("Hola mundo");

let boton = document.getElementById("boton");
let boton1 = document.getElementById("boton1");
let foto1 = document.getElementById("foto1");
let titulo1 = document.getElementById("titulo1");
let audio1 = document.getElementById("audio1");
let foto2 = document.getElementById("foto2");
let titulo2 = document.getElementById("titulo2");
let audio2 = document.getElementById("audio2");
let foto3 = document.getElementById("foto3");
let titulo3 = document.getElementById("titulo3");
let audio3 = document.getElementById("audio3");
boton.addEventListener("click",perroGurdian);
boton1.addEventListener("click",perroGuardian1);

function perroGurdian (){
    titulo1.textContent = "Alexander Rybak I Came to Love You";
    foto1.src = "img/foto4.jpg";
    audio1.src = "audio/Alexander Rybak I Came to Love You.mp3";

    titulo2.textContent = "Alexander Rybak Magic";
    foto2.src = "img/foto5.jpg";
    audio2.src = "audio/Alexander Rybak Magic.mp3";

    titulo3.textContent = "Alexander Rybak OAH";
    foto3.src = "img/foto6.jpg";
    audio3.src = "audio/Alexander Rybak OAH.mp3";
}

function perroGuardian1 (){
    location.reload();
}