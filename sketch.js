var boy 
var  police
var boyImage,policeImage
var obstacle,obstacleGroup
var ground
function preload(){
    //boyImage=loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png","boy7.png","boy8.png")
    //policeImage=loadAnimation("poli1.png","poli2.png","poli3.png","poli4.png","poli5.png","poli6.png","poli7.png","poli8.png")
}
 
function setup(){
    createCanvas(800,500)
    ground=createSprite(400,460,800,30)
    boy=createSprite(400,420,50,50)
    //boy.addAnimation("theaf",boyImage)
    boy.shapeColor="red"
    police=createSprite(700,420,50,50)
   police.shapeColor="blue"
   obstacleGroup=new Group()
}

function draw(){
    background("black")
    if(keyDown("space")){
        boy.velocityY=-4
    }
    boy.velocityY=boy.velocityY+0.8
    spawnObstacles()
    boy.collide(ground)
    drawSprites()
}
function spawnObstacles(){
    if(frameCount%70===0){
        obstacle=createSprite(0,420,50,50)
        obstacle.shapeColor="green"
        obstacle.velocityX=3
        obstacleGroup.add(obstacle)
        
    }
}
    
