var song
var songIsplay=false //設定此變數為"假"(false)，收到按下滑鼠把變數改為"真"(true)，音樂開始播放
var amp
var val
function preload(){
  song = loadSound("Ariana Grande, Doja Cat - motive (audio).mp3");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#f8f7ff");
  textSize(40)
  text("x:"+mouseX+" Y:"+mouseY,50,50)
    translate(width/2,height/2)
    fill('#ffe6a7')
    ellipse(0,0,400) //臉
    fill('#bb9457')
    ellipse(0,35,150,100) //鼻子
    fill('#432818')
    stroke('#353535')
    ellipse(0,5,80,50) //小鼻子
    fill('#f4f3ee')
    stroke('#ffe6a7')
    ellipse(-70,-90,90)  //左眼
    fill('#353535')
    ellipse(-70+map(mouseX,0,width,-20,20),-90+map(mouseY,0,height,-20,20),60)   //眼珠

    fill('#f4f3ee')
    ellipse(70,-90,90)  //右眼
    fill('#353535')
    ellipse(70+map(mouseX,0,width,-20,20),-90+map(mouseY,0,height,-20,20),60)   //眼珠

    stroke('#353535')
    line(55,30,120,80)
    line(40,30,100,90)
    line(25,35,80,100) //(右邊的鬍鬚)

    line(-55,30,-120,80)
    line(-40,30,-100,90)
    line(-25,35,-80,100) //(左邊的鬍鬚)
    
    fill('#ffe6a7')
    stroke('#ffe6a7')
    ellipse(180,-150,150,) //右邊耳朵
    fill('#ffe6a7')
    stroke('#ffe6a7')
    ellipse(-180,-150,150,) //左邊耳朵

    fill("#f4a261")
    arc(0,80,90,0,0,0)  //嘴巴下弧

   // if(mouseIsPressed)
    //{   //mouseIsPressed為true，代表有按下滑鼠
      //arc(0,80,90,90,0,330) //上弧
      //fill('#f4a261') 
     
    //}
    //else
    //{   //mouseIsPressed為false，代表沒有按下滑鼠
     // arc(0,80,95,00,0,0) //上弧
      //fill('#f4a261')
      
    //}
    
    
    if(!songIsplay){
      arc(0,80,90,0,0,0) //沒有播放音樂
    }
    else{
      vol = amp.getLevel() //取得聲音值(值為0~1之間)
      // console.log(vol)
      arc((0,80,90,90,0,330),map(vol,0,0.5,90,90),0,180)
    }
    function mousePressed()
    {
      if(!songIsplay){
        song.play()
        songIsplay = true
        amp=new p5.Amplitude()
    
      }
      else{
        song.pause()
        songIsplay = false
    
      }
      
    }}  
  



