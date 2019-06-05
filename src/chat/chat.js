import '../utils/check-auth.js';
import ChatApp from './ChatApp.js';

const root = document.getElementById('chat');
const chatApp = new ChatApp();
root.appendChild(chatApp.render());