function checkScreenSize() {
  if (window.innerWidth <= 1500) {
    if (window.location.pathname !== "/mobile") {
      window.location.href = "/mobile";
    }
  }

}

window.addEventListener("load", checkScreenSize);

window.addEventListener("resize", checkScreenSize);



const headers = document.querySelectorAll('.skills-part-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.skills-part-icon');
    const isOpen = content.classList.contains('open');

    document.querySelectorAll('.skills-part-content').forEach(item => {
      content.style.opacity = 0;
      item.classList.remove('open');
      item.style.maxHeight = null;
    });

    document.querySelectorAll('.skills-part-icon').forEach(icon => {
      icon.classList.remove('rotate');
    });

    if (!isOpen) {
      function firstTask() {
        return new Promise((resolve) => {
          header.parentElement.style.backgroundColor = `#040404`;
          header.parentElement.style.color = `#f5f5f5`;
          header.parentElement.querySelector('.skills-part-icon').style.filter = `none`;
          content.classList.add('open');
          content.style.maxHeight = content.scrollHeight + 'px';
          icon.classList.add('rotate');
          setTimeout(() => {
            window.scrollTo({
              top: header.getBoundingClientRect().top + window.scrollY - 200,
              behavior: "smooth"
            });
          }, 1000);

          resolve();
        });
      }
      async function runTasks() {
        await firstTask();

        setTimeout(() => {
          content.style.opacity = 1;
        }, 500);
      }
      runTasks();
    }
  });
});

document.querySelectorAll(".skills-part").forEach(header => {
  header.addEventListener('mouseenter', () => {
    const content = header.querySelector('.skills-part-header').nextElementSibling;
    const isOpen = content.classList.contains('open');
    if (!isOpen) {
      header.style.backgroundColor = `#f5f5f5`;
      header.querySelector('.skills-part-icon').style.filter = `invert(1)`;
      header.style.color = `#040404`;
    }
  });

  header.addEventListener('mouseleave', () => {
    const content = header.querySelector('.skills-part-header').nextElementSibling;
    const isOpen = content.classList.contains('open');
    if (!isOpen) {
      header.querySelector('.skills-part-icon').style.filter = `none`;
      header.style.backgroundColor = `#040404`;
      header.style.color = '#f5f5f5';
    }
  });
});

document.getElementById('island').addEventListener('mouseenter', () => {
  if (document.getElementById('island').style.top == '-70px') {
    document.getElementById('island-logo').style.opacity = `1`;
    document.getElementById('island').style.top = `30px`;
  }
});

document.getElementById('island').addEventListener('mouseleave', (e) => {
  const { clientX, clientY } = e;
  if (document.getElementById('island').style.top == '30px') {
    if (clientY > 110) {
      setTimeout(() => {
        document.getElementById('island-logo').style.opacity = `0`;
        document.getElementById('island').style.top = `${-70}px`;
      }, 1500);
    }

  }
});

document.getElementById('island-logo').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const hoverBg = document.querySelector(".hover-bg");

document.getElementById('nav-who-we-are').addEventListener('mouseenter', (e) => {
  const { left, width } = e.target.getBoundingClientRect();
  const containerLeft = e.target.parentElement.getBoundingClientRect().left;
  document.getElementById('nav-who-we-are').style.color = `#070707`;
  hoverBg.style.width = `${width}px`;
  hoverBg.style.transform = `translateX(${left - containerLeft}px)`;
  document.getElementById('nav-skills').style.color = `#f5f5f5`;
  document.getElementById('nav-projects').style.color = `#f5f5f5`;
  document.getElementById('nav-contacts').style.color = `#f5f5f5`;
});

document.getElementById('nav-skills').addEventListener('mouseenter', (e) => {
  const { left, width } = e.target.getBoundingClientRect();
  const containerLeft = e.target.parentElement.getBoundingClientRect().left;
  document.getElementById('nav-skills').style.color = `#070707`;
  hoverBg.style.width = `${width}px`;
  hoverBg.style.transform = `translateX(${left - containerLeft}px)`;
  document.getElementById('nav-who-we-are').style.color = `#f5f5f5`;
  document.getElementById('nav-projects').style.color = `#f5f5f5`;
  document.getElementById('nav-contacts').style.color = `#f5f5f5`;
});

document.getElementById('nav-projects').addEventListener('mouseenter', (e) => {
  const { left, width } = e.target.getBoundingClientRect();
  const containerLeft = e.target.parentElement.getBoundingClientRect().left;
  document.getElementById('nav-projects').style.color = `#070707`;
  hoverBg.style.width = `${width}px`;
  hoverBg.style.transform = `translateX(${left - containerLeft}px)`;
  document.getElementById('nav-who-we-are').style.color = `#f5f5f5`;
  document.getElementById('nav-skills').style.color = `#f5f5f5`;
  document.getElementById('nav-contacts').style.color = `#f5f5f5`;
});

document.getElementById('nav-contacts').addEventListener('mouseenter', (e) => {
  const { left, width } = e.target.getBoundingClientRect();
  const containerLeft = e.target.parentElement.getBoundingClientRect().left;
  document.getElementById('nav-contacts').style.color = `#070707`;
  hoverBg.style.width = `${width}px`;
  hoverBg.style.transform = `translateX(${left - containerLeft}px)`;
  document.getElementById('nav-who-we-are').style.color = `#f5f5f5`;
  document.getElementById('nav-projects').style.color = `#f5f5f5`;
  document.getElementById('nav-skills').style.color = `#f5f5f5`;
});

document.getElementById("contact_button").addEventListener("click", () => {
  document.getElementById("blur-splash").style.opacity = '1';
  document.getElementById("blur-splash").style.pointerEvents = 'all';
});

document.getElementById("blur-splash").addEventListener("click", () => {
  document.getElementById("blur-splash").style.opacity = '0';
  document.getElementById("blur-splash").style.pointerEvents = 'none';
});

document.getElementById("button-contacts").addEventListener('click', () => {
  document.getElementById('order').scrollIntoView({
    behavior: 'smooth'
  });
});
