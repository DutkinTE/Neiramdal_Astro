document.getElementById('mainPage').addEventListener('click', function () {
    document.querySelector(".overlay").classList.remove('hidden');
    setTimeout(() => {
        window.location.href = "/";
    }, 2500);
});