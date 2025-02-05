document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let index = 0;

    function updateCarousel() {
        const itemWidth = document.querySelector(".carousel-item").offsetWidth;
        track.style.transform = `translateX(-${index * itemWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
        if (index < track.children.length - 1) {
            index++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });

    // Поддержка свайпа на мобильных
    let startX = 0;

    track.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    track.addEventListener("touchend", (e) => {
        let endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) {
            nextBtn.click(); // Листаем вперёд
        } else if (endX - startX > 50) {
            prevBtn.click(); // Листаем назад
        }
    });

    // Обновляем при изменении размера окна
    window.addEventListener("resize", updateCarousel);
});
