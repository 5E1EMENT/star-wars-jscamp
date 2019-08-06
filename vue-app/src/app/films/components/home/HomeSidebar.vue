<template>
  <div>
    <v-navigation-drawer
      v-model="getSidebarState"
      app
    >
      <v-list dense>
        <v-list-item @click="home">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

  
<script>
import { mapGetters } from "vuex";
export default {
  name: "HomePageSidebar",
  computed: {
    /**
     * Method allows to get current sidebar state
     */
    ...mapGetters(["getSidebarState"])
  },
  methods: {
    /**
     * Method redirects user to the home page
     */
    home() {
      this.$router.push("/home");
    },
    /**
     * Method logout user
     */
    async logout() {
      /**
       * Emits logout action from vuex
       * and logut current user
       * Redirect to the login page
       */
      await this.$store.dispatch("logout");
      this.$router.push("/login");
    }
  }
};
</script>