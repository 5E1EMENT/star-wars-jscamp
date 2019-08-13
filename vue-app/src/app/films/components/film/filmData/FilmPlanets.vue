<template>
  <div>
    <Loader v-if="loadingSpinner" />
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-center">
            Climate
          </th>
          <th class="text-center">
            Diameter
          </th>
          <th class="text-center">
            Gravity
          </th>
          <th class="text-center">
            Name
          </th>
          <th class="text-center">
            Orbital period
          </th>
          <th class="text-center">
            Population
          </th>
          <th class="text-center">
            Rotation period
          </th>
          <th class="text-center">
            Terrain
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(planet, index) in planets"
          :key="index + planet.diameter"
          :class="$style.trActive"
        >
          <td :class="$style.tdAlign">
            {{ planet.climate }}
          </td>
          <td :class="$style.tdAlign">
            {{ planet.diameter }}
          </td>
          <td :class="$style.tdAlign">
            {{ planet.gravity }}
          </td>
          <td :class="$style.tdAlign">
            {{ planet.name }}
          </td>
          <td :class="$style.tdAlign">
            {{ planet.orbital_period }}
          </td>
          <td :class="$style.tdAlign">
            {{ planet.population }}
          </td>
          <td :class="$style.tdAlign">
            {{ planet.rotation_period }}
          </td>
          <td :class="$style.tdAlign">
            {{ planet.terrain }}
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
    planets: null
  }),
  methods: {
    /**
     * @param loadPlanets load current film planets from db
     */
    ...mapActions(["loadPlanets"]),
    /**
     * Method allows to get film planets
     * from vuex
     */
    async loadFilmPlanets() {
      this.loadingSpinner = true;
      const filmID = this.$route.params.filmDbId;
      this.planets = await this.loadPlanets(filmID);
      this.loadingSpinner = false;
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