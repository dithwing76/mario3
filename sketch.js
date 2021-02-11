var mario,MSLimg,MRGimg,MCBimg,MBGimg,MBSimg,MP =1,marioskn,bigmarioskn,marioclimb,bigmarioclimb,BMCimg
var camx,wall
var sensor
var ground,groundimg,groundgroup,groundnightimg,bigground
//var que,queimg,quegroup
var slevel=0
var pipescan,pipescan2
var queimg,empimg
var que1,quescan1,que2,quescan2,que3,quescan3,que4,quescan4,que5,quescan5,que6,quescan6,que7,quescan7,que8,quescan8,que9,quescan9,que10,quescan10,que11,quescan11,que12,quescan12,que13,quescan13
var brk,brkimg,brkgroup,cbkimg
var ppe,ppeimg,ppegroup
var hpe,hpeimg,hpegroup
var hrd,hrdimg,hrdgroup
var flagpole,flagpoleimg
var flag,flagimg
var castle,castleimg
var num
var sign,signimg
var dead=-1,playing=0,end=1,move=2,gamestate=playing
var vflag,vflagimg
var power
var time
var coinimg
var score
var coinpic
var mushroom,mushroomimg,mushX,mushY,mushspawn="n",mushdir =1,mushroomsensor
var points
var flagpoints
var coin1,coin2,coin3,coin4,coin5,coin6,coin7,coin8,coin9,coin10,coin11,coin12,coin13,coin14,coin15,coin16,coin17,coin18,coin19
var k,invince,cld,cldimg
var goombaimg, goomba1,goombasense1, goomba2,goombasense2, goomba3,goombasense3, goomba4,goombasense4, goomba5,goombasense5, goomba6,goombasense6, goomba7,goombasense7, goomba8,goombasense8, goomba9,goombasense9, goomba10,goombasense10
function preload(){
  groundimg=loadImage("ground.png")
  MCBimg=loadAnimation("climb1.png","climb2.png")
  MSLimg=loadAnimation("run1.png")
  MRGimg=loadAnimation("run4.png","run3.png","run2.png","run1.png")
  queimg =loadImage("question mark.png")
  brkimg=loadImage("brick.png")
  ppeimg=loadImage("pipe.png")
  hpeimg=loadImage("half pipe.png")
  hrdimg=loadImage("hard block.png")
  flagpoleimg=loadImage("flag pole.png")
  castleimg=loadImage("castle.png")
  signimg=loadImage("sign.png")
  flagimg=loadImage("flag.png")
  vflagimg=loadImage("victory flag.png")
  coinimg=loadAnimation("coin1.png","coin2.png","coin3.png","coin4.png","coin5.png","coin6.png")
  empimg=loadImage("empty block.png")
  mushroomimg=loadImage("magic mushroom.png")
  MBGimg=loadAnimation("big mario run4.png","big mario run3.png","big mario run2.png","big mario run1.png")
  MBSimg=loadAnimation("big mario run1.png")
  cbkimg=loadImage("big cave brick.png")
  groundnightimg=loadImage("cave ground.png")
  biggroundimg=loadImage("big ground.png")
  BMCimg=loadAnimation("big climb1.png","big climb2.png")
  goombaimg=loadAnimation("goomba1.png","goomba2.png")
  cldimg=loadImage("cloud.png")
}






