import Component from '../Component.js';
//TODO: import better things from firebase? actions?
//import { auth, roomFolderRef } from '../services/firebase.js';

class ChatItem extends Component {
    renderTemplate() {
        const message = this.props.message;
        console.log(message);
        return /*html*/ ` 
            <li>
                <p>${message.message}</p>
                </li>
                `;
    }
}
export default ChatItem;