const Engine = Matter.Engine;
const World = Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var box1;
var box2,box3,box4,box5;
var ground;
var pig1,pig2;
var bird;
var log1,log2,log3,log4;
function setup(){
 createCanvas(1200,400);

engine=Engine.create();
world=engine.world;

ground=new Ground(600,350,1200,10)
bird=new Bird(100,100)

box1=new Box(700,300,50,50);
pig1=new Pig(800,300)
box2=new Box(900,300,50,50);
log1=new Log(800,280,300,PI/2);

box3=new Box(700,240,50,50);
box4=new Box(900,240,50,50);
pig2=new Pig(800,240);
log2=new Log(800,200,300,PI/2);


}
function draw()
{
  background(0);
  Engine.update(engine)
  ground.display();
  box1.display();
  box2.display();
  pig1.display();
  bird.display();
  log1.display();

  box3.display();
  box4.display();
  pig2.display();
  log2.display();



}