function setup(){
  createCanvas(700,500)
  
 // mushroom =createSprite(-30,500,10,01)
  //mushroom.shapeColor="grey"
  invince=0
  bigmarioclimb=createSprite(350,350,25,25)
  bigmarioclimb.shapeColor ="red"
  bigmarioclimb.addAnimation("still",BMCimg)
  bigmarioclimb.scale=0.021

  marioclimb=createSprite(350,350,25,25)
  marioclimb.shapeColor ="red"
  marioclimb.addAnimation("still",MCBimg)
  marioclimb.scale=0.021

  mariorun=createSprite(350,350,25,25)
  mariorun.shapeColor ="red"
  mariorun.addAnimation("still",MRGimg)
  mariorun.scale=0.021

  bigmariorun=createSprite(350,350,25,25)
  bigmariorun.shapeColor ="red"
  bigmariorun.addAnimation("still",MBGimg)
  bigmariorun.scale=0.021

  points = 0
  k=0
  score=0
  time =0
  power=1
  groundgroup=createGroup()
  brkgroup=createGroup()
  fill("black")
  num =1
  num2=1
  camx =400
  camera.on()
  camera.zoom =1.2
  //camera.zoom =0.3
  sign =createSprite(350,200)
  sign.addImage(signimg)
  sign.scale=0.2
  wall= createSprite(camera.x-290,250,1,500)
  wall.visible=false
  vflag=createSprite(5250+13*25,280)
  vflag.addImage(vflagimg)
  vflag.scale=0.021
  createBrick(2,5275+13*25,375,0,-25,"n")
  
  createBrick(7,1575,575,25,0)
  mario = createSprite(350,350,25,25)
  mario.shapeColor ="red"
  //mario.addAnimation("running",MRGimg)
  //mario.scale=0.021

  marioskn = createSprite(350,350,25,25)
  marioskn.shapeColor ="red"
  marioskn.addAnimation("still",MSLimg)
  marioskn.scale=0.021

  bigmarioskn = createSprite(350,350,25,25)
  bigmarioskn.shapeColor ="red"
  bigmarioskn.addAnimation("still",MBSimg)
  bigmarioskn.scale=0.021
  
  sensor =createSprite(mario.x,mario.y,20,25)
  sensor.setCollider("rectangle",0,10,20,25,0)
  sensor.debug =true
  sensor.visible=false
  createBrick(7,1575,950,25,0)
  createGround(18,1475,1000,25,0,"y")


  createGround(16,150,412.5,125,0,"b")
  
  createGround(3,2200,412.5,125,0,"b")
  createGround(13,2650,412.5,125,0,"b")
  createGround(1,4250,412.5,125,0,"b")
  createGround(12,4425,412.5,125,0,"b")
  //for(var v=0;v<2;v=v+1){
    //createGround(40,25,400+v*25,25,0,"n")//take away 43
 // }
  quegroup=createGroup()
  que1=createSprite(675,300)
  makeQuestion(que1)
  quescan1=createSprite(675,300,1,1)
  makeQuestionScan(quescan1)

  que2=createSprite(675+150,300-100)
  makeQuestion(que2)
  quescan2=createSprite(675,300,1,1)
  makeQuestionScan(quescan2)

  que3=createSprite(850,300)
  makeQuestion(que3)
  quescan3=createSprite(850,300,1,1)
  makeQuestionScan(quescan3)
  //createQuestionBlock(2,675,300,150,-100)
  que11=createSprite(800,300)
  makeMushroomQuestion(que11)
  quescan11=createSprite(800,300,1,1)//765
  makeQuestionScan(quescan11)

  //createQuestionBlock(1,800,300,50,0)
  
  createBrick(3,775,300,50,0,"n")
  ppegroup=createGroup()
  createPipe(2,987.5,362.5,200,-25,0)
  hpegroup=createGroup()
  createHalfPipe(1,1187.5,375,0,0)
  createHalfPipe(2,1362.5,375,0,-25)
  createPipe(1,1362.5,312.5,0,0,0)

  createHalfPipe(2,1762.5,375,0,-25)
  pipescan=createSprite(1762.5,275)
  pipescan.setCollider("rectangle",0,10,25,15,0)
  pipescan.visible=false
  pipescan.debug=true
  createPipe(1,1762.5,312.5,0,0,0)
  //for(var v=0;v<2;v=v+1){
    //createGround(15,2150,400+v*25,25,0)//done
  //}
  createBrick(2,2300,300,50,0,"n")
  que12=createSprite(2325,300)
  makeMushroomQuestion(que12)
  quescan12=createSprite(675,300,1,1)
  makeQuestionScan(quescan12)
  //createQuestionBlock(1,2325,300,0,0)
  createBrick(8,2375,200,25,0,"n")
  createBrick(3,2650,200,25,0,"n")

  createBrick(6,1475,950,0,-75)


  que4=createSprite(2725,200)
  makeQuestion(que4)
  quescan4=createSprite(675,300,1,1)
  makeQuestionScan(quescan4)
  //createQuestionBlock(1,2725,200,0,0)
  createBrick(1,2725,300,150,0,"n")
  createBrick(2,2875,300,25,0,"n")

  que5=createSprite(3100,300)
  makeQuestion(que5)
  quescan5=createSprite(850,300,1,1)
  makeQuestionScan(quescan5)

  que6=createSprite(3175,300)
  makeQuestion(que6)
  quescan6=createSprite(850,300,1,1)
  makeQuestionScan(quescan6)

  que7=createSprite(3250,300)
  makeQuestion(que7)
  quescan7=createSprite(850,300,1,1)
  makeQuestionScan(quescan7)

  //createQuestionBlock(3,3100,300,75,0)
  que13=createSprite(3175,200)
  makeMushroomQuestion(que13)
  quescan13=createSprite(675,300,1,1)
  makeQuestionScan(quescan13)
  //createQuestionBlock(1,3175,200,0,0)
  createBrick(1,3400,300,25,0,"n")
  createBrick(3,3475,200,25,0,"n")
  createBrick(2,3675,200,75,0,"n")


  que8=createSprite(3700,200)
  makeQuestion(que8)
  quescan8=createSprite(675,300,1,1)
  makeQuestionScan(quescan8)

  que9=createSprite(3725,200)
  makeQuestion(que9)
  quescan9=createSprite(675,300,1,1)
  makeQuestionScan(quescan9)
  //createQuestionBlock(2,3700,200,25,0)
  createBrick(2,3700,300,25,0,"n")
  hrdgroup =createGroup()
  for(var v = 0;v<4;v=v+1){
  createHardBlock(4-v,3850+v*25,375-v*25,25,0)
  }
  
  for(var v = 0;v<4;v=v+1){
    createHardBlock(1+v,4000,300+v*25,25,0)
  }
  
  
  //for(var v=0;v<2;v=v+1){
    //createGround(69,2600,400+v*25,25,0)//done
  //}
  for(var v = 0;v<4;v=v+1){
    createHardBlock(5-v,4200+v*25,375-v*25,25,0)
  }
  for(var v = 0;v<4;v=v+1){
    createHardBlock(1+v,4375,300+v*25,25,0)
  }
  //for(var v=0;v<2;v=v+1){
    //createGround(40,4375,400+v*25,25,0)//done
  //}
  createPipe(1,4611.5,362,0,0,0)
  createBrick(2,4725,300,25,0,"n")

  que10=createSprite(4775,300)
  makeQuestion(que10)
  quescan10=createSprite(675,300,1,1)
  makeQuestionScan(quescan10)
  //createQuestionBlock(1,4775,300,0,0)
  createBrick(1,4800,300,25,0,"n")
  createPipe(1,4986.5,362,0,0,0)
  
  flag=createSprite(5240.5+7*25,130)
  flag.addImage(flagimg)
  flag.scale=0.021
  
  flagpole=createSprite(5255+7*25,375-150)
  flagpole.addImage(flagpoleimg)
  flagpole.scale=0.021
  
  //
  mushroom =createSprite(-100,-100)
  
  coinpic =createSprite(camera.x-280,camera.y-220)
  coinpic.addAnimation("spinning",coinimg)
  coinpic.scale=0.017
  
  //createGround(18,1475,1000,25,0)
  
  //createBrick(24,1475,1000,25,0)
  createHardBlock(1,5250+7*25,375,0,0)
  createPipe(1,1840,962.5,0,0,1-90)
  pipescan2=createSprite(1840,962.5,1,1)
  pipescan2.setCollider("rectangle",-25,0,5,15,0)
  for(var v = 0;v<8;v=v+1){
      createHardBlock(9-v,5025+v*25,375-v*25,25,0)
    }
  //pipescan2.debug=true
  //pipescan2.visible=false
  createHalfPipe(16,1887.5,975,0,-25)
  coin1 =createSprite(1575,900,25,25)
  makeCoin(coin1)
  coin2 =createSprite(1600,900,25,25)
  makeCoin(coin2)
  coin3 =createSprite(1625,900,25,25)
  makeCoin(coin3)
  coin4 =createSprite(1650,900,25,25)
  makeCoin(coin4)
  coin5 =createSprite(1675,900,25,25)
  makeCoin(coin5)
  coin6 =createSprite(1700,900,25,25)
  makeCoin(coin6)
  coin7 =createSprite(1725,900,25,25)
  makeCoin(coin7)
  coin8 =createSprite(1575,850,25,25)
  makeCoin(coin8)
  coin9 =createSprite(1600,850,25,25)
  makeCoin(coin9)
  coin10 =createSprite(1625,850,25,25)
  makeCoin(coin10)
  coin11 =createSprite(1650,850,25,25)
  makeCoin(coin11)
  coin12 =createSprite(1675,850,25,25)
  makeCoin(coin12)
  coin13 =createSprite(1700,850,25,25)
  makeCoin(coin13)
  coin14 =createSprite(1725,850,25,25)
  makeCoin(coin14)

  coin15 =createSprite(1600,800,25,25)
  makeCoin(coin15)
  coin16 =createSprite(1625,800,25,25)
  makeCoin(coin16)
  coin17 =createSprite(1650,800,25,25)
  makeCoin(coin17)
  coin18 =createSprite(1675,800,25,25)
  makeCoin(coin18)
  coin19 =createSprite(1700,800,25,25)
  makeCoin(coin19)
  
  castle=createSprite(5250+13*25,325)
  castle.addImage(castleimg)
  castle.scale=0.021
  
  mushroomsensor=createSprite(mushroom.x,mushroom.y,1,1)
  mushroomsensor.setCollider("rectangle",10,0,25,20)
  mushroomsensor.visible=false
  mushroomsensor.debug=true

  goomba1=createSprite(825,375)
  goomba1.rotation=-90
  goomba1.shapeColor = "brown"
  goomba1.addAnimation("hi",goombaimg)
  goomba1.scale=0.021
  goombasense1=createSprite(1,1,1,1)
  
  
  goomba2=createSprite(1250,375)
  goomba2.rotation=-90
  goomba2.shapeColor = "brown"
  goomba2.addAnimation("hi",goombaimg)
  goomba2.scale=0.021
  goombasense2=createSprite(1,1,1,1)
  

  goomba3=createSprite(1525,375)
  goomba3.rotation=-90
  goomba3.shapeColor = "brown"
  goomba3.addAnimation("hi",goombaimg)
  goomba3.scale=0.021
  goombasense3=createSprite(1,1,1,1)
  

  goomba4=createSprite(1575,375)
  goomba4.rotation=-90
  goomba4.shapeColor = "brown"
  goomba4.addAnimation("hi",goombaimg)
  goomba4.scale=0.021
  goombasense4=createSprite(1,1,1,1)


  goomba5=createSprite(2375,175)
  goomba5.rotation=-90
  goomba5.shapeColor = "brown"
  goomba5.addAnimation("hi",goombaimg)
  goomba5.scale=0.021
  goombasense5=createSprite(1,1,1,1)


  goomba6=createSprite(2425,175)
  goomba6.rotation=-90
  goomba6.shapeColor = "brown"
  goomba6.addAnimation("hi",goombaimg)
  goomba6.scale=0.021
  goombasense6=createSprite(1,1,1,1)


  goomba7=createSprite(2700,375)
  goomba7.rotation=-90
  goomba7.shapeColor = "brown"
  goomba7.addAnimation("hi",goombaimg)
  goomba7.scale=0.021
  goombasense7=createSprite(1,1,1,1)

  goomba8=createSprite(3175,375)
  goomba8.rotation=-90
  goomba8.shapeColor = "brown"
  goomba8.addAnimation("hi",goombaimg)
  goomba8.scale=0.021
  goombasense8=createSprite(1,1,1,1)

  goomba9=createSprite(3700,375)
  goomba9.rotation=-90
  goomba9.shapeColor = "brown"
  goomba9.addAnimation("hi",goombaimg)
  goomba9.scale=0.021
  goombasense9=createSprite(1,1,1,1)

  goomba10=createSprite(4775,375)
  goomba10.rotation=-90
  goomba10.shapeColor = "brown"
  goomba10.addAnimation("hi",goombaimg)
  goomba10.scale=0.021
  goombasense10=createSprite(1,1,1,1)

  createcloud(411,110,0.05)
  createcloud(880,84,0.03)
  createcloud(1135,154,0.02)
  createcloud(1615,90,0.05)
  createcloud(2256,158,0.04)
  createcloud(2811,94,0.04)
  createcloud(3376,162,0.02)
  createcloud(4092,76,0.03)
  createcloud(4625,176,0.05)
  createcloud(5431,88,0.02)
  //,Math.randomNumber(0.02,0.05)
}










