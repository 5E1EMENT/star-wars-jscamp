import firebase from "firebase/app";

export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async loadCharacters(state, filmId) {
      const charactersIdArr = (await firebase
        .database()
        .ref(`swapi/films/${filmId}/fields/characters`)
        .once("value")).val();
      const charactersData = (await firebase
        .database()
        .ref(`swapi/people`)
        .once("value")).val();

      const characters = charactersData
        .filter((character, i) => i in charactersIdArr)
        .map(character => character.fields);
      return characters;
    },
    async loadPlanets(satate, filmId) {
      const planetsIdArr = (await firebase
        .database()
        .ref(`swapi/films/${filmId}/fields/planets`)
        .once("value")).val();

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
