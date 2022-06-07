var gato;
var perrosgroup;
var perrosImg;
var gatoImg;






function preload() {

perrosImg = loadImage("perrosfinal.png");  
gatoImg = loadImage("gatofinal.png");

}





function setup() {
  createCanvas(1300,1000);

for(var i = 0;i <8 ; i++){

var perro = createSprite(Math.round(random(100,1200)),Math.round(random(100,900)),10,10)
perro.addImage("perros",perrosImg)
perro.scale = 0.1;


}

}

function draw() {
  background("#2F1010");

var gato = createSprite(650,500,20,20);
 gato.addImage("gato",gatoImg)
 gato.scale = 0.1





  drawSprites()
}



function movimiento(){

if(keyIsDown)





}