function displayInfo(){
  stroke("white")
for(var i=0;i<6500/25;i=i+1){
  k=i*25
  line(k-12.5,0,k-12.5,450)
}
for(var i=0;i<450/25;i=i+1){
  k=i*25
  line(0,k-12.5,5650,k-12.5)
}
noStroke()
text("MP "+MP,camera.x-270,camera.y-170)
text("MX "+mario.x ,camera.x-270,camera.y-160)
text("MY "+mario.y ,camera.x-270,camera.y-150)
text("MVx "+mario.velocityX,camera.x-270,camera.y-140)
text("MVy "+mario.velocityY,camera.x-270,camera.y-130)
text("MV "+mario.visible,camera.x-270,camera.y-120)
text("power "+power,camera.x-270,camera.y-110)
text("level "+num,camera.x-270,camera.y-100)
text("frameRate "+World.frameRate,camera.x-270,camera.y-90)
text("gamestate "+gamestate,camera.x-270,camera.y-80)
sensor.visible=true

}
function hideInfo(){
  sensor.visible=false
}
function draw(){
  if(slevel==0){
  background(52, 171, 235)
  }else{
    background(0,0,0)
  }
  if(keyDown("z")){
    
  camera.zoom =0.3
  }else{
    camera.zoom =1.2
  
  }
  text("Use arrow keys to move",300,270)
  text("Created by Nicky Cummings",290,280)
  if(slevel==0){
    fill("black")
  }else{
    fill("white")
  }
  text("x "+score ,camera.x-270,camera.y-186)
  coinpic.x=camera.x-280
  coinpic.y=camera.y-190
  
  if (gamestate===playing){
    if(!invince==0){
      if(frameCount>invince+180){
        invince=0
      }
    }
    
    if(slevel==1){
    if(coin1.shapeColor =="brown"){
    coinPhisics(coin1)
    }
    if(coin2.shapeColor =="brown"){
      coinPhisics(coin2)
    }
    if(coin3.shapeColor =="brown"){
      coinPhisics(coin3)
    }
    if(coin4.shapeColor =="brown"){
      coinPhisics(coin4)
    }
    if(coin5.shapeColor =="brown"){
      coinPhisics(coin5)
    }
    if(coin6.shapeColor =="brown"){
      coinPhisics(coin6)
    }
    if(coin7.shapeColor =="brown"){
      coinPhisics(coin7)
    }

    if(coin8.shapeColor =="brown"){
      coinPhisics(coin8)
    }
    if(coin9.shapeColor =="brown"){
      coinPhisics(coin9)
    }
    if(coin10.shapeColor =="brown"){
      coinPhisics(coin10)
    }
    if(coin11.shapeColor =="brown"){
      coinPhisics(coin11)
    }
    if(coin12.shapeColor =="brown"){
      coinPhisics(coin12)
    }
    if(coin13.shapeColor =="brown"){
      coinPhisics(coin13)
    }
    if(coin14.shapeColor =="brown"){
      coinPhisics(coin14)
    }

    if(coin15.shapeColor =="brown"){
      coinPhisics(coin15)
    }
    if(coin16.shapeColor =="brown"){
      coinPhisics(coin16)
    }
    if(coin17.shapeColor =="brown"){
      coinPhisics(coin17)
    }
    if(coin18.shapeColor =="brown"){
      coinPhisics(coin18)
    }
    if(coin19.shapeColor =="brown"){
      coinPhisics(coin19)
    }
    }



    
    if(goomba1.x<camx+350&&goomba1.shapeColor=="brown"){
      goombaphisics(goomba1,goombasense1,1.2)
    }
    if(goomba2.x<camx+350&&goomba2.shapeColor=="brown"){
      goombaphisics(goomba2,goombasense2,1.2)
   }

    if(goomba3.x<camx+350&&goomba3.shapeColor=="brown"){
    goombaphisics(goomba3,goombasense3,1.2)
    }
    if(goomba4.x<camx+350&&goomba4.shapeColor=="brown"){
      goombaphisics(goomba4,goombasense4,1.2)
    }

    if(goomba5.x<camx+350&&goomba5.shapeColor=="brown"){
      goombaphisics(goomba5,goombasense5,1.2)
    }
    if(goomba6.x<camx+350&&goomba6.shapeColor=="brown"){
      goombaphisics(goomba6,goombasense6,1.2)
   }
    if(goomba7.x<camx+350&&goomba7.shapeColor=="brown"){
      goombaphisics(goomba7,goombasense7,1.2)
   }
   if(goomba8.x<camx+350&&goomba8.shapeColor=="brown"){
    goombaphisics(goomba8,goombasense8,1.2)
 }
  if(goomba9.x<camx+350&&goomba9.shapeColor=="brown"){
    goombaphisics(goomba9,goombasense9,1.2)
 }
 if(goomba10.x<camx+350&&goomba10.shapeColor=="brown"){
  goombaphisics(goomba10,goombasense10,1.2)
}




    if(slevel==0){
    quePhisics(que1,quescan1)
    quePhisics(que2,quescan2)
    quePhisics(que3,quescan3)
    quePhisics(que4,quescan4)
    quePhisics(que5,quescan5)
    quePhisics(que6,quescan6)
    quePhisics(que7,quescan7)
    quePhisics(que8,quescan8)
    quePhisics(que9,quescan9)
    quePhisics(que10,quescan10)
    quePhisics(que11,quescan11)
    quePhisics(que12,quescan12)
    quePhisics(que13,quescan13)
  }
    if(mushspawn==="y"){
      mushroom.x=mushX
      mushroom.y=mushY
      mushroom.addImage(mushroomimg)
      mushroom.scale=0.021
      mushroom.shapeColor="blue"
      mushspawn="n"
      mushdir=1
      
    }
    if(mushroom.shapeColor==="blue"){
      mushroomPhisics(1.2)
      
    }
    
    if(power==2){
      mario.velocityY=0
    }
    if(keyWentDown("b")){
      power=0
    }
    if(keyWentDown("f")){
      power=2
    }
    if(power==1||power==0){
      marioPhishics(1.2,10,15,mario.velocityX*-0.4)
    }else{
      if(keyDown("down")){
        marioPhishics(10,15,15,mario.velocityX*-0.4)
      }else{
        marioPhishics(0,15,3,mario.velocityX*-0.4)
        
      }
    }
    
    if(slevel==0){
    if(mario.y>425){
      gamestate=dead
    }}
    if(mario.isTouching(flagpole)){
      flagpoints=Math.round(1000-mario.y)
      points+=flagpoints
      mario.velocityX=0
      gamestate=1
      mario.x=mario.x+3
      mariohideskin()
      if(MP==1){
        marioclimb.visible=true
      }else{
        bigmarioclimb.visible=true
      }
      
    }
  }
  if(gamestate===dead){
    
    mario.velocityX=0
    mario.velocityY=0
    stop(mushroom)
    stop(goomba1)
    stop(goomba2)
    stop(goomba3)
    stop(goomba4)
    stop(goomba5)
    stop(goomba6)
    stop(goomba7)
    stop(goomba8)
    stop(goomba9)
    mariohideskin()
    if(MP==1){
    marioskn.visible=true
    }else if(MP===2){
      bigmarioskn.visible=true
    }else if(MP===0){
      marioskn.visible=true
    }
  }
  if(gamestate===end){
    text("+"+flagpoints,flagpole.x-20,flagpoints-1000)
    sensor.x=mario.x
    sensor.y=mario.y
    mario.velocityY=3
    mario.collide(hrdgroup)
    mario.collide(groundgroup)
    if(flag.isTouching(hrdgroup)){
      flag.velocityY=0
      
      if(sensor.isTouching(hrdgroup)){
        mario.velocityX=4
        mariohideskin()
        if(MP==1){
          mariorun.visible=true
          }else{
            bigmariorun.visible=true
          }
        
        mariorun.addAnimation("running",MRGimg)
        gamestate = move
      }
    }else{
      flag.velocityY=4
      
    }
  }
  if (gamestate===move){
    sensor.x=mario.x
    sensor.y=mario.y
    if(flag.isTouching(hrdgroup)){
      flag.velocityY=0
    }
    if(!time==0){
    text("Your time was "+time+" seconds",camera.x+100,camera.y-100)
    }
    mario.velocityY=4
    mario.velocityX=4
    mario.collide(groundgroup)
    
    
    
    if(mario.isTouching(brkgroup)){
      if(MP==1){
      if(mariorun.visible==true){
        time = frameCount/60
        time =Math.round(time*100)/100
        
      }
      
      mariorun.visible=false
    }else{
      if(bigmariorun.visible==true){
        time = frameCount/60
        time =Math.round(time*100)/100
        
      }
      
      bigmariorun.visible=false
    }
    }
    mario.collide(brkgroup)
    if(vflag.y<250){
      vflag.velocityY=0
    }else{
      vflag.velocityY=-1
    }
  }
  
  text("points: "  + points,camera.x+200,camera.y-186)
  marioskn.x=mario.x
  marioskn.y=mario.y
  bigmarioskn.x=mario.x
  bigmarioskn.y=mario.y
  mariorun.x=mario.x
  mariorun.y=mario.y
  bigmariorun.x=mario.x
  bigmariorun.y=mario.y
  marioclimb.x=mario.x
  marioclimb.y=mario.y
  bigmarioclimb.x=mario.x
  bigmarioclimb.y=mario.y
  mario.visible=false
  mariorun.depth=castle.depth+1
  bigmariorun.depth=castle.depth+1
  drawSprites()
  if(gamestate===dead){
    text("You died",camera.x,camera.y-150)
    text("Reload the page to restart.",camera.x,camera.y-140)
  }
  if(keyDown("i")){
    displayInfo()
  }else{
    hideInfo()
  }
  
}
function stop(sprite){
  sprite.velocityY=0
  sprite.velocityX=0
}
function goombaphisics(name,name2,gravity){
  name2.x=name.x
  name2.y=name.y
 //text(name.rotation,name.x,name.y-20)
  name.collide(ppegroup)
  name.collide(quegroup)
  name.collide(brkgroup)
  name.collide(hpegroup)
  name.collide(hrdgroup)
  name.collide(groundgroup)
    if(name2.isTouching(brkgroup)||name2.isTouching(quegroup)||name2.isTouching(groundgroup)||name2.isTouching(ppegroup)||name2.isTouching(hpegroup)||name2.isTouching(hrdgroup)){
      //name.y=name.y-1
      name.rotation=name.rotation*-1
      if(name.rotation==90){
        name.x=name.x+5
      }
      if(name.rotation==-90){
        name.x=name.x-5
      }
      
      
    }else{
    name.velocityY=name.velocityY+gravity
  }
  if(name.rotation==-90){
    name.velocityX=-2
    name2.setCollider("rectangle",-5,0,25,5)
    name.mirrorX(1);
  }
  if(name.rotation==90){
    name.velocityX=2
    name2.setCollider("rectangle",5,0,25,5)
    name.mirrorX(-1);
  }
  if(name.x<camx-350){
    name.x=-30
    name.y=500
    name.velocityX=0
    name.velocityY=0
    name.shapeColor="grey"
  }
  if(name.isTouching(mario)&&invince==0){
    if(mario.velocityY>2&&mario.y<name.y){
    name.x=-30
    name.y=500
    name.velocityX=0
    name.velocityY=0
    name.shapeColor="grey"
    points+=250
    }else{
      MP-=1
      if(MP==0){
      gamestate=dead
      }else{
        mario.height=25
        invince=frameCount
      }
    }
  }

}
function mariohideskin(){
  marioskn.visible=false
  bigmarioskn.visible=false
  mariorun.visible=false
  bigmariorun.visible=false
  marioclimb.visible=false
  bigmarioclimb.visible=false
}




