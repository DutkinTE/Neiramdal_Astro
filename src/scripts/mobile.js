
function checkScreenSize() {
    if (window.innerWidth > 768) {
        if (window.location.pathname !== "/") {
            window.location.href = "/";
        }
    }

}

window.addEventListener("load", checkScreenSize);

window.addEventListener("resize", checkScreenSize);