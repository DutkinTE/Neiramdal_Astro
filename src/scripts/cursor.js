const cursorOuter = document.createElement('div');
const cursorInner = document.createElement('div');
cursorOuter.classList.add('cursor-outer');
cursorInner.classList.add('cursor-inner');
document.body.appendChild(cursorOuter);
document.body.appendChild(cursorInner);

document.querySelectorAll('.hover').forEach(element => {
  element.addEventListener('mouseenter', (e) => {
    cursorInner.style.width = `4px`;
    cursorInner.style.height = `4px`;
    cursorInner.style.transform = `translate(${clientX - 2}px, ${clientY - 2}px)`;
  });

  element.addEventListener('mouseleave', () => {
    cursorInner.style.width = `8px`;
    cursorInner.style.height = `8px`;
  });
});

document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;

  cursorOuter.style.transform = `translate(${clientX - 18.5}px, ${clientY - 18.5}px)`;
  cursorInner.style.transform = `translate(${clientX - cursorInner.offsetWidth / 2}px, ${clientY - cursorInner.offsetWidth / 2}px)`;
});

document.addEventListener('mousedown', (e) => {
  const { clientX, clientY } = e;
  cursorOuter.style.width = `30px`;
  cursorOuter.style.height = `30px`;
  cursorInner.style.height = `12px`;
  cursorInner.style.width = `12px`;

  cursorOuter.style.transform = `translate(${clientX - 16}px, ${clientY - 16}px)`;
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


const dragCursor = document.createElement('div');
const cursorText = document.createElement('div');
cursorText.classList.add('cursor-text');
cursorText.textContent = 'Тянуть'; 
dragCursor.classList.add('drag-cursor');
document.body.appendChild(dragCursor);
dragCursor.appendChild(cursorText);

document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;

  dragCursor.style.transform = `translate(${clientX - 85}px, ${clientY - 85}px)`;
});

document.getElementById('carousel').addEventListener('mouseenter', () => {
  cursorOuter.style.opacity = 0;
  cursorInner.style.opacity = 0;
  dragCursor.style.opacity = 1;
});

document.getElementById('carousel').addEventListener('mouseleave', () => {
  cursorOuter.style.opacity = 1;
  cursorInner.style.opacity = 1;
  dragCursor.style.opacity = 0;
});

document.getElementById('carousel').addEventListener('mousedown', () => {
  
});

document.querySelectorAll('.more_buttons').forEach(item => {
  item.addEventListener('mouseenter', () => {
    cursorOuter.style.opacity = 1;
    cursorInner.style.opacity = 1;
    dragCursor.style.opacity = 0;
  });
  item.addEventListener('mouseleave', () => {
    cursorOuter.style.opacity = 0;
    cursorInner.style.opacity = 0;
    dragCursor.style.opacity = 1;
  });
});