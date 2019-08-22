<template>
  <ion-content class="ion-padding" v-if="characters">
    <ion-title>Film characters</ion-title>
    <ion-list>
      <ion-item v-for="(character, index) in characters" :key="index">
        <ion-label>{{ character.name }}</ion-label>
      </ion-item>
    </ion-list>
    <ion-button expand="block" @click.once="backToFilm" v-if="characters">Back to fim</ion-button>
  </ion-content>
</template>
<script>
/* eslint-disable */
import { mapActions } from "vuex";
import { eventHub } from "@/main.js";

export default {
  data: () => ({
    characters: null
  }),
  methods: {
    ...mapActions(["loadCharacters"]),
    async loadFilmCharacters() {
      const filmID = this.$route.params.filmId;
      this.characters = await this.loadCharacters(filmID);
    },
    backToFilm() {
      eventHub.$emit("updateFilm");
    }
  }
};
</script>