import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBcgbNDfvUv2Qke9vgru0HLQtXoKwuDV_k",
    authDomain: "nba-full-62951.firebaseapp.com",
    databaseURL: "https://nba-full-62951.firebaseio.com",
    projectId: "nba-full-62951",
    storageBucket: "nba-full-62951.appspot.com",
    messagingSenderId: "885456823686"
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database();

const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');


const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot) => {
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    });
    return data;
}

export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseTeams,
    firebaseVideos,
    firebaseLooper
}