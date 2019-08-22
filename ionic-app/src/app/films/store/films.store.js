/* eslint-disable */
import firebase from "firebase/app";

export default {
  /**
   * Sidebar state
   */
  state: {
    filmsData: null
  },
  actions: {
    /**
     * Fetching films data from firebase database
     * and sort in by episode id
     * @returns {Array || Object} if there is no id, we will return films array
     *  else we will return object with current film
     */
    async loadFilms(state, id) {
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

      return id >= 0 ? sortedFilms[id] : sortedFilms
    },
    /**
     * Fetching films data from firebase database
     * @returns {Array} films title images
     */
    async loadImages(state, id) {
      const filmsImages = await [
        "https://39m9vk1z5i3x15rspj43y7k8-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/star-wars-the-phantom-menace-1300x752.jpg",
        "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/attackoftheclones.jpg",
        "https://odysseyonline-img.rbl.ms/simage/https%3A%2F%2Fassets.rbl.ms%2F17466124%2F980x.jpg/2000%2C2000/X6SpIHPuD%2FPE5Xqr/img.jpg",
        "https://d3c1jucybpy4ua.cloudfront.net/data/56278/big_picture/star-wars-a-new-hope-episode-iv-original-poster-art-1977-style-c-tom-chantrell-950x633.jpg?1510126468",
        "https://i1.wp.com/nerdbastards.com/wp-content/uploads/2013/10/empire-strikes-back-poster.jpg",
        "https://i.kinja-img.com/gawker-media/image/upload/s--0PEOTENT--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/19191t3iwc57cjpg.jpg"
      ];
      return id >= 0 ? filmsImages[id] : filmsImages
    }
  }
};
