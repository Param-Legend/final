

var Player,playerAnime1,playerAnime2,playerIm,jumpI;
var Land,Land2,LandImg,LandImg2
var invisibleground
var L2 = 1
var L1 = 0
var gameState = L1
function preload(){
  playerAnime1 = loadAnimation("p1.png","p2.png","p3.png","p4.png","p5.png","p6.png")
LandImg = loadImage("Land.png")
LandImg2 = loadImage("Land2.png")
playerIm = loadAnimation("p14.png","p14.png")
playerAnime2 = loadAnimation("p8.png","p10.png","p11.png","p12.png")
jumpI = loadAnimation("p16.png","p16.png")
}
function setup(){
createCanvas(displayWidth-100,displayHeight-100)

Player = createSprite(displayWidth/2-500,displayHeight/2,20,20)
Player.addAnimation("stop",playerIm)
Player.addAnimation("un",playerAnime1)
Player.addAnimation("run2",playerAnime2)
Player.addAnimation("jump",jumpI);
//Player.debug = true
Player.setCollider("rectangle",0,0,30,160,0);
Land = createSprite(displayWidth/3-300,displayHeight/2+150,40,20);
Land.addImage(LandImg);
//Land.debug=true
Land.setCollider("rectangle",-0,0,240,182,0)
Land2 = createSprite(displayWidth/3+100,displayHeight/2+0,40,20);
Land2.addImage(LandImg);
//Land.debug=true
Land2.setCollider("rectangle",-0,0,240,182,0)
invisibleground = createSprite(displayWidth/3-320,displayHeight/2+93,270,40)
invisibleground.visible = false
}

function draw(){
background("cyan")
Player.collide(Land)
Player.collide(Land2)
//Player.velocityX    = 5
//Land.velocityX    = 5
if(gameState === L1){
Land.visible = true
if(keyWentDown("RIGHT_ARROW")){
  Player.changeAnimation("un",playerAnime1)

Player.velocityX = 5
}
if(keyWentUp("RIGHT_ARROW")){
  Player.changeAnimation("stop",playerIm)

Player.velocityX = 0
}
if(keyWentDown("left_ARROW")){
  Player.changeAnimation("run2",playerAnime2)
  //Player.debug = true

Player.velocityX = -5
}
if(keyWentUp("left_ARROW")){
  Player.changeAnimation("stop",playerIm)

Player.velocityX = 0
}
if(keyWentDown("SPACE")){
  Player.velocityY = -19
  Player.changeAnimation("jump",jumpI)
//Player.velocityX = -5 
}
if(keyWentUp("SPACE")||Player.collide(Land2)){
  Player.changeAnimation("stop",playerIm)

Player.velocityY = 0
}
Player.velocityY = Player.velocityY + 0.8
//if(Player.x >displayWidth-100){
//camera.position.x = Player.x +500

//}


}

drawSprites()
}