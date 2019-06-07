import Component from '../Component.js';
import Header from '../shared/Header.js';
import ChatList from './ChatList.js';
import QUERY from '../QUERY.js';
import SendMessage from './SendMessage.js';
import { roomFolderRef } from '../services/firebase.js';

class ChatApp extends Component {
    
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        const headerDOM = header.render();
        dom.insertBefore(headerDOM, main);

        //Lili's code helpin' me out here
        const searchParams = QUERY.parse(window.location.search.slice(1));
        const roomRef = roomFolderRef.child(searchParams.key);

        roomRef
            .on('value', snapshot => {
                const value = snapshot.val();
                const messages = value ? Object.values(value) : [];
                chatList.update({ messages: messages });
            });

        const sendMessage = new SendMessage({ roomRef });
        main.appendChild(sendMessage.render());

        const chatList = new ChatList({ messages: [] });
        main.appendChild(chatList.render());


        return dom;
    }

    renderTemplate() {
        return /*html*/ ` 
            <div>
                <main>
                </main>    
            </div>
        `;
    }
}
export default ChatApp;