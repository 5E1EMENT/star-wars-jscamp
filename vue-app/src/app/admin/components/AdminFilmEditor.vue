<template>
  <v-content>
    <v-container
      fluid
      fill-height
    >
      <v-layout
        align-center
        justify-center
      >
        <v-flex
          xs12
          sm8
          md4
        >
          <v-card class="elevation-12">
            <v-form v-if="film">
              <v-card-text>
                <v-text-field
                  v-model="film.episode_id"
                  label="Episode Id"
                  type="number"
                  required
                />
                
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="film.release_date"
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="film.release_date"
                      label="Release date"
                      readonly
                      v-on="on"
                    />
                  </template>
                  <v-date-picker
                    v-model="film.release_date"
                    no-title
                    scrollable
                  >
                    <v-spacer />
                    <v-btn
                      text
                      color="primary"
                      @click="menu = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.menu.save(film.release_date)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
                <v-text-field
                  v-model="film.director"
                  type="text"
                  label="Film director"
                />
                <v-text-field
                  v-model="film.producer"
                  type="text"
                  label="Film producer"
                />
                <v-textarea
                  v-model="film.opening_crawl"
                  outlined
                  auto-grow
                  label="Opening crawl"
                />
              </v-card-text>
              <v-card-actions>
                <v-btn
                  color="indigo"
                  dark
                  type="submit"
                  @click.prevent="submitHandler"
                >
                  Upadate film
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    film: null,
    menu: false
  }),
  /**
   * Getting film data from vuex
   */
  async mounted() {
    const filmID = this.$route.params.filmDbId;
    this.film = await this.loadFilm(filmID);
    this.loading = false;
  },
  methods: {
    /**
     * @param loadFilm load current film from db
     */
    ...mapActions(["loadFilm", "updateFilm"]),
    /**
     * Method formats date into normal view
     * @param date film release date from db
     * @return {Date} new date format
     */
    formatDate(date) {
      return new Date(date).toDateString();
    },
    /**
     * Method submits form 
     * and allows to update film data from firebase
     */
    async submitHandler() {
      const filmData = {
        episode_id: +this.film.episode_id,
        release_date: this.film.release_date,
        director: this.film.director,
        producer: this.film.producer,
        opening_crawl: this.film.opening_crawl
      };
      const data = {
        filmID: this.$route.params.filmDbId,
        film: filmData
      };
      try {
        await this.updateFilm(data);
        this.$router.push("/films");
      } catch (e) {}
    }
  }
};
</script>
<style lang="scss" module>
</style>