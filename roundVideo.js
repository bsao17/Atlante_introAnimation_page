import * as THREE from './node_modules/three/build/three.js';

// Création de la scène
const scene = new THREE.Scene();

// Création de la caméra
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Création du renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Création de la boule
const geometry = new THREE.SphereGeometry(5, 32, 32);
const material = new THREE.MeshBasicMaterial();
const mesh = new THREE.Mesh(geometry, material);

// Chargement de la vidéo
const video = document.createElement('video');
video.src = 'https://example.com/video.mp4';
video.play();

// Création de la texture à partir de la vidéo
const texture = new THREE.VideoTexture(video);

// Application de la texture au matériau de la boule
material.map = texture;

// Ajout de la boule à la scène
scene.add(mesh);

// Position de la caméra
camera.position.z = 10;

function updateTexture() {
    // Mise à jour de la texture
    texture.needsUpdate = true;
}

function animate() {
    // Mise à jour de la scène
    renderer.render(scene, camera);

    // Mise à jour de la texture
    updateTexture();

    // Appel de la fonction animate à chaque frame
    requestAnimationFrame(animate);
}

animate();
