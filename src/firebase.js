import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAhEObo9olHLsJqq-pZkShCSLwVFoEEM-4",
    authDomain: "todo-app-7152c.firebaseapp.com",
    projectId: "todo-app-7152c",
    storageBucket: "todo-app-7152c.appspot.com",
    messagingSenderId: "756665601637",
    appId: "1:756665601637:web:a2f3cf4bc297ca3c41008c",
    measurementId: "G-SZ71EG7NR2"
});

const db = firebaseApp.firestore();

export default db;