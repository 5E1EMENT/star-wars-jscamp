<template>
  <ion-content class="ion-padding" v-if="species">
    <ion-title>Film species</ion-title>
    <ion-list>
      <ion-item v-for="(type, index) in species" :key="index">
        <ion-label>{{ type.name }}</ion-label>
      </ion-item>
    </ion-list>
    <ion-button expand="block" @click.once="backToFilm" v-if="species">Back to fim</ion-button>
  </ion-content>
</template>
<script>
/* eslint-disable */
import { mapActions } from "vuex";
import { eventHub } from "@/main.js";

export default {
  data: () => ({
    species: null
  }),
  methods: {
    ...mapActions(["loadSpecies"]),
    /**
     * Method allows to get film species
     */
    async loadFilmSpecies() {
      const filmID = this.$route.params.filmId;
      this.species = await this.loadSpecies(filmID);
    },
    /**
     * Method allows to return to the
     * current film page
     */
    backToFilm() {
      eventHub.$emit("updateFilm");
      this.species = null;
    }
  }
};
</script>