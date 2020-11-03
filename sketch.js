
var monkey , monkey_running ;
var banana ,bananaImage, obstacle, obstacleImage ;
var FoodGroup, obstacleGroup ;
var score ,ground ;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  
  
   FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  var survivalTime=0; 
  
 monkey = createSprite(80,315,20,20);
 monkey.addAnimation("moving",monkey_running);
 monkey.scale = 0.1;
  
  
 ground = createSprite(400,350,900,10);
 ground.velocityX = -8;
 ground.x=ground.width/2;
 console.log(ground.x); 
  
  
  
}


function draw() {
  
  background("skyblue");
  
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY +0.8;
  monkey.collide(ground);
  
  stroke("red");
 textSize(20);
 fill("red");
 text("score: " + score ,100,100);
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime :"+ survivalTime,100,50);
  
  food();
  obstacles();
  
   drawSprites();
}

function food (){
   if (frameCount % 80 === 0) {
    banana = createSprite(400,350,40,10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200));
    banana.scale = 0.1;
    
    banana.velocityX = -5;
    banana.lifetime = -1;
    
    FoodGroup.add(banana);
  }
}


function obstacles() {
  if (frameCount % 300 === 0){
    obstacle = createSprite(250,325,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -5;
    obstacle.lifetime = -1;
    obstacle.scale = 0.1 ;
     obstacleGroup.add(obstacle);
  }
}




