

let lastScrollY = 0;
let ticking = false;
const hoverBg = document.querySelector(".hover-bg");
function moveHoverBgToButton(button) {
  const { left, width } = button.getBoundingClientRect();
  const containerLeft = button.parentElement.getBoundingClientRect().left;

  if (button == document.getElementById('nav-who-we-are')) {
    document.getElementById('nav-who-we-are').style.color = `#070707`;
    hoverBg.style.width = `${width}px`;
    hoverBg.style.transform = `translateX(${left - containerLeft}px)`;
    document.getElementById('nav-skills').style.color = `#f5f5f5`;
    document.getElementById('nav-projects').style.color = `#f5f5f5`;
    document.getElementById('nav-contacts').style.color = `#f5f5f5`;
  }

  else if (button == document.getElementById('nav-skills')) {
    document.getElementById('nav-skills').style.color = `#070707`;
    hoverBg.style.width = `${width}px`;
    hoverBg.style.transform = `translateX(${left - containerLeft}px)`;
    document.getElementById('nav-who-we-are').style.color = `#f5f5f5`;
    document.getElementById('nav-projects').style.color = `#f5f5f5`;
    document.getElementById('nav-contacts').style.color = `#f5f5f5`;
  }

  else if (button == document.getElementById('nav-projects')) {
    document.getElementById('nav-projects').style.color = `#070707`;
    hoverBg.style.width = `${width}px`;
    hoverBg.style.transform = `translateX(${left - containerLeft}px)`;
    document.getElementById('nav-who-we-are').style.color = `#f5f5f5`;
    document.getElementById('nav-skills').style.color = `#f5f5f5`;
    document.getElementById('nav-contacts').style.color = `#f5f5f5`;
  }

  else if (button == document.getElementById('nav-contacts')) {
    document.getElementById('nav-contacts').style.color = `#070707`;
    hoverBg.style.width = `${width}px`;
    hoverBg.style.transform = `translateX(${left - containerLeft}px)`;
    document.getElementById('nav-who-we-are').style.color = `#f5f5f5`;
    document.getElementById('nav-projects').style.color = `#f5f5f5`;
    document.getElementById('nav-skills').style.color = `#f5f5f5`;
  }

}

if (window.scrollY > 750) {
  document.getElementById('main-header').style.maxWidth = `1440px`;
}



function handleScroll() {
  const currentScrollY = window.scrollY;
  const whoContent = document.querySelectorAll('.who-content1 span');
  const whoContentOffsetTop = document.getElementById('who-title').offsetTop;

  whoContent.forEach((span, index) => {
    if (currentScrollY > whoContentOffsetTop - window.innerHeight + (index * 20)) {
      span.classList.add('visible');
    }
  });

  // прокрутка вниз
  if (currentScrollY > lastScrollY) {
    // island 
    if (currentScrollY < 700) {
      document.getElementById('main-header').style.maxWidth = `${window.innerWidth - ((window.innerWidth - 1440) / 700) * currentScrollY}px`;
    }

    if (currentScrollY >= 700) {
      document.getElementById('island').style.display = `flex`;
      document.getElementById('island').style.opacity = `${0.01 * (currentScrollY - 700)}`;
      document.getElementById('main-header').style.opacity = `${1 - (0.01 * (currentScrollY - 700))}`;
      document.getElementById('island').style.pointerEvents = `auto`;
    }

    if (currentScrollY > document.getElementById('who').offsetTop) {
      document.getElementById('island-logo').style.opacity = `0`;
      document.getElementById('island').style.top = `${-70}px`;
      document.getElementById('island').style.borderBottom = `0.1px solid #f5f5f5`;
    }

    // nav
    if (currentScrollY > document.getElementById('who').getBoundingClientRect().top + window.scrollY && currentScrollY < document.getElementById('skills').getBoundingClientRect().top + window.scrollY) {
      moveHoverBgToButton(document.getElementById('nav-who-we-are'));
    }
    else if (currentScrollY > document.getElementById('skills').getBoundingClientRect().top + window.scrollY && currentScrollY < document.getElementById('our-works').getBoundingClientRect().top + window.scrollY) {
      moveHoverBgToButton(document.getElementById('nav-skills'));
    }
    else if (currentScrollY > document.getElementById('order').getBoundingClientRect().top + window.scrollY) {
      moveHoverBgToButton(document.getElementById('nav-contacts'));
    }
    else {
      moveHoverBgToButton(document.getElementById('nav-projects'));
    }

  }
  // прокрутка вверх
  else if (currentScrollY < lastScrollY) {
    // island
    if (currentScrollY < 700) {
      document.getElementById('main-header').style.maxWidth = `${window.innerWidth - ((window.innerWidth - 1440) / 700) * currentScrollY}px`;
      document.getElementById('main-header').style.opacity = `${1 - (0.01 * (currentScrollY - 700))}`;
      document.getElementById('island').style.opacity = `0`;
      document.getElementById('island').style.pointerEvents = `none`;
    }

    document.getElementById('island').style.opacity = `${0.01 * (currentScrollY - 700)}`;

    if (currentScrollY > document.getElementById('who').getBoundingClientRect().top + currentScrollY) {
      document.getElementById('island-logo').style.opacity = `1`;
      document.getElementById('island').style.top = `30px`;
      document.getElementById('island').style.borderBottom = `none`;
    }

    // nav
    if (currentScrollY > document.getElementById('who').getBoundingClientRect().top + window.scrollY && currentScrollY < document.getElementById('skills').getBoundingClientRect().top + window.scrollY) {
      moveHoverBgToButton(document.getElementById('nav-who-we-are'));
    }
    else if (currentScrollY > document.getElementById('skills').getBoundingClientRect().top + window.scrollY && currentScrollY < document.getElementById('our-works').getBoundingClientRect().top + window.scrollY) {
      moveHoverBgToButton(document.getElementById('nav-skills'));
    }
    else if (currentScrollY > document.getElementById('order').getBoundingClientRect().top + window.scrollY) {
      moveHoverBgToButton(document.getElementById('nav-contacts'));
    }
    else {
      moveHoverBgToButton(document.getElementById('nav-projects'));
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


