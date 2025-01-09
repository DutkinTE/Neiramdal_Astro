let lastScrollY = 0;
let ticking = false;

if (window.scrollY > 750) {
    document.getElementById('main-header').style.maxWidth = `1440px`;
}

function handleScroll() {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    if (window.scrollY > 300 && window.scrollY < document.getElementById('who').offsetTop) {
      document.getElementById('main-header').style.maxWidth = `1440px`;
      document.getElementById('who-title').style.color = `#f5f5f5`;
      document.querySelectorAll('.who-content1').forEach(element => {
        element.style.color = `#f5f5f5`;
      });
    }
    else if (window.scrollY > document.getElementById('who').offsetTop + 50 && window.scrollY < document.getElementById('who').offsetTop + 400) {
      document.getElementById('who-title2').style.color = `#f5f5f5`;
      document.getElementById('who-title').style.color = `#5B5B5B`;
      document.querySelectorAll('.who-content1').forEach(element => {
        element.style.color = `#5B5B5B`;
      });
    }
    else if (window.scrollY > document.getElementById('who').offsetTop + 450) {
      document.getElementById('skills').style.color = `#f5f5f5`;
      document.getElementById('who-title2').style.color = `#5B5B5B`;
    }
  } else if (currentScrollY < lastScrollY) {
    if (window.scrollY < document.getElementById('who').offsetTop) {

      document.getElementById('main-header').style.maxWidth = `100%`;
    }

  }

  lastScrollY = currentScrollY;
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(handleScroll);
    ticking = true;
  }

});