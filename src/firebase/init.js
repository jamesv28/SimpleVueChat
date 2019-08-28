import firebase from 'firebase';
import firestore from 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBndzfDbov0gB3jywM8aB1FA7Yqr7ULrtA",
    authDomain: "vuechat-c781c.firebaseapp.com",
    databaseURL: "https://vuechat-c781c.firebaseio.com",
    projectId: "vuechat-c781c",
    storageBucket: "vuechat-c781c.appspot.com",
    messagingSenderId: "1007063202542",
    appId: "1:1007063202542:web:0cdf8522666d78df"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore();

