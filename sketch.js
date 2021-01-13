const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var ground1;

var box1,box2, box3,box4,box5;
var pig1, pig2;
var log, log2, log3,log4;
var bird;

function setup()

{

    createCanvas(1200,600);
    myEngine=Engine.create();
    myWorld=myEngine.world;

    
    ground1=new Ground(600,height,1200,20);
    box1=new Box(700,300,70,70);
    box2=new Box(900,300,70,70);
    box3=new Box(700,260,70,70);
    box4=new Box(900,260,70,70);
    box5=new Box(800,240,70,70);
    pig1=new Pig(800,310);
    pig2=new Pig(800,260);
    log=new Log(800,280,290,PI/2);
    log2=new Log(800,250,290,PI/2);
    log3=new Log(750,230,150,PI/7);
    log4-new Log(870,120,150,-PI/7);
    bird-new Bird(200,200)
}

function draw()
{
 background("black");
 Engine.update(myEngine);


 //bird.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 ground1.display();
 pig1.display();
 pig2.display();
 log.display();
 log2.display();
 log3.display();
 log4.display();
 
 

}