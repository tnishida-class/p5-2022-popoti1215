// 小手調べ
function setup(){
  createCanvas(100,100);
  noFill();
  for(let x = 50; x >=30; x=x-5){
    stroke(255, 0, 0);
    ellipse(50, 50, x);
  }
  for(let y = 25; y >=5; y=y-5){
    stroke(0, 0, 255);
    ellipse(50, 50, y);
  }
}
