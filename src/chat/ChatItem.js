import Component from '../Component.js';

class ChatItem extends Component {
    renderTemplate() {
        const message = this.props.message;
        const date = new Date(message.date);
        return /*html*/ `
            <li>
                <p id="date">${date.toLocaleDateString()} at ${date.toLocaleTimeString()}</p>
                <p id="name">${message.displayName}: </p>
                <p id="message">${message.message}</p>
            </li>
        `;
    }
}
export default ChatItem;