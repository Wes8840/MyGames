var player;
var player2;
var ball;
var goal;

function setup() {
    createCanvas(200, 500);
    player = createSprite(125, 400, 50, 50);
    player2 = createSprite(125, 20, 50, 50);
    ball = createSprite(125, 250, 25, 25);
    goal = createSprite(125, 5, 100, 25);
    
}

function draw() {
    background(255, 240, 220);
    drawSprites();
    
if (keyDown(LEFT_ARROW)) {
  player.position.x = player.position.x - 8;
}
if (keyDown(RIGHT_ARROW)) {
  player.position.x = player.position.x + 8;
}
if (keyDown(UP_ARROW)) {
    player.position.y = player.position.y - 8;
}
if (keyDown(DOWN_ARROW)) {
    player.position.y = player.position.y + 8;
}
function keyCode(event) {
   var x = event.keyCode;
   if (x == 87) {
    player2.position.y = player2.position.y - 8;
   }
   if (x == 65) {
    player2.position.x = player2.position.x - 8;
   }
   if (x == 68) {
       player2.position.x = player2.position.x + 8;
   }
   if ( x == 83) {
     player2.position.y = player2.position.y + 8;  
   }
}
    ball.bounce(player);
    ball.bounce(player2);
    player.bounce(player2);
    
    if(ball.overlap(goal)) {    
    alert("GOAL!!!");
    ball.remove()
    goal.remove()
    player.remove()
    setup();
    draw();
  }                                     
}

