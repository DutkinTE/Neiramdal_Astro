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
        carousel.style.transform = `translateX(${-(currentIndex) * 375 + (carousel.offsetWidth / 2 - 150)}px)`;
        progressBar.style.width = `${((currentIndex + 1) / totalItems) * 100}%`;
    };

    nextBtn.addEventListener("click", () => {
        if (currentIndex < totalItems - 1) {
            let button = document.getElementsByClassName("arrow_buttons")[0];
            currentIndex = (currentIndex + 1) % totalItems;
            button.disabled = false;
            updateCarousel();
        }
        if (currentIndex == totalItems - 1) {
            let button = document.getElementsByClassName("arrow_buttons")[1];
            button.disabled = true;
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            let button = document.getElementsByClassName("arrow_buttons")[1];
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            button.disabled = false;
            updateCarousel();
        }
        if (currentIndex == 0) {
            let button = document.getElementsByClassName("arrow_buttons")[0];
            button.disabled = true;
        }
    });


    updateCarousel();
});

