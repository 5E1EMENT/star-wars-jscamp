<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header @click.once="showFilmCharacters">
        Film Characters
      </v-expansion-panel-header>
      <v-expansion-panel-content eager>
        <FilmCharacters ref="filmCharacters" />
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header @click.once="showFilmPlanets">
        Film Planets
      </v-expansion-panel-header>
      <v-expansion-panel-content eager>
        <FilmPlanets ref="filmPlanets" />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>
import FilmCharacters from "./filmData/FilmCharacters.vue";
import FilmPlanets from "./filmData/FilmPlanets.vue";

export default {
  components: {
    FilmCharacters,
    FilmPlanets
  },
  methods: {
    showFilmCharacters() {
      this.$refs.filmCharacters.loadFilmCharacters();
    },
    showFilmPlanets() {
      this.$refs.filmPlanets.loadFilmPlanets();
    }
  }
};
</script>
<style lang="scss">
</style>