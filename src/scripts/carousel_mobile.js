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
    let screenWidth = window.innerWidth;

    window.addEventListener("resize", () => {
        screenWidth = window.innerWidth;
        updateCarousel(false);
    });

    const updateCarousel = (animate = true) => {
        const itemWidth = screenWidth * 0.8; 
        currentTranslate = -(currentIndex * itemWidth);
        carousel.style.transition = animate ? "transform 0.3s ease" : "none";
        carousel.style.transform = `translateX(${currentTranslate}px)`;

        progressBar.style.width = `${((currentIndex + 1) / totalItems) * 100}%`;

        items.forEach((item, index) => {
            item.style.filter = index === currentIndex ? "none" : "blur(5px)";
        });

        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === totalItems - 1;
    };

    nextBtn.addEventListener("click", () => {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    const touchStart = (event) => {
        isDragging = true;
        startX = event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
        prevTranslate = currentTranslate;
        animationID = requestAnimationFrame(animation);
        carousel.style.transition = "none";
        carousel.classList.add("grabbing");
        event.preventDefault();
    };

    const touchMove = (event) => {
        if (!isDragging) return;
        const currentX = event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
        const diff = currentX - startX;
        currentTranslate = prevTranslate + diff;
    };

    const touchEnd = () => {
        if (!isDragging) return;
        isDragging = false;
        cancelAnimationFrame(animationID);
        carousel.classList.remove("grabbing");

        const movedBy = currentTranslate - prevTranslate;
        const swipeThreshold = screenWidth * 0.2; 

        if (movedBy < -swipeThreshold && currentIndex < totalItems - 1) {
            currentIndex++;
        } else if (movedBy > swipeThreshold && currentIndex > 0) {
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
    carousel.addEventListener("mouseleave", touchEnd);

    carousel.addEventListener("touchstart", touchStart, { passive: false });
    carousel.addEventListener("touchmove", touchMove, { passive: false });
    carousel.addEventListener("touchend", touchEnd);

    updateCarousel(false);
});
