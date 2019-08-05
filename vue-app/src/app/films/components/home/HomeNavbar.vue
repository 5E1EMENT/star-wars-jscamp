<template>
  <div>
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="invertSidebarState" />
      <v-toolbar-title>My vue film application</v-toolbar-title>
    </v-app-bar>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    /**
     * @param invertSidebarState allows to invert(!) sidebar state from vuex
     */
    ...mapMutations(["invertSidebarState"])
  }
};
</script>