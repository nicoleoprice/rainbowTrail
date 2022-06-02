let num = 40;
let mouseXArray = [];
let mouseYArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  
  for(let i = 0; i < num; i++) {
    mouseXArray.push(i);
    mouseYArray.push(i);
  }
}

function draw() {
  background(0);
  
  let j = frameCount % num;
  mouseXArray[j] = mouseX;
  mouseYArray[j] = mouseY;
  
  for (let i = 0; i < num; i++) {
    let k = (j + 1 + i) % num; 
    ellipse(mouseXArray[k], mouseYArray[k], i, i, 10);
  }
        noStroke();
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
  fill(r, g, b);
}
