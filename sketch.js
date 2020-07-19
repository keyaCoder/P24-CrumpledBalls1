var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var paper, dustbin;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;


	//Create a Ground
	ground = new Ground(width / 2,height - 20,800,40);

	// why can't i make the paper sit on ground??????????????
	paper = new Paper(50, height - 100, 50);

	dustbin = new Dustbin(600, 595);


	Engine.run(engine);
  
}


function draw() {
//  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  dustbin.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(paper.body, paper.body.position, {x:320, y:-485})
	}
}

