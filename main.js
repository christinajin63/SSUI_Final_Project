
/*

// Wait for window load
$(window).load(function() {

  // Animate loader off screen
  $("#loader").animate({
    top: -200;
  }, 1500);
});

*/



(function($) {

  /**
   * edited to fit my design but overall code taken from this copy right
   * 
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);



$(".work").each(function(i, el) {
   
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("come-in"); 
  } 
  

});

$(window).scroll(function(event) {

  $(".work").each(function(i, el) {
   
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
    


  });
  
});



window.onload = function () {
  $("body").animate({
    opacity: 1
  }, 1000, function() {
    // Animation complete.
  });
}

$("a").click(function(event) {
    event.preventDefault();
    var url = $(this).attr("href");
    $( "body" ).fadeOut( "slow", function() {});
    setTimeout(function(){ window.location.href = url; }, 1500);
});

