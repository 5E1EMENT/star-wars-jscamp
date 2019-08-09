<template>
  <div>
    <v-navigation-drawer
      :value="getSidebarState"
      app
    >
      <v-list
        v-if="uid !== null"
        dense
      >
        <v-list-item @click="home">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="logoutUser">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list
        v-else
        dense
      >
        <v-list-item @click="login">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="register">
          <v-list-item-action>
            <v-icon>mdi-account-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Register</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

  
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HomePageSidebar",
  data: () => ({
    uid: null
  }),
  computed: {
    /**
     * Method allows to get current sidebar state
     */
    ...mapGetters(["getSidebarState", "getUserid"])
  },
  watch: {
    /**
     * When route changes,
     * our component will be rerendered
     */
    $route() {
      this.startComponent();
    }
  },
  methods: {
    ...mapActions(["getUid", "logout"]),
    /**
     * Method allows to get uid from vuex
     */
    async startComponent() {
      const uid = await this.getUid();
      this.uid = uid;
    },
    /**
     * Method redirects user to the home page
     */
    home() {
      this.$router.push("/home");
    },
    /**
     * Method logout the user
     * Emits logout action from vuex
     * and logut current user
     * Redirect to the login page
     */
    async logoutUser() {
      await this.logout();
      this.$router.push("/login");
    },
    /**
     * Method sent user to the login page
     */
    login() {
      this.$router.push("/login");
    },
    /**
     * Method sent user to the register page
     */
    register() {
      this.$router.push("/register");
    }
  }
};
</script>