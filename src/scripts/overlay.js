document.getElementById('worksPage').addEventListener('click', function () {
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('active');
    setTimeout(() => {
        window.location.href = "/works";
    }, 1700);
});


