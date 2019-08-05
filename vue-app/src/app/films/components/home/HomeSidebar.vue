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
    computed: {
    ...mapGetters(["getSidebarState"])
  },
  methods: {
    home() {
      this.$router.push("/home");
    },
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push("/login");
    },
  },
}
</script>