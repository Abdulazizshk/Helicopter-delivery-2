var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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

	engine = Engine.create();
	world = engine.world;
	
	redBox=Bodies.rectangle(310,400,10,100);
	redBox2=Bodies.rectangle(434,60,10,100)
	
	//redBox3=Bodies.rectangle(345,610,20,100)
	//redBox.angle

	World.add(world,redBox2)
	World.add(world,redBox);
	
    
	packageSprite=createSprite(width/2, 10, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0; 

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.50, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 text(mouseX+";"+mouseY,mouseX,mouseY);
  drawSprites();
  rect(redBox.position.x,redBox.position.y,20,100);
  rect(redBox2.position.x,redBox.position.y,20,100);
  //rect(redBox3.position.x,redBox3.position.y,20,100)
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	packageSprite.x= packageBody.position.x
	packageSprite.y= packageBody.position.y
	
	packageSprite.scale=0.150;
	packageBody.isStatic=false;
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



