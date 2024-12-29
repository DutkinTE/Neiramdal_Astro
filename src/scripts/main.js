
const cursorOuter = document.createElement('div');
const cursorInner = document.createElement('div');
cursorOuter.classList.add('cursor-outer');
cursorInner.classList.add('cursor-inner');
document.body.appendChild(cursorOuter);
document.body.appendChild(cursorInner);

const hover = document.querySelectorAll('.hover');

window.addEventListener('load', () => {
  window.scrollTo(0, 0); // Прокручивает страницу к координатам (0, 0)
});


hover.forEach(element => {
  element.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    cursorInner.style.height = `4px`;
    cursorInner.style.width = `4px`;
    cursorInner.style.transform = `translate(0px, 0px)`;
  });
});

document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  cursorOuter.style.width = `35px`;
  cursorOuter.style.height = `35px`;
  cursorInner.style.height = `8px`;
  cursorInner.style.width = `8px`;

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


let lastScrollY = 0;
let ticking = false;

function handleScroll() {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    if (window.scrollY > 40 && window.scrollY < document.getElementById('who').offsetTop) {
      window.scrollTo({
        top: document.getElementById('who').offsetTop,
        behavior: 'smooth'
      });
      document.getElementById('main-header').style.maxWidth = `1440px`;
      document.getElementById('who-title').style.color = `#f5f5f5`;
      document.querySelectorAll('.who-content1').forEach(element => {
        element.style.color = `#f5f5f5`;
      });
    }
    else if (window.scrollY > document.getElementById('who').offsetTop + 50 && window.scrollY < document.getElementById('who').offsetTop + 400) {
      document.getElementById('who-title2').style.color = `#f5f5f5`;
      window.scrollTo({
        top: document.getElementById('who').offsetTop + 400,
        behavior: 'smooth'
      });
    }
    else if (window.scrollY > document.getElementById('who').offsetTop + 450 ) {
      window.scrollTo({
        top: document.getElementById('who').offsetTop + 450 + window.innerHeight,
        behavior: 'smooth'
      });
    }
  } else if (currentScrollY < lastScrollY) {
    if (window.scrollY < document.getElementById('who').offsetTop) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      document.getElementById('main-header').style.maxWidth = `100%`;
    }

  }

  lastScrollY = currentScrollY;
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(handleScroll);
    ticking = true;
  }
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
