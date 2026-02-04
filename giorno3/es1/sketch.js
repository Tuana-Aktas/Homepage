function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(200)
  noFill()
  stroke(0)

  let px = mouseX
  let py = mouseY
  let s  = 10

  // ---- LETTERA T ----
  beginShape()
  // barra orizzontale
  vertex(px + 0*s + random(-2,2), py + 0*s + random(-2,2))
  vertex(px + 4*s + random(-2,2), py + 0*s + random(-2,2))
  // stelo
  vertex(px + 2.5*s + random(-2,2), py + 0*s + random(-2,2))
  vertex(px + 2.5*s + random(-2,2), py + 10*s + random(-2,2))
  vertex(px + 1.5*s + random(-2,2), py + 10*s + random(-2,2))
  vertex(px + 1.5*s + random(-2,2), py + 0*s + random(-2,2))
  endShape(CLOSE)

  // ---- LETTERA A ----
  let ax = px + 6*s  // spostamento a destra

  beginShape()
  vertex(ax + 0*s + random(-2,2), py + 10*s + random(-2,2))
  vertex(ax + 2*s + random(-2,2), py + 0*s + random(-2,2))
  vertex(ax + 4*s + random(-2,2), py + 10*s + random(-2,2))
  vertex(ax + 3.2*s + random(-2,2), py + 10*s + random(-2,2))
  vertex(ax + 2.7*s + random(-2,2), py + 7*s + random(-2,2))
  vertex(ax + 1.3*s + random(-2,2), py + 7*s + random(-2,2))
  vertex(ax + 0.8*s + random(-2,2), py + 10*s + random(-2,2))
  endShape(CLOSE)
}