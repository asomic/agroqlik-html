( function( $ ) {

    // Menú
    $('.hamburger').click(function(){
      $(this).toggleClass('is-active');
      $('.buttons').toggleClass('open-buttons', 100)
    });
  
} )( jQuery );