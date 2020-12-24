
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,rope1,paper1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	



	engine = Engine.create();
	world = engine.world;

	
rope1=new rope(paperObject1.body,groundObject.body,-paperDiameter*2,0);
paper1=new paper;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



