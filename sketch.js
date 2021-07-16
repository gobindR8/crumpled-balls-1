
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1
var ball1
var ground1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	dustbin1=new dustbin()
	ball1=new paper(100,400,50)
	ground1= new ground(350,700,1000,10)
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  drawSprites();
  dustbin1.display()
  ball1.display()
  ground1.display()
}

  function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball1.paperbody,ball1.paperbody.position,{x:85,y:-85})
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   
	   
	 }
   }




