<template>
  <ion-content
    v-if="planets"
    class="ion-padding"
  >
    <ion-title>Film planets</ion-title>
    <ion-list>
      <ion-item
        v-for="(planet, index) in planets"
        :key="index"
      >
        <ion-label>{{ planet.name }}</ion-label>
      </ion-item>
    </ion-list>
    <ion-button
      v-if="planets"
      expand="block"
      @click.once="backToFilm"
    >
      Back to fim
    </ion-button>
  </ion-content>
</template>
<script>
/* eslint-disable */
import { mapActions } from "vuex";
import { eventHub } from "@/main.js";

export default {
  data: () => ({
    planets: null
  }),
  methods: {
    ...mapActions(["loadPlanets"]),
    /**
     * Method allows to get film planets
     */
    async loadFilmPlanets() {
      const filmID = this.$route.params.filmId;
      this.planets = await this.loadPlanets(filmID);
    },
    /**
     * Method allows to return to the
     * current film page
     */
    backToFilm() {
      eventHub.$emit("updateFilm");
      this.planets = null;
    }
  }
};
</script>