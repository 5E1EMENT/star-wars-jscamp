<template>
  <div>
    <Loader v-if="loadingSpinner" />
    <v-simple-table v-if="!loadingSpinner">
      <thead>
        <tr>
          <th :class="$style.trAlign">
            Climate
          </th>
          <th :class="$style.trAlign">
            Diameter
          </th>
          <th :class="$style.trAlign">
            Gravity
          </th>
          <th :class="$style.trAlign">
            Name
          </th>
          <th :class="$style.trAlign">
            Orbital period
          </th>
          <th :class="$style.trAlign">
            Population
          </th>
          <th :class="$style.trAlign">
            Rotation period
          </th>
          <th :class="$style.trAlign">
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
</style>