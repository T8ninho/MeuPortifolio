import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD3PUOpXsSQ0Ketv7gsiMnvkT3kbBM3tFs",
    authDomain: "expo-firebase-1e7da.firebaseapp.com",
    databaseURL: "https://expo-firebase-1e7da-default-rtdb.firebaseio.com",
    projectId: "expo-firebase-1e7da",
    storageBucket: "expo-firebase-1e7da.appspot.com",
    messagingSenderId: "484255247273",
    appId: "1:484255247273:web:0fc55b35c8fba05220b2b8"
  };

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;