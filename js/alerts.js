

// document.getElementById('form').addEventListener('submit', function(event) {

//     event.preventDefault();

 
//     alert('Formulario enviado con éxito');
// });

function abrirPDF() {
    window.open("/assets/pdf/Template CV-Generation-Febrero2025.pdf", "_blank");
}


function github(){
    window.open("https://github.com/M4rl0n274", "_blank");
}

function Linkedin(){
    window.open("https://www.linkedin.com/in/marlon-quintero-solano-developer-full-stack6a0180329/" , "_blank")
}




$(document).ready(function() {
    $(document).scroll(function(){
        let windowHeight = $(window).height()*0.8;
        // Recorrer cada elemento
        $('.animated').each(function(i) {
            // Analizar posición del elemento actual
            if($(document).scrollTop() >= $(this).offset().top - windowHeight) {
                $(this).addClass('animation-in');
            } else {
                $(this).removeClass('animation-in');
            }
        });
    });
});