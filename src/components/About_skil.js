import { Component } from '../core/heropy';
import PortFolio from './About_Portfolio';
import MySkilset from './About_Myskilset';

export default class Skil extends Component {
    render() {
        this.el.classList.add('SkilContainer');

        const portfolio = new PortFolio();
        const portfolioEl = portfolio.el;

        const myskilset = new MySkilset();
        const myskilsetEl = myskilset.el;

        this.el.innerHTML = /* html */ `
            ${portfolioEl.innerHTML}
            ${myskilsetEl.innerHTML}
        `;
    }
}
