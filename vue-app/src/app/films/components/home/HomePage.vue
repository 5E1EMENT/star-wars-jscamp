<template>
  <Loader
    v-if="loading"
  />
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
      >
        <td>{{ film.fields.title }}</td>
        <td>{{ film.fields.episode_id }}</td>
        <td>{{ new Date(film.fields.release_date).toDateString() }}</td>
        <td>{{ film.fields.director }}</td>
        <td>{{ film.fields.producer }}</td>
        <td>{{ film.fields.opening_crawl }}</td>
      </router-link>
    </tbody>
  </v-simple-table>
</template>

<script>
import axios from "axios";

export default {
  name: "HomePage",
  data: () => ({
    loading: true,
    films: null
  }),
  async mounted() {
    const filmsDatabase = "https://vue-film-app.firebaseio.com/swapi.json";
    const filmsData = await axios.get(filmsDatabase);
    const responseFilms = await filmsData.data.films;
    this.films = responseFilms;
    this.loading = false;
  }
};
</script>
<style lang="scss" module>
tr:hover {
  cursor: pointer;
}
td {
  padding: 10px !important;
  text-align: center;
}
</style>