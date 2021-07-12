var bgImg;
var cat,catImage1,catImage2,catImage3,catImage4;
var mouse,mouseImage1,mouseImage2,mouseImage3,mouseImage4;



function preload() {
  bgImg = loadImage("images/garden.png") ;
  catImage1 = loadAnimation("images/cat1.png");
  catImage2 = loadAnimation("images/cat2.png");
  catImage3 = loadAnimation("images/cat3.png");
  catImage4 = loadAnimation("images/cat4.png");
  mouseImage1 = loadAnimation("images/mouse1.png");
  mouseImage2 = loadAnimation("images/mouse2.png");
  mouseImage3 = loadAnimation("images/mouse3.png");
  mouseImage4 = loadAnimation("images/mouse4.png");
   //load the images here
}

function setup(){
    createCanvas(1000,800);
   cat = createSprite(870,600);
   cat.addAnimation("catSleeping",catImage1)
   cat.scale = 0.2;
   mouse =  createSprite(200,600);
   mouse.addAnimation("mouseStanding",mouseImage1);
   mouse.scale = 0.15;

}

function draw() {

    background(bgImg);

   if(cat.x-mouse.x<(cat.width-mouse.width)/2){
       cat.velocityX = 0;
       cat.addAnimation("catLastImage",catImage3);
       cat.x = 300;
       cat.changeAnimation("catLastImage");
       mouse.addAnimation("mouseLastImage",mouseImage3);
       mouse.changeAnimation("mouseLastImage");
   } //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning",catImage2)
        cat.changeAnimation("catRunning")
        mouse.addAnimation("mouseTeasing",mouseImage2)
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseTeasing");
    }

  //For moving and changing animation write code here


}
