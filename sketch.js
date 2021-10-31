var bunny; var bunnyImg
var target;
var edges;
var snakes, snakeGroup; var snakeImg;
var bgImg;
var carrotImg;

function preload(){
  bunnyImg = loadImage("bunnyImg.png")
  snakeImg= loadImage("snake.png")
  carrotImg = loadImage("carrot.png")
  bgImg = loadImage("bg.png")
}

function setup() {
  createCanvas(600,600);
  edges = createEdgeSprites()
  bunny = createSprite(40,550,30,30)
  target = createSprite(550,40,30,30)
  brick1 = createSprite(300,250,100,20)
  brick2 = createSprite(280,320,100,20)
  brick3 = createSprite(150,250,100,20)
  brick4 = createSprite(0,250,100,20)
  brick5 = createSprite(450,250,100,20)
  brick6 = createSprite(600,250,100,20)
  brick7 = createSprite(150,320,100,20)
  brick8 = createSprite(0,320,100,20)
  brick9 = createSprite(450,320,100,20)
  brick10 = createSprite(600,320,100,20)
  target.shapeColor = "green"
  brick1.shapeColor = "brown"
  brick2.shapeColor = "brown"
  brick3.shapeColor = "brown"
  brick4.shapeColor = "brown"
  brick5.shapeColor = "brown"
  brick6.shapeColor = "brown"
  brick7.shapeColor = "brown"
  brick8.shapeColor = "brown"
  brick9.shapeColor = "brown"
  brick10.shapeColor  = "brown"
  
  bunny.addImage(bunnyImg)
  bunny.scale=0.3
  target.addImage(carrotImg)
  target.scale=0.3
  snakeGroup= new Group()
}

function draw() {
  background(bgImg);
  
  if(keyDown("up")){
    bunny.y = bunny.y-3 
  }
  if(keyDown("down")){
    bunny.y = bunny.y+3
  }
  if(keyDown("left")){
    bunny.x= bunny.x-3
  }
  if(keyDown("right")){
    bunny.x = bunny.x+3
  }
  if(bunny.isTouching(target)){
    text("You Won",200,200)
  }
  if(bunny.isTouching(brick1)){
    text("You Lose",200,200)
  }
  if(bunny.isTouching(brick2)){
    text("You Lose",200,200)
  }
  if(bunny.isTouching(brick3)){
    text("You Lose",200,200)
  }
  if(bunny.isTouching(brick4)){
    text("You Lose",200,200)
  }
  if(bunny.isTouching(brick5)){
    text("You Lose",200,200)
  }
  if(bunny.isTouching(brick6)){
    text("You Lose",200,200)
  }
  if(bunny.isTouching(brick7)){
    text("You Lose",200,200)
  }
  if(bunny.isTouching(brick8)){
    text("You Lose",200,200)
  }
  if(bunny.isTouching(brick9)){
    text("You Lose",200,200)
  }
  if(bunny.isTouching(brick10)){
    text("You Lose",200,200)
  }

  generateSnakes()
  drawSprites()
}

function generateSnakes(){
  if(frameCount%30===0){
    var snakes = createSprite(600,random(70,520),random(30,120),5)
    snakes.shapeColor = 'yellow'
    snakes.addImage(snakeImg)
    snakes.scale=0.5
    snakes.velocityX=-6
    snakeGroup.add(snakes)

  }
  
}