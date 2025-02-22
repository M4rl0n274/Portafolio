// document.getElementById('form').addEventListener('submit', function(event) {

//     event.preventDefault();

//     alert('Formulario enviado con éxito');
// });

function abrirPDF() {
  window.open("/assets/pdf/Template CV-Generation-Febrero2025_2.pdf", "_blank");
}

function github() {
  window.open("https://github.com/M4rl0n274", "_blank");
}

function Linkedin() {
  window.open(
    "https://www.linkedin.com/in/marlon-quintero-solano-developer-full-stack6a0180329/",
    "_blank"
  );
}

//* Animacion texto

const words = ["Marlon","desarrollador FullStack" ];
let index = 0;
const textElement = document.querySelector(".text");

function updateText() {
  textElement.style.animation = "none"; // Reset animación
  textElement.textContent = words[index];
  void textElement.offsetWidth; // Forzar reflow para reiniciar animación
  textElement.style.animation =
    "typing 2s steps(20) forwards, fadeOut 0.5s 2s forwards";

  index = (index + 1) % words.length;
  setTimeout(updateText, 3000);
}

updateText();
