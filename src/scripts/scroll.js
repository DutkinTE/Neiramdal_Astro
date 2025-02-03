let lastScrollY = 0;
let ticking = false;
const hoverBg = document.querySelector(".hover-bg");
function moveHoverBgToButton(button) {
  const { left, width } = button.getBoundingClientRect();
  const containerLeft = button.parentElement.getBoundingClientRect().left;

  if (button == document.getElementById('nav-who-we-are')) {
    document.getElementById('nav-who-we-are').style.color = `#020202`;
    hoverBg.style.width = `${width}px`;
    hoverBg.style.transform = `translateX(${left - containerLeft}px)`;
    document.getElementById('nav-skills').style.color = `#f5f5f5`;
    document.getElementById('nav-projects').style.color = `#f5f5f5`;
    document.getElementById('nav-contacts').style.color = `#f5f5f5`;
  }

  if (button == document.getElementById('nav-skills')) {
    document.getElementById('nav-skills').style.color = `#020202`;
    hoverBg.style.width = `${width}px`;
    hoverBg.style.transform = `translateX(${left - containerLeft}px)`;
    document.getElementById('nav-who-we-ar').style.color = `#f5f5f5`;
    document.getElementById('nav-projects').style.color = `#f5f5f5`;
    document.getElementById('nav-contacts').style.color = `#f5f5f5`;
  }

  if (button == document.getElementById('nav-projects')) {
    document.getElementById('nav-skills').style.color = `#020202`;
    hoverBg.style.width = `${width}px`;
    hoverBg.style.transform = `translateX(${left - containerLeft}px)`;
    document.getElementById('nav-who-we-ar').style.color = `#f5f5f5`;
    document.getElementById('nav-skills').style.color = `#f5f5f5`;
    document.getElementById('nav-contacts').style.color = `#f5f5f5`;
  }

  if (button == document.getElementById('nav-contacts')) {
    document.getElementById('nav-skills').style.color = `#020202`;
    hoverBg.style.width = `${width}px`;
    hoverBg.style.transform = `translateX(${left - containerLeft}px)`;
    document.getElementById('nav-who-we-ar').style.color = `#f5f5f5`;
    document.getElementById('nav-projects').style.color = `#f5f5f5`;
    document.getElementById('nav-skills').style.color = `#f5f5f5`;
  }

}

if (window.scrollY > 750) {
  document.getElementById('main-header').style.maxWidth = `1440px`;
}



function handleScroll() {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    if (window.scrollY < 1940) {
      moveHoverBgToButton(document.getElementById('nav-who-we-are'));
    }

    if (window.scrollY > 1940 && window.scrollY < document.getElementById('projects').offsetTop) {
      moveHoverBgToButton(document.getElementById('nav-skills'));
    }

    if (window.scrollY > 1940 && window.scrollY < document.getElementById('projects').offsetTop) {
      moveHoverBgToButton(document.getElementById('nav-skills'));
    }

    if (currentScrollY < 700) {
      document.getElementById('main-header').style.maxWidth = `${window.innerWidth - ((window.innerWidth - 1440) / 700) * currentScrollY}px`;
    }

    if (currentScrollY >= 700) {
      document.getElementById('island').style.display = `flex`;
      document.getElementById('island').style.opacity = `${0.01 * (currentScrollY - 700)}`;
      document.getElementById('main-header').style.opacity = `${1 - (0.01 * (currentScrollY - 700))}`;
    }

    if (currentScrollY > document.getElementById('who').offsetTop) {
      document.getElementById('island-logo').style.opacity = `0`;
      document.getElementById('island').style.top = `${-70}px`;
      document.getElementById('island').style.borderBottom = `0.1px solid #f5f5f5`;
    }

    if (currentScrollY > 300 && currentScrollY < 890) {
      document.getElementById('who-title').style.color = `#f5f5f5`;
      document.querySelectorAll('.who-content1').forEach(element => {
        element.style.color = `#f5f5f5`;
      });
      animation('.who-content-animation');
      animation('.who-end-animation');
    }
    else if (currentScrollY > 1190 && currentScrollY < 1940) {
      document.getElementById('who-title2').style.color = `#f5f5f5`;
      document.getElementById('who-title').style.color = `#5B5B5B`;
      document.querySelectorAll('.who-content1').forEach(element => {
        element.style.color = `#5B5B5B`;
      });
      animation('.skills-animation');
    }
    else if (currentScrollY > 1940) {
      document.getElementById('skills').style.color = `#f5f5f5`;
      document.getElementById('who-title2').style.color = `#5B5B5B`;
    }
  }
  else if (currentScrollY < lastScrollY) {
    if (currentScrollY < 700) {
      document.getElementById('main-header').style.maxWidth = `${window.innerWidth - ((window.innerWidth - 1440) / 700) * currentScrollY}px`;
    }

    document.getElementById('island').style.opacity = `${0.01 * (currentScrollY - 700)}`;
    document.getElementById('main-header').style.opacity = `${1 - (0.01 * (currentScrollY - 700))}`;

    if (currentScrollY > document.getElementById('who').offsetTop) {
      document.getElementById('island-logo').style.opacity = `1`;
      document.getElementById('island').style.top = `30px`;
      document.getElementById('island').style.borderBottom = `none`;
    }

    if (currentScrollY < 700) {
      document.getElementById('island').style.display = `none`;
    }

    if (currentScrollY < document.getElementById('who').offsetTop) {
      document.getElementById('who-title').style.color = `#5B5B5B`;
      document.querySelectorAll('.who-content1').forEach(element => {
        element.style.color = `#5B5B5B`;
      });
    }
    if (currentScrollY > 300 && currentScrollY < 890) {
      document.getElementById('who-title').style.color = `#f5f5f5`;
      document.getElementById('who-title2').style.color = `#5B5B5B`;
      document.querySelectorAll('.who-content1').forEach(element => {
        element.style.color = `#f5f5f5`;
      });
    }
    else if (currentScrollY > 1190 && currentScrollY < 1940) {
      document.getElementById('who-title2').style.color = `#f5f5f5`;
      document.getElementById('skills').style.color = `#5B5B5B`;
      document.querySelectorAll('.who-content1').forEach(element => {
        element.style.color = `#5B5B5B`;
      });
    }
    else if (currentScrollY > 1940) {
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
