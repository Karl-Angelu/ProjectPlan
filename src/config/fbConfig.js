import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBitBn0EW3Z1_B6J5eJSY_Y1DFn63DQV0w",
    authDomain: "projectplan-99976.firebaseapp.com",
    projectId: "projectplan-99976",
    storageBucket: "projectplan-99976.appspot.com",
    messagingSenderId: "113322404406",
    appId: "1:113322404406:web:b446b30cf4dee43a348697",
    measurementId: "G-KHCRTGW6YD"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots:true});

  export default firebase;