var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var wood1,wood2,wood3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER); 
	engine=Engine.create();
	packageSprite=engine.world
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	wood1=createSprite(width/2,height-50,200,20);
	wood2=createSprite(290,height-90,20,100);
    wood3=createSprite(490,height-90,20,100);
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine); 

  wood1.shapeColor="red";
  wood2.shapeColor="red";
  wood3.shapeColor="red";

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  
  

  drawSprites()
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false)
    
  }
}

function still(){
	if(packageSprite.Y=650){
		packageSprite.isStatic=true

	}
}
