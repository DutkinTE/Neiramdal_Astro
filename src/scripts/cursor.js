const cursorOuter = document.createElement('div');
const cursorInner = document.createElement('div');
cursorOuter.classList.add('cursor-outer');
cursorInner.classList.add('cursor-inner');
document.body.appendChild(cursorOuter);
document.body.appendChild(cursorInner);

const hover = document.querySelectorAll('.hover');


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
  