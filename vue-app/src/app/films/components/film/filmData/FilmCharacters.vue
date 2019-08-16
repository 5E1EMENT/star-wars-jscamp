<template>
  <div>
    <Loader v-if="loadingSpinner" />
    <v-simple-table v-if="!loadingSpinner">
      <thead>
        <tr>
          <th :class="$style.trAlign">
            Name
          </th>
          <th :class="$style.trAlign">
            Birth year
          </th>
          <th :class="$style.trAlign">
            Height
          </th>
          <th :class="$style.trAlign">
            Mass
          </th>
          <th :class="$style.trAlign">
            Hair color
          </th>
          <th :class="$style.trAlign">
            Eye color
          </th>
          <th :class="$style.trAlign">
            Skin color
          </th>
          <th :class="$style.trAlign">
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
.trAlign {
  text-align: center !important;
}
.tdAlign {
  padding: 10px !important;
  text-align: center;
}
</style>