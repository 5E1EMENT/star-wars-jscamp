<template>
  <div>
    <Loader v-if="loadingSpinner" />
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-center">
            Average heigth
          </th>
          <th class="text-center">
            Average lifespan
          </th>
          <th class="text-center">
            Classification
          </th>
          <th class="text-center">
            Designation
          </th>
          <th class="text-center">
            Eye colors
          </th>
          <th class="text-center">
            Hair colors
          </th>
          <th class="text-center">
            Language
          </th>
          <th class="text-center">
            Name
          </th>
          <th class="text-center">
            Skin colors
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(type, index) in species"
          :key="index + type.name"
          :class="$style.trActive"
        >
          <td :class="$style.tdAlign">
            {{ type.average_height }}
          </td>
          <td :class="$style.tdAlign">
            {{ type.average_lifespan }}
          </td>
          <td :class="$style.tdAlign">
            {{ type.classification }}
          </td>
          <td :class="$style.tdAlign">
            {{ type.designation }}
          </td>
          <td :class="$style.tdAlign">
            {{ type.eye_colors }}
          </td>
          <td :class="$style.tdAlign">
            {{ type.hair_colors }}
          </td>
          <td :class="$style.tdAlign">
            {{ type.language }}
          </td>
          <td :class="$style.tdAlign">
            {{ type.name }}
          </td>
          <td :class="$style.tdAlign">
            {{ type.skin_colors }}
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
    species: null
  }),
  methods: {
    /**
     * @param loadSpecies load current film species from db
     */
    ...mapActions(["loadSpecies"]),
    /**
     * Method allows to get film species
     * from vuex
     */
    async loadFilmSpecies() {
      this.loadingSpinner = true;
      const filmID = this.$route.params.filmDbId;
      this.species = await this.loadSpecies(filmID);
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