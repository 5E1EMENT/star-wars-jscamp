<template>
  <div>
    <h1 v-if="film">
      {{ film.title }}
    </h1>
    <Loader v-if="loading" />
    <v-simple-table v-else>
      <thead>
        <tr>
          <th class="text-center">
            Episode Id
          </th>
          <th class="text-center">
            Release Date
          </th>
          <th class="text-center">
            Director
          </th>
          <th class="text-center">
            Producer
          </th>
          <th class="text-center">
            Opening crawl
          </th>
        </tr>
      </thead>
      <tbody>
        <tr :class="$style['tr-active']">
          <td
            class="text-center"
            :class="$style['td-align']"
          >
            {{ film.episode_id }}
          </td>
          <td
            class="text-center"
            :class="$style['td-align']"
          >
            {{ formatDate(film.release_date) }}
          </td>
          <td
            class="text-center"
            :class="$style['td-align']"
          >
            {{ film.director }}
          </td>
          <td
            class="text-center"
            :class="$style['td-align']"
          >
            {{ film.producer }}
          </td>
          <td
            class="text-center"
            :class="$style['td-align']"
          >
            {{ film.opening_crawl }}
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
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
    this.filmTitle = this.film.title;
    this.loading = false;
  },

  methods: {
    /**
     * @param loadFilm load current film from db
     */
    ...mapActions(["loadFilm"]),
    formatDate(date) {
      return new Date(date).toDateString();
    }
  }
};
</script>
<style lang="scss" module>
.tr-active:hover {
  cursor: pointer;
}
.td-align {
  padding: 10px !important;
  text-align: center;
}
h1 {
  text-align: center;
  margin: 2rem 0;
}
</style>