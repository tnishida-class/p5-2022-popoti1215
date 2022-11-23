//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){ // すべてのボールを描画し、速度の分だけ移動させる
    let b = balls[i];
    // let size = size[j];
    // size[j] = random(20.60);
    let size = [];
for(let j = 0; j < balls.length; j++){
  size.push(random(20, 50)); // 20以上50未満のランダムな数を追加
}

    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
}

 function mouseDragged(){ // ドラッグされたらボールを増やす
   const dx = mouseX - pmouseX;
   const dy = mouseY - pmouseY;
   if(mag(dx, dy) > 5){ // mag(x,y) はベクトル(x,y)の長さ
     const b = { x: mouseX, y: mouseY, vx: dx, vy: dy, size: size };
     balls.push(b);
   }
 }
