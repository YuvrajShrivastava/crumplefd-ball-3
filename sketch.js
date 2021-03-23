
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var ball,ground1,louncher1

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(50,600,12);
	ground1 = new Ground(400,750,800,10);
  ground2 = new Ground(400,50,800,10);

s1= new Dustbin(700,735,100,20);
s2= new Dustbin(650,705,20,100);
s3= new Dustbin(750,705,20,100);

louncher1 = new Louncher(ball.body,{x:50,y:600})

var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1200,
    height: 700,
    wireframes: false
  }
});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(155);
  //ball.display();
  ball.display();
  ground1.display();
  ground2.display();
  s1.display();
  s2.display();
  s3.display();
 // keyPressed();
  drawSprites();
 
}

/*function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0.1,y:-0.5})
   
	}
}*/

function mouseDragged() {
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
      louncher1.fly();
    
  }
