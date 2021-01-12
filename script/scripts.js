


$(document).ready(function() {
    var mouseX = 0, mouseY = 0;
    var mouseXs = 0, mouseYs = 0;
    var xp = 0, yp = 0;
    
    $(document).mousemove(function(e){
        mouseX = e.pageX - 30;
        mouseY = e.pageY - 30; 
        mouseXs = e.pageX;
        mouseYs = e.pageY; 
        
        $("#cursor").css({left: mouseXs - 5, top: mouseYs - 5});
        
    });

    setInterval(function(){
        xp += ((mouseX - xp)/6);
        yp += ((mouseY - yp)/6);
        $("#cursorbig").css({left: xp +'px', top: yp +'px'});
    }, 15);
});

var pos = 0;
var colore = 0;
$(function() {
    $('#chisono').mouseenter(function(){
        changeColor1();
        document.body.classList.add("uno");
        document.body.classList.remove("home");
        colore = 1;
        document.getElementById("cursorbig").style.transform = "scale(0)";
        document.getElementById("cursor").style.transform = "scale(1.5)";
    });
    $('#chisono').mouseleave(function(){
        colore = 0;
        document.body.classList.add("home");
        document.body.classList.remove("uno");
        document.getElementById("cursorbig").style.transform = "scale(1)";
        document.getElementById("cursor").style.transform = "scale(1)";
    });

    $('#curriculum').mouseenter(function(){
        changeColor2();
        document.body.classList.add("due");
        document.body.classList.remove("home");
        colore = 2;
        document.getElementById("cursorbig").style.transform = "scale(0)";
        document.getElementById("cursor").style.transform = "scale(1.5)";
    });
    $('#curriculum').mouseleave(function(){
        colore = 0;
        document.body.classList.add("home");
        document.body.classList.remove("due");
        document.getElementById("cursorbig").style.transform = "scale(1)";
        
        document.getElementById("cursor").style.transform = "scale(1)";
    });

    $('#portfolio').mouseenter(function(){
        changeColor3();
        document.body.classList.add("tre");
        document.body.classList.remove("home");
        colore = 3;
        document.getElementById("cursorbig").style.transform = "scale(0)";
        document.getElementById("cursor").style.transform = "scale(1.5)";
    });
    $('#portfolio').mouseleave(function(){
        colore = 0;
        document.body.classList.add("home");
        document.body.classList.remove("tre");
        document.getElementById("cursorbig").style.transform = "scale(1)";
        document.getElementById("cursor").style.transform = "scale(1)";
    });

    $('#contatti').mouseenter(function(){
        changeColor4();
        document.body.classList.add("quattro");
        document.body.classList.remove("home");
        colore = 4;
        document.getElementById("cursorbig").style.transform = "scale(0)";
        document.getElementById("cursor").style.transform = "scale(1.5)";
    });
    $('#contatti').mouseleave(function(){
        colore = 0;
        document.body.classList.add("home");
        document.body.classList.remove("quattro");
        document.getElementById("cursorbig").style.transform = "scale(1)";
        document.getElementById("cursor").style.transform = "scale(1)";
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
});
var altezza = 27;
var len = [4,7,8,8,8,8,8,8,9,9,9,8,7,6,6,7,8,11,15,18,20,21,21,22,22,23,23]
var numbers = [];
for(var i=0; i<altezza; i++) {
    numbers[i] = new Array();
}

var letters1 = [];
for(var i=0; i<altezza; i++) {
    letters1[i] = new Array();
}

var letters2 = [];
for(var i=0; i<altezza; i++) {
    letters2[i] = new Array();
}

var letters3 = [];
for(var i=0; i<altezza; i++) {
    letters3[i] = new Array();
}

var letters4 = [];
for(var i=0; i<altezza; i++) {
    letters4[i] = new Array();
}
    
const simboli = ["1", "0"];

function randomNumbers(){
    for(h = 0; h < altezza; h++) {
        var node1 = document.createElement("P");
        node1.className = "codici";
        node1.id = "codici" + h;
        document.getElementById("container-codici").appendChild(node1);
        for (i = 0; i < len[h]; i++) {
            var lunghezza = Math.floor(Math.random() * simboli.length);
            numbers[h][i] = simboli[lunghezza];

            var x = numbers[h][i].toString();

            var node = document.createElement("SPAN");
            node.id = "span" + h + i;
            var textnode = document.createTextNode(x);

            node.appendChild(textnode);
            document.getElementById("codici" + h).appendChild(node);
        }
    }
}

function randomLetters1(){
    var word = ["C","H","I","·","S","O","N","O","·","C","H","I","·","S","O","N","O","·","C","H","I","·","S","O","N","O","·","C","H","I","·","S","O","N","O","·","C","H","I","·","S","O","N","O"]
    for(h = 0; h < altezza; h++) {
        random = Math.floor(Math.random() * 8);
        for (i = 0; i < len[h]; i++) {
            letters1[h][i] = word[i + random];
        }
    }
}

function randomLetters2(){
    var word = ["C","U","R","R","I","C","U","L","U","M","·","C","U","R","R","I","C","U","L","U","M","·","C","U","R","R","I","C","U","L","U","M","·","C","U","R","R","I","C","U","L","U","M"]
    for(h = 0; h < altezza; h++) {
        random = Math.floor(Math.random() * 10);
        for (i = 0; i < len[h]; i++) {
            letters2[h][i] = word[i + random];
        }
    }
}

function randomLetters3(){
    var word = ["P","O","R","T","F","O","L","I","O","·","P","O","R","T","F","O","L","I","O","·","P","O","R","T","F","O","L","I","O","·","P","O","R","T","F","O","L","I","O"]
    for(h = 0; h < altezza; h++) {
        random = Math.floor(Math.random() * 9);
        for (i = 0; i < len[h]; i++) {
            letters3[h][i] = word[i + random];
        }
    }
}

function randomLetters4(){
    var word = ["C","O","N","T","A","T","T","I","·","C","O","N","T","A","T","T","I","·","C","O","N","T","A","T","T","I","·","C","O","N","T","A","T","T","I"]
    for(h = 0; h < altezza; h++) {
        random = Math.floor(Math.random() * 8);
        for (i = 0; i < len[h]; i++) {
            letters4[h][i] = word[i + random];
        }
    }
}

randomNumbers();
randomLetters1();
randomLetters2();
randomLetters3();
randomLetters4();

var velocita = 25;
function changeNumbers(){
    var random = Math.floor(Math.random() * velocita);
    for (i = 0; i < random; i++) {
        var randomh = Math.floor(Math.random() * altezza);
        var randomi = Math.floor(Math.random() * len.length);
        if(numbers[randomh][randomi] != null){
            if(numbers[randomh][randomi] == 0){
                numbers[randomh][randomi] = 1;
            }else{
                numbers[randomh][randomi] = 0;
            }
            var x = numbers[randomh][randomi].toString();
            document.getElementById("span" + randomh + randomi).innerHTML = x;
            document.getElementById("span" + randomh + randomi).classList.remove("hover1");
            document.getElementById("span" + randomh + randomi).classList.remove("hover2");
            document.getElementById("span" + randomh + randomi).classList.remove("hover3");
            document.getElementById("span" + randomh + randomi).classList.remove("hover4");
        }
    }

}

(function loop() {
    var rand = Math.round(Math.random() * 10);
    setTimeout(function() {
            if(colore == 0){
                changeNumbers();
            }
            if(colore == 1){
                changeColor1();
            }
            if(colore == 2){
                changeColor2();
            }
            if(colore == 3){
                changeColor3();
            }
            if(colore == 4){
                changeColor4();
            }
            loop();  
    }, rand);
}());


function changeColor1(){
    var random = Math.floor(Math.random() * velocita);
    for (i = 0; i < random; i++) {
        var randomh = Math.floor(Math.random() * altezza);
        var randomi = Math.floor(Math.random() * len.length);
        if(numbers[randomh][randomi] != null){
            document.getElementById("span" + randomh + randomi).innerHTML = letters1[randomh][randomi];
            document.getElementById("span" + randomh + randomi).classList.add("hover1");
            document.getElementById("span" + randomh + randomi).classList.remove("hover2");
            document.getElementById("span" + randomh + randomi).classList.remove("hover3");
            document.getElementById("span" + randomh + randomi).classList.remove("hover4");
        }
    }
}

function changeColor2(){
    var random = Math.floor(Math.random() * velocita);
    for (i = 0; i < random; i++) {
        var randomh = Math.floor(Math.random() * altezza);
        var randomi = Math.floor(Math.random() * len.length);
        if(numbers[randomh][randomi] != null){
            document.getElementById("span" + randomh + randomi).innerHTML = letters2[randomh][randomi];
            document.getElementById("span" + randomh + randomi).classList.add("hover2");
            document.getElementById("span" + randomh + randomi).classList.remove("hover1");
            document.getElementById("span" + randomh + randomi).classList.remove("hover3");
            document.getElementById("span" + randomh + randomi).classList.remove("hover4");
        }
    }
}

function changeColor3(){
    var random = Math.floor(Math.random() * velocita);
    for (i = 0; i < random; i++) {
        var randomh = Math.floor(Math.random() * altezza);
        var randomi = Math.floor(Math.random() * len.length);
        if(numbers[randomh][randomi] != null){
            document.getElementById("span" + randomh + randomi).innerHTML = letters3[randomh][randomi];
            document.getElementById("span" + randomh + randomi).classList.add("hover3");
            document.getElementById("span" + randomh + randomi).classList.remove("hover2");
            document.getElementById("span" + randomh + randomi).classList.remove("hover1");
            document.getElementById("span" + randomh + randomi).classList.remove("hover4");
        }
    }
}

function changeColor4(){
    var random = Math.floor(Math.random() * velocita);
    for (i = 0; i < random; i++) {
        var randomh = Math.floor(Math.random() * altezza);
        var randomi = Math.floor(Math.random() * len.length);
        if(numbers[randomh][randomi] != null){
            document.getElementById("span" + randomh + randomi).innerHTML = letters4[randomh][randomi];
            document.getElementById("span" + randomh + randomi).classList.add("hover4");
            document.getElementById("span" + randomh + randomi).classList.remove("hover2");
            document.getElementById("span" + randomh + randomi).classList.remove("hover1");
            document.getElementById("span" + randomh + randomi).classList.remove("hover3");
        }
    }
}

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

numeriCasuali();
 
$(document).ready(function() {
    setTimeout(function(){
        document.getElementById("loading").style.animation = "fadeIn 0.5s";
    }, 3000);
    setTimeout(function(){
        document.getElementById("loading").style.display = "none";
        document.getElementById("chisono").style.top = "0";
        document.getElementById("chisono").style.opacity = "1";
    }, 3500);
    setTimeout(function(){
        document.getElementById("curriculum").style.top = "0";
        document.getElementById("curriculum").style.opacity = "1";
    }, 3700);
    setTimeout(function(){
        document.getElementById("portfolio").style.top = "0";
        document.getElementById("portfolio").style.opacity = "1";
    }, 3900);

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