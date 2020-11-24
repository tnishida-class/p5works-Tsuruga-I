let x, y, vx, vy, angle, count, cycle, size;
const g = 1;
const vyMax = 5;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = mouseX;
  y = mouseY;
  vx = 8;
  vy = 1;
  angle = 0
  size = 20
  count = 0
  cycle = 70;
}

function draw(){
  background(0);
  noStroke();
  count = (count + 1) % cycle;
  if(count < 35){
    size += 0.4;
  }
  else{
    size -= 0.4;
  }
  fill(random(255),random(255),random(255),90);
  star(x, y, size, angle);


    angle += 0.08;
    x -= vx;
    y += vy;
    vy += g
    vy = constrain(vy, -vyMax, vyMax);

    fill(random(255),random(255),random(255),90);
    star(x, y, size, angle);

      if(x > width){ x = 0; }
      else if(x < 0){ x = width; }
      if(y > height){ y = 0; }
      if(y < 0){ y = height; }
    }




function star(cx, cy, size, angle){
  beginShape();
  for(var i = 0; i < 5; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI + angle;

    var x = cx + cos(theta) * size;
    var y = cy + sin(theta) * size;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function mouseClicked(){
  x = mouseX;
  y = mouseY;
}

    function windowResized(){
      resizeCanvas(windowWidth, windowHeight);
    }
