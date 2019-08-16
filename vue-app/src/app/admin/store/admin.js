import firebase from "firebase/app";

export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    /**
     *
     * @param {Object} context vuex context
     * @param {Object} payload payload data from film editor
     * @param {Number} payload.filmID payload film id
     * @param {Object} payload.film payload film changed data
     */
    async updateFilm(context, { filmID, film }) {
      await firebase
        .database()
        .ref(`swapi/films/${filmID}/fields`)
        .update(film);
    }
  }
};
