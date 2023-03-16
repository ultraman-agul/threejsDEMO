<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue';
const current = ref<string[]>(['mail']);
</script>

<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <a-menu mode="horizontal" v-model:selectdKeys="current" style="position: fixed;">
    <a-menu-item key="mail"> Navigation One </a-menu-item>
    <a-sub-menu key="demo1">
      <template #title>第一章节</template>
      <a-menu-item key="1">
        <router-link to="/">第一个场景</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/demo1-2">材质和光照</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <router-link to="/demo1-3">动画</router-link>
      </a-menu-item>
      <a-menu-item key="4">
        <router-link to="/demo1-4">性能监控</router-link>
      </a-menu-item>
      <a-menu-item key="5">
          <router-link to="/demo1-5">交互控制</router-link>
      </a-menu-item>
      <a-menu-item key="6">
        <router-link to="/demo1-6">响应窗口变化</router-link>
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
  <!-- <a-button>123123</a-button> -->
  <router-view></router-view>
</template>

<style scoped>
</style>
