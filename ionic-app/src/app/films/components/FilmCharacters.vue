<template>
  <ion-content class="ion-padding" v-if="characters">
    <ion-title>Film characters</ion-title>
    <ion-list>
      <ion-item v-for="(character, index) in characters" :key="index">
        <ion-label>{{ character.name }}</ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
</template>
<script>
/* eslint-disable */
import { mapActions } from "vuex";

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
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 };
    }
  }
};
</script>