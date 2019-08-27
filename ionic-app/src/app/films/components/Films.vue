<template>
  <div
    class="ion-page"
    main
  >
    <ion-header>
      <ion-toolbar
        color="primary"
        class="toolbar-md-primary"
      >
        <ion-buttons slot="end">
          <ion-menu-button />
        </ion-buttons>
        <ion-title>Star Wars Films</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-card
        v-for="(film, index) in films"
        :key="index"
      >
        <img
          v-if="filmsImages"
          :src="filmsImages[film.episode_id - 1]"
        >
        <ion-card-header>
          <ion-card-subtitle>Episode number {{ film.episode_id }}</ion-card-subtitle>
          <ion-card-title>{{ film.title }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>{{ film.opening_crawl }}</ion-card-content>
        <div class="ion-padding">
          <ion-button
            color="dark"
            type="submit"
            class="ion-no-margin"
          >
            <router-link :to="{ name: 'Film', params: { filmId: film.episode_id - 1 }}">
              Open film
            </router-link>
          </ion-button>
        </div>
      </ion-card>
    </ion-content>
  </div>
</template>
<script>
/* eslint-disable */
import { mapActions } from "vuex";

export default {
  name: "Films",
  data: () => ({
    films: null,
    filmsImages: null
  }),
  /**
   * Getting films data from vuex
   * and sort films by episode_id
   */
  async mounted() {
    this.loading();
    this.films = await this.loadFilms();
    this.filmsImages = await this.loadImages();
    /** Stop loading modal */
    this.$ionic.loadingController.dismiss("films");
  },
  methods: {
    /**
     * @param loadFilms load films from db
     * @param loadImages load star wars films images
     */
    ...mapActions(["loadFilms", "loadImages"]),
    /**
     * Films loading spinner message
     * @returns {Promise} created loading spinner
     */
    async loading() {
      const loadingSpin = await this.$ionic.loadingController.create({
        message: "Films are loading",
        id: "films"
      });
      return await loadingSpin.present();
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: white;
}
</style>