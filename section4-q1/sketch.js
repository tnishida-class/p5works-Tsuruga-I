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
  //for(count == 0; count < 100; count++){
    if( count == 0){
      size == size +10
    }
    else{
      size == size -10
  }

//  }
//fill(255);
  ellipse(width / 2, height / 2, size);

  //size += 2
  //if (size > width){size -= 2}
  //else if (size < 0){size += 2}
}
