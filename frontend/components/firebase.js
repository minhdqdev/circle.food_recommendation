import * as firebase from 'firebase';
import '@firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyCOxQSCe29iplbGc9AbN752tgYkzhE6QG8",
    authDomain: "circle-fr-login.firebaseapp.com",
    databaseURL: "https://circle-fr-login.firebaseio.com",
    projectId: "circle-fr-login",
    storageBucket: "circle-fr-login.appspot.com",
    messagingSenderId: "861924439099",
    appId: "1:861924439099:web:171ae27b8a794add50581e",
    measurementId: "G-R4DWTPPFHJ"
  };
firebase.initializeApp(firebaseConfig);

export default firebase;