import Component from '../Component.js';
import Header from '../shared/Header.js';
// import QUERY from '../QUERY.js';
// import api from '../services/api.js';

class ChatApp extends Component {
    
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        const headerDOM = header.render();
        dom.insertBefore(headerDOM, main);

        return dom;
    }

    renderTemplate() {
        return /*html*/ ` 
            <div>
                <main>
                </main>    
            </div>
        `;
    }
}
export default ChatApp;