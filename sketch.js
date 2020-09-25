
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(450, 200);

	keyPressed();

	engine = Engine.create();
	world = engine.world;

	box1 = new Box(300,130,15,110);
	//box1.setCollider("rectangle",300,130,15,110);
	box1.debug=true;
console.log("Box!"+ box1.x);
	box2 = new Box(340,185,85,15);	
	
	box3 = new Box(380,130,15,110);
	

	paper = new Paper(90,195,20); 
	
	ground = new Ground(200,height,450,20);
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  
  paper.display();
  
  
  
  box1.display();
  
  box2.display();
  
 box3.display();

  ground.display();
  
  }

 function keyPressed() {
	 if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:39,y:-49});
		console.log("keyPressed" + paper.body); 
	}
 }


