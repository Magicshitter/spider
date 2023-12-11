// Setup function
function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  // Draw function
  function draw() {
    // Background and Stroke Settings
    background(255, 128, 0);
    strokeWeight(min(width, height) / 50);
  
    // Vertical Center Line
    stroke(200);
    line(190, 0, 190, 190);
  
    // Triangle Sections
    fill(0);
    stroke(0);
    line(190, 190, 90, 90);
    line(90, 90, 10, 190);
    line(190, 190, 290, 90);
    line(290, 90, 370, 190);
    line(190, 190, 90, 150);
    line(90, 150, 10, 270);
    line(190, 190, 290, 150);
    line(290, 150, 370, 270);
    line(190, 190, 90, 230);
    line(90, 230, 10, 350);
    line(190, 190, 290, 230);
    line(290, 230, 370, 350);
    line(190, 190, 90, 290);
    line(90, 290, 150, 350);
    line(190, 190, 290, 290);
    line(290, 290, 230, 350);
  
    // Circle and Eyes
    ellipse(190, 190, 80, 80);
    fill(255);
    ellipse(180, 185, 20, 20);
    ellipse(200, 185, 20, 20);
  
    // No Fill and Mouth
    noFill();
    stroke(255);
    arc(190, 200, 60, 40, 0, PI);
  }
  
