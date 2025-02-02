document.getElementById('card-one').addEventListener('mouseenter', () => {
    document.getElementById('card-two').style.opacity = 0.2;
    document.getElementById('card-three').style.opacity = 0.2;
    document.getElementById('card-four').style.opacity = 0.2;
});

document.getElementById('card-one').addEventListener('mouseleave', () => {
    document.getElementById('card-two').style.opacity = 1;
    document.getElementById('card-three').style.opacity = 1;
    document.getElementById('card-four').style.opacity = 1;
});

document.getElementById('card-two').addEventListener('mouseenter', () => {
    document.getElementById('card-one').style.opacity = 0.2;
    document.getElementById('card-three').style.opacity = 0.2;
    document.getElementById('card-four').style.opacity = 0.2;
});

document.getElementById('card-two').addEventListener('mouseleave', () => {
    document.getElementById('card-one').style.opacity = 1;
    document.getElementById('card-three').style.opacity = 1;
    document.getElementById('card-four').style.opacity = 1;
});

document.getElementById('card-three').addEventListener('mouseenter', () => {
    document.getElementById('card-two').style.opacity = 0.2;
    document.getElementById('card-one').style.opacity = 0.2;
    document.getElementById('card-four').style.opacity = 0.2;
});

document.getElementById('card-three').addEventListener('mouseleave', () => {
    document.getElementById('card-two').style.opacity = 1;
    document.getElementById('card-one').style.opacity = 1;
    document.getElementById('card-four').style.opacity = 1;
});

document.getElementById('card-four').addEventListener('mouseenter', () => {
    document.getElementById('card-two').style.opacity = 0.2;
    document.getElementById('card-three').style.opacity = 0.2;
    document.getElementById('card-one').style.opacity = 0.2;
});

document.getElementById('card-four').addEventListener('mouseleave', () => {
    document.getElementById('card-two').style.opacity = 1;
    document.getElementById('card-three').style.opacity = 1;
    document.getElementById('card-one').style.opacity = 1;
});