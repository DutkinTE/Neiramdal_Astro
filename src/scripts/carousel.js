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

    // Центрируем первый элемент при загрузке
    const updateCarousel = (animate = true) => {
        currentTranslate = -(currentIndex * 375) + (carousel.offsetWidth / 2 - 150);
        carousel.style.transition = animate ? "transform 0.3s ease" : "none";
        carousel.style.transform = `translateX(${currentTranslate}px)`;

        // Обновление прогресс-бара
        progressBar.style.width = `${((currentIndex + 1) / totalItems) * 100}%`;

        // Обновляем размытие элементов
        items.forEach((item, index) => {
            item.style.filter = index === currentIndex ? "none" : "blur(5px)";
        });

        // Блокируем/разблокируем кнопки
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

    // Начало свайпа
    const touchStart = (event) => {
        isDragging = true;
        startX = event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
        prevTranslate = currentTranslate;
        animationID = requestAnimationFrame(animation);
        carousel.style.transition = "none";
        carousel.classList.add("grabbing");
    };

    // Перемещение
    const touchMove = (event) => {
        if (!isDragging) return;
        const currentX = event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
        const diff = currentX - startX;
        currentTranslate = prevTranslate + diff;
    };

    // Завершение свайпа
    const touchEnd = () => {
        if (!isDragging) return;
        isDragging = false;
        cancelAnimationFrame(animationID);
        carousel.classList.remove("grabbing");

        const movedBy = currentTranslate - prevTranslate;
        if (movedBy < -50 && currentIndex < totalItems - 1) {
            currentIndex++;
        } else if (movedBy > 50 && currentIndex > 0) {
            currentIndex--;
        }

        updateCarousel();
    };

    // Анимация
    const animation = () => {
        carousel.style.transform = `translateX(${currentTranslate}px)`;
        if (isDragging) requestAnimationFrame(animation);
    };

    // Добавляем обработчики событий
    carousel.addEventListener("mousedown", touchStart);
    carousel.addEventListener("mousemove", touchMove);
    carousel.addEventListener("mouseup", touchEnd);
    carousel.addEventListener("mouseleave", touchEnd); // Улучшает UX, если отпустить мышь за пределами карусели

    // Мобильные события
    carousel.addEventListener("touchstart", touchStart);
    carousel.addEventListener("touchmove", touchMove);
    carousel.addEventListener("touchend", touchEnd);

    // Первоначальная настройка
    updateCarousel(false);
});
