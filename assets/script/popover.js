/*

Contribution by Gabriel Colombo
Profile: https://codepen.io/gabrielcolombo

*/

$(function () {
    $('[data-toggle="popover"]').popover({
           trigger:'hover'
      })
  });
  
  var oldScrollTop = $(window).scrollTop();
  var oldScrollLeft = $(window).scrollLeft();
  
  $('.table-responsive').scroll(function () { 
      if(oldScrollTop == $('.table-responsive').scrollTop()) {
          $('.table-responsive').css('color', 'red');
      }
      else {
          $('.table-responsive').css('color', 'blue');
      }
      oldScrollTop = $('.table-responsive').scrollTop();
      oldScrollLeft = $('.table-responsive').scrollLeft();
  });