
<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="active"
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
    <v-content>
      <v-container
        fluid
        fill-height
      />
    </v-content>
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="activeSidebar" />
      <v-toolbar-title>My vue film application</v-toolbar-title>
    </v-app-bar>
  </v-app>
</template>

<script>

  export default {
    components: {

    },
    data: () => ({
      active: false,
    }),
     methods: {
       activeSidebar() {
        this.active = !this.active
       },
        home() {
        console.log(111)
        this.$router.push('')
        },
        login() {
          this.$router.push('/login')
        },
        register() {
          this.$router.push('/register')
        }
    }
  }
</script>