var helicopterIMG, helicopterSprite, packageSprite,packageIMG,box1sprite,box2sprite,box3sprite;
var packageBody,ground;
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
	createCanvas(600, 600);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(0)

	box1sprite=createSprite(270,560,200,20);
	box1sprite.shapeColor=("red")

	box2sprite=createSprite(370,520,20,100);
	box2sprite.shapeColor=("red")

	box3sprite=createSprite(170,520,20,100);
	box3sprite.shapeColor=("red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1,isStatic : true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	box1 = Bodies.rectangle(270,560,200,20,{isStatic:true});
	World.add(world,box1);

	box2 = Bodies.rectangle(370,520,20,100,{isStatic:true});
	World.add(world,box2);

	box3 = Bodies.rectangle(170,520,20,100,{isStatic:true});
	World.add(world,box3);

	Engine.run(engine);
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody,false)
}
}
