<template>
  <v-app id="inspire">
    <TheSidebar />
    <v-content>
      <v-container
        fluid
        fill-height
      />
    </v-content>
    <TheNavbar />
  </v-app>
</template>

<script>
import TheSidebar from "./TheSidebar";
import TheNavbar from "./TheNavbar";
export default {
  name: "HomePage",
  components: {
    TheSidebar,
    TheNavbar
  }
};
</script>