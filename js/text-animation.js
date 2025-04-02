//* Animacion texto

const words = ["Marlon", "desarrollador Web"];
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
