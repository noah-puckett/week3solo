import Component from '../Component.js';
import ChatItem from './ChatItem.js';

class ChatList extends Component {

    render() {
        const dom = this.renderDOM();
        const messages = this.props.messages;

        messages.forEach(message => {
            const chatItem = new ChatItem({ message });
            dom.appendChild(chatItem.render());
            dom.scrollTop = dom.scrollHeight;
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