import { auth } from '../services/firebase.js';
import '../utils/check-auth.js';
import App from './App.js';

const root = document.getElementById('app');

// if no user, in index.js, use the check auth utility to direct the user from home to auth    
auth.onAuthStateChanged(user => {
    if(!user) {
        window.location = './auth.html';
    }

    const app = new App();
    root.appendChild(app.render());
});