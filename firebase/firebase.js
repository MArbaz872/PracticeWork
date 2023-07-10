import * as firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyBeG4voQIDF4X0xl6lJxFMn7HuSBa4jF3U",
  authDomain: "skin-397ae.firebaseapp.com",
  databaseURL: "https://skin-397ae-default-rtdb.firebaseio.com/",
  projectId: "skin-397ae",
  storageBucket: "skin-397ae.appspot.com",
  messagingSenderId: "673325550950",
  appId: "1:673325550950:web:33469fcdad8cde8f73cca7"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

firebase.firestore();

export default firebase;