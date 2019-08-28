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
        <ion-title v-if="filmTitle">
          {{ filmTitle }}
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-card v-if="film">
        <img
          v-if="image"
          :src="image"
        >
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
      <ion-button
        v-if="film"
        expand="block"
        @click.once="showFilmCharacters"
      >
        Show film characters
      </ion-button>
      <ion-button
        v-if="film"
        expand="block"
        @click.once="showFilmStarships"
      >
        Show film starships
      </ion-button>
      <ion-button
        v-if="film"
        expand="block"
        @click.once="showFilmPlantes"
      >
        Show film planets
      </ion-button>
      <ion-button
        v-if="film"
        expand="block"
        @click.once="showFilmSpecies"
      >
        Show film species
      </ion-button>

      <FilmCharacters ref="filmCharacters" />
      <FilmPlanets ref="filmPlanets" />
      <FilmSpecies ref="filmSpecies" />
      <FilmStarships ref="filmStarships" />
    </ion-content>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { eventHub } from "@/main.js";
import FilmCharacters from "@/app/films/components/filmDetails/FilmCharacters";
import FilmPlanets from "@/app/films/components/filmDetails/FilmPlanets";
import FilmSpecies from "@/app/films/components/filmDetails/FilmSpecies";
import FilmStarships from "@/app/films/components/filmDetails/FilmStarships";
import { setTimeout } from "timers";

export default {
  components: {
    FilmCharacters,
    FilmPlanets,
    FilmSpecies,
    FilmStarships
  },
  data: () => ({
    film: null,
    filmTitle: null,
    image: null
  }),
  /**
   * Upload all film data + film image
   */
  async mounted() {
    const filmID = this.$route.params.filmId;
    this.film = await this.loadFilms(+filmID);
    this.filmTitle = this.film.title;
    this.image = await this.loadImages(+filmID);
  },
  /**
   * Method allows to react on components emit updateFilm method
   * Updates film component
   */
  updated() {
    const that = this;
    eventHub.$on("updateFilm", async function() {
      const filmID = that.$route.params.filmId;
      that.film = await that.loadFilms(+filmID);
      that.filmTitle = that.film.title;
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
      const characters = "Characters";

      this.loading(characters);
      await this.$refs.filmCharacters.loadFilmCharacters();
      this.film = null;
      this.filmTitle = this.filmTitle + ": " + characters;
      this.$ionic.loadingController.dismiss(`${characters}`);
    },
    /**
     * Method allows to get film planets data
     */
    async showFilmPlantes() {
      const planets = "Planets";

      this.loading(planets);
      await this.$refs.filmPlanets.loadFilmPlanets();
      this.film = null;
      this.filmTitle = this.filmTitle + ": " + planets;
      this.$ionic.loadingController.dismiss(`${planets}`);
    },
    /**
     * Method allows to get film species data
     */
    async showFilmSpecies() {
      const species = "Species";

      this.loading(species);
      await this.$refs.filmSpecies.loadFilmSpecies();
      this.film = null;
      this.filmTitle = this.filmTitle + ": " + species;
      this.$ionic.loadingController.dismiss(`${species}`);
    },
    /**
     * Method allows to get film starships data
     */
    async showFilmStarships() {
      const starships = "Starships";

      this.loading(starships);
      await this.$refs.filmStarships.loadFilmStarships();
      this.film = null;
      this.filmTitle = this.filmTitle + ": " + starships;
      this.$ionic.loadingController.dismiss(`${starships}`);
    },
    /**
     * Film loading details spinner message
     * @param loadingName name of current loading details
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