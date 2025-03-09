
// function checkScreenSize() {
//     if (window.innerWidth > 1400) {
//         if (window.location.pathname !== "/") {
//             window.location.href = "/";
//         }
//     }
// }

// window.addEventListener("load", checkScreenSize);

// window.addEventListener("resize", checkScreenSize);

function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);
}

function checkDevice() {
    if (!isMobileDevice() && window.location.pathname !== "/mobile") {
        window.location.href = "/mobile";
    }
}

window.addEventListener("load", checkDevice);


const headers = document.querySelectorAll('.skills-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.parentElement;
        const icon = header.querySelector('.skills-icon');
        const isOpen = content.classList.contains('open');

        document.querySelectorAll('.skills_paragraph').forEach(item => {
            item.classList.remove('open');
            item.style.maxHeight = '110px';
        });

        document.querySelectorAll('.skills-icon').forEach(icon => {
            icon.classList.remove('rotate');
        });

        if (!isOpen) {
            content.classList.add('open');
            content.style.maxHeight = content.scrollHeight + 'px';
            icon.classList.add('rotate');
            setTimeout(() => {
                smoothScrollTo2(header.getBoundingClientRect().top + window.scrollY - 200, 1200);
            }, 1000);

        }
    });
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
    const contacts = document.getElementById("contacts");
    smoothScrollTo(contacts, 2000);
});

function smoothScrollTo(targetElement, duration = 1000) {
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const startTime = performance.now();

    function scrollAnimation(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // от 0 до 1
        const ease = progress < 0.5
            ? 4 * progress * progress * progress // Ускорение в начале
            : 1 - Math.pow(-2 * progress + 2, 3) / 2; // Замедление в конце

        window.scrollTo(0, startPosition + (targetPosition - startPosition) * ease);

        if (elapsedTime < duration) {
            requestAnimationFrame(scrollAnimation);
        }
    }

    requestAnimationFrame(scrollAnimation);
}

function smoothScrollTo2(targetY, duration = 2000) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    function scrollStep(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // от 0 до 1
        const ease = progress < 0.5
            ? 4 * progress * progress * progress // Ускорение в начале
            : 1 - Math.pow(-2 * progress + 2, 3) / 2; // Замедление в конце

        window.scrollTo(0, startY + distance * ease);

        if (elapsedTime < duration) {
            requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
}
