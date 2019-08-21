<template>
  <div id="app">
    <ion-app>
      <Menu />
      <ion-vue-router />
    </ion-app>
    <ion-menu-controller></ion-menu-controller>
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
.ion-page {
  text-align: center;
}
</style>
