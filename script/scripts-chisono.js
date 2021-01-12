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
      document.getElementById("sticky-" + $(this).data('number')).style.marginTop = document.getElementById("pro-container-testo-" + $(this).data('number')).offsetHeight / 2 + "px";
      document.getElementById("sticky-" + $(this).data('number')).style.marginBottom = "-" + document.getElementById("pro-container-testo-" + $(this).data('number')).offsetHeight / 2 + "px";
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

function createMovers(){
    var max = 20;
    var width = "50vh";
    for (i = 0; i < max; i++) {
        var node = document.createElement("P");
        node.id = "mover-" + i;
        node.className = "moverdx";
        var textnode = document.createTextNode("samtoller3@gmail.com");
        node.appendChild(textnode);
        document.getElementById("containertext1").appendChild(node);

        var node1 = document.createElement("P");
        node1.id = "mover-" + i;
        node1.className = "moversx";
        var textnode1 = document.createTextNode("samtoller3@gmail.com");
        node1.appendChild(textnode1);
        document.getElementById("containertext2").appendChild(node1);

        document.getElementById("containertext1").style.width = "calc(" + max + " * " + width + ")";
        document.getElementById("containertext2").style.width = "calc(" + max + " * " + width + ")";
        document.getElementsByClassName("moverdx")[i].style.width = width;
        document.getElementsByClassName("moversx")[i].style.width = width;
    }
}
createMovers();

function numeriCasuali(){
    for (i = 1; i <= 30; i++) {
        var rand = Math.floor(Math.random() * 40) + 10;
        var randd = Math.floor(Math.random() * 5);
        var randdd = Math.floor(Math.random() * 2);
        document.getElementById("path" + i).style.animationDuration = rand + "s";
        document.getElementById("path" + i).style.animationDelay = "-" + randd + "s";
        if(randdd==0){
            document.getElementById("path" + i).style.animationDirection = "normal";
        }else{
            document.getElementById("path" + i).style.animationDirection = "reverse";
        }
    }
}

$('#contatti').mouseenter(function(){
    document.getElementById("cursor").classList.remove("cursor-color");
    document.getElementById("cursorbig").classList.remove("cursorbig-color");
    document.getElementById("cursorbig").style.transform = "scale(0)";
    document.getElementById("cursor").style.transform = "scale(1.5)";
});
$('#contatti').mouseleave(function(){
    document.getElementById("cursor").classList.add("cursor-color");
    document.getElementById("cursorbig").classList.add("cursorbig-color");
    document.getElementById("cursorbig").style.transform = "scale(1)";
    document.getElementById("cursor").style.transform = "scale(1)";
});

$('#scroll-down').mouseenter(function(){
    document.getElementById("cursor").classList.remove("cursor-color");
    document.getElementById("cursorbig").classList.remove("cursorbig-color");
    document.getElementById("cursorbig").style.transform = "scale(0)";
    document.getElementById("cursor").style.transform = "scale(1.5)";
});
$('#scroll-down').mouseleave(function(){
    document.getElementById("cursor").classList.add("cursor-color");
    document.getElementById("cursorbig").classList.add("cursorbig-color");
    document.getElementById("cursorbig").style.transform = "scale(1)";
    document.getElementById("cursor").style.transform = "scale(1)";
});

$('#indietro').mouseenter(function(){
    document.getElementById("cursor").classList.remove("cursor-color");
    document.getElementById("cursorbig").classList.remove("cursorbig-color");
    document.getElementById("cursorbig").style.transform = "scale(0)";
    document.getElementById("cursor").style.transform = "scale(1.5)";
});
$('#indietro').mouseleave(function(){
    document.getElementById("cursor").classList.add("cursor-color");
    document.getElementById("cursorbig").classList.add("cursorbig-color");
    document.getElementById("cursorbig").style.transform = "scale(1)";
    document.getElementById("cursor").style.transform = "scale(1)";
});

$('#container').mouseenter(function(){
    document.getElementById("cursor").classList.remove("cursor-color");
    document.getElementById("cursorbig").classList.remove("cursorbig-color");
});
$('#container').mouseleave(function(){
    document.getElementById("cursor").classList.add("cursor-color");
    document.getElementById("cursorbig").classList.add("cursorbig-color");
});

$('.bottone').mouseenter(function(){
    document.getElementById("cursorbig").style.transform = "scale(0)";
    document.getElementById("cursor").style.transform = "scale(1.5)";
});
$('.bottone').mouseleave(function(){
    document.getElementById("cursorbig").style.transform = "scale(1)";
    document.getElementById("cursor").style.transform = "scale(1)";
});


numeriCasuali();

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


function numeriCasualiImg(){
    for (i = 1; i <= 36; i++) {
        var rand = Math.floor(Math.random() * 500 + 500)/100;
        var randd = Math.floor(Math.random() * 6);
        var randdd = Math.floor(Math.random() * 2);
        document.getElementById("pathimg" + i).style.animationDuration = rand + "s";
        document.getElementById("pathimg" + i).style.animationDelay = "-" + randd + "s";
        if(randdd==0){
            document.getElementById("pathimg" + i).style.animationDirection = "normal";
        }else{
            document.getElementById("pathimg" + i).style.animationDirection = "reverse";
        }
    }
}

numeriCasualiImg();