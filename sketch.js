
function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(200);//文字尺寸
  textAlign(CENTER, CENTER);//文字固定在中心
}

  
function draw() {
 
  background("#BEBEDA");



  var rect_width = 50
  var bc_w = 50
  var sc_w =25
    for(let j = 0;j<25;j=j+1){
    for(let x=0;x<width;x=x+rect_width){
      ellipse(x,25+50*j,bc_w+mouseY/15)
      stroke("#E5F993")
      noFill()
      strokeWeight(3)
      rect(x,25+50*j,rect_width+mouseX/20)
      fill("#BF211E")
      noFill()
      strokeWeight(2)
      ellipse(25+x+rect_width,50+50*j,sc_w+mouseY/25)
     }
    
    }
  
  
   

    
    translate(width / 2, height / 2);
    fill(random(225), random(0), random(255));//隨著時間改變顏色
    rotate(frameCount / 80);//隨著時間旋轉
    text("Emily", 0, 0);//文字
    pop();
  }