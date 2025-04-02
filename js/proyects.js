document.addEventListener("DOMContentLoaded", function () {
  fetch("Proyectos.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("proyectsCards").innerHTML = data;
    })
    .catch((error) => console.error("Error al cargar proyectos", error));
});
