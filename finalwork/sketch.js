// 最終課題を制作しよう

let x, y; 

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;

  m = width / 8;
  n = height / 8;
}

function draw(){
  background(160, 192, 255); 
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

  rect(n, n, 50, 3);
  
  instruction("Hit the target!　マウスをクリックして、棒を的の中心に一発で当ててください");

}

function mouseClicked(){
  n += x - 50 ;
  if(n > x - 50){ n = 0; }
  else if(n < 0){ n = width; } 
}

function instruction(t){  
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(0);
  rect(0, 0, w + p * 2, h + p * 2);
  fill(255);
  text(t, p, h + p);
}

