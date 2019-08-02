var fixedRect, movingRect;

function setup() {
  fixedRect = createSprite(200,200,50,10);
  fixedRect.shapeColor = "blue";
  fixedRect.velocityX=3;

  movingRect = createSprite(100,100,80,50);
  movingRect.shapeColor = "blue";
  movingRect.velocityX=3;

  createCanvas(800,400);
}

function draw() {
  background(0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && fixedRect.x - movingRect.x < 
    movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 && fixedRect.y - movingRect.y < 
    movingRect.height/2 + fixedRect.height/2){
  
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "orange";
    
    movingRect.velocityX = movingRect.velocityX * -1;
    fixedRect.velocityX = fixedRect.velocityX * -1;

    movingRect.velocityY = movingRect.velocityY * -1;
    fixedRect.velocityY = fixedRect.velocityY * -1;
    
  }
  else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
    
  }


  
  drawSprites();
}
