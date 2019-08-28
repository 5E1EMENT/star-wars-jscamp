<template>
  <ion-content
    v-if="characters"
    class="ion-padding"
  >
    <ion-title>Film characters</ion-title>
    <ion-list>
      <ion-item
        v-for="(character, index) in characters"
        :key="index"
      >
        <ion-label>{{ character.name }}</ion-label>
      </ion-item>
    </ion-list>
    <ion-button
      v-if="characters"
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
    characters: null
  }),
  methods: {
    ...mapActions(["loadCharacters"]),
    /**
     * Method allows to get film characters
     */
    async loadFilmCharacters() {
      const filmID = this.$route.params.filmId;
      this.characters = await this.loadCharacters(filmID);
    },
    /**
     * Method allows to return to the
     * current film page
     */
    backToFilm() {
      eventHub.$emit("updateFilm");
      this.characters = null;
    }
  }
};
</script>