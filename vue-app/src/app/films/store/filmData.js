import firebase from "firebase/app";

export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    /**
     * Method allows to get characters
     * on this film from firebase db
     * @param {Object} state vuex state
     * @param {Number} filmId film id payload
     */
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
    /**
     * Method allows to get planets
     * on this film from firebase db
     * @param {Object} state vuex state
     * @param {Number} filmId film id payload
     */
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
    },
    /**
     * Method allows to get species
     * on this film from firebase db
     * @param {Object} state vuex state
     * @param {Number} filmId film id payload
     */
    async loadSpecies(satate, filmId) {
      const speciesIdArr = (await firebase
        .database()
        .ref(`swapi/films/${filmId}/fields/planets`)
        .once("value")).val();

      const speciesData = (await firebase
        .database()
        .ref(`swapi/species`)
        .once("value")).val();

      const species = speciesData
        .filter((kind, i) => i in speciesIdArr)
        .map(kind => kind.fields);
      return species;
    },
    async loadStarships(state, filmId) {

      const starshipsIdArr = (await firebase
        .database()
        .ref(`swapi/films/${filmId}/fields/starships`)
        .once("value")).val();

      const starshipsData = (await firebase
        .database()
        .ref(`swapi/starships`)
        .once("value")).val();

      const starships = starshipsData
        .filter((starship, i) => i in starshipsIdArr)
        .map(starship => starship.fields);
      return starships;
    },
    async loadVehicles(state, filmId) {

      const vehiclesIdArr = (await firebase
        .database()
        .ref(`swapi/films/${filmId}/fields/vehicles`)
        .once("value")).val();

      const vehiclesData = (await firebase
        .database()
        .ref(`swapi/vehicles`)
        .once("value")).val();

      const vehicles = vehiclesData
        .filter((vehicle, i) => i in vehiclesIdArr)
        .map(vehicle => vehicle.fields);
      return vehicles;
    }
  }
  
};
