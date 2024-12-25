const cursorOuter = document.createElement('div');
const cursorInner = document.createElement('div');
cursorOuter.classList.add('cursor-outer');
cursorInner.classList.add('cursor-inner');
document.body.appendChild(cursorOuter);
document.body.appendChild(cursorInner);

document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;

  cursorOuter.style.transform = `translate(${clientX - 18.5}px, ${clientY - 18.5}px)`;

  cursorInner.style.transform = `translate(${clientX - 4}px, ${clientY - 4}px)`;
});

document.addEventListener('mousedown', (e) => {
  const { clientX, clientY } = e;
  cursorOuter.style.width = `30px`;
  cursorOuter.style.height = `30px`;
  cursorInner.style.height = `12px`;
  cursorInner.style.width = `12px`;

  cursorOuter.style.transform = `translate(${clientX - 15.75}px, ${clientY - 15.75}px)`;

  cursorInner.style.transform = `translate(${clientX - 5.75}px, ${clientY - 5.75}px)`;
});

document.addEventListener('mouseup', (e) => {
  const { clientX, clientY } = e;
  cursorOuter.style.width = `35px`;
  cursorOuter.style.height = `35px`;
  cursorInner.style.height = `8px`;
  cursorInner.style.width = `8px`;

  cursorOuter.style.transform = `translate(${clientX - 18.5}px, ${clientY - 18.5}px)`;

  cursorInner.style.transform = `translate(${clientX - 4}px, ${clientY - 4}px)`;
});

const hover = document.querySelectorAll('.hover');

hover.forEach(element => {
  element.addEventListener('mouseover', (e) => {
    const { clientX, clientY } = e;
    cursorInner.style.height = `4px`;
    cursorInner.style.width = `4px`;
    cursorInner.style.transform = `translate(${clientX - 0}px, ${clientY - 0}px)`;
  });

  element.addEventListener('mouseout', (e) => {
    const { clientX, clientY } = e;
    cursorInner.style.height = `8px`;
    cursorInner.style.width = `8px`;
    cursorInner.style.transform = `translate(${clientX - 4}px, ${clientY - 4}px)`;
  });
});

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

