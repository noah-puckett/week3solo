import Component from '../Component.js';
import Header from '../shared/Header.js';
import AddRoom from '../chat/AddRoom.js';
import RoomList from '../chat/RoomList.js';
import { roomFolderRef } from '../services/firebase.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();
        const header = new Header();
        const headerDOM = header.render();
        
        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);
        
        const addRoom = new AddRoom();
        main.appendChild(addRoom.render());
        
        const roomList = new RoomList({ rooms: [] });
        main.appendChild(roomList.render());
        
        roomFolderRef
            .on('value', snapshot => {
                const value = snapshot.val();
                const rooms = value ? Object.values(value) : [];
                roomList.update({ rooms });
            });


        return dom;
    }

    renderTemplate() {
        return /*html*/ ` 
            <div>
                <main>
                    <p>IF YOU CAN READ THIS, YOU'RE ON THE MAIN PAGE</p>
                </main>
            </div>
        `;
    }
}
export default App;