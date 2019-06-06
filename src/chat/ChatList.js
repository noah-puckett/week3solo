import Component from '../Component.js';
import ChatItem from './ChatItem.js';

class ChatList extends Component {

    render() {
        const dom = this.renderDOM();
        const rooms = this.props.rooms;

        rooms.forEach(room => {
            const chatItem = new ChatItem({ room });
            dom.appendChild(chatItem.render());
        }); 

        return dom;
    }

    renderTemplate() {
        return /*html*/ ` 
            <ul>

            </ul>
        `;
    }
}
export default ChatList;