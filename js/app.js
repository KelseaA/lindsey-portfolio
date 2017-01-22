//smooth scroll
$(document).ready(function(){
  //adds selected class to nav menu
  $("nav li").hover(function(){
    $(this).toggleClass("selected");
  });


  //toggle hamburger menu


  //contact form
  var contactform =  document.getElementById('contactform');
  contactform.setAttribute('action', '//formspree.io/' + 'lindsey.b.anderson' + '@' + 'gmail' + '.' + 'com');

  // Add smooth scrolling to all links
  $('.smooth-scroll-link').on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  //Back to top of page 
  var offset = 250; 
  var duration = 600; 
  $(window).scroll(function() { 
    if($(this).scrollTop() > offset) { 
      $('.back-to-top').fadeIn(duration); 
    } else { 
      $('.back-to-top').fadeOut(duration); 
    } 
  }); 

  $('.back-to-top').click(function(event) { 
      event.preventDefault(); 
      $('html, body').animate({scrollTop: 0}, duration); 
      return false;
  })

});