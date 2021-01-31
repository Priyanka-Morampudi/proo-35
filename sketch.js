var balloon, background;

function preload(){
  backgroundImg = loadImage("images/Hot Air Ballon-01.png");
  balloonImg = loadAnimation("images/Hot Air Ballon-02.png","images/Hot Air Ballon-03.png","images/Hot Air Ballon-04.png");

}

function setup() {
  
  
  createCanvas(500,500);

  balloon = createSprite(100,400,20,20);
  balloon.addAnimation("balloon",balloonImg);
  balloon.scale = 0.4;
  
}

function draw() {
  background(backgroundImg); 

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x -10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x +10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y -10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y +10;
  }
  drawSprites();
}