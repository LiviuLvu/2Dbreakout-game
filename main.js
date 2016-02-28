var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var x = canvas.width / 2;
var y = canvas.height - 30;
// move ball
var dx = 2;
var dy = -2;
var ballRadius = 10;
// paddle for interaction with the ball
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
// pressed buttons
var rightPressed = false;
var leftPressed = false;


function drawPaddle() {
   ctx.beginPath();
   ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
   ctx.fillStyle = "#0095DD";
   ctx.fill();
   ctx.closePath();
}

function drawBall() {
   // ball
   ctx.beginPath();
   ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
   ctx.fillStyle = "#0095DD";
   ctx.fill();
   ctx.closePath();
}

function draw() {
   // clear ball after each frame
   // ctx.clearRect(0, 0, canvas.width, canvas.height);

   drawBall();
   // move ball
   x += dx;
   y += dy;
   // bounce ball of left and right walls
   if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
      dx = -dx;
   }
   // bounce ball of top and bottom walls
   if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
      dy = -dy;
   }
}
// listen for key presses
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
// continously update canvas
setInterval(draw, 0.01);
