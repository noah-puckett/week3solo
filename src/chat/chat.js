import '../utils/check-auth.js';
import ChatApp from '../chat/ChatApp.js';

const root = document.getElementById('chat');
  
const app = new ChatApp();
root.appendChild(app.render());