function mushroomPhisics(gravity){
  mushroomsensor.x=mushroom.x
  mushroomsensor.y=mushroom.y
  
  
  mushroom.collide(ppegroup)
  mushroom.collide(quegroup)
  mushroom.collide(brkgroup)
  mushroom.collide(hpegroup)
  mushroom.collide(hrdgroup)
  
  mushroom.collide(groundgroup)
  
  if(mushroomsensor.isTouching(brkgroup)||mushroomsensor.isTouching(groundgroup)||mushroomsensor.isTouching(quegroup)||mushroomsensor.isTouching(ppegroup)||mushroomsensor.isTouching(hpegroup)||mushroomsensor.isTouching(hrdgroup)){
    //mushroom.velocityY=0
    mushroom.y=mushroom.y+1
    //text(mushdir,mushroom.x,mushroom.y-20)
    if(mushroomsensor.isTouching(brkgroup)||mushroomsensor.isTouching(quegroup)||mushroomsensor.isTouching(groundgroup)||mushroomsensor.isTouching(ppegroup)||mushroomsensor.isTouching(hpegroup)||mushroomsensor.isTouching(hrdgroup)){
      mushroom.y=mushroom.y-1
      mushdir=mushdir*-1
      if(mushdir==1){
        mushroom.x=mushroom.x-10
      }
      if(mushdir==-1){
        mushroom.x=mushroom.x+10
      }
      
      
    }
  }else{
    mushroom.velocityY=mushroom.velocityY+gravity
  }
  
  if(mushdir==-1){
    mushroom.velocityX=-5
    mushroomsensor.setCollider("rectangle",-10,0,25,5)
  }
  if(mushdir==1){
    mushroom.velocityX=5
    mushroomsensor.setCollider("rectangle",10,0,25,5)
  }
  if(mushroom.x>camx+350){
    mushroom.x=-30
    mushroom.y=500
    mushroom.velocityX=0
    mushroom.velocityY=0
    mushroom.shapeColor="grey"
  }
  if(mushroom.x<camx-350){
    mushroom.x=-30
    mushroom.y=500
    mushroom.velocityX=0
    mushroom.velocityY=0
    mushroom.shapeColor="grey"
  }
  if(mushroom.isTouching(mario)){
    mushroom.x=-30
    mushroom.y=500
    mushroom.velocityX=0
    mushroom.velocityY=0
    mushroom.shapeColor="grey"
    points+=1000
    if(MP==1){
    mario.y-=12.5
    mario.height=50
    }
    MP=2
    sensor.setCollider("rectangle",0,30,20,25,0)
  }
  
}






function quePhisics(name,name2){
  name2.x=name.x
  name2.y=name.y
  if(camx-600>name.x){
    name.destroy()
    name2.destroy()
  }
  if(name.shapeColor=="brown"){
    if(name2.isTouching(mario)&&mario.velocityY<0){
      score=score+1
      name.addImage(empimg)
      name.shapeColor="green"
      points+=100
      createFakeCoin(name.x,name.y,name)
    }
  }
  if(name.shapeColor=="red"){
    if(name2.isTouching(mario)&&mario.velocityY<0){
      name.addImage(empimg)
      name.shapeColor="green"
      mushspawn="y"
      mushX=name.x
      mushY=name.y-25
    }
  }
}

function coinPhisics(name){
  if(name.isTouching(mario)){
    score=score+1
    name.visible =false
    name.shapeColor = "red"
    points+=100
  }
}



function marioPhishics(gravity,vX,vY,drag){
  
  mario.collide(wall)
  if(mario.isTouching(pipescan)&&keyWentDown("down")){
    slevel=1
    mario.x=1512.5
    mario.y=650
    camera.y=800
    camera.x=1700
    mario.velocityY=0
  }
  if(mario.isTouching(pipescan2)&&keyDown("right")){
    slevel=0
    mario.x=4612.5
    mario.y=315
    camera.y=800
    camera.x=1700
    mario.velocityY=0
  }
  
  if(power==1){
    mario.collide(ppegroup)
    mario.collide(quegroup)
    mario.collide(brkgroup)
    mario.collide(hpegroup)
    mario.collide(hrdgroup)
    
  }
  mario.collide(groundgroup)
  if(mario.isTouching(brkgroup)||mario.isTouching(groundgroup)||mario.isTouching(quegroup)||mario.isTouching(ppegroup)||mario.isTouching(hpegroup)||mario.isTouching(hrdgroup)){
    mario.velocityY=0
    mario.y=mario.y+1
    if(mario.isTouching(brkgroup)||mario.isTouching(quegroup)||mario.isTouching(groundgroup)||mario.isTouching(ppegroup)||mario.isTouching(hpegroup)||mario.isTouching(hrdgroup)){
      mario.y=mario.y-1
    }
  }else{
    mario.velocityY=mario.velocityY+gravity
  }
  
  if(sensor.isTouching(brkgroup)||sensor.isTouching(quegroup)||sensor.isTouching(groundgroup)||sensor.isTouching(ppegroup)||sensor.isTouching(hpegroup)||sensor.isTouching(hrdgroup)||power==2){
  if(keyWentDown("up")||power==2&&keyDown("up")){
    mario.velocityY=vY*-1
    mario.y=mario.y-5
  }}
  

  if(keyDown("right")){
    mario.velocityX=vX
    mario.mirrorX(1)
    marioskn.mirrorX(1)
    bigmarioskn.mirrorX(1)
    mariorun.mirrorX(1)
    bigmariorun.mirrorX(1)
    
    
  }
  if(keyDown("left")){
    mario.velocityX=vX*-1
    mario.mirrorX(-1)
    marioskn.mirrorX(-1)
    bigmarioskn.mirrorX(-1)
    mariorun.mirrorX(-1)
    bigmariorun.mirrorX(-1)
    
  }
  mariohideskin()
  if(mario.velocityX<3&&mario.velocityX>-3){
    if(MP==1){
      marioskn.visible=true
      //bigmarioskn.visible=false
    }else if(MP==2){
      bigmarioskn.visible=true
      //bigmarioskn.visible=true
    }
    //mario.addAnimation("still",MSLimg)
    
  }else{
    if(MP==1){
      mariorun.visible=true
      }
      if(MP==2){
        bigmariorun.visible=true
        //mario.addAnimation("tall running",MBSimg)
      }
    //if(MP==1){
      
      //}else if(MP==2){
    //bigmarioskn.addAnimation("still",MBGimg)
      //}
    //mario.addAnimation("running",MRGimg)
    
  }
  mario.velocityX=mario.velocityX +drag
  if(slevel==0){
  if(camx>mario.x){
    camera.x= camx
  }else{
    camera.x= mario.x
    camx=mario.x
  }}
  if(slevel==0){
    wall.x=camera.x-295
    camera.y= 225
  }

  sensor.x=mario.x
  sensor.y=mario.y
  //console.log(mario.x)
  
}









