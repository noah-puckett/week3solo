import Component from '../Component.js';
import { auth, messagesByRoomRef } from '../services/firebase.js';

class SendMessage extends Component {

    render() {
        const form = this.renderDOM();
        const key = this.props.key;
        
        const messagesRef = messagesByRoomRef.child(key);

        const input = form.querySelector('input');
        
        form.addEventListener('submit', event => {
            event.preventDefault();
            
            const newMessageRef = messagesRef.push();
            
            newMessageRef.set({
                owner: auth.currentUser.uid,
                message: input.value,
                displayName: auth.currentUser.displayName,
                photoURL: auth.currentUser.photoURL,
                date: Date(),
            });

            form.reset();
        });
            
        return form;
    }
    
    renderTemplate() {
        return /*html*/ ` 
            <form>
                <input name="message" type="text" autocomplete="off">
                <button>Send</button>
            </form>
        `;
    }
}
export default SendMessage;