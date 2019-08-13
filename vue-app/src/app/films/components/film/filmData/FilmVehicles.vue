<template>
  <div>
    <Loader v-if="loadingSpinner" />
    <v-simple-table>
      <thead>
        <tr>
          <th :class="$style.trAlign">
            Vehicle class
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(vehicle, index) in vehicles"
          :key="index"
          :class="$style.trActive"
        >
          <td :class="$style.tdAlign">
            {{ vehicle.vehicle_class }}
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
    vehicles: null
  }),
  methods: {
    /**
     * @param loadVehicles load current film vehicles from db
     */
    ...mapActions(["loadVehicles"]),
    /**
     * Method allows to get film planets
     * from vuex
     */
    async loadFilmVehicles() {
      this.loadingSpinner = true;
      const filmID = this.$route.params.filmDbId;
      this.vehicles = await this.loadVehicles(filmID);
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