import { Component } from '../core/heropy';
import LeftBox from './About_leftbox';

export default class Skil extends Component {
    render() {
        this.el.classList.add('SkilContainer');

        const leftbox = new LeftBox();
        const leftboxEl = leftbox.el;

        this.el.innerHTML = /* html */ `
            ${leftboxEl.innerHTML}
        `;
    }
}
