// insertar navbar

document.addEventListener("DOMContentLoaded", function () {
  fetch("nav-bar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
    })
    .catch((error) => console.error("Error al cargar navbar", error));
});
