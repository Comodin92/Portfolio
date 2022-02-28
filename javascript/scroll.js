$(document).ready(function(){ /* Cuando el archivo se haya cargado completamente .readt. Ejecute una funcion */
    var ir_a =  $(".desplazar");
    ir_a.click(function(evento){
        evento.preventDefault();
        $("body,html,main").animate({
            scrollTop: $(this.hash).offset().top,/* Hash signo # */
        }, 1000 /* Tiempo que está desplazando */
            )
    })
})


html