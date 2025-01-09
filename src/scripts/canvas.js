
const canvas = document.getElementById('who-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = 200;

function drawLineWithSmoothHill() {
  const startY = 176;
  const startX = 0;
  const endX = canvas.width;
  const hillHeight = 176;
  const curveRadius = 50;

  const hillCenter = endX / 2 - endX / 5;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.moveTo(startX, startY);

  ctx.arcTo(hillCenter - 100, startY, hillCenter - 70, startY - curveRadius, curveRadius);
  ctx.arcTo(hillCenter, startY - hillHeight, hillCenter + curveRadius, startY - hillHeight, curveRadius);

  ctx.lineTo(endX, startY - hillHeight);

  ctx.lineTo(endX, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();

  ctx.fillStyle = '#070707';
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.arcTo(hillCenter - 100, startY, hillCenter - 70, startY - curveRadius, curveRadius);
  ctx.arcTo(hillCenter, startY - hillHeight, hillCenter + curveRadius, startY - hillHeight, curveRadius);
  ctx.lineTo(endX, startY - hillHeight);
  ctx.strokeStyle = '#070707';
  ctx.lineWidth = 1;
  ctx.stroke();
}

drawLineWithSmoothHill();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = 200;
  drawLineWithSmoothHill();
});