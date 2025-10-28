function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(150, 180, 240, 10);
}

function mouseMoved(){
    noStroke();
    fill(0, 0, 100);
    const size = Math.sin(frameCount * .1) * 100;
    ellipse(mouseX, mouseY, size, size);
}