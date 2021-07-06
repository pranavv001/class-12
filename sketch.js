var trex, trex_running, edges;
var groundImage;
var ground
var invisibleGround
var cloud
var cloudImg

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
  cloudImg = loadImage("cloud.png")
}

function setup(){
  createCanvas(600,200);
  ground = createSprite(300, 180, 1200, 10)
  ground.addImage(groundImage)
  
  // creating trex
      trex = createSprite(50,160,20,50);
      trex.addAnimation("running", trex_running);
      edges = createEdgeSprites();
      trex.scale = 0.5;
      trex.x = 50
 invisibleGround = createSprite(300, 184, 1200, 10)
  invisibleGround.visible = false
}


function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  //console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")&&trex.y>=155){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(invisibleGround)
  drawSprites();
  ground.velocityX = -5
  if (ground.x<=0) {
    ground.x = ground.width/2
  }

spawnClouds()

}

function spawnClouds() {
  if (frameCount % 60===0 ) {
    
  
  cloud = createSprite(610, 10, 50, 50)
  cloud.addImage(cloudImg)
  cloud.velocityX =  -5
  cloud.y = Math.round(random(10, 100))
  trex.depth = cloud.depth+1
  console.log(trex.depth)
  console.log(cloud.depth)

  }

}