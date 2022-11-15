import "./style.css";

import * as Three from "three";

const scene = new Three.Scene();

const camera = new Three.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new Three.WebGLRenderer({
  canvas: document.getElementById("bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
renderer.render(scene, camera);

const geometry = new Three.TorusGeometry(10, 3, 16, 100);
const material = new Three.MeshStandardMaterial({ color: 0xff6347 });

const torus = new Three.Mesh(geometry, material);
const bulb = new Three.PointLight(0xffffff);
bulb.position.set(20, 25, 25);
scene.add(torus, bulb);

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  renderer.render(scene, camera);
}

function addStar() {
  const geometry = new Three.SphereGeometry(0.25);
  const material = new Three.MeshStandardMaterial({ color: 0xffffff });
  const star = new Three.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => Three.MathUtils.randFloatSpread(100));
  star.position.set(x, y, z);
  scene.add(star);
}
animate();

for (let i = 0; i < 200; i++) {
  addStar();
}

const spaceTexture = new Three.TextureLoader().load(
  "https://raw.githubusercontent.com/fireship-io/threejs-scroll-animation-demo/main/space.jpg"
);

scene.background = spaceTexture;
