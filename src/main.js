import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyARcEr36mDnJc7Bayi5kQtDGYDY2Bh5zik",
  authDomain: "calendar-app-a6934.firebaseapp.com",
  databaseURL: "https://calendar-app-a6934.firebaseio.com",
  projectId: "calendar-app-a6934",
  storageBucket: "calendar-app-a6934.appspot.com",
  messagingSenderId: "1014493213141",
  appId: "1:1014493213141:web:396271e71f33bfbc25cd5c",
  measurementId: "G-GBVQ71X97B",
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
