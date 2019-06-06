import Component from '../Component.js';
import Header from '../shared/Header.js';


class App extends Component {

    render() {
        const dom = this.renderDOM();
        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

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