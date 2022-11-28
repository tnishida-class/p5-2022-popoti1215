// 最終課題を制作しよう

let x, y; // ポイント1：関数の外で変数を宣言する

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}

function draw(){
  background(160, 192, 255); // ポイント2: draw の最初に background を書く
  noFill();
  for(let i = 100; i >=60; i=i-10){
    stroke(255, 0, 0);
    ellipse(x, y, i);
  }
  for(let j = 50; j >=10; j=j-10){
    stroke(0, 0, 255);
    ellipse(x, y, j);
  }
  
  y += 2;
  if(y > height){ y = 0; }
  else if(y < 0){ y = height; } 


}

