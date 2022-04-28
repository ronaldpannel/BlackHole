class BlackHole {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.mass = mass;
    this.rs = (2 * G * this.mass) / (c * c);
  }
  pull(photon){
      const force = p5.Vector.sub(this.pos, photon.pos)
      const r = force.mag()
      const fg = (G * this.mass) / (r * r)
      force.setMag(fg)
      photon.vel.add(force)
      photon.vel.setMag(c)

      if(r < this.rs){
        photon.stop
      }

  }
  draw() {
    ellipseMode(RADIUS);
    fill(0);
    noStroke();
    circle(this.pos.x, this.pos.y, this.rs);

    noFill();
    stroke(100, 100);
    strokeWeight(64);
    ellipse(this.pos.x, this.pos.y, this.rs * 3 + 32);
    stroke('orange')
    strokeWeight(12);
    circle(this.pos.x, this.pos.y, this.rs * 1.5 + 6);
  }
}
