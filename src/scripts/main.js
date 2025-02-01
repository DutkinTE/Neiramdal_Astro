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

document.getElementById('island-hover').addEventListener('mouseenter', () => {
  if (document.getElementById('island').style.top == '-70px') {
    document.getElementById('island-logo').style.opacity = `1`;
    document.getElementById('island').style.top = `30px`;
    document.getElementById('island').style.borderBottom = `none`;
  }
});

document.getElementById('island-hover').addEventListener('mouseleave', () => {
  if (document.getElementById('island').style.top == '30px') {

    setTimeout(() => {
      document.getElementById('island-logo').style.opacity = `0`;
      document.getElementById('island').style.top = `${-70}px`;
      document.getElementById('island').style.borderBottom = `0.1px solid #f5f5f5`;
    }, 1500);
  }
});

document.getElementById('island-logo').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});