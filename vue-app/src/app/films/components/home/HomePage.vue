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
        v-for="film in films"
        :key="film.pk"
        tag="tr"
        :to="{ name: 'Film', params: { filmDbId: film.pk - 1 }}"
        :class="$style['tr-active']"
      >
        <td :class="$style['td-align']">
          {{ film.fields.title }}
        </td>
        <td :class="$style['td-align']">
          {{ film.fields.episode_id }}
        </td>
        <td :class="$style['td-align']">
          {{ new Date(film.fields.release_date).toDateString() }}
        </td>
        <td :class="$style['td-align']">
          {{ film.fields.director }}
        </td>
        <td :class="$style['td-align']">
          {{ film.fields.producer }}
        </td>
        <td :class="$style['td-align']">
          {{ film.fields.opening_crawl }}
        </td>
      </router-link>
    </tbody>
  </v-simple-table>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "HomePage",
  data: () => ({
    loading: true,
    films: null
  }),
  /**
   * Getting films data from vuex
   */
  async mounted() {
    this.films = await this.loadFilms()
    this.loading = false;
  },
  methods: {
    /**
     * @param loadFilms load films from db
     */
    ...mapActions(["loadFilms"])
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
</style>