let lastScrollY = 0;
let ticking = false;

if (window.scrollY > 750) {
  document.getElementById('main-header').style.maxWidth = `1440px`;
}

function handleScroll() {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    if (window.scrollY > 300 && window.scrollY < 890) {
      document.getElementById('main-header').style.maxWidth = `1440px`;
      document.getElementById('who-title').style.color = `#f5f5f5`;
      document.querySelectorAll('.who-content1').forEach(element => {
        element.style.color = `#f5f5f5`;
      });
      animation('.who-content-animation');
      animation('.who-end-animation');
    }
    else if (window.scrollY > 1190 && window.scrollY < 1940) {
      document.getElementById('who-title2').style.color = `#f5f5f5`;
      document.getElementById('who-title').style.color = `#5B5B5B`;
      document.querySelectorAll('.who-content1').forEach(element => {
        element.style.color = `#5B5B5B`;
      });
      animation('.skills-animation');
    }
    else if (window.scrollY > 1940) {
      document.getElementById('skills').style.color = `#f5f5f5`;
      document.getElementById('who-title2').style.color = `#5B5B5B`;
    }
  }
  else if (currentScrollY < lastScrollY) {
    if (window.scrollY < document.getElementById('who').offsetTop) {
      document.getElementById('main-header').style.maxWidth = `100%`;
      document.getElementById('who-title').style.color = `#5B5B5B`;
      document.querySelectorAll('.who-content1').forEach(element => {
        element.style.color = `#5B5B5B`;
      });
    }
    if (window.scrollY > 300 && window.scrollY < 890) {
      document.getElementById('who-title').style.color = `#f5f5f5`;
      document.getElementById('who-title2').style.color = `#5B5B5B`;
      document.querySelectorAll('.who-content1').forEach(element => {
        element.style.color = `#f5f5f5`;
      });
    }
    else if (window.scrollY > 1190 && window.scrollY < 1940) {
      document.getElementById('who-title2').style.color = `#f5f5f5`;
      document.getElementById('skills').style.color = `#5B5B5B`;
      document.querySelectorAll('.who-content1').forEach(element => {
        element.style.color = `#5B5B5B`;
      });
    }
    else if (window.scrollY > 1940) {
      document.getElementById('skills').style.color = `#f5f5f5`;
      document.getElementById('who-title2').style.color = `#5B5B5B`;
    }

  }

  lastScrollY = currentScrollY;
  ticking = false;
}

function animation(selector) {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.5 });

  elements.forEach(element => observer.observe(element));
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(handleScroll);
    ticking = true;
  }

});
