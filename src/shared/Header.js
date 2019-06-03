import Component from '../Component.js';
import Profile from '../shared/Profile.js';

class Header extends Component {

    render() {
        const dom = this.renderDOM();
        const profile = new Profile();
        dom.appendChild(profile.render());
        return dom;
    }

    renderTemplate() {
        const title = this.props.title || document.title;
        return /*html*/ ` 
            <header>
                <h1>HEY KID, YA WANNA TALKAMBOUT SOME... DORGS?</h1>
            </header>
        `;
    }
}
export default Header;