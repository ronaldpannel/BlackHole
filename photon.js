class Photon {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(-c, 0);
    this.history = [];
    this.stopped = false;
  }
  stop() {
    this.stopped = true;
  }
  update() {
    if (!this.stopped) {
      if (frameCount % 5 == 0) {
        this.history.push(this.pos.copy());
      }
      const deltaV = this.vel.copy();
      deltaV.mult(dt);
      this.pos.add(deltaV);
    }
    if (this.history.length > 200) {
      this.history.splice(o, 1);
    }
  }
  draw() {
    strokeWeight(2); 
    stroke(255,100);
    point(this.pos.x, this.pos.y);

    strokeWeight(2);
    noFill();
    beginShape();
    for (let v of this.history) {
      vertex(v.x, v.y);
    }
    endShape();
  }
}
