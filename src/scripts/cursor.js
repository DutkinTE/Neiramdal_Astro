const cursorOuter = document.createElement('div');
const cursorInner = document.createElement('div');
cursorOuter.classList.add('cursor-outer');
cursorInner.classList.add('cursor-inner');
document.body.appendChild(cursorOuter);
document.body.appendChild(cursorInner);

document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  
  cursorOuter.style.width = `35px`;
  cursorOuter.style.height = `35px`;
  
  cursorOuter.style.transform = `translate(${clientX - 18.5}px, ${clientY - 18.5}px)`;
  cursorInner.style.transform = `translate(${clientX - cursorInner.offsetWidth / 2}px, ${clientY - cursorInner.offsetHeight / 2}px)`;
});

document.addEventListener('mousedown', (e) => {
  const { clientX, clientY } = e;
  cursorOuter.style.width = `30px`;
  cursorOuter.style.height = `30px`;
  cursorInner.style.height = `12px`;
  cursorInner.style.width = `12px`;

  cursorOuter.style.transform = `translate(${clientX - 15.75}px, ${clientY - 15.75}px)`;
  cursorInner.style.transform = `translate(${clientX - 6}px, ${clientY - 6}px)`;
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

document.querySelectorAll('.hover').forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursorInner.style.width = `4px`;
    cursorInner.style.height = `4px`;
  });

  element.addEventListener('mouseleave', () => {
    cursorInner.style.width = `8px`;
    cursorInner.style.height = `8px`;
  });
});
