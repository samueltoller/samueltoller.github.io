$(document).ready(function() {
  var mouseX = 0, mouseY = 0;
  var mouseXs = 0, mouseYs = 0;
  var xp = 0, yp = 0;
  
  $(document).mousemove(function(e){
      mouseX = e.clientX - 30;
      mouseY = e.clientY - 30;
      mouseXs = e.clientX;
      mouseYs = e.clientY; 
      
      $("#cursor").css({left: mouseXs - 5, top: mouseYs - 5});
      
  });

  setInterval(function(){
      xp += ((mouseX - xp)/6);
      yp += ((mouseY - yp)/6);
      $("#cursorbig").css({left: xp +'px', top: yp +'px'});
  }, 15);

  var $panel = $('.pro-container-testo');

  $panel.each(function () {
    var $this = $(this);
    console.log(document.getElementById("pro-container-testo-" + $(this).data('number')).offsetHeight / 2)
    document.getElementById("sticky-" + $(this).data('number')).style.marginTop = document.getElementById("pro-container-testo-" + $(this).data('number')).offsetHeight / 2 + "px";
    document.getElementById("sticky-" + $(this).data('number')).style.marginBottom = "-" + document.getElementById("pro-container-testo-" + $(this).data('number')).offsetHeight / 2 + "px";
  });  

  window.addEventListener('resize', function(){
  
    var $panel = $('.pro-container-testo');

    $panel.each(function () {
      var $this = $(this);
      console.log(document.getElementById("pro-container-testo-" + $(this).data('number')).offsetHeight / 2)
      document.getElementById("sticky-" + $(this).data('number')).style.marginTop = document.getElementById("pro-container-testo-" + $(this).data('number')).offsetHeight / 2 + "px";
      document.getElementById("sticky-" + $(this).data('number')).style.marginBottom = "-" + document.getElementById("pro-container-testo-" + $(this).data('number')).offsetHeight / 2 + "px";
    });   
  }); 
});

var pos = false;
var delay = false;
var wait = false;
$('#contatti').mouseenter(function(){
    delay = true;
    document.getElementById("contatti").style.width = "100%";
    document.getElementById("contatti").style.right = "0";
    if(pos == false){
        document.getElementById("ctitolo").style.textAlign = "left";
        document.getElementById("ctesto2").style.right = "calc(100vw + 23vh)";
        document.getElementById("ctesto1").style.left = "23vh";
    }else{
        document.getElementById("ctitolo").style.textAlign = "right";
        document.getElementById("ctesto1").style.left = "calc(100vw + 23vh)";
        document.getElementById("ctesto2").style.right = "23vh";
    }
    setTimeout(function(){
        delay = false;
    }, 500);
});
$('#contatti').mouseleave(function(){
    if(delay == true && wait == false){
        wait = true;
        setTimeout(function(){
            document.getElementById("contatti").style.width = "21vh";
            if(pos == false){
                document.getElementById("contatti").style.right = "calc(100% - 21vh)";
                document.getElementById("contatti").style.right = "calc(100% - 21vh)";
            }else{
                document.getElementById("contatti").style.right = "0";
            }
            pos = !pos;
            wait = false;
        }, 1000);
    }
    if(delay == false && wait == false){
        document.getElementById("contatti").style.width = "21vh";
            if(pos == false){
                document.getElementById("contatti").style.right = "calc(100% - 21vh)";
            }else{
                document.getElementById("contatti").style.right = "0";
            }
            pos = !pos;
    }
});

$('#indietro').mouseenter(function(){
    document.getElementById("cursor").classList.remove("cursor-color");
    document.getElementById("cursorbig").classList.remove("cursorbig-color");
    document.getElementById("cursorbig").style.transform = "scale(0)";
    document.getElementById("cursor").style.transform = "scale(1.5)";
});
$('#indietro').mouseleave(function(){
    document.getElementById("cursorbig").style.transform = "scale(1)";
    document.getElementById("cursor").style.transform = "scale(1)";
});

$('.bottone').mouseenter(function(){
    document.getElementById("cursorbig").style.transform = "scale(0)";
    document.getElementById("cursor").style.transform = "scale(1.5)";
});
$('.bottone').mouseleave(function(){
    document.getElementById("cursorbig").style.transform = "scale(1)";
    document.getElementById("cursor").style.transform = "scale(1)";
});

$('.bottone-pro').mouseenter(function(){
    document.getElementById("cursorbig").style.transform = "scale(0)";
    document.getElementById("cursor").style.transform = "scale(1.5)";
});
$('.bottone-pro').mouseleave(function(){
    document.getElementById("cursorbig").style.transform = "scale(1)";
    document.getElementById("cursor").style.transform = "scale(1)";
});
$('.link').mouseenter(function(){
  document.getElementById("cursorbig").style.transform = "scale(0)";
  document.getElementById("cursor").style.transform = "scale(1.5)";
});
$('.link').mouseleave(function(){
  document.getElementById("cursorbig").style.transform = "scale(1)";
  document.getElementById("cursor").style.transform = "scale(1)";
});
$('.link').on( "click", function() {
  window.open('http://www.telepacetrento.it/', '_blank'); 
});

var pagina = 1;
var girato = false;

$('.apri').on( "click", function() {
  pagina += 1;
  document.getElementById("p" + (pagina - 1)).classList.add("none");
  if((pagina - 1) == 1 || (pagina - 1) == 4){
    document.getElementById("p" + (pagina - 1) + "retro").classList.add("none");
  }
  document.getElementById("p" + pagina).classList.remove("none");
  document.getElementById("gira").classList.remove("none");
  if(pagina != 1 && pagina != 4){
    document.getElementById("gira").classList.add("none");
  }
  if(pagina > 1){
    document.getElementById("chiudi").classList.remove("none");
  }
  if(pagina > 3){
    document.getElementById("apri").classList.add("none");
  }
});
$('.chiudi').on( "click", function() {
  pagina -= 1;
  document.getElementById("p" + (pagina + 1)).classList.add("none");
  if((pagina + 1) == 1 || (pagina + 1) == 4){
    document.getElementById("p" + (pagina + 1) + "retro").classList.add("none");
  }
  document.getElementById("p" + pagina).classList.remove("none");
  document.getElementById("gira").classList.remove("none");
  if(pagina != 1 && pagina != 4){
    document.getElementById("gira").classList.add("none");
  }
  if(pagina < 4){
    document.getElementById("apri").classList.remove("none");
  }
  if(pagina < 2){
    document.getElementById("chiudi").classList.add("none");
  }
});
$('.gira').on( "click", function() {
  if(girato == false){
    document.getElementById("p" + pagina).classList.add("none");
    document.getElementById("p" + pagina + "retro").classList.remove("none");
  }
  if(girato == true){
    document.getElementById("p" + pagina).classList.remove("none");
    document.getElementById("p" + pagina + "retro").classList.add("none");
  }
  if(pagina < 4){
    document.getElementById("apri").classList.remove("none");
  }
  if(pagina < 2){
    document.getElementById("chiudi").classList.add("none");
  }
  if(pagina > 1){
    document.getElementById("chiudi").classList.remove("none");
  }
  if(pagina > 3){
    document.getElementById("apri").classList.add("none");
  }
  girato = !girato;
});

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });