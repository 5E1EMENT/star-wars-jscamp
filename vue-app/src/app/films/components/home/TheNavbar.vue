<template>
  <div>
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="changeSidebarState" />
      <v-toolbar-title>My vue film application</v-toolbar-title>
    </v-app-bar>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    /**
     * @param changeSidebarState allows to invert(!) sidebar state from vuex
     */
    ...mapActions(["changeSidebarState"])
  }
};
</script>