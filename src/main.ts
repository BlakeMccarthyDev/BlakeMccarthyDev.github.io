import "./style.css";
import * as THREE from "three";
import { GUI } from "dat.gui";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import vertexshader from "./vertexShader.glsl.js"
import fragshader from "./fragShader.glsl.js"


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.set(15, 15, 15)

const gui = new GUI();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enablePan = false

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
window.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight")
  {
    console.log(e)
  }
})
const fr = new FileReader()
const geometry = new THREE.PlaneGeometry(15, 15, 15, 15);
const material = new THREE.ShaderMaterial({
  vertexShader: vertexshader,
  fragmentShader: fragshader
})


const cube = new THREE.Mesh(geometry, material);
cube.rotateOnAxis(new THREE.Vector3(1, 0, 0), -1.5725)
scene.add(cube)

scene.add(new THREE.AxesHelper(10));

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
