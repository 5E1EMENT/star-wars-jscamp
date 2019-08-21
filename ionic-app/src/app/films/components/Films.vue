<template>
  <div class="ion-page" main>
    <ion-header>
      <ion-toolbar color="primary" class="toolbar-md-primary">
        <ion-title>Star Wars Films</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      Films
      <ion-button @click="openStart">Open Start Menu</ion-button>
    </ion-content>
  </div>
</template>
<script>
export default {
  methods: {
    openStart() {
      document.querySelector("ion-menu-controller").open("start");
    }
  }
};
</script>