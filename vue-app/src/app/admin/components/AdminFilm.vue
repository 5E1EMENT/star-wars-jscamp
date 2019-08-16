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
            {{ film.release_date | date }}
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
    <AdminFilmEditor />
  </div>
</template>
<script>
import { mapActions } from "vuex";
import AdminFilmEditor from './AdminFilmEditor'

export default {
  components: {
    AdminFilmEditor
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
    ...mapActions(["loadFilm"])
  }
};
</script>
<style lang="scss" module>
.trAlign {
    text-align: center !important;
}
.trActive:hover {
  cursor: pointer;
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