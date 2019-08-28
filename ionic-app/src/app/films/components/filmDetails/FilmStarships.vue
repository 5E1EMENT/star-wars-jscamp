<template>
  <ion-content
    v-if="starships"
    class="ion-padding"
  >
    <ion-title>Film starships</ion-title>
    <ion-list>
      <ion-item
        v-for="(starship, index) in starships"
        :key="index"
      >
        <ion-label>{{ starship.starship_class }}</ion-label>
      </ion-item>
    </ion-list>
    <ion-button
      v-if="starships"
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
    starships: null
  }),
  methods: {
    ...mapActions(["loadStarships"]),
    /**
     * Method allows to get film starships
     */
    async loadFilmStarships() {
      const filmID = this.$route.params.filmId;
      this.starships = await this.loadStarships(filmID);
    },
    /**
     * Method allows to return to the
     * current film page
     */
    backToFilm() {
      eventHub.$emit("updateFilm");
      this.starships = null;
    }
  }
};
</script>