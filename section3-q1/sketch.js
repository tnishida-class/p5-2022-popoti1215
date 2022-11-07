// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]
  let size = count
  fill(171,44,39)
  if(count<50){
    ellipse(width / 2, height / 2, 50);
  }
  else if(50<=count<60){
    ellipse(width / 2, height / 2, size/2)
  }
  else {
    ellipse(width / 2, height / 2, 50);
  }
  
}
