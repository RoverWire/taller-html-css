$( document ).ready(function() {
    $('.btn-pregunta').click(function(){
        var id = $(this).attr('data-pregunta');
        console.log(id);
        $('#contenido-'+id).slideToggle();
        $('#pregunta-'+id).toggleClass('pregunta-abierta');
    });
});