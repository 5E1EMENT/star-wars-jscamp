<template>
  <div class="ion-page" main>
    <ion-header>
      <ion-toolbar color="primary" class="toolbar-md-primary">
        <ion-buttons slot="end">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title v-if="film">{{ film.title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-card v-if="film">
        <img v-if="image" :src="image" />
        <ion-card-header>
          <ion-card-subtitle>Episode number {{ film.episode_id }}</ion-card-subtitle>
          <ion-card-title>{{ film.title }}</ion-card-title>
        </ion-card-header>
        <ion-list>
          <ion-item>
            <ion-label>Film release date: {{ film.release_date | date }}</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Film director: {{ film.director }}</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Film producer: {{ film.producer   }}</ion-label>
          </ion-item>
        </ion-list>
        <ion-card-content>{{ film.opening_crawl }}</ion-card-content>
      </ion-card>
    </ion-content>
  </div>
</template>
<script>
/* eslint-disable */
import { mapActions } from "vuex";

export default {
  data: () => ({
    film: null,
    image: null,
  }),
  async mounted() {
    const filmID = this.$route.params.filmId;
    this.film = await this.loadFilms(+filmID);
    this.image = await this.loadImages(+filmID);
  },

  methods: {
    /**
     * @param loadFilm load current film from db
     * @param loadImages load current film image from db
     */
    ...mapActions(["loadFilms", "loadImages"])
  }
};
</script>