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


const invertTargets = document.querySelectorAll('.invert-cursor');

invertTargets.forEach((target) => {
  target.addEventListener('mouseenter', () => {
    cursorOuter.classList.add('invert');
    cursorInner.classList.add('invert');
  });
  target.addEventListener('mouseleave', () => {
    cursorOuter.classList.remove('invert');
    cursorInner.classList.remove('invert');
  });
});