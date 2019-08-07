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
        <tr>
          <td class="text-center">
            {{ filmData.episode_id }}
          </td>
          <td class="text-center">
            {{ new Date(filmData.release_date).toDateString() }}
          </td>
          <td class="text-center">
            {{ filmData.director }}
          </td>
          <td class="text-center">
            {{ filmData.producer }}
          </td>
          <td class="text-center">
            {{ filmData.opening_crawl }}
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: () => ({
    loading: true,
    filmData: null,
    filmTitle: ""
  }),
  async mounted() {
    const filmsDatabase = "https://vue-film-app.firebaseio.com/swapi.json";
    const filmsData = await axios.get(filmsDatabase);
    const responseFilm = await filmsData.data.films[this.$route.params.filmDbId]
      .fields;
    this.filmData = responseFilm;
    this.filmTitle = responseFilm.title;
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
}
h1 {
  text-align: center;
  margin: 2rem 0;
}
td {
  text-align: center;
}
</style>