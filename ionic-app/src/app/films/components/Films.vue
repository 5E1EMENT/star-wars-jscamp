<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary" class="toolbar-md-primary">
        <ion-title>Register</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      Films
    </ion-content>
  </div>
</template>
<script>
export default {
    methods: {
        openStart () {
      document.querySelector('ion-menu-controller').open('start')
    },
    }
}
</script>