import Component from '../Component.js';
import RoomItem from './RoomItem.js';
//TODO: import room item!

class RoomList extends Component {

    render() {
        const dom = this.renderDOM();
        const rooms = this.props.rooms;
        //TODO: add const rooms = this.props.rooms --DATA YOU WILL NEED TO FOR EACH THROUGH
        //WHEN YOU RENDER AN ITEM GIVE IT THE RIGHT PROPS I THINK???

        //TODO: put a for each below!
        rooms.forEach(room => {
            const roomItem = new RoomItem({ room });
            dom.appendChild(roomItem.render());
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
export default RoomList;