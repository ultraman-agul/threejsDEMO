<template>
    <!-- <div ref="statsRef"></div> -->
    <div ref="containerRef"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import {
    Scene,
    PerspectiveCamera, // 摄像机 
    WebGLRenderer, // 渲染器
    AxesHelper,  // 坐标系
    PlaneGeometry, // 平面
    BoxGeometry, // 立方体
    SphereGeometry, // 球体
    MeshBasicMaterial, // 材质
    MeshLambertMaterial, // 材质：可以投射阴影
    SpotLight,
    Mesh, // 合并几何体和材质
    Color
} from 'three';
import Stats from 'stats.js';
import * as dat from 'dat.gui'

const containerRef = ref<HTMLDivElement>(); // dom容器
const statsRef = ref<HTMLDivElement>();
const stats = new Stats();


const controlRef = ref({
    aaa: 0.02,
    bouncingSpeed: 0.03,
})
if(document.querySelectorAll('.dg.main.a').length === 0){
    const gui = new dat.GUI();
    gui.add(controlRef.value, 'aaa', 0, 0.5);
    gui.add(controlRef.value, 'bouncingSpeed', 0, 0.5);
}


const renderer = new WebGLRenderer(); // 渲染器
renderer.setClearColor(new Color('#eeeeee'));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

const scene = new Scene(); // 场景

const camera = new PerspectiveCamera(); // 摄像机
camera.position.set(-10, 40, 30); // 摄像机位置
camera.lookAt(scene.position);

const axesHelper = new AxesHelper(20); // 坐标轴
scene.add(axesHelper);

const spotLight = new SpotLight(0xffffff); // 灯光
spotLight.position.set(-40, 30, 20);
spotLight.castShadow = true;
scene.add(spotLight);

const planeGeometry = new PlaneGeometry(80, 30); // 平面
const material = new MeshLambertMaterial({
    color: 0xaaaaaa,
    // wireframe: true
});
const plane = new Mesh(planeGeometry, material);
plane.rotation.x = -0.5 * Math.PI;
plane.receiveShadow = true;
scene.add(plane);


const cubeGeometry = new BoxGeometry(4, 4, 4); // 立方体
const cubeMaterial = new MeshLambertMaterial({ color: 0xff0000, wireframe: false });
const cube = new Mesh(cubeGeometry, cubeMaterial);
cube.position.set(2, 2, 2);
cube.castShadow = true;
scene.add(cube);

const sphereGeometry = new SphereGeometry(4);
const sphereMaterial = new MeshLambertMaterial({ color: 0x00ff00, wireframe: false });
const sphere = new Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(20, 2, 2);
sphere.castShadow = true;
scene.add(sphere);

let step = 0;
function renderFn() {
    stats.update();
    // step += 0.03;
    // cube.rotation.x += 0.02;
    // cube.rotation.y += 0.01;
    // cube.rotation.z += 0.03;
    // cube.scale.x += 0.1;
    cube.rotation.x += controlRef.value.aaa
    cube.rotation.y += controlRef.value.aaa;
    cube.rotation.z += controlRef.value.aaa;
    sphere.position.x = 20 + 10 * Math.cos(step);
    sphere.position.y = Math.abs(2 + 10 * Math.sin(step));
    requestAnimationFrame(renderFn);
    renderer.render(scene, camera);
}


renderFn();


onMounted(() => {
    containerRef.value?.appendChild(renderer.domElement);
    renderer.render(scene, camera);

    stats.showPanel(0);
    stats.dom.style.top = '50px';
    statsRef.value?.appendChild(stats.dom);
})

</script>
