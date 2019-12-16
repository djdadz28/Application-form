import firebase from 'firebase'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCBY6AcsAPykb4HNQVRCTdSFc4nBzWNQlE",
    authDomain: "qapplicationform.firebaseapp.com",
    databaseURL: "https://qapplicationform.firebaseio.com",
    projectId: "qapplicationform",
    storageBucket: "qapplicationform.appspot.com",
    messagingSenderId: "92229613503",
    appId: "1:92229613503:web:72fa06bea31c01bb1ad30a",
    measurementId: "G-ZFPJ3KY1CF"
  };
  // Initialize Firebase
export const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default fire
