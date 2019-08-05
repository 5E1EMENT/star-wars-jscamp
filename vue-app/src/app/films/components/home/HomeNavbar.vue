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
import {mapMutations} from 'vuex'
export default {
    methods: {
            ...mapMutations(["invertSidebarState"]),
    }
}
</script>