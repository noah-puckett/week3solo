import Component from '../Component.js';
import { auth } from '../services/firebase.js';

class SendMessage extends Component {

    render() {
        const form = this.renderDOM();

        const roomRef = this.props.roomRef;
        
        const messagesRef = roomRef.child('message');
        
        form.addEventListener('submit', () => {
            event.preventDefault();
            
            const formData = new FormData(form);

            const newMessageRef = messagesRef.push();
            
            newMessageRef.set({
                owner: auth.currentUser.uid,
                message: formData.get('message'),

                // uid: 123, // id of who said this
                // displayName: 'name of user who said this',
                // photoURL: '/url/to/who/said/this.png',
                // date: new Date()
            })
                .then(() => {
                    form.reset();
                });
        });
            
        return form;
    }
    
    renderTemplate() {
        return /*html*/ ` 
            <form>
                <input name="message" type="text">
                <button>Send</button>
            </form>
        `;
    }
}
export default SendMessage;