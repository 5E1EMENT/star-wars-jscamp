<template>
  <div>
    <v-app-bar
      app
      color="indigo"
      dark
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="changeSidebarState" />
      <v-toolbar-title>My vue film application</v-toolbar-title>
      <v-spacer />
      <v-toolbar-title v-if="user">
        You logged in as: {{ user }}
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    user: ""
  }),
  watch: {
    /**
     * When route changes,
     * our component will be rerendered
     */
    $route: {
      handler: 'startComponent',
      immediate: true
    }
  },
  methods: {
    /**
     * @param changeSidebarState allows to invert(!) sidebar state from vuex
     * @param getUserEmail allows to get user email
     */
    ...mapActions(["changeSidebarState", "getUserEmail"]),
    /**
     * Method allows to get user email from vuex
     */
    async startComponent() {
      this.user = await this.getUserEmail();
    }
  }
};
</script>
<style lang="scss" module>
</style>