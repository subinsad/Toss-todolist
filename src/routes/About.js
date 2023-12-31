import { Component } from '../core/heropy';
import Header from '../components/About_myprofile';
import Skil from '../components/About_Skil';

export default class About extends Component {
    render() {
        const headerComponent = new Header();
        const headerElement = headerComponent.el;

        const skilComponent = new Skil();
        const skilElement = skilComponent.el;

        this.el.appendChild(headerElement);
        this.el.appendChild(skilElement);
    }
}
