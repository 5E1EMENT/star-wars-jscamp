<template>
  <v-app id="inspire">
    <HomeSidebar />
    <v-content>
      <v-container
        fluid
        fill-height
      />
    </v-content>
    <HomeNavbar />
  </v-app>
</template>

<script>
import HomeSidebar from "./HomeSidebar";
import HomeNavbar from "./HomeNavbar";
export default {
  name: "HomePage",
  components: {
    HomeSidebar,
    HomeNavbar
  }
};
</script>