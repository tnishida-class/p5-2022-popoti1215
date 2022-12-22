// テキスト「アニメーションの基本」
let x, y, vx, vy;// ポイント1：関数の外で変数を宣言する
const g = 1; //　重力
const vyMax = 30;

function setup(){ 
  createCanvas(windowWidth, windowHeight);// キャンバスの大きさをウィンドウの大きさと同じにする
  x = width / 2;
  y = height / 2;
  vx = 2;
  vy = 2; 
}

function draw(){
  background(160, 192, 255); // ポイント2: draw の最初に background を書く
  ellipse(x, y, 30);

  //速度は「位置の変化量」
  x += vx;
  y += vy;
  vy += g; // 重力は「速度の変化量」
  vy = constrain(vy, -vyMax, vyMax);
  if(y < 0 || y > height){ vy = -1 * vy; }
  y = constrain(y, 0, height);
}