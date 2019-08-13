<template>
  <div>
    <Loader v-if="loadingSpinner" />
    <v-simple-table>
      <thead>
        <tr>
          <th :class="$style.trAlign">
            Average heigth
          </th>
          <th :class="$style.trAlign">
            Average lifespan
          </th>
          <th :class="$style.trAlign">
            Classification
          </th>
          <th :class="$style.trAlign">
            Designation
          </th>
          <th :class="$style.trAlign">
            Eye colors
          </th>
          <th :class="$style.trAlign">
            Hair colors
          </th>
          <th :class="$style.trAlign">
            Language
          </th>
          <th :class="$style.trAlign">
            Name
          </th>
          <th :class="$style.trAlign">
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