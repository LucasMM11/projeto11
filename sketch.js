var sea,navio;
var seaImg,navioImg;


function preload(){

  seaImg = loadImage("sea.png");
  navioImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");



 
}

function setup(){
  createCanvas(400,400);
  background("blue")

  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5
  sea.scale = 0.3
  
  navio = createSprite(100,160,20,50);
  navio.addAnimation("navioImg",navioImg);
  navio.scale = 0.25

}

function draw() {
  background(0);
  sea.velocityX = -3
 
  
    drawSprites(); 

}
