
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof
var bob1 , bob2 , bob3
var chain1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Roof(350,100,600,20)
	bob1 = new Ball(100,500,50)
	 chain1 = new Chain(bob1.body,roof.body,-bob1Diameter*2,0)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100,0,0);
  Engine.update(engine);	
  
  roof.display()
  bob1.display()
  chain1.display()
  //drawSprites();
 
}



