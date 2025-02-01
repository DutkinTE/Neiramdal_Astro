document.addEventListener('mousemove', (e) => {
  const video = document.getElementById('background-video');
  const rect = video.getBoundingClientRect();
  const offsetX = Math.min(Math.max(e.clientX - rect.left - rect.width / 2, -10), 10);
  const offsetY = Math.min(Math.max(e.clientY - rect.top - rect.height / 2, -10), 10);

  video.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});