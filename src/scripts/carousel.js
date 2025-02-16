document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("carousel");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const progressBar = document.getElementById("progress");
    const items = document.querySelectorAll(".carousel-item");
    const totalItems = items.length;
    let currentIndex = 0;
    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;

    const updateCarousel = () => {
        currentTranslate = -(currentIndex * 375) + (carousel.offsetWidth / 2 - 150);
        carousel.style.transform = `translateX(${currentTranslate}px)`;
        progressBar.style.width = `${((currentIndex + 1) / totalItems) * 100}%`;
        for (let i = 0; i < totalItems; i++) {
            if (i != currentIndex) {
                items[i].style.filter = 'blur(5px)';
            }
            else {
                items[i].style.filter = 'none';
            }
        }
    };
 
    nextBtn.addEventListener("click", () => {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
            prevBtn.disabled = false;
            updateCarousel();
        }
        if (currentIndex === totalItems - 1) {
            nextBtn.disabled = true;
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            nextBtn.disabled = false;
            updateCarousel();
        }
        if (currentIndex === 0) {
            prevBtn.disabled = true;
        }
    });

    const touchStart = (event) => {
        isDragging = true;
        startX = event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
        prevTranslate = currentTranslate;
        animationID = requestAnimationFrame(animation);
        carousel.classList.add("grabbing");
    };

    const touchMove = (event) => {
        if (!isDragging) return;
        const currentX = event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
        const diff = currentX - startX;
        currentTranslate = prevTranslate + diff;
    };

    const touchEnd = () => {
        cancelAnimationFrame(animationID);
        isDragging = false;
        carousel.classList.remove("grabbing");

        const movedBy = currentTranslate - prevTranslate;
        if (movedBy < -50 && currentIndex < totalItems - 1) {
            currentIndex++;
        }
        if (movedBy > 50 && currentIndex > 0) {
            currentIndex--;
        }

        updateCarousel();
    };

    const animation = () => {
        carousel.style.transform = `translateX(${currentTranslate}px)`;
        if (isDragging) requestAnimationFrame(animation);
    };

    carousel.addEventListener("mousedown", touchStart);
    carousel.addEventListener("mousemove", touchMove);
    carousel.addEventListener("mouseup", touchEnd);

    updateCarousel();
});
