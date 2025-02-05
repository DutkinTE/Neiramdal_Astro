import { onMount } from "solid-js";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

requestAnimationFrame(() => {
    console.log(THREE);

    const container = document.getElementById("three-container");
    if (!container) {
        return;
    }


    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);


    const loader = new GLTFLoader();
    loader.load(
        "/models/NeiramdalRoboRabbit.glb", // Путь к модели
        (gltf) => {
            console.log("✅ Модель загружена!", gltf);
            const model = gltf.scene;

            // Увеличиваем модель в 2 раза
            model.scale.set(4, 4, 4);  // Масштаб по осям X, Y и Z
            model.position.set(0, -2, 0); // Устанавливаем позицию модели в центре сцены

            scene.add(model);
            // Обработчик движения мыши
            document.addEventListener('mousemove', (event) => {
                // Нормализуем координаты мыши
                const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
                const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
                // Вычисляем углы для поворота модели по горизонтали (ось Y) и вертикали (ось X)
                const rotationX = -mouseY * Math.PI / 6;  // Ограничиваем вертикальный угол, умножив на Math.PI / 6 (30 градусов)
                const rotationY = mouseX * Math.PI / 3;  // Угол по горизонтали для вращения
      
                // Применяем вращение к модели
                model.rotation.x = rotationX;  // Вертикальное вращение
                model.rotation.y = rotationY;  // Горизонтальное вращение
              });

            animate();
        },
        (xhr) => {
            console.log(`📥 Загрузка модели: ${(xhr.loaded / xhr.total) * 100}%`);
        },
        (error) => {
            console.error("❌ Ошибка загрузки модели:", error);
        }
    );

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();
});