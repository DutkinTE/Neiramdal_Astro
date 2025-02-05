document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("carousel");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const progressBar = document.getElementById("progress");
    const items = document.querySelectorAll(".carousel-item");
    const totalItems = items.length;
    let currentIndex = 0;
    let startX = 0;
    let isDragging = false;

    const updateCarousel = () => {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        progressBar.style.width = `${((currentIndex + 1) / totalItems) * 100}%`;
    };

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    carousel.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });

    carousel.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        let diff = startX - e.touches[0].clientX;
        if (diff > 50) {
            currentIndex = (currentIndex + 1) % totalItems;
            isDragging = false;
        } else if (diff < -50) {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            isDragging = false;
        }
        updateCarousel();
    });

    carousel.addEventListener("touchend", () => {
        isDragging = false;
    });

    updateCarousel();
});