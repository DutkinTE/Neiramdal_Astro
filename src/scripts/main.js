const cursorOuter = document.createElement('div');
const cursorInner = document.createElement('div');
cursorOuter.classList.add('cursor-outer');
cursorInner.classList.add('cursor-inner');
document.body.appendChild(cursorOuter);
document.body.appendChild(cursorInner);

document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;

  cursorOuter.style.transform = `translate(${clientX - 25}px, ${clientY - 25}px)`;

  cursorInner.style.transform = `translate(${clientX - 4.75}px, ${clientY - 4.75}px)`;
});



const canvas = document.getElementById('who-canvas');
const ctx = canvas.getContext('2d');

// Устанавливаем ширину и высоту Canvas на размеры окна
canvas.width = window.innerWidth;
canvas.height = 200; // Высота области рисования

// Функция для рисования и закрашивания области
function drawLineWithSmoothHill() {
  const startY = 176; // Вертикальная позиция линии
  const startX = 0; // Начало линии слева
  const endX = canvas.width; // Конец линии справа
  const hillHeight = 176; // Высота горки
  const curveRadius = 50; // Радиус закруглений

  // Смещение горки на четверть экрана влево
  const hillCenter = endX / 2 - endX / 5; // Центр горки, смещенный влево

  ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем Canvas

  ctx.beginPath();
  ctx.moveTo(startX, startY); // Начало слева

  // Плавный подъём с закруглением
  ctx.arcTo(hillCenter - 100, startY, hillCenter - 70, startY - curveRadius, curveRadius);
  ctx.arcTo(hillCenter, startY - hillHeight, hillCenter + curveRadius, startY - hillHeight, curveRadius);

  // Двигаемся к правому краю
  ctx.lineTo(endX, startY - hillHeight);

  // Закрываем путь вниз и влево
  ctx.lineTo(endX, canvas.height); // Вниз к нижней части Canvas
  ctx.lineTo(0, canvas.height); // Влево к нижнему углу
  ctx.closePath(); // Замыкаем путь

  // Закрашиваем область чёрным цветом
  ctx.fillStyle = 'black';
  ctx.fill();

  // Обводим белую линию поверх
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.arcTo(hillCenter - 100, startY, hillCenter - 70, startY - curveRadius, curveRadius);
  ctx.arcTo(hillCenter, startY - hillHeight, hillCenter + curveRadius, startY - hillHeight, curveRadius);
  ctx.lineTo(endX, startY - hillHeight);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 1;
  ctx.stroke();
}

// Рисуем линию с горкой и закрашиваем нижнюю часть
drawLineWithSmoothHill();

// Подстраиваем Canvas при изменении размера окна
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = 200;
  drawLineWithSmoothHill();
});