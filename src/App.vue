<script setup lang="ts">
import { onMounted } from "vue";
onMounted(() => {
  setTimeout(() => {
    console.log(111);
  }, 1000);
});
</script>

<template>
  <router-view />
</template>

<style lang="less">
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
