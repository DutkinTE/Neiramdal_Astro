const cursorOuter = document.createElement('div');
  const cursorInner = document.createElement('div');
  cursorOuter.classList.add('cursor-outer');
  cursorInner.classList.add('cursor-inner');
  document.body.appendChild(cursorOuter);
  document.body.appendChild(cursorInner);

  // Отслеживаем движение мыши
  document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;

    // Двигаем внешний круг
    cursorOuter.style.transform = `translate(${clientX - 25}px, ${clientY - 25}px)`;

    // Двигаем внутреннюю точку
    cursorInner.style.transform = `translate(${clientX - 4.75}px, ${clientY - 4.75}px)`;
  });