<template>
  <Loader v-if="loading" />
  <v-simple-table v-else>
    <thead>
      <tr>
        <th class="text-left">
          Film title
        </th>
        <th class="text-left">
          Episode Id
        </th>
        <th class="text-left">
          Release Date
        </th>
        <th class="text-left">
          Director
        </th>
        <th class="text-left">
          Producer
        </th>
        <th class="text-left">
          Opening crawl
        </th>
      </tr>
    </thead>
    <tbody>
      <router-link
        v-for="(film, index) in films"
        :key="index + film.title"
        tag="tr"
        :to="{ name: 'Film', params: { filmDbId: index }}"
        :class="$style['trActive']"
      >
        <td :class="$style['tdAlign']">
          {{ film.title }}
        </td>
        <td :class="$style['tdAlign']">
          {{ film.episode_id }}
        </td>
        <td :class="$style['tdAlign']">
          {{ formatDate(film.release_date) }}
        </td>
        <td :class="$style['tdAlign']">
          {{ film.director }}
        </td>
        <td :class="$style['tdAlign']">
          {{ film.producer }}
        </td>
        <td :class="$style['tdAlign']">
          {{ film.opening_crawl }}
        </td>
      </router-link>
    </tbody>
  </v-simple-table>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "HomePage",
  data: () => ({
    loading: true,
    films: null,
  }),
  /**
   * Getting films data from vuex
   */
  async mounted() {
    this.films = await this.loadFilms();
    this.loading = false;
  },
  methods: {
    /**
     * @param loadFilms load films from db
     */
    ...mapActions(["loadFilms"]),
    /**
     * Method formats date into normal view
     * @param date film release date from db
     */
    formatDate(date) {
      return new Date(date).toDateString();
    }
  }
};
</script>
<style lang="scss" module>
.trActive:hover {
  cursor: pointer;
}

.tdAlign {
  padding: 10px !important;
  text-align: center;
}
</style>