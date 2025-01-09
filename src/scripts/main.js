window.addEventListener('load', () => {
  window.scrollTo(0, 0); // Прокручивает страницу к координатам (0, 0)
});

const headers = document.querySelectorAll('.skills-part-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.skills-part-icon');
    const isOpen = content.classList.contains('open');

    document.querySelectorAll('.skills-part-content').forEach(item => {
      item.classList.remove('open');
      item.style.maxHeight = null;
    });

    document.querySelectorAll('.skills-part-icon').forEach(icon => {
      icon.classList.remove('rotate');
    });

    if (!isOpen) {
      content.classList.add('open');
      content.style.maxHeight = content.scrollHeight + 'px';
      icon.classList.add('rotate');
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".main-animation");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.5 });

  elements.forEach(element => observer.observe(element));
});
