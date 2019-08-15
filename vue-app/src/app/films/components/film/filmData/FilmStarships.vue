<template>
  <div>
    <Loader v-if="loadingSpinner" />
    <v-simple-table v-if="!loadingSpinner">
      <thead>
        <tr>
          <th :class="$style.trAlign">
            MGLT
          </th>
          <th :class="$style.trAlign">
            Hyperdrive rating
          </th>
          <th :class="$style.trAlign">
            Startship class
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(starship, index) in starships"
          :key="index"
          :class="$style.trActive"
        >
          <td :class="$style.tdAlign">
            {{ starship['MGLT'] }}
          </td>
          <td :class="$style.tdAlign">
            {{ starship.hyperdrive_rating }}
          </td>
          <td :class="$style.tdAlign">
            {{ starship.starship_class }}
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    loadingSpinner: false,
    starships: null
  }),
  methods: {
    /**
     * @param loadStarships load current film starships from db
     */
    ...mapActions(["loadStarships"]),
    /**
     * Method allows to get film planets
     * from vuex
     */
    async loadFilmStarships() {
      this.loadingSpinner = true;
      const filmID = this.$route.params.filmDbId;
      this.starships = await this.loadStarships(filmID);
      this.loadingSpinner = false;
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
</style>