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
    <v-expansion-panel>
      <v-expansion-panel-header @click.once="showFilmStarships">
        Film Starships
      </v-expansion-panel-header>
      <v-expansion-panel-content eager>
        <FilmStarships ref="filmStarships" />
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header @click.once="showFilmVehicles">
        Film Vehicles
      </v-expansion-panel-header>
      <v-expansion-panel-content eager>
        <FilmVehicles ref="filmVehicles" />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>
import FilmCharacters from "./filmData/FilmCharacters.vue";
import FilmPlanets from "./filmData/FilmPlanets.vue";
import FilmSpecies from "./filmData/FilmSpecies.vue";
import FilmStarships from "./filmData/FilmStarships.vue";
import FilmVehicles from "./filmData/FilmVehicles.vue";

export default {
  components: {
    FilmCharacters,
    FilmPlanets,
    FilmSpecies,
    FilmStarships,
    FilmVehicles
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
    /**
     * Method allows to get film starships data
     */
    showFilmStarships() {
      this.$refs.filmStarships.loadFilmStarships();
    },
    /**
     * Method allows to get film vehicles data
     */
    showFilmVehicles() {
      this.$refs.filmVehicles.loadFilmVehicles();
    },
  }
};
</script>
<style lang="scss">
</style>