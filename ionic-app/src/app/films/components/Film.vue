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
            <ion-label>Film producer: {{ film.producer }}</ion-label>
          </ion-item>
        </ion-list>
        <ion-card-content>{{ film.opening_crawl }}</ion-card-content>
      </ion-card>
      <ion-button expand="block" @click.once="showFilmCharacters" v-if="film">Show film characters</ion-button>
      <ion-button expand="block" @click.once="showFilmPlantes" v-if="film">Show film planets</ion-button>
      <FilmCharacters ref="filmCharacters" />
      <FilmPlanets ref="filmPlanets" />
    </ion-content>
  </div>
</template>
<script>
/* eslint-disable */
import { mapActions } from "vuex";
import { eventHub } from "@/main.js";
import FilmCharacters from "@/app/films/components/filmDetails/FilmCharacters";
import FilmPlanets from "@/app/films/components/filmDetails/FilmPlanets";
import { setTimeout } from "timers";

export default {
  components: {
    FilmCharacters,
    FilmPlanets
  },
  data: () => ({
    film: null,
    image: null
  }),
  /**
   * Upload all film data + film image
   */
  async mounted() {
    const filmID = this.$route.params.filmId;
    this.film = await this.loadFilms(+filmID);
    this.image = await this.loadImages(+filmID);
  },
  /**
   * Method allows to react on components emit methods
   * Update component data and zeroize data in current method component
   */
  updated() {
    const that = this;
    eventHub.$on("updateFilm", async function() {
      const filmID = that.$route.params.filmId;
      that.film = await that.loadFilms(+filmID);
      that.image = await that.loadImages(+filmID);
    });
  },
  methods: {
    /**
     * @param loadFilm load current film from db
     * @param loadImages load current film image from db
     */
    ...mapActions(["loadFilms", "loadImages"]),
    /**
     * Method allows to get film characters data
     */
    async showFilmCharacters() {
      /**
       * @param Characters - name of current loading details
       */
      this.loading('Characters');
      await this.$refs.filmCharacters.loadFilmCharacters();
      this.film = null;
      this.$ionic.loadingController.dismiss("characters");
    },
    /**
     * Method allows to get film characters data
     */
    async showFilmPlantes() {
      /**
       * @param Planets - name of current loading details
       */
      this.loading('Planets');
      await this.$refs.filmPlanets.loadFilmPlanets();
      this.film = null;
      this.$ionic.loadingController.dismiss("Planets");
    },
    /**
     * Film loading details spinner message
     * @returns {Promise} created loading spinner
     */
    async loading(loadingName) {
      const loadingSpin = await this.$ionic.loadingController.create({
        message: `${loadingName} are loading`,
        id: `${loadingName}`
      });
      return await loadingSpin.present();
    }
  }
};
</script>