const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, enemy1,enemy2;
var backgroundImg,platform;
var me, slingshot;
var bg,score=0;

var gameState = "onSling";

function preload() {
   backgroundImg = loadImage("background.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    enemy1 = new Enemy(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    enemy2 = new Enemy(810, 220);

    box6 = new Box(700,160,70,70);
    box7 = new Box(920,160,70,70);
    enemy5 = new Enemy(810, 120);
    log2 = new Log(810,100,300, PI/2);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,40,70,70);
    log4 = new Log(760,10,150, PI/5);
    log5 = new Log(870,10,150, -PI/6);

    me = new Me(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(me.body,{x:200, y:50});
     

}

function draw(){
    background(backgroundImg);
    noStroke();
    textSize(35);
    fill("black");
    text("Score " + score,width-300,50);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    enemy1.display();
    enemy1.score();
    log1.display();

    box3.display();
    box4.display();
    enemy2.display();
    enemy2.score();
    log3.display();

    enemy5.display();
    box6.display();
    box7.display();
    enemy5.score();
    log2.display();

    box5.display();
    log4.display();
    log5.display();

   
    me.display();
    platform.display();
    slingshot.display();   
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(me.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && me.body.speed<1){
        slingshot.attach(me.body);
    }
}