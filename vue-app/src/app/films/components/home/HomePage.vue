<template>
  <Loader v-if="loading" />
  <v-simple-table v-else>
    <thead>
      <tr>
        <th :class="$style.thAlign">
          Film title
        </th>
        <th :class="$style.thAlign">
          Episode Id
        </th>
        <th :class="$style.thAlign">
          Release Date
        </th>
        <th :class="$style.thAlign">
          Director
        </th>
        <th :class="$style.thAlign">
          Producer
        </th>
      </tr>
    </thead>
    <tbody>
      <router-link
        v-for="(film, index) in films"
        :key="film.episode_id"
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
          {{ film.release_date | date }}
        </td>
        <td :class="$style['tdAlign']">
          {{ film.director }}
        </td>
        <td :class="$style['tdAlign']">
          {{ film.producer }}
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
    ...mapActions(["loadFilms"])
  }
};
</script>
<style lang="scss" module>
.trActive:hover {
  cursor: pointer;
}
.thAlign {
    text-align: center !important;
}
.tdAlign {
  padding: 10px !important;
  text-align: center;
}
</style>