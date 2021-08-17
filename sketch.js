const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var base2
var base1
var player
var computer

 


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
base2=new ComputerBase( 1000,random(450,height-300),100,100)
base1=new PlayerBase(300,random(450,height-300),100,100)
player=new Player(300,base1.body.position.y-125,50,180)
computer=new Computer(1000,base2.body.position.y-125,50,180)
 }


function draw() {

  background("GREY");

  Engine.update(engine);

  // Title
  fill("PURPLE");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 

base2.display()
base1.display()

   //display Player and computerplayer
   player.display()
   computer.display()

}
