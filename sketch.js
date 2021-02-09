var girl, img
var edges
var score = 0
var gamestate = "play";
var lives = 3;

function preload(){
img = loadImage("girl.png")
run = loadAnimation("run1.png","run2.png","run3.png","run4.png","run5.png","run6.png")
runLeft = loadAnimation("run1-2.png","run2-2.png","run3-2.png","run4-2.png","run5-2.png","run6-2.png")
monImg = loadImage("ghost.png")
coinImg = loadImage("coin.png")
wall = loadImage("wall.png")
floor = loadImage("floor.png")
orb = loadImage("orb.png")
keyImg = loadImage("key.png")
gemImg = loadImage("gem.png")
lifeImg = loadImage("heart.png")
gameImg = loadImage("over.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  console.log(width+","+height)

  backg = createSprite(width/2, height/2)
  backg.addImage(floor)
  backg.scale = 8

  livesGroup = createGroup();

  for(var i=800; i<1100; i=i+100){
    live = createSprite(i,50,20,20);
    live.addImage(lifeImg)
    live.scale = 0.5;
    livesGroup.add(live)
  }



  edges = createEdgeSprites();
  girl = createSprite(180, 1780, 40, 40);
  girl.addAnimation("ran",run);
  girl.addAnimation("runLeft",runLeft)
  girl.debug = true;
  girl.setCollider("rectangle", 0, 0, 150, 200);

  gem = createSprite(3620, 150, 40, 40)
  gem.addImage(gemImg)
  gem.scale = 0.5

  key1 = createSprite(100, 100, 40, 40)
  key1.addImage(keyImg)
  key1.scale = 0.2

  wall1 = createSprite(225, 1500, 440, 40); 
  wall1.addImage(wall);
  wall1.scale = 2
  wall1.rotation = 90;
  wall2 = createSprite(225, 1280, 40, 400); 
  wall2.addImage(wall);
  wall2.scale = 2
  wall3 = createSprite(225, 800, 440, 40);
  wall3.addImage(wall);
  wall3.scale = 2
  wall3.rotation = 90;
  wall4 = createSprite(720, 1735, 40, 400);
  wall4.addImage(wall);
  wall4.scale = 2
  wall5 = createSprite(900, 1745, 400, 40);
  wall5.addImage(wall);
  wall5.scale = 2
  wall5.rotation = 90;
  wall6 = createSprite(1350, 1735, 40, 400);
  wall6.addImage(wall);
  wall6.scale = 2
  wall7 = createSprite(1050, 1090, 700, 40);
  wall7.addImage(wall);
  wall7.scale = 2
  wall7.rotation = 90;
  wall8 = createSprite(1040, 1080, 40, 500);
  wall8.addImage(wall);
  wall8.scale = 2
  wall9 = createSprite(1390, 900, 40, 500);
  wall9.addImage(wall);
  wall9.scale = 2
  wall10 = createSprite(1940, 1420, 600, 40);
  wall10.addImage(wall);
  wall10.scale = 2
  wall10.rotation = 90;
  wall11 = createSprite(1890, 1730, 600, 40);
  wall11.addImage(wall);
  wall11.scale = 2
  wall11.rotation = 90;
  wall12 = createSprite(2200, 1970, 40, 400);
  wall12.addImage(wall);
  wall12.scale = 2
  wall13 = createSprite(570, 500, 600, 40);
  wall13.addImage(wall);
  wall13.scale = 2
  wall13.rotation = 90;
  wall14 = createSprite(120, 250, 600, 40);
  wall14.addImage(wall);
  wall14.scale = 2
  wall14.rotation = 90;
  wall15 = createSprite(1150, 100, 40, 400);
  wall15.addImage(wall);
  wall15.scale = 2
  wall16 = createSprite(2130, 1040, 600, 40);
  wall16.addImage(wall);
  wall16.scale = 2
  wall16.rotation = 90;
  wall18 = createSprite(2550, 1650, 40, 600);
  wall18.addImage(wall);
  wall18.scale = 2
  wall19 = createSprite(2850, 1740, 600, 40);
  wall19.addImage(wall);
  wall19.scale = 2
  wall19.rotation = 90;
  wall20 = createSprite(3550, 1650, 40, 600);
  wall20.addImage(wall);
  wall20.scale = 2
  wall21 = createSprite(3260, 1440, 600, 40);
  wall21.addImage(wall);
  wall21.scale = 2
  wall21.rotation = 90;
  wall22 = createSprite(3030, 880, 40, 600);
  wall22.addImage(wall);
  wall22.scale = 2
  wall23 = createSprite(3030, 880, 600, 40);
  wall23.addImage(wall);
  wall23.scale = 2
  wall23.rotation = 90;
  wall24 = createSprite(1830, 260, 600, 40);
  wall24.addImage(wall);
  wall24.scale = 2
  wall24.rotation = 90;
  wall25 = createSprite(1840, 0, 40, 550);
  wall25.addImage(wall);
  wall25.scale = 2
  wall26 = createSprite(2600, 100, 40, 550);
  wall26.addImage(wall);
  wall26.scale = 2
  

  
  winWall1 = createSprite(3400, 100, 40, 550);
  winWall1.shapeColor = "red"
  winWall2 = createSprite(3655, 360, 550, 40);
  winWall2.shapeColor = "red"

  portal1 = createSprite(10, height/2-250, 20, 1600)
  portal1.visible = false;
  portal2 = createSprite(width-10,height/2-250, 20, 1600)
  portal2.visible = false;

  monster1 = createSprite(100,100,50,50)
  monster1.addImage(monImg)
  monster1.velocityX=4;
  monster1.velocityY=5;
  monster1.debug = true;
  monster1.setCollider("rectangle", -25, 0, 100, 130);

  monster2 = createSprite(width-100,height-100,50,50)
  monster2.addImage(monImg)
  monster2.velocityX=-3;
  monster2.velocityY=-4;
  monster2.debug = true;
  monster2.setCollider("rectangle", -25, 0, 100, 130);

  monster3 = createSprite(width/2, height-100,50,50)
  monster3.addImage(monImg)
  monster3.velocityX=4;
  monster3.velocityY=-5;
  monster3.debug = true;
  monster3.setCollider("rectangle", -25, 0, 100, 130);

  monster4 = createSprite(width/2, 100,50,50)
  monster4.addImage(monImg)
  monster4.velocityX=3;
  monster4.velocityY=4;
  monster4.debug = true;
  monster4.setCollider("rectangle", -25, 0, 100, 130);

  // coin1 = createSprite(570, 1750, 20, 20)
  // coin1.addImage(coinImg)
  // coin2 = createSprite(570, 1450, 20, 20)
  // coin2.addImage(coinImg)
  // coin3 = createSprite(570, 1150, 20, 20)
  // coin3.addImage(coinImg)
  // coin4 = createSprite(570, 900, 20, 20)
  // coin4.addImage(coinImg)
  // coin5 = createSprite(220, 900, 20, 20)
  // coin5.addImage(coinImg)
  // coin6 = createSprite(70, 1150, 20, 20)
  // coin6.addImage(coinImg)
  // coin7 = createSprite(890, 890, 20, 20)
  // coin7.addImage(coinImg)
  // coin8 = createSprite(890, 1300, 20, 20)
  // coin8.addImage(coinImg)
  // coin9 = createSprite(890, 1580, 20, 20)
  // coin9.addImage(coinImg)
  // coin10 = createSprite(1200, 1400, 20, 20)
  // coin10.addImage(coinImg)
  // coin11 = createSprite(1600, 1200, 20, 20)
  // coin11.addImage(coinImg)
  // coin12 = createSprite(1900, 1580, 20, 20)
  // coin12.addImage(coinImg)
  // coin13 = createSprite(2200, 1200, 20, 20)
  // coin13.addImage(coinImg)
  // coin14 = createSprite(2400, 1600, 20, 20)
  // coin14.addImage(coinImg)
  // coin15 = createSprite(2800, 1580, 20, 20)
  // coin15.addImage(coinImg)
  // coin16 = createSprite(3300, 1700, 20, 20)
  // coin16.addImage(coinImg)

  coin6Group = createGroup();

  for(var i = 100; i<width-300; i=i+400){
    coin = createSprite(i,380,20,20)
    coin.addImage(coinImg)
    coin6Group.add(coin)
  }

  coin5Group = createGroup();

  for(var i = 320; i<width-300; i=i+400){
    coin = createSprite(i,650,20,20)
    coin.addImage(coinImg)
    coin5Group.add(coin)
  }

  coin4Group = createGroup();

  for(var i = 120; i<width-300; i=i+550){
    coin = createSprite(i,960,20,20)
    coin.addImage(coinImg)
    coin4Group.add(coin)
  }

  coin3Group = createGroup();

  for(var i = 120; i<width-300; i=i+400){
    coin = createSprite(i,1290,20,20)
    coin.addImage(coinImg)
    coin3Group.add(coin)
  }

  coin2Group = createGroup();

  for(var i = 520; i<width-300; i=i+630){
    coin = createSprite(i,1550,20,20)
    coin.addImage(coinImg)
    coin2Group.add(coin)
  }

  coin1Group = createGroup();

  for(var i = 520; i<width-300; i=i+640){
    coin = createSprite(i,1880,20,20)
    coin.addImage(coinImg)
    coin1Group.add(coin)
  }

  over = createSprite(width/2, height/2)
  over.addImage(gameImg);
  over.scale = 10;
  over.visible = false

}

function draw() {
  background(200);  
  text("score: "+score, width/2, 80)

  if(gamestate === "play"){

  if(keyDown("right")){
    girl.velocityX = 4
    girl.velocityY = 0
    girl.changeAnimation("ran",run);
  }
  if(keyDown("left")){
    girl.velocityX = -4
    girl.velocityY = 0
    girl.changeAnimation("runLeft",runLeft)
  }
  if(keyDown("up")){
    girl.velocityY = -4
    girl.velocityX = 0
  }
  if(keyDown("down")){
    girl.velocityY = 4
    girl.velocityX = 0
  }

  for(var i = 0; i<coin1Group.length; i++){
    
    if(girl.isTouching(coin1Group.get(i))){
      coin1Group.get(i).destroy();
      score = score+1;
    }

  }
  
  for(var i = 0; i<coin2Group.length; i++){
    
    if(girl.isTouching(coin2Group.get(i))){
      coin2Group.get(i).destroy();
      score = score+1;
    }

  }

  for(var i = 0; i<coin3Group.length; i++){
    
    if(girl.isTouching(coin3Group.get(i))){
      coin3Group.get(i).destroy();
      score = score+1;
    }

  }

  for(var i = 0; i<coin4Group.length; i++){
    
    if(girl.isTouching(coin4Group.get(i))){
      coin4Group.get(i).destroy();
      score = score+1;
    }

  }

  for(var i = 0; i<coin5Group.length; i++){
    
    if(girl.isTouching(coin5Group.get(i))){
      coin5Group.get(i).destroy();
      score = score+1;
    }

  }

  for(var i = 0; i<coin6Group.length; i++){
    
    if(girl.isTouching(coin6Group.get(i))){
      coin6Group.get(i).destroy();
      score = score+1;
    }

  }

  //girl.collide(edges)

  girl.collide(wall1)
  girl.collide(wall2)
  girl.collide(wall3) 
  girl.collide(wall4) 
  girl.collide(wall5) 
  girl.collide(wall6) 
  girl.collide(wall7) 
  girl.collide(wall8) 
  girl.collide(wall9) 
  girl.collide(wall10) 
  girl.collide(wall11) 
  girl.collide(wall12) 
  girl.collide(wall13)
  girl.collide(wall14)
  girl.collide(wall15)
  girl.collide(wall16)
  girl.collide(wall18)
  girl.collide(wall19)
  girl.collide(wall20)
  girl.collide(wall21)
  girl.collide(wall22)
  girl.collide(wall23)
  girl.collide(wall24)
  girl.collide(wall25)
  girl.collide(wall26)

  girl.collide(portal1)
  girl.collide(portal2)

  monster1.bounceOff(edges)
  monster2.bounceOff(edges)
  monster3.bounceOff(edges)
  monster4.bounceOff(edges)

  monster1.bounce(monster2)
  monster1.bounce(monster3)
  monster1.bounce(monster4)
  monster2.bounce(monster3)
  monster2.bounce(monster4)
  monster3.bounce(monster4)

  if(girl.x<0){
    girl.x=width
  }

  if(girl.isTouching(winWall1) ||
     girl.isTouching(winWall2)){
    girl.x=180
    girl.y=1780
  }

  if(girl.isTouching(key1)){
    winWall1.destroy();
    winWall2.destroy();
    key1.destroy();
  }

  for(var i=0; i<livesGroup.length; i++){
    if(girl.isTouching(monster1) ||
       girl.isTouching(monster2) ||
       girl.isTouching(monster3) ||
       girl.isTouching(monster4)){
           girl.x=180
           girl.y=1780
           livesGroup.get(i).destroy();
           console.log(livesGroup.get(i))
           lives--
       }
      }
  if(lives === 2){

    gamestate="end"
  }
  // }else if(girl.isTouching(gem)){
  //   
  //   gamestate === "play"
  //   girl.velocityX = girl.velocityX+2
  //   girl.velocityY = girl.velocityY+2

  //   monster1.velocityX = monster1.velocityX+2
  //   monster1.velocityY = monster1.velocityY+2
  //   monster2.velocityX = monster2.velocityX+2
  //   monster2.velocityY = monster2.velocityY+2
  //   monster3.velocityX = monster3.velocityX+2
  //   monster3.velocityY = monster3.velocityY+2
  //   monster4.velocityX = monster4.velocityX+2
  //   monster4.velocityY = monster4.velocityY+2

  //   girl.x=180
  //   girl.y=1780
 
  //   monster1.x= 100
  //   monster1.y= 100
  //   monster2.x= width-100
  //   monster2.y= height-100
  //   monster3.x= width/2
  //   monster3.y= height-100
  //   monster4.x= width/2
  //   monster4.y= 100
  // }
  drawSprites();
}
else if(gamestate==="end"){

  over.visible = true;
  console.log(lives);
}

  



}
