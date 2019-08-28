<template>
  <ion-menu
    side="start"
    type="overlay"
  >
    <ion-header class="toolbar-md-primary">
      <ion-toolbar translucent>
        <ion-title class="ion-padding">
          Menu
        </ion-title>
        <ion-title
          v-if="user"
          class="ion-padding"
        >
          Account: {{ user }}
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-list>
        <ion-item
          v-for="(item,index) in menuItems"
          :key="index"
          @click="handleClick(item)"
        >
          <ion-icon
            slot="start"
            :name="item.icon"
          />
          <ion-label>{{ item.title }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>
<script>
/* eslint-disable */

import { mapActions } from "vuex";

export default {
  name: "Sidebar",
  data: () => ({
    uid: '',
    user: ''
  }),
  computed: {
    menuItems() {
      let menuItems = [
        { path: "/films", icon: "film", title: "Films", method: "films" },
        {
          path: "/login",
          icon: "exit",
          title: "Sign out",
          method: "logout"
        }
      ];
      if (!this.uid) {
        menuItems = [
          {
            path: "/register",
            icon: "person-add",
            title: "Register",
            method: "register"
          },
          {
            path: "/login",
            icon: "person",
            title: "Login",
            method: "login"
          }
        ];
      }
      return menuItems;
    }
  },
  methods: {
    ...mapActions(["logoutUser", "getUid", "getUserEmail"]),
    /**
     * Method allows to get uid from vuex
     */
    async startComponent() {
      this.uid = await this.getUid();
      this.user = await this.getUserEmail();
    },

    /**
     * Method allows to handle
     * click on sidebar icon link
     * and executes the function whitch
     * prepends to item object
     * @param item object in menuItems array
     */
    handleClick(item) {
      if (this.$options.methods[item.method]) {
        this.$options.methods[item.method].call(this);
      }
    },
    /**
     * Method logout the user
     */
    async logout() {
      await this.logoutUser();
      this.$ionic.menuController.close()
      this.$router.push("/login");
    },
    /**
     * Method redirect current user to login page
     */
    login() {
      this.$ionic.menuController.close()
      this.$router.push("/login");
    },
    /**
     * Method redirect current user to home page
     */
    films() {
      this.$ionic.menuController.close()
      this.$router.push("/films");
    },
    /**
     * Method redirect current user to registration page
     */
    register() {
      this.$ionic.menuController.close()
      this.$router.push("/register");
    }
  },
  watch: {
    /**
     * When route changes,
     * our component will be rerendered
     */
    $route: {
      handler: "startComponent",
      immediate: true
    }
  }
};
</script>