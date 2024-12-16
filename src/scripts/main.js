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
    canvas.height = 100; // Высота области рисования

    // Функция для рисования линии с горкой и закругленным углом
    function drawLineWithHill() {
      const startY = 100; // Вертикальная позиция линии по центру
      const startX = 0; // Начало линии слева
      const endX = canvas.width; // Конец линии справа
      const hillHeight = 100; // Высота горки
      const curveRadius = 30; // Радиус закруглений
      const hillWidth = endX / 2; // Ширина горки

      // Рисуем черный фон только под линией
      ctx.fillStyle = 'black';
      ctx.fillRect(0, startY, canvas.width, canvas.height - startY); // Черный фон под линией

      // Черный фон только справа от горки
      ctx.fillRect(hillWidth, startY - hillHeight, canvas.width - hillWidth, hillHeight); // Черный фон справа от горки

      ctx.beginPath();
      ctx.moveTo(startX, startY); // Начальная точка

      // Левая часть линии (горка с закруглением)
      ctx.lineTo(hillWidth - curveRadius, startY); // Прямой участок до начала горки
      ctx.arcTo(hillWidth, startY, hillWidth, startY - hillHeight, curveRadius); // Закругление на левой стороне

      // Закругление на углу после подъема
      ctx.arcTo(hillWidth, startY - hillHeight, hillWidth + curveRadius, startY - hillHeight, curveRadius); // Закругление угла

      // Прямой участок до правого края
      ctx.lineTo(endX, startY - hillHeight); // Прямой участок до правого края

      ctx.strokeStyle = 'white'; // Белая линия
      ctx.lineWidth = 3;
      ctx.stroke();
    }

    // Рисуем линию с горкой и закругленным углом
    drawLineWithHill();

    // Подстраиваем Canvas при изменении размера окна
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = 200;
      drawLineWithHill();
    });