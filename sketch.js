const c = 30;
let G = 3.58;
const dt = 0.1;
let m87;
const particles = [];
let start;
let end;

function setup() {
  createCanvas(windowWidth, windowHeight);
  m87 = new BlackHole(width / 2, 320, 3000);
  start = height / 2;
  end = height / 2 - m87.rs * 2.6;
  for (let y = 0; y < start; y += 6) {
    particles.push(new Photon(width - 20, y));
  }
}

function draw() {
  // noLoop();
  background(0, 0, 0);
  m87.draw();
  stroke(255);
  strokeWeight(3);
  // line(0, start, width, start)
  // line(0, end, width, end)

  for (let p of particles) {
    m87.pull(p);
    p.draw();
    p.update();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  draw();
}
