
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var paper;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	box1= new Box(600,550,200,200);
	 //box2 = new Box(500,610,20,100);
	 //box3 = new Box(700,610,20,100);
	 paper=new Paper(150,600,50);
	 ground = new Ground(400,650,900,10);
}


function draw() {
  rectMode(CENTER);
  background("white");
  box1.display(); 
  //box2.display(); 
  //box3.display();
  paper.display();
  ground.display(); 
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:75})
	}
}



