/*JavaScript*/

/*scrollup*/
$(document).ready(function(){
 
  $(window).scroll(function(){
  if ($(this).scrollTop() > 300) {
  $('.scrollup').fadeIn();
  } else {
  $('.scrollup').fadeOut();
  }
  });

  $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });
 
});
