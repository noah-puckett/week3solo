import { auth } from '../services/firebase.js';
import '../utils/check-auth.js';
import App from './App.js';

// if no user, in index.js, use the check auth utility to direct the user from home to auth    
auth.onAuthStateChanged(user => {
    if(!user) {
        window.location = './auth.html';
    }
});

const root = document.getElementById('app');
const app = new App();
root.appendChild(app.render());