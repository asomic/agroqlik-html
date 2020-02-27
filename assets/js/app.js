( function( $ ) {

    // Menú
    $('.hamburger').click(function(){
      $(this).toggleClass('is-active');
      $('.buttons').toggleClass('open-buttons', 100)
    });

    $('.button-plan-info').click(function(){
      $('.modal-obtener').addClass('show-modal');
      return false;
    });
    $('.button-plan-prueba').click(function(){
      $('.modal-contratar').addClass('show-modal');
      return false;
    });
    $('.modal .x').click(function(){
      $('.modal').removeClass('show-modal');
      return false;
    });

    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 500) {
        $('header').addClass('on-down');
      } else {
        $('header').removeClass('on-down');
      }
        
      });

    AOS.init({
      once: true
    });
  
} )( jQuery );