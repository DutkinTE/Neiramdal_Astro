document.getElementById('mainPage').addEventListener('click', function () {
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('active');
    setTimeout(() => {
        window.location.href = "/";
    }, 1700);
});