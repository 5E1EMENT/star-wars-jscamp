<template>
  <div id="app">
    <ion-app>
      <Menu />
      <ion-vue-router />
    </ion-app>
    <ion-menu-controller />
  </div>
</template>

<script>
import Menu from '@/components/TheMenu.vue'

export default {
  name: "App",
  components: {Menu}
};
</script>

<style>
</style>
