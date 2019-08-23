import firebase from "firebase/app";

export default {
  actions: {
    /**
     * Method allows to get characters
     * on this film from firebase db
     * @param {Object} state vuex state
     * @param {Number} filmId film id payload
     * @returns {Array} film characters
     */
    async loadCharacters({ dispatch }, filmId) {
      const sortedFilms = await dispatch("loadFilms");

      const charactersIdArr = sortedFilms[filmId].characters;

      const charactersData = (await firebase
        .database()
        .ref(`swapi/people`)
        .once("value")).val();

      const characters = charactersData
        .filter((character, i) => i in charactersIdArr)
        .map(character => character.fields);
      return characters;
    },
    /**
     * Method allows to get planets
     * on this film from firebase db
     * @param {Object} state vuex state
     * @param {Number} filmId film id payload
     * @returns {Array} film planets
     */
    async loadPlanets({ dispatch }, filmId) {
      const sortedFilms = await dispatch("loadFilms");

      const planetsIdArr = sortedFilms[filmId].planets;

      const planetsData = (await firebase
        .database()
        .ref(`swapi/planets`)
        .once("value")).val();

      const planets = planetsData
        .filter((planet, i) => i in planetsIdArr)
        .map(planet => planet.fields);
      return planets;
    },
    /**
     * Method allows to get species
     * on this film from firebase db
     * @param {Object} state vuex state
     * @param {Number} filmId film id payload
     */
    async loadSpecies({ dispatch }, filmId) {
      const sortedFilms = await dispatch("loadFilms");

      const speciesIdArr = sortedFilms[filmId].species;

      const speciesData = (await firebase
        .database()
        .ref(`swapi/species`)
        .once("value")).val();

      const species = speciesData
        .filter((type, i) => i in speciesIdArr)
        .map(type => type.fields);
      return species;
    },
    /**
     * Method allows to get starships
     * on this film from firebase db
     * @param {Object} state vuex state
     * @param {Number} filmId film id payload
     * @returns {Array} film starships
     */
    async loadStarships({ dispatch }, filmId) {
      const sortedFilms = await dispatch("loadFilms");

      const starshipsIdArr = sortedFilms[filmId].starships;

      const starshipsData = (await firebase
        .database()
        .ref(`swapi/starships`)
        .once("value")).val();

      const starships = starshipsData
        .filter((starship, i) => i in starshipsIdArr)
        .map(starship => starship.fields);
      return starships;
    }
  }
};
