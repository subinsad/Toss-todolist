import { Component } from '../core/heropy';
import LeftBox from './About_leftbox';
import CenterBox from './About_centerbox';

export default class Skil extends Component {
    render() {
        this.el.classList.add('SkilContainer');

        const leftbox = new LeftBox();
        const leftboxEl = leftbox.el;

        const centerbox = new CenterBox();
        const centerboxEl = centerbox.el;

        this.el.innerHTML = /* html */ `
            ${leftboxEl.innerHTML}
            ${centerboxEl.innerHTML}
            ${centerboxEl.innerHTML}
        `;
    }
}
