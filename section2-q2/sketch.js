// チェッカー
function setup() {
  createCanvas(400, 4000);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i+j)% 2==0){fill(255)}
      else{fill(125)
    rect(8*i, 8*j, 8, 8);
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)

     if(j<3){fill(255,0,0)};
     ellipse((8*i)+4, (8*j)+4, 7)
     if(j>4){fill(51)};
     ellipse((8*i)+4, (8*j)+4, 7);

      }
    }
  }
}
