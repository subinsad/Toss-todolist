import { Component } from '../core/heropy';
import Header from '../components/About_myprofile';
import About_Skil from '../components/About_skil.js';

export default class About extends Component {
    render() {
        const headerComponent = new Header();
        const headerElement = headerComponent.el;

        const skilComponent = new About_Skil();
        const skilElement = skilComponent.el;

        this.el.appendChild(headerElement);
        this.el.appendChild(skilElement);
    }
}
