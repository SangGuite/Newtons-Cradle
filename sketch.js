
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var canvasmouse;
var mConstraint;
var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var string1,string2,string3,string4,string5;

function setup() {
	createCanvas(windowWidth/2, windowHeight/1.5);
	engine = Engine.create();
	world = engine.world;

	pendulum1 = new Pendulum(200,400,"grey");
	pendulum2 = new Pendulum(260,400,"grey");
	pendulum3 = new Pendulum(320,400,"grey");
	pendulum4 = new Pendulum(380,400,"grey");
	pendulum5 = new Pendulum(440,400,"grey");
	string1 = new Sling(pendulum1.body, {x:200, y:50});
	string2 = new Sling(pendulum2.body, {x:260, y:50});
	string3 = new Sling(pendulum3.body, {x:320, y:50});
	string4 = new Sling(pendulum4.body, {x:380, y:50});
	string5 = new Sling(pendulum5.body, {x:440, y:50});

	Engine.run(engine);
  
}

function draw() {
	background("black");
	Engine.update(engine);
	  
	pendulum1.display();
	pendulum2.display();
	pendulum3.display();
	pendulum4.display();
	pendulum5.display();
	string1.display();
	string2.display();
	string3.display();
	string4.display();
	string5.display();
  
  	drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(pendulum1.body, {x:mouseX, y:mouseY});
}



