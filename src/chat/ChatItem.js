import Component from '../Component.js';
//TODO: import better things from firebase? actions?
//import { auth, roomFolderRef } from '../services/firebase.js';

class ChatItem extends Component {

    render() {
        const dom = this.renderDOM();
        const room = this.props.room;
        
        const button = dom.querySelector('button');
        if(button) {
            button.addEventListener('click', () => {
                roomFolderRef.child(room.key).remove();
            });
        }

        return dom;
    }
    
    renderTemplate() {
        const room = this.props.room;
        return /*html*/ ` 
            <li>
                <a href="./chat.html?key=${room.key}">${room.name}</a>
            </li>
        `;
    }
}
export default ChatItem;