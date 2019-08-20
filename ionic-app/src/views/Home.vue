<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Hello World</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>Welcome To @ionic/vue</h1>
      <router-link tag="button" type="submit" to="about" >Go to about</router-link>
    </ion-content>
  </div>
</template>

<script>

export default {
  name: 'home'
}
</script>
