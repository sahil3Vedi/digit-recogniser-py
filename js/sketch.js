var pixels=[]

function Pixel(i){
  this.value=0;
  this.flick=0;
  this.pos=i;
  this.x=i%28;
  this.y=parseInt(i/28);

  this.show=function(){
    let a = this.x*10;
    let b = (this.x+1)*10;
    let c = this.y*10;
    let d = (this.y+1)*10;

    if((mouseY>c)&&(mouseY<d)){
      document.getElementById("pixelj").innerHTML = c/10;
      if((mouseX>a)&&(mouseX<b)){
        document.getElementById("pixeli").innerHTML = a/10;
        fill(0);
        this.flick=1;
      }
      else{
        fill(255);
        this.flick=0;
      }
    }
    else{
      fill(255);
      this.flick=0;
    }
    if(this.value==1){
      fill(0);
    }
    rect(this.x*10,this.y*10,9,9);
  }

}

function centerCanvas() {
  var x = (windowWidth) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup(){
  var cnv = createCanvas(280,280);
  var x = (windowWidth) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  cnv.style.zIndex=10;
  background(255);
  for(var i=0;i<784;i++){
    pixels[i] = new Pixel(i);
  }
}

function draw(){
  for(var i =0;i<784;i++){
    pixels[i].show();
  }
}

function windowResized() {
  centerCanvas();
}

function mousePressed(){
  for (var i=0;i<784;i++){
    if(pixels[i].flick==1){
      pixels[i].value=1;
    }
  }
}

function refresh(){
  for(var i =0;i<784;i++){
    pixels[i].value=0;
  }
}
