var min,randomTime
var timerValue;
var startButton;
var start;
var gameState;
var START = 0;
var PLAY = 1;
var block = []
var timesUp

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var engine,world;

function preload(){

  FC = loadImage("FC.png");
  StartButton = loadImage("T-Block Start.png");
  BG = loadImage("BG.png");
  TU = loadImage("Times Up!.png");

}

function setup(){

  createCanvas(1650,900);

  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt); 
  canvasmouse.pixelRatio = pixelDensity(); 
  let options = { mouse: canvasmouse };
  mConstraint = MouseConstraint.create(engine, options); World.add(world, mConstraint);

  randomTime=Math.round(random(100,180));
  min=randomTime;
  timerValue=min;
  setInterval(timeIt,500);

  spawnCubes();

  timesUp = createSprite(10000000,10000000);

  start = createSprite(250,510);
  start.addImage(StartButton);
  start.scale = 0.1;

  barriers = new Barriers();

  ground = new Ground();

  ruler = new Ruler(0,random(700,800));

  ruler.body.position.y = ground.body.position.y - ruler.height/2 + 65;

  gameState = START;
  
}

function draw(){

  Engine.update(engine);

//Start State

  if(gameState === START){

    background(FC); 

  }

  if(gameState === PLAY){
    
    background(BG); 

    ground.display();

    start.x = 10000;
    start.y = 10000;

    for(r = 0; r < block.length; r++){

      block[r].display();
  
    }

    ruler.display();

    if(timerValue>0){

      push ();

        fill("white");
        textSize(50);
        text(timerValue + " SECONDS", 100,100);

      pop ();

     }
    
    if(timerValue===0){

      timesUp.addImage(TU);
      timesUp.x = width/2;
      timesUp.y = height/2
      timesUp.scale = 0.3

    }

  }

  if(mousePressedOver(start)){

    gameState = PLAY;

  }

  drawSprites();

}

function spawnCubes(){

  var r = (Math.round(random(10,20)));

  for(i = 0; i < r; i++){

    block.push(new Block(random(100,450),100));

  }

}

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
  
}