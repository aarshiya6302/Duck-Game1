const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world
var duck, bear1
var movingrock1, obstaclegroup

function preload(){
duckIMG=loadImage("pictures/duck.png")
cowIMG=loadImage("pictures/cow.png")
bearIMG=loadImage("pictures/BadBear.png")
backgroundIMG=loadImage("pictures/Backdrop 2.png")
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(800,1000);
  
  ground=createSprite(400,990,800,20)

  //duck=createSprite(400,-2500,200,200)
  duck=createSprite(70,930,200,200)
  duck.addImage(duckIMG)
  duck.scale=0.25;


  section1=createSprite(250,750,600,15)
  section2=createSprite(575,400,600,15)
  section3=createSprite(100,200,600,15)


  block1=createSprite(650,965,300,50)
  block2=createSprite(680,900,240,50)
  block3=createSprite(720,835,200,50)
 
  block4=createSprite(650,375,300,20);
  block5=createSprite(680,320,240,20)
  block6=createSprite(720,265,200,20)
  
  block7=createSprite(10,-300,200,10)
  block8=createSprite(500,-650,600,10)

  movingrock1=createSprite(70,700,150,20);
  movingrock1.velocityY=-0.5;
  
  side1=createSprite(1,500,10,1000000)
  side2=createSprite(800,500,10,1000000);
  
  invisible1=createSprite(400,-100,1,1)
  invisible2=createSprite(400,-400,1,1)
  invisible3=createSprite(400,-1000,1,1)
  invisible4=createSprite(400,-1500,1,1)
  invisible5=createSprite(400,-2000,1,1)

  cow=createSprite(400,-2260,30,30)
  cow.addImage(cowIMG)
  cow.scale=1.5;

  
  bear1=createSprite(200,-400,10,10)
  bear1.addImage(bearIMG)
  bear1.scale=0.75
  bear1.velocityX=-5

  bear2=createSprite(200,-1600,10,10)
  bear2.addImage(bearIMG)
  bear2.scale=0.5
  bear2.velocityX=-5

  bear3=createSprite(700,-1800,10,10)
  bear3.addImage(bearIMG)
  bear3.scale=0.5
  bear3.velocityX=5

  bear4=createSprite(200,-2000,10,10)
  bear4.addImage(bearIMG)
  bear4.scale=0.5
  bear4.velocityX=-5

  movingblock1=createSprite(300,-900,600,10)
  movingblock1.velocityX=7
  movingblock2=createSprite(700,-1050,600,10)
  movingblock2.velocityX=-7
  movingblock3=createSprite(300,-1200,600,10)
  movingblock3.velocityX=7
  movingblock4=createSprite(700,-1350,600,10)
  movingblock4.velocityX=-7


 block9=createSprite(100,-1500,300,10)
 block10=createSprite(400,-2200,300,10)
 
  
}

function draw() {
  background(backgroundIMG);  



  duck.collide(ground);
  duck.collide(block1);
  duck.collide(section1);
  duck.collide(block2);
  duck.collide(block3);
  duck.collide(movingrock1);
  duck.collide(section2);
  movingrock1.collide(section3);
  duck.collide(section3);
  duck.collide(block4);
  duck.collide(block5);
  duck.collide(block6);
  duck.collide(block7)

  duck.collide(side1)
  duck.collide(side2)
  duck.collide(block8)
  
  duck.collide(movingblock1)
  duck.collide(movingblock2)
  duck.collide(movingblock3)
  duck.collide(movingblock4)
  duck.collide(block9)
  duck.collide(block10)

  bear1.bounceOff(side1)
  bear1.bounceOff(side2)

  bear2.bounceOff(side1)
  bear2.bounceOff(side2)

  bear3.bounceOff(side1)
  bear3.bounceOff(side2)

  bear4.bounceOff(side1)
  bear4.bounceOff(side2)

  movingblock1.bounceOff(side1)
  movingblock1.bounceOff(side2)

  movingblock2.bounceOff(side1)
  movingblock2.bounceOff(side2)

  movingblock3.bounceOff(side1)
  movingblock3.bounceOff(side2)

  movingblock4.bounceOff(side1)
  movingblock4.bounceOff(side2)

  fill("blue")

  if(duck.y<100){
  camera.position.y=invisible1.y;
}

if(duck.y<-300){
  camera.position.y=invisible2.y;
}

if(duck.y<-700){
  camera.position.y=invisible3.y;
}

if(duck.y<-1350){
  camera.position.y=invisible4.y;
}

if(duck.y<-1650){
  camera.position.y=invisible5.y;
}


if(duck.collide(bear1)){
  duck.y=930;
}
 
if(duck.collide(bear2)){
  duck.y=930;
}

if(duck.collide(bear3)){
  duck.y=930;
}


if(duck.collide(bear4)){
  duck.y=930;
}


if(keyWentDown(UP_ARROW)){
    duck.y=duck.y-70
  }

  if(keyDown(DOWN_ARROW)){
    duck.y=duck.y+10
  }

  if(keyDown(RIGHT_ARROW)){
    duck.x=duck.x+10
  }

  if(keyDown(LEFT_ARROW)){
    duck.x=duck.x-10
  }

  duck.y=duck.y+10



  //tiltingblock.rotate();
drawSprites();
Engine.update (engine);
}

