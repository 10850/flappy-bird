var block = document.getElementById("block");
var hole = document.getElementById("hole");
var block2 = document.getElementById("block2");
var hole2 = document.getElementById("hole2");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
});


setInterval(function(){
    var characterTop = 
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if(jumping==0){
            character.style.top = (characterTop+3) + "px";  
        }
    
        var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        var holetop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
        var cTop = -(500-characterTop);
    

    
        if((characterTop>480)||((blockleft<20)&&(blockleft>-50)&&((cTop<holetop)||(cTop>holetop+120)))){
            alert("Game over. Score: "+(counter-1));
            character.style.top = 230 + "px";
            counter=0;
        }
}, 10);

function jump() {
    jumping = 0.5;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(counter<15)){
            character.style.top = (characterTop-3.5)+"px";
        }
         
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        
        jumpCount++;
        
    }, 10);
}

