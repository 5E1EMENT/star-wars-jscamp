<template>
  <div>
    <h1 v-if="film">
      {{ film.title }}
    </h1>
    <Loader v-if="loading" />
    <v-simple-table v-else>
      <thead>
        <tr>
          <th :class="$style.trAlign">
            Episode Id
          </th>
          <th :class="$style.trAlign">
            Release Date
          </th>
          <th :class="$style.trAlign">
            Director
          </th>
          <th :class="$style.trAlign">
            Producer
          </th>
          <th :class="$style.trAlign">
            Opening crawl
          </th>
        </tr>
      </thead>
      <tbody>
        <tr :class="$style.trActive">
          <td :class="$style.tdAlign">
            {{ film.episode_id }}
          </td>
          <td :class="$style.tdAlign">
            {{ formatDate(film.release_date) }}
          </td>
          <td :class="$style.tdAlign">
            {{ film.director }}
          </td>
          <td :class="$style.tdAlign">
            {{ film.producer }}
          </td>
          <td :class="$style.tdAlign">
            {{ film.opening_crawl }}
          </td>
        </tr>
      </tbody>
    </v-simple-table>
    <FilmAccordeon v-if="!loading" />
  </div>
</template>
<script>
import { mapActions } from "vuex";
import FilmAccordeon from "./FilmAccordeon";

export default {
  components: {
    FilmAccordeon
  },
  data: () => ({
    loading: true,
    film: null
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
    ...mapActions(["loadFilm"]),
    /**
     * Method formats date into normal view
     * @param date film release date from db
     * @returns {Date} new date format
     */
    formatDate(date) {
      return new Date(date).toDateString();
    }
  }
};
</script>
<style lang="scss" module>
.trAlign {
    text-align: center !important;
}
.tdAlign {
  padding: 10px !important;
  text-align: center;
}
h1 {
  text-align: center;
  margin: 2rem 0;
}
</style>