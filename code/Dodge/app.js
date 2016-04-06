var player;
var enemy;
var enemy2;
var enemy3;
var enemy4;

function setup() {
  createCanvas(500, 500);
  player = createSprite(150, 470);
  var playerImage = loadImage( "http://i.imgur.com/Bgf5aEc.gif");
player.addImage(playerImage);
enemy = createSprite(150, 130, 8, 64);
enemy2 = createSprite(150, 130, 8, 64);
enemy3 = createSprite(150, 130, 8, 64);
enemy4 = createSprite(150, 130, 8, 64);
}

function draw() {
  background(255, 240, 220);

if (keyDown(LEFT_ARROW)) {
  player.position.x = player.position.x - 8;
}
if (keyDown(RIGHT_ARROW)) {
  player.position.x = player.position.x + 8;
}

enemy.position.y = enemy.position.y += 10;
enemy2.position.y = enemy.position.y += 5;
enemy3.position.y = enemy.position.y += 2;
enemy4.position.y = enemy.position.y += 20;

if (enemy.position.y > 500) {
  enemy.position.y = 0;
  enemy.position.x = random(500);
}
if (enemy2.position.y > 500) {
  enemy2.position.y = 0;
  enemy2.position.x = random(500);
}
if (enemy3.position.y > 500) {
  enemy3.position.y = 0;
  enemy3.position.x = random(500);
}
if (enemy4.position.y > 500) {
  enemy4.position.y = 0;
  enemy4.position.x = random(500);
}
if (player.overlap(enemy)) {
  alert("Game Over. Please press refresh to play again.");
  player.remove();
  enemy.remove();
  enemy2.remove();
  enemy3.remove();
  enemy4.remove();
  setup();
  draw();
}
else if (player.overlap(enemy2)) {
  alert("Game Over. Please press refresh to play again.");
  player.remove();
  enemy.remove();
  enemy2.remove();
  enemy3.remove();
  enemy4.remove();
  setup();
  draw();
}
else if (player.overlap(enemy3)) {
  alert("Game Over. Please press refresh to play again.");
  player.remove();
  enemy.remove();
  enemy2.remove();
  enemy3.remove();
  enemy4.remove();
  setup();
  draw();
}
else if (player.overlap(enemy4)) {
  alert("Game Over. Please press refresh to play again.");
  player.remove();
  enemy.remove();
  enemy2.remove();
  enemy3.remove();
  enemy4.remove();
  setup();
  draw();
}

  draw();
}
