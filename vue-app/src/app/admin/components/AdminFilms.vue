<template>
  <div>
    <h1 :class="$style.center">
      Admin films editor
    </h1>
    <Loader v-if="loading" />
    <v-simple-table v-else>
      <thead>
        <tr>
          <th :class="$style.thLeft">
            Film title
          </th>
          <th :class="$style.thLeft">
            Episode Id
          </th>
          <th :class="$style.thLeft">
            Release Dates
          </th>
          <th :class="$style.thLeft">
            Director
          </th>
          <th :class="$style.thLeft">
            Producer
          </th>
          <th :class="$style.thLeft">
            Opening crawl
          </th>
        </tr>
      </thead>
      <tbody>
        <router-link
          v-for="(film, index) in films"
          :key="film.episode_id"
          tag="tr"
          :to="{ name: 'Edit film', params: { filmDbId: index }}"
          :class="$style.trActive"
        >
          <td :class="$style.tdAlign">
            {{ film.title }}
          </td>
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
        </router-link>
      </tbody>
    </v-simple-table>
  </div>
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
.center {
  text-align: center;
}
.thLeft {
  text-align: left
}
.trActive:hover {
  cursor: pointer;
}

.tdAlign {
  padding: 10px !important;
  text-align: center;
}
</style>