import Component from '../Component.js';
import { auth, roomFolderRef } from '../services/firebase.js';
//import roomlist?
//import roomitem?

class AddRoom extends Component {

    render() {

        const form = this.renderDOM();
        
        form.addEventListener('submit', () => {
            event.preventDefault();
            
            const formData = new FormData(form);

            //put it... in firebase?
            const roomRef = roomFolderRef.push();

            const room = {
                key: roomRef.key,
                owner: auth.currentUser.uid,
                name: formData.get('room-name')
            };

            roomRef.set(room).then(() => {
                form.reset();
            });
        });

    
        return form;
    }

    renderTemplate() {
        return /*html*/ ` 
            <form>
                <input name="room-name" type="text">
                <button>Create New Chat</button>
            </form>
        `;
    }
}
export default AddRoom;