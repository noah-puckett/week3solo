import Component from '../Component.js';
import { auth, roomFolderRef } from '../services/firebase.js';

class RoomItem extends Component {

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
        const isOwner = auth.currentUser && auth.currentUser.uid === room.owner;
        const button = isOwner ? '<button>Remove Chat</button>' : '';
        return /*html*/ ` 
            <li>
                <a href="./chat.html?key=${room.key}">${room.name}</a>
                ${button}
            </li>
        `;
    }
}
export default RoomItem;