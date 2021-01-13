
var x = true;
$('.fas').click( function() {
  if (x) { $('.hamburger-menu').addClass('active');
    return x = false
  } else {
    $('.hamburger-menu').removeClass('active');
     return x = true
  }
})
