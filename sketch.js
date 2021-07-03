var car,wall,weight,speed



function setup() {
  createCanvas(1600,400);
  
  speed=random(50,100)
  weight=random(400,1500)
  wall=createSprite(1500,200,25,370)
  car=createSprite(100,100,30,30)
  car.velocityX=speed
  car.shapeColor="blue"
  wall.shapeColor="purple"
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0
    var d=0.5*weight*speed*speed/22500
    if(d>180){
    car.shapeColor="red"
    }
    else if(d>100){
      car.shapeColor="yellow"
    }
    else {
     car.shapeColor="green" 
    }
  }
} 