<template>
  <div id="app">
    <v-app>
      <TheSidebar />
      <v-content>
        <router-view />
      </v-content>
      <TheNavbar />
    </v-app>
  </div>
</template>

<script>
import TheSidebar from "./app/utils/TheSidebar";
import TheNavbar from "./app/utils/TheNavbar";
export default {
  name: "App",
  components: {
    TheSidebar,
    TheNavbar
  }
};
</script>
