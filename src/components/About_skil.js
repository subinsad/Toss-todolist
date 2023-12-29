import { Component } from '../core/heropy';

export default class Skil extends Component {
    render() {
        this.el.classList.add('SkilContainer');
        this.el.innerHTML = /* html */ `
        <div class="text-box">
            Hello
        </div>
        `;
    }
}
