<template>
  <div>
    <Loader v-if="loadingSpinner" />
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-center">
            Name
          </th>
          <th class="text-center">
            Birth year
          </th>
          <th class="text-center">
            Height
          </th>
          <th class="text-center">
            Mass
          </th>
          <th class="text-center">
            Hair color
          </th>
          <th class="text-center">
            Eye color
          </th>
          <th class="text-center">
            Skin color
          </th>
          <th class="text-center">
            Gender
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(character, index) in characters"
          :key="index"
          :class="$style.trActive"
        >
          <td :class="$style.tdAlign">
            {{ character.name }}
          </td>
          <td :class="$style.tdAlign">
            {{ character.birth_year }}
          </td>
          <td :class="$style.tdAlign">
            {{ character.height }}
          </td>
          <td :class="$style.tdAlign">
            {{ character.mass }}
          </td>
          <td :class="$style.tdAlign">
            {{ character.hair_color }}
          </td>
          <td :class="$style.tdAlign">
            {{ character.eye_color }}
          </td>
          <td :class="$style.tdAlign">
            {{ character.skin_color }}
          </td>
          <td :class="$style.tdAlign">
            {{ character.gender }}
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
    characters: null
  }),
  methods: {
    /**
     * @param loadCharacters load current film characters from db
     */
    ...mapActions(["loadCharacters"]),
    /**
     * Method allows to get film characters
     * from vuex
     */
    async loadFilmCharacters() {
      this.loadingSpinner = true;
      const filmID = this.$route.params.filmDbId;
      this.characters = await this.loadCharacters(filmID);
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