//<![CDATA[
/*-------IE-9 Fix---------*/
if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function() {};
/*------------------------*/

function getColumnStyleClassName(colNumber) {
    if (colNumber == 12) {
        return "col-full";
    } else {
        return "col-" + colNumber;
    }
}

$(document).ready(function() {
  
         
  $("#carousel-top-Banner .slides").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      pagination : true,
      autoPlay: 5000,
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });      
  /*
  // Scroll  on load
  // Remove the # from the hash, as different browsers may or may not include it
  var hash = location.hash.replace('#','');
  
  if(hash !== ''){
      $('html,body').animate({scrollTop:$('#' + hash).offset().top}, 0);
  }
   */


});

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)

            if (c_end == -1)
                c_end = document.cookie.length;

            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return "";
}

function setCookiePolicy(c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setTime(exdate.getTime() + (expiredays * 24 * 60 * 60 * 1000));
    document.cookie = c_name + "=" + escape(value) + ";path=/" + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}