const config = {
    apiKey: 'AIzaSyAYUmYEL_P35hE0JbLLhCMonUNWBMx3H5I',
    authDomain: 'bootcamp2-3f269.firebaseapp.com',
    databaseURL: 'https://bootcamp2-3f269.firebaseio.com',
    projectId: 'bootcamp2-3f269',
    storageBucket: 'bootcamp2-3f269.appspot.com',
    messagingSenderId: '158450200485',
    appId: '1:158450200485:web:5176b0bdaa00ca53'
};


// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();

//THIS BREAKS THE BUILD IF UNCOMMENTED
// export const db = firebase.database();