const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var base1,base2;
var polygon;
var polygonImg;
function preload(){
polygonImg=loadImage("polygon.png")
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground=new Ground(600,590,1200,12)
base1=new Ground(500,308,287,12);
base2=new Ground(930,197,240,12);
box=new Box(394,280,30,40);
box2=new Box(430,280,30,40);
box3=new Box(460,280,30,40);
box4=new Box(490,280,30,40);
box5=new Box(515,280,30,40);
box6=new Box(545,280,30,40);
box7=new Box(575,280,30,40);
box8=new Box(605,280,30,40);
box9=new Box(425,240,30,40);
box10=new Box(455,240,30,40);
box11=new Box(485,240,30,40);
box12=new Box(515,240,30,40);
box13=new Box(545,240,30,40);
box14=new Box(575,240,30,40);
box15=new Box(455,200,30,40);
box16=new Box(485,200,30,40);
box17=new Box(515,200,30,40);
box18=new Box(545,200,30,40);
box19=new Box(485,160,30,40);
box20=new Box(515,160,30,40);
box21=new Box(499,120,30,40);



box22=new Box(855,170,30,40);
box23=new Box(885,170,30,40);
box24=new Box(915,170,30,40);
box25=new Box(945,170,30,40);
box26=new Box(975,170,30,40);
box27=new Box(1005,170,30,40);
box28=new Box(885,130,30,40);
box29=new Box(915,130,30,40);
box30=new Box(945,130,30,40);
box31=new Box(975,130,30,40);
box32=new Box(915,90,30,40);
box33=new Box(945,90,30,40);
box34=new Box(928,50,30,40);

 polygon=Bodies.circle(50,200,20);
World.add(world,polygon);

slingshot=new Chain(this.polygon,{x:160,y:150});


}
function draw(){
    background("grey");

   Engine.update(engine);

    ground.display();

    
    base1.display();
    base2.display();
    box.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();

   // fill("lightblue")
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
   
    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,40,40);

   slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});

}
function mouseReleased(){
    slingshot.fly();
}
