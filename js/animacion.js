$( document ).ready(function() {
    $('.btn-pregunta').click(function(){
        var id = $(this).attr('data-pregunta');
        $('#contenido-'+id).slideToggle();
        $('#pregunta-'+id).toggleClass('pregunta-abierta'); 
        $("[data-pregunta='"+id+"'] i").toggleClass("mdi-chevron-up");
        $("[data-pregunta='"+id+"'] i").toggleClass("mdi-chevron-down");
    });
});