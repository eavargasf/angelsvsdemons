const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Character image variables (replace with your image sources)
const angelImg = new Image();
angelImg.src = "path/to/angel_idle.png";
const angelImgWalk = new Image();
angelImgWalk.src = "path/to/angel_walk.png";

let angelX = 100;
let angelY = 100;
let angelFrame = 0;
let angelMoveRight = false;
let angelMoveLeft = false;

function drawGame() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw Paris background (replace with your background image or code)
  ctx.fillStyle = "#ccc";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw character with isometric positioning
  const isometricScale = 0.7; // Adjust scale for isometric view
  ctx.save();
  ctx.translate(angelX, angelY);
  ctx.scale(isometricScale, isometricScale);
  ctx.rotateZ(45 * Math.PI / 180); // Isometric rotation

  // Animate character walk cycle (replace with your animation logic)
  if (angelMoveRight || angelMoveLeft) {
    angelFrame = (angelFrame + 1) % 2;
    ctx.drawImage(angelImgWalk, -angelImgWalk.width * angelFrame, 0);
  } else {
    ctx.drawImage(angelImg, 0, 0);
  }

  // Draw character on different layers for pseudo-3D effect
  ctx.restore();
  ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 10, 10, canvas.width - 20, canvas.height - 20); // Layer 1 (background)
  ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height); // Layer 2 (foreground)
}

function updateGame() {
  // Update character position based on movement flags
  if (angelMoveRight) {
    angelX += 2;
  } else if (angelMoveLeft) {
    angelX -= 2;
  }

  // Update health information (replace with your health logic)
  document.getElementById('info').textContent = `Health: 100`;
}

function gameLoop() {
  updateGame();
  drawGame();
  requestAnimationFrame(gameLoop);
}

// Event listeners for character movement (replace with your controls)
document.addEventListener('keydown', (event) => {
  if (event.key === 'd') {
    angelMoveRight = true;
  } else if (event.key === 'a') {
    angelMove
