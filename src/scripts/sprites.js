const sprite = document.getElementById("sprite");
var frames = []; // Файлы кадров
for (var i = 1; i <= 180; i++) {
    frames.push(`/assets/images/animation/hackmeetup30${i.toString().padStart(3, '0')}.png`);
}
let frameIndex = 0;

function animateSprite() {
    frameIndex = (frameIndex + 1) % frames.length;
    sprite.src = frames[frameIndex]; // Меняем изображение
}

setInterval(animateSprite, 20); // Обновляем каждые 200 мс