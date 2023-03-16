<template>
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

const containerRef = ref<HTMLDivElement>(); // dom容器
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

const renderer = new WebGLRenderer(); // 渲染器

renderer.setClearColor(new Color('#eeeeee'));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
onMounted(() => {
    containerRef.value?.appendChild(renderer.domElement);
    renderer.render(scene, camera);
})

</script>
