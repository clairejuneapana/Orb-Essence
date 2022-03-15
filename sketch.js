//This is an array of all of the values you used to modify the color based on the mouse input. You can access specific elments withe the name then the index. Array's start at Zero so for the first element you have to use a[0]
let a = [4, 3.5, 3, 2.5, 2, 1.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(90, 80, 200);

  //Here we use a for loop to draw all 16 circles every frame.
  //The value that each part of the fill uses corrresponds to each index in the array.
  // and by using some clever math we can also change the sizes of the circles too.
  //The if else block is so that we can switch from the multiplaction to the division as we need to.
  for (let i = 0; i < 16; i++) {
    if (i < 7) {
      fill(mouseX / a[i], mouseY / a[i], mouseX / a[i], mouseY);
    } else {
      fill(mouseX * a[i], mouseY * a[i], mouseX * a[i], mouseY);
    }
    ellipseMode(CENTER);
    ellipse(windowWidth / 2, windowHeight / 2, 850 - 50 * i, 850 - 50 * i);
  }
  /*fill(mouseX/4,mouseY/4,mouseX/4,mouseY);
  ellipseMode(CENTER);
  ellipse(windowWidth/2, windowHeight/2, 850, 850);
  
  fill(mouseX/3.5,mouseY/3.5,mouseX/3.5,mouseY);
  ellipseMode(CENTER);
  ellipse(windowWidth/2, windowHeight/2, 800, 800);
  
  fill(mouseX/3,mouseY/3,mouseX/3,mouseY);
  ellipseMode(CENTER);
  ellipse(windowWidth/2, windowHeight/2, 750, 750);
 
  fill(mouseX/2.5,mouseY/2.5,mouseX/2.5,mouseY);
  ellipse(windowWidth/2, windowHeight/2, 700, 700);
 
  fill(mouseX/2,mouseY/2,mouseX/2,mouseY);
  ellipse(windowWidth/2, windowHeight/2, 650, 650);
 
  fill(mouseX/1.5,mouseY/1.5,mouseX/1.5,mouseY);
  ellipse(windowWidth/2, windowHeight/2, 600, 600);
  
  fill(mouseX,mouseY,mouseX,mouseY);
  ellipse(windowWidth/2, windowHeight/2, 550, 550);
  
  fill(mouseX*1.5,mouseY*1.5,mouseX*1.5,mouseY);
  ellipse(windowWidth/2, windowHeight/2, 500, 500);
 
  fill(mouseX*2,mouseY*2,mouseX*2,mouseY);
  ellipse(windowWidth/2, windowHeight/2, 450, 450);
 
  fill(mouseX*2.5,mouseY*2.5,mouseX*2.5,mouseY);
  ellipse(windowWidth/2, windowHeight/2, 400, 400);
 
  fill(mouseX*3,mouseY*3,mouseX*3,mouseY);
  ellipse(windowWidth/2, windowHeight/2, 350, 350);
  
  fill(mouseX*3.5,mouseY*3.5,mouseX*3.5,mouseY);
  ellipse(windowWidth/2, windowHeight/2, 300, 300);
 
  fill(mouseX*4,mouseY*4,mouseX*4,mouseY);
  ellipse(windowWidth/2, windowHeight/2, 250, 250);
  
  fill(mouseX*4.5,mouseY*4.5,mouseX*4.5,mouseY);
  ellipse(windowWidth/2, windowHeight/2, 200, 200);
  
  fill(mouseX*5,mouseY*5,mouseX*5,mouseY);
  ellipse(windowWidth/2, windowHeight/2, 150, 150);
  
  fill(mouseX*5.5,mouseY*5.5,mouseX*4.5,mouseY);
  ellipse(windowWidth/2, windowHeight/2, 100, 100);
  */

  
  //strobe squares and circles;
  fill(110, 150, 30, 220);
  rectMode(CENTER);
  // square(windowWidth/2, windowHeight/2,random (20,100));
  fill(200, 80, 69);
  //  ellipse(windowWidth/2,windowHeight/2,random(1,150))

  fill(110, 150, 30, 220, 50);
  rectMode(CENTER);
  // square(windowWidth/2, windowHeight/2,random (20,200));
  fill(200, 80, 69, 50);
  //   ellipse(windowWidth/2,windowHeight/2,random(1,250))

  fill(110, 150, 30, 220, 100);
  rectMode(CENTER);
  // square(windowWidth/2, windowHeight/2,random (20,300));
  fill(200, 80, 69, 100);
  //   ellipse(windowWidth/2,windowHeight/2,random(1,350))

  fill(110, 150, 30, 220, 150);
  rectMode(CENTER);
  //  square(windowWidth/2, windowHeight/2,random (20,400));
  fill(200, 80, 69, 150);
  //  ellipse(windowWidth/2,windowHeight/2,random(1,450))

  fill(110, 150, 30, 220, 200);
  rectMode(CENTER);
  // square(windowWidth/2, windowHeight/2,random (20,500));
  fill(200, 80, 69, 200);
  //  ellipse(windowWidth/2,windowHeight/2,random(1,550))

  fill(110, 150, 30, 220, 250);
  rectMode(CENTER);
  // square(windowWidth/2, windowHeight/2,random (20,600));
  fill(200, 80, 69, 250);
 //  ellipse(windowWidth/2,windowHeight/2,random(1,650))
}

function mousePressed() {
  background(90, 80, 200);

  fill(90, 80, 200);
  noStroke();
  ellipseMode(CENTER);
  ellipse(windowWidth / 2, windowHeight / 2, 850, 850);

  fill(88, 78, 198);
  noStroke();
  ellipseMode(CENTER);
  ellipse(windowWidth / 2, windowHeight / 2, 800, 800);

  fill(86, 76, 196);
  noStroke(0);
  ellipseMode(CENTER);
  ellipse(windowWidth / 2, windowHeight / 2, 750, 750);

  fill(84, 74, 194);
  noStroke(0);
  ellipse(windowWidth / 2, windowHeight / 2, 700, 700);

  fill(82, 72, 192);
  noStroke(0);
  ellipse(windowWidth / 2, windowHeight / 2, 650, 650);

  fill(80, 70, 190);
  noStroke(0);
  ellipse(windowWidth / 2, windowHeight / 2, 600, 600);

  fill(78, 68, 188);
  noStroke(0);
  ellipse(windowWidth / 2, windowHeight / 2, 550, 550);

  fill(76, 66, 186);
  noStroke(0);
  ellipse(windowWidth / 2, windowHeight / 2, 500, 500);

  fill(74, 64, 184);
  noStroke(0);
  ellipse(windowWidth / 2, windowHeight / 2, 450, 450);

  fill(72, 62, 182);
  noStroke(0);
  ellipse(windowWidth / 2, windowHeight / 2, 400, 400);

  fill(70, 60, 180);
  noStroke(0);
  ellipse(windowWidth / 2, windowHeight / 2, 350, 350);
}
