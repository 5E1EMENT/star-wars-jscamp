<template>
  <div>
    <h1>{{ filmTitle }}</h1>
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
            {{ filmReleaseDate }}
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
    filmTitle: "",
    film: null
  }),
  /**
   * Getting film data from vuex
   */
  async mounted() {
    const filmID = this.$route.params.filmDbId;
    this.film = await this.loadFilm(filmID);
    this.filmTitle = await this.film.title;
    this.loading = false;
  },
  /**
   * @param loadFilm load current film from db
   */
  methods: {
    ...mapActions(["loadFilm"]),
    /**
     * Transform's date from firebase db
     * into normal date
     */
    async filmReleaseDate() {
      return await new Date(film.release_date).toDateString();
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