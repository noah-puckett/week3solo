import { auth } from '../services/firebase.js';
import '../utils/check-auth.js';
import App from './App.js';

const root = document.getElementById('app');
  
auth.onAuthStateChanged(user => {
    if(!user) {
        window.location = './auth.html';
    }

    const app = new App();
    root.appendChild(app.render());
});