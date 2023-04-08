let main = document.querySelector("main");
let titulo = document.querySelector("h1");
let btnComenzarJuego = document.getElementById("btnComenzarJuego");
let form = document.querySelector("form");
let inputNumeroUsuario = document.getElementById("inputNumeroUsuario");
let btnAdivinar = document.getElementById("btnAdivinar");
let numeroRandom = 0;
let numeroUsuario = 0;
let texto = document.createElement("p");

btnComenzarJuego.addEventListener("click", comenzarJuego);
btnAdivinar.addEventListener("click", adivinarNumero);
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function comenzarJuego() {
  numeroRandom = Math.floor(Math.random() * (10 + 1 - 1) + 1);
  titulo.innerHTML = "¡Números Mágicos!";
  texto.innerHTML =
    "La maquina eligió un número del 1 al 10. ¿Podrás adivinarlo?";
  main.removeChild(btnComenzarJuego);
  main.insertBefore(texto, form);
  inputNumeroUsuario.classList.remove("d-none");
  btnAdivinar.classList.remove("d-none");
}

function adivinarNumero() {
  numeroUsuario = parseInt(inputNumeroUsuario.value);
  if (numeroUsuario === "" || isNaN(numeroUsuario)) {
    Swal.fire({
      icon: "warning",
      title: "Oops... Algo salió mal!",
      text: "Debes ingresar un número.",
      confirmButtonColor: "#ffc107",
      background: "#000",
      color: "#ffc107",
    });
    numeroUsuario = 0;
    inputNumeroUsuario.value = "";
  } else if (numeroUsuario < 1 || numeroUsuario > 10) {
    Swal.fire({
      icon: "warning",
      title: "Oops... Algo salió mal!",
      text: "Debes elegir un número del 1 al 10.",
      confirmButtonColor: "#ffc107",
      background: "#000",
      color: "#ffc107",
    });
    numeroUsuario = 0;
    inputNumeroUsuario.value = "";
  } else {
    if (numeroUsuario === numeroRandom) {
      titulo.innerHTML = "¡Felicidades!";
      texto.innerHTML = "¡Adivinaste!";
      inputNumeroUsuario.classList.add("d-none");
      btnAdivinar.classList.add("d-none");
      btnComenzarJuego.innerHTML = "Reiniciar juego";
      main.appendChild(btnComenzarJuego);
      inputNumeroUsuario.value = "";
    }

    if (numeroUsuario < numeroRandom) {
      titulo.innerHTML = "¡Lo siento!";
      texto.innerHTML = `El número elegido es menor al número elegido por la maquina.`;
      numeroUsuario = 0;
      inputNumeroUsuario.value = "";
    }

    if (numeroUsuario > numeroRandom) {
      titulo.innerHTML = "¡Lo siento!";
      texto.innerHTML = `El número elegido es mayor al número elegido por la maquina.`;
      numeroUsuario = 0;
      inputNumeroUsuario.value = "";
    }
  }
}
