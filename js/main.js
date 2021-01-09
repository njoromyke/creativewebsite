$(document).ready(function(){
   
    $(document).ready(function(){
        $(window).scroll(function(){
            var top = $(window).scrollTop();
            if(top>=60){
                $('nav').addClass('bg-color');
            }else{
                if($('nav').hasClass('bg-color')){
                    $('nav').removeClass('bg-color');
    
                }
    
            }
          });

        });
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
        new WOW().init();
        require( 'waypoints/lib/noframework.waypoints.js' )
const el = document.querySelector( '.counter' )
new Waypoint( {
    element: el,
    handler: function() { 
        counterUp( el ) 
        this.destroy()
    },
    offset: 'bottom-in-view',
} );
$('.smooth').smoothScroll({
    duration: 1000, // animation speed
    easing: 'swing', // find more easing options on http://api.jqueryui.com/easings/
    offset: 0 // custom offset
    });
    var btn =$('#button');

    
    });
    
    //Get the button:
    mybutton = document.getElementById("myBtn");
    
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
