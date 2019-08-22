import firebase from "firebase/app";

export default {
  actions: {
    /**
     * Method allows to get characters
     * on this film from firebase db
     * @param {Object} state vuex state
     * @param {Number} filmId film id payload
     */
    async loadCharacters(state, filmId) {
      const filmsDbSnapshot = await firebase
        .database()
        .ref("swapi/films")
        .once("value");

      const filmsDbSnapshotFields = filmsDbSnapshot
        .val()
        .map(item => item.fields);
      const sortedFilms = filmsDbSnapshotFields.sort(
        (a, b) => a.episode_id - b.episode_id
      );

      const charactersIdArr = sortedFilms[filmId].characters

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
     * Method allows to get characters
     * on this film from firebase db
     * @param {Object} state vuex state
     * @param {Number} filmId film id payload
     */
    async loadPlanets(state, filmId) {
        const filmsDbSnapshot = await firebase
          .database()
          .ref("swapi/films")
          .once("value");
  
        const filmsDbSnapshotFields = filmsDbSnapshot
          .val()
          .map(item => item.fields);
        const sortedFilms = filmsDbSnapshotFields.sort(
          (a, b) => a.episode_id - b.episode_id
        );
        
        const planetsIdArr = sortedFilms[filmId].planets
  
        const planetsData = (await firebase
          .database()
          .ref(`swapi/planets`)
          .once("value")).val();
  
        const planets = planetsData
          .filter((planet, i) => i in planetsIdArr)
          .map(planet => planet.fields);
        return planets;
      }
  }
};
