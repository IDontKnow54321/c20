var fixedRect,movingRect;
var object0,object1;
function setup() {
  createCanvas(1000,600);
  fixedRect=createSprite(400, 200, 30, 80);
  movingRect= createSprite(600,200,80,30);
  object0=createSprite(100,400,30,40);
  object0.debug=true;
  object0.velocityX=5
  object1=createSprite(900,400,30,40);
  object1.debug=true;
  object1.velocityX=-5
  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(fixedRect.width/2+movingRect.width/2>movingRect.x-fixedRect.x &&
    fixedRect.width/2+movingRect.width/2>fixedRect.x-movingRect.x &&
    fixedRect.height/2+movingRect.height/2>fixedRect.y-movingRect.y &&
    fixedRect.height/2+movingRect.height/2>movingRect.y-fixedRect.y){
    fixedRect.shapeColor="blue";
  movingRect.shapeColor="blue";
  }
  else{
    fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
  }
  if(object0.width/2+object1.width/2>object0.x-object1.x&&
    object0.width/2+object1.width/2>object1.x-object0.x){
      object0.velocityX=object0.velocityX*(-1)
      object1.velocityX=object1.velocityX*(-1)
    }
    if(object0.height/2+object1.height/2>object0.y-object1.y&&
      object0.height/2+object1.height/2>object1.y-object0.y){
        object0.velocityY=object0.velocityY*(-1)
        object1.velocityY=object1.velocityY*(-1)
      }
  drawSprites();
}