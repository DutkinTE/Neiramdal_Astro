
function checkScreenSize() {
    if (window.innerWidth > 1500) {
        if (window.location.pathname !== "/") {
            window.location.href = "/";
        }
    }

}

window.addEventListener("load", checkScreenSize);

window.addEventListener("resize", checkScreenSize);