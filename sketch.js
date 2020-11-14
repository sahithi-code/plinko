const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var plinkos=[];
var particles=[];
var divisions=[];
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
 gr = new Ground (240,780,800,20)
di = new Divisions(5,630,10,300)
di2 = new Divisions(80,630,10,300)
di3 = new Divisions(160,630,10,300)
di4 = new Divisions(240,630,10,300)
di5 = new Divisions(320,630,10,300)
di6 = new Divisions(400,630,10,300)
di7 = new Divisions(475,630,10,300)

for (var j=40; j <= width ;j=j+50){

  plinkos.push(new Plinko(j,75));
  
   }
   



function draw() {
  background(0);  

  gr.display();
  di.display();
  di2.display();
  di3.display();
  di4 .display();
  di5.display();
  di6.display();
  di7.display();
  plinkos.display();
 
  Engine.update(engine);
  drawSprites();
}}