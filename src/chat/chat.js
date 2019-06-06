import { auth } from '../services/firebase.js';
import '../utils/check-auth.js';
import ChatApp from '../chat/ChatApp.js';

const root = document.getElementById('app');
  
auth.onAuthStateChanged(user => {
    if(!user) {
        window.location = './auth.html';
    }

    const app = new ChatApp();
    root.appendChild(app.render());
});