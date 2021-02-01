
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	var canvas= createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground= new Ground(500,height,1000,20);
	hammer= new Hammer(100,100,80,30);
	stone= new Stone(500,330,50,50);
	rubber=new Rubber(800,390,50);

	sand1=new Sand(400,380,5);
	sand2=new Sand(610,380,5);
	sand3=new Sand(620,380,5);
	sand4=new Sand(380,380,5);
	sand5=new Sand(390,380,5);
	sand6=new Sand(670,380,5);

	iron=new Iron(300,350,60,40);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  Engine.update(engine);

  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
 
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();

  iron.display();
  
}



