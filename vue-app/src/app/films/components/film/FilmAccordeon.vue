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
    <v-expansion-panel>
      <v-expansion-panel-header @click.once="showFilmSpecies">
        Film Species
      </v-expansion-panel-header>
      <v-expansion-panel-content eager>
        <FilmSpecies ref="filmSpecies" />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>
import FilmCharacters from "./filmData/FilmCharacters.vue";
import FilmPlanets from "./filmData/FilmPlanets.vue";
import FilmSpecies from "./filmData/FilmSpecies.vue";

export default {
  components: {
    FilmCharacters,
    FilmPlanets,
    FilmSpecies
  },
  methods: {
    /**
     * Method allows to get film characters data
     */
    showFilmCharacters() {
      this.$refs.filmCharacters.loadFilmCharacters();
    },
    /**
     * Method allows to get film planets data
     */
    showFilmPlanets() {
      this.$refs.filmPlanets.loadFilmPlanets();
    },
    /**
     * Method allows to get film species data
     */
    showFilmSpecies() {
      this.$refs.filmSpecies.loadFilmSpecies();
    },
  }
};
</script>
<style lang="scss">
</style>