function createGround(amount,startingX,startingY,vX,vY,dark){
  for(var i=0;i<amount;i=i+1){
    var ground =createSprite(startingX+vX*i,startingY+vY*i,25,25)
    ground.shapeColor = "brown"
    if(dark=="n"){
      ground.addImage(groundimg)
    }else if(dark=="y"){
      ground.addImage(groundnightimg)
    }else if(dark=="b"){
      ground.addImage(biggroundimg)
    }
    ground.scale=0.021
    groundgroup.add(ground)
  }
}
function createQuestionBlock(amount,startingX,startingY,vX,vY){
  for(var i=0;i<amount;i=i+1){
    var que =createSprite(startingX+vX*i,startingY+vY*i,25,25)
    que.shapeColor = "brown"
    que.addImage(queimg)
    que.scale=0.021
    quegroup.add(que)
  }
}
function createBrick(amount,startingX,startingY,vX,vY,dark){
  for(var i=0;i<amount;i=i+1){
    var brk =createSprite(startingX+vX*i,startingY+vY*i,25,25)
    brk.shapeColor = "brown"
    if(dark=="n"){
    brk.addImage(brkimg)
    }else{
      brk.addImage(cbkimg)
    }
    brk.scale=0.021
    brkgroup.add(brk)
  }
}
function createPipe(amount,startingX,startingY,vX,vY,rota){
  for(var i=0;i<amount;i=i+1){
    var ppe =createSprite(startingX+vX*i,startingY+vY*i,25,25)
    ppe.shapeColor = "brown"
    ppe.addImage(ppeimg)
    ppe.scale=0.021
    ppe.rotation=rota
    ppegroup.add(ppe)
  }
}
function createHalfPipe(amount,startingX,startingY,vX,vY){
  for(var i=0;i<amount;i=i+1){
    var hpe =createSprite(startingX+vX*i,startingY+vY*i,25,25)
    hpe.shapeColor = "brown"
    hpe.addImage(hpeimg)
    hpe.scale=0.021
    hpegroup.add(hpe)
  }
}
function createHardBlock(amount,startingX,startingY,vX,vY){
  for(var i=0;i<amount;i=i+1){
    var hrd =createSprite(startingX+vX*i,startingY+vY*i,25,25)
    hrd.shapeColor = "brown"
    hrd.addImage(hrdimg)
    hrd.scale=0.021
    hrdgroup.add(hrd)
  }
}
function makeCoin(name){
  
  name.shapeColor = "brown"
  name.addAnimation("spinning",coinimg)
  name.scale=0.021
}
function makeQuestion(name){
  name.shapeColor = "brown"
  name.addImage(queimg)
  name.scale=0.021
  quegroup.add(name)
}
function makeMushroomQuestion(name){
  name.shapeColor = "red"
  name.addImage(queimg)
  name.scale=0.021
  quegroup.add(name)
}
function makeQuestionScan(name){
  name.shapeColor = "brown"
  name.setCollider("rectangle",0,10,7,10,0)
  name.visible =false
  name.debug=true
  
}
function createFakeCoin(x,y,name){
  var fcoin=createSprite(x,y)
  fcoin.addAnimation("faking",coinimg)
  fcoin.scale=0.021
  fcoin.velocityY=-5
  fcoin.lifetime=10
  fcoin.depth=name.depth-1
}
function createcloud(x,y,size){
  
    var cld =createSprite(x,y,25,25)
    cld.shapeColor = "brown"
    cld.addImage(cldimg)
    cld.scale=size
    
